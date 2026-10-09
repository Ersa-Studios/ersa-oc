"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Cable, Check, LoaderCircle } from "lucide-react";
import type { IEspLoaderTerminal } from "esptool-js";

type Platform = "xiao_esp32c3" | "xiao_esp32c6";
type FlashAsset = { url: string; sha256: string; size: number; address: number };
type MigrationManifest = {
  schema: number;
  codename: string;
  platform: Platform;
  tag: string;
  assets: { bootloader: FlashAsset; partitions: FlashAsset; boot_app0: FlashAsset };
};
type OtaManifest = {
  schema: number;
  device_name: string;
  codename: string;
  platform: Platform;
  tag?: string;
  version?: string;
  firmware_url: string;
  sha256: string;
  size: number;
};

const otaRoot = "https://pkgs-wearables.ersa.dev/ota/terra";
const chipNames: Record<Platform, string> = {
  xiao_esp32c3: "ESP32-C3",
  xiao_esp32c6: "ESP32-C6",
};
const migrationOffsets = { bootloader: 0, partitions: 0x8000, boot_app0: 0xe000 } as const;

async function fetchManifest(platform: Platform): Promise<OtaManifest> {
  const manifestUrl = `${otaRoot}/${platform}/ota.json`;
  const response = await fetch(manifestUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(response.status === 404
      ? `No latest ${chipNames[platform]} firmware is published yet.`
      : `Could not load the latest firmware manifest (${response.status}).`);
  }

  const manifest = await response.json() as OtaManifest;
  if (manifest.schema !== 1 || manifest.codename !== "terra") {
    throw new Error("The firmware manifest is invalid or for an unsupported device.");
  }
  if (manifest.platform !== platform) {
    throw new Error(`This manifest is for ${manifest.platform}, not ${platform}.`);
  }
  if (!/^https:\/\//i.test(manifest.firmware_url) || !/^[a-f0-9]{64}$/i.test(manifest.sha256)) {
    throw new Error("The firmware URL or SHA-256 checksum is missing or invalid.");
  }
  if (!Number.isSafeInteger(manifest.size) || manifest.size < 1 || manifest.size > 8 * 1024 * 1024) {
    throw new Error("The firmware image size is invalid.");
  }
  return manifest;
}

async function fetchMigrationManifest(platform: Platform, tag: string): Promise<MigrationManifest | null> {
  if (!tag) return null;
  const url = `https://pkgs-wearables.ersa.dev/migration/terra/${platform}/migration.json`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) return null;
  const manifest = await response.json() as MigrationManifest;
  if (manifest.schema !== 1 || manifest.codename !== "terra" || manifest.platform !== platform || manifest.tag !== tag) {
    return null;
  }
  for (const key of Object.keys(migrationOffsets) as (keyof MigrationManifest["assets"])[]) {
    const asset = manifest.assets?.[key];
    if (!asset || !/^https:\/\//i.test(asset.url) || !/^[a-f0-9]{64}$/i.test(asset.sha256) ||
        !Number.isSafeInteger(asset.size) || asset.size < 1 || asset.size > 1024 * 1024 ||
        asset.address !== migrationOffsets[key]) {
      return null;
    }
  }
  return manifest;
}

function formatBytes(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function errorMessage(error: unknown) {
  if (error instanceof DOMException && error.name === "NotFoundError") return "No USB serial device was selected.";
  return error instanceof Error ? error.message : "The flasher could not complete this operation.";
}

function isUnsupportedSerialSignalsError(error: unknown) {
  return error instanceof Error && /setSignals|control signals/i.test(error.message);
}

async function downloadVerified(url: string, expectedSize: number, expectedSha256: string, name: string) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not download ${name} (${response.status}).`);
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== expectedSize) throw new Error(`${name} size does not match the signed manifest metadata.`);
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  const actual = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  if (actual.toLowerCase() !== expectedSha256.toLowerCase()) throw new Error(`${name} checksum verification failed. Nothing was flashed.`);
  return new Uint8Array(buffer);
}

export function Esp32FirmwareFlasher() {
  const [platform, setPlatform] = useState<Platform>("xiao_esp32c3");
  const [manifest, setManifest] = useState<OtaManifest | null>(null);
  const [migrationManifest, setMigrationManifest] = useState<MigrationManifest | null>(null);
  const [manifestState, setManifestState] = useState<"loading" | "ready" | "error">("loading");
  const [manifestError, setManifestError] = useState("");
  const [serialSupported, setSerialSupported] = useState(false);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [failure, setFailure] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setSerialSupported(Boolean(window.isSecureContext && "serial" in navigator));
  }, []);

  useEffect(() => {
    let current = true;
    setManifest(null);
    setMigrationManifest(null);
    setManifestState("loading");
    setManifestError("");
    fetchManifest(platform)
      .then((nextManifest) => {
        if (!current) return;
        setManifest(nextManifest);
        setManifestState("ready");
        const tag = nextManifest.tag || nextManifest.version || "";
        fetchMigrationManifest(platform, tag)
          .then((nextMigrationManifest) => {
            if (current) setMigrationManifest(nextMigrationManifest);
          })
          .catch(() => {
            if (current) setMigrationManifest(null);
          });
      })
      .catch((error: unknown) => {
        if (!current) return;
        setManifestError(errorMessage(error));
        setManifestState("error");
      });
    return () => { current = false; };
  }, [platform]);

  async function connectAndFlash(migratePartition: boolean) {
    if (!serialSupported || busy) return;

    let transport: import("esptool-js").Transport | undefined;
    setBusy(true);
    setComplete(false);
    setFailure("");
    setProgress(0);
    setStatus("Choose the ESP32 serial device…");

    try {
      // requestPort must be called directly from the user's click gesture.
      const port = await navigator.serial.requestPort();
      if (migratePartition && !window.confirm(
        `Migrate this ${chipNames[platform]} to the current dual-slot layout? Keep USB connected until it finishes. ` +
        "This replaces the bootloader, partition table, and firmware; the unused legacy SPIFFS area is repurposed."
      )) {
        setStatus("");
        return;
      }
      setStatus("Checking the selected firmware and board…");
      const latest = await fetchManifest(platform);
      const migrationInfo = migratePartition
        ? await fetchMigrationManifest(platform, latest.tag || latest.version || "")
        : null;
      if (migratePartition && !migrationInfo) throw new Error("No verified partition migration is published for this board yet.");

      const firmwareData = await downloadVerified(latest.firmware_url, latest.size, latest.sha256, "Firmware");
      const files: { data: Uint8Array; address: number }[] = [{ data: firmwareData, address: 0x10000 }];
      if (migratePartition && migrationInfo) {
        const migration = migrationInfo.assets;
        const downloaded = await Promise.all([
          downloadVerified(migration.partitions.url, migration.partitions.size, migration.partitions.sha256, "Partition table"),
          downloadVerified(migration.boot_app0.url, migration.boot_app0.size, migration.boot_app0.sha256, "OTA boot data"),
          downloadVerified(migration.bootloader.url, migration.bootloader.size, migration.bootloader.sha256, "Bootloader"),
        ]);
        files.push(
          { data: downloaded[0], address: migration.partitions.address },
          { data: downloaded[1], address: migration.boot_app0.address },
          { data: downloaded[2], address: migration.bootloader.address },
        );
      }

      setStatus("Connecting to the ESP32 bootloader…");
      const { ESPLoader, Transport } = await import("esptool-js");
      transport = new Transport(port, false);
      const terminal: IEspLoaderTerminal = { clean() {}, writeLine() {}, write() {} };
      let loader = new ESPLoader({ transport, baudrate: 460800, terminal });
      let detectedChip: string;
      try {
        detectedChip = await loader.main();
      } catch (error) {
        if (!isUnsupportedSerialSignalsError(error)) throw error;
        try { await transport.disconnect(); } catch { /* close a partially opened serial session */ }
        const readyForManualBoot = window.confirm(
          "This USB serial interface does not support automatic reset. Hold BOOT, tap RESET, release BOOT, then choose OK to retry without modem-control signals."
        );
        if (!readyForManualBoot) throw new Error("Enter ROM download mode with BOOT and RESET, then retry the flash.");
        transport = new Transport(port, false);
        loader = new ESPLoader({ transport, baudrate: 460800, terminal });
        detectedChip = await loader.main("no_reset");
      }
      if (!detectedChip.toUpperCase().includes(chipNames[platform])) {
        throw new Error(`Detected ${detectedChip}. Select the matching ESP32 target and try again.`);
      }

      setStatus(migratePartition
        ? `Migrating ${platform} partition layout and flashing firmware…`
        : `Flashing ${latest.version || latest.tag || "latest firmware"} to the application slot…`);
      const totalBytes = files.reduce((sum, file) => sum + file.data.byteLength, 0);
      await loader.writeFlash({
        fileArray: files,
        flashMode: "keep",
        flashFreq: "keep",
        flashSize: "keep",
        eraseAll: false,
        compress: true,
        reportProgress: (fileIndex, written) => {
          const priorBytes = files.slice(0, fileIndex).reduce((sum, file) => sum + file.data.byteLength, 0);
          setProgress(totalBytes > 0 ? Math.min(100, Math.round(((priorBytes + written) / totalBytes) * 100)) : 0);
        },
      });

      setStatus("Restarting the device…");
      // Pulse DTR/RTS through the classic ESP32 auto-reset sequence. esptool-js's
      // hard_reset only releases RTS, which can leave some USB-UART boards in
      // ROM download mode after flashing. Native USB serial implementations may
      // reject modem-control signals, so reset failure must not erase the fact
      // that the verified image write already completed.
      let resetSent = true;
      try {
        await loader.after("custom_reset", undefined, "D0|R1|W100|D1|R0|W50|D0");
        await new Promise((resolve) => window.setTimeout(resolve, 1000));
      } catch {
        resetSent = false;
      }
      setProgress(100);
      setComplete(true);
      if (resetSent) {
        setStatus(migratePartition
          ? "Partition migration and firmware flash complete. The watch should be starting now."
          : "Firmware flashed. Reset signal sent; the watch should be starting now.");
      } else {
        setStatus(migratePartition
          ? "Partition migration and firmware flash completed. USB reset signals are unavailable; press RESET on the watch to start it."
          : "Firmware flash completed. USB reset signals are unavailable; press RESET on the watch to start it.");
      }
    } catch (error) {
      setFailure(errorMessage(error));
      setStatus("");
    } finally {
      if (transport) {
        try { await transport.disconnect(); } catch { /* device may already have reset */ }
      }
      setBusy(false);
    }
  }

  const canFlash = serialSupported && manifestState === "ready" && !busy;
  return (
    <div className="esp-flasher">
      <div className="esp-flasher-controls">
        <label className="esp-flasher-target">
          <span>BOARD TARGET</span>
          <select value={platform} onChange={(event) => {
            setPlatform(event.target.value as Platform);
            setComplete(false);
            setFailure("");
            setStatus("");
            setProgress(0);
          }} disabled={busy}>
            <option value="xiao_esp32c3">XIAO ESP32-C3</option>
            <option value="xiao_esp32c6">XIAO ESP32-C6</option>
          </select>
        </label>
        <div className="esp-flasher-version" aria-live="polite">
          <span>LATEST FIRMWARE</span>
          <strong>{manifestState === "loading" ? "Checking…" : manifest ? (manifest.version || manifest.tag || "Latest") : "Unavailable"}</strong>
          {manifest && <small>{manifest.device_name} · {formatBytes(manifest.size)}</small>}
        </div>
        <button type="button" className="esp-flasher-button" onClick={() => connectAndFlash(false)} disabled={!canFlash}>
          {busy ? <LoaderCircle size={15} className="esp-flasher-spinner" /> : complete ? <Check size={15} /> : <Cable size={15} />}
          {busy ? "Flashing…" : complete ? "Flashed successfully" : "Connect & flash latest"}
          {!busy && !complete && <ArrowUpRight size={14} />}
        </button>
        <button type="button" className="esp-flasher-button" onClick={() => connectAndFlash(true)} disabled={!canFlash || !migrationManifest || migrationManifest.tag !== (manifest?.tag || manifest?.version)}>
          {busy ? <LoaderCircle size={15} className="esp-flasher-spinner" /> : <Cable size={15} />}
          {busy ? "Migrating…" : "Migrate partition layout & flash"}
          {!busy && <ArrowUpRight size={14} />}
        </button>
      </div>

      {manifestState === "error" && <p className="esp-flasher-message is-error" role="status">{manifestError}</p>}
      {!serialSupported && <p className="esp-flasher-message">Use Chrome or Edge on desktop over HTTPS to connect to a USB serial device.</p>}
      {status && <p className="esp-flasher-message" role="status">{status}</p>}
      {failure && <p className="esp-flasher-message is-error" role="alert">{failure}</p>}
      {busy && <div className="esp-flasher-progress" aria-label={`Flash progress ${progress}%`}><span style={{ width: `${progress}%` }} /></div>}
      <p className="esp-flasher-footnote"><ArrowDownToLine size={13} /> Firmware and migration files are checksum-verified before writing. Migration preserves NVS settings and replaces the old unused SPIFFS area with the second OTA slot.</p>
    </div>
  );
}
