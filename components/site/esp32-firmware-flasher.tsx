"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Cable, Check, LoaderCircle } from "lucide-react";
import type { IEspLoaderTerminal } from "esptool-js";

type Platform = "xiao_esp32c3" | "xiao_esp32c6";

type OtaManifest = {
  schema: number;
  device_name: string;
  codename: string;
  platform?: Platform;
  tag?: string;
  version?: string;
  firmware_url: string;
  sha256: string;
  size: number;
};

const otaRoot = "https://pkgs-wearables.ersa.dev/ota/terra";
const legacyC3Manifest = "https://pkgs-wearables.ersa.dev/ota/terra/ota.json";
const chipNames: Record<Platform, string> = {
  xiao_esp32c3: "ESP32-C3",
  xiao_esp32c6: "ESP32-C6",
};

async function fetchManifest(platform: Platform): Promise<OtaManifest> {
  const manifestUrl = `${otaRoot}/${platform}/ota.json`;
  let response = await fetch(manifestUrl, { cache: "no-store" });
  let legacy = false;

  // Keep the existing C3 installation path working until its platform-scoped
  // manifest is published. Never use an unqualified manifest for a C6.
  if (response.status === 404 && platform === "xiao_esp32c3") {
    response = await fetch(legacyC3Manifest, { cache: "no-store" });
    legacy = true;
  }

  if (!response.ok) {
    throw new Error(response.status === 404
      ? `No latest ${chipNames[platform]} firmware is published yet.`
      : `Could not load the latest firmware manifest (${response.status}).`);
  }

  const manifest = await response.json() as OtaManifest;
  if (manifest.schema !== 1 || manifest.codename !== "terra") {
    throw new Error("The firmware manifest is invalid or for an unsupported device.");
  }
  if (manifest.platform && manifest.platform !== platform) {
    throw new Error(`This manifest is for ${manifest.platform}, not ${platform}.`);
  }
  if (!manifest.platform && platform !== "xiao_esp32c3") {
    throw new Error("This legacy manifest only identifies ESP32-C3 firmware.");
  }
  if (legacy && platform !== "xiao_esp32c3") {
    throw new Error("The legacy firmware manifest cannot be used for ESP32-C6.");
  }
  if (!/^https:\/\//i.test(manifest.firmware_url) || !/^[a-f0-9]{64}$/i.test(manifest.sha256)) {
    throw new Error("The firmware URL or SHA-256 checksum is missing or invalid.");
  }
  if (!Number.isSafeInteger(manifest.size) || manifest.size < 1 || manifest.size > 8 * 1024 * 1024) {
    throw new Error("The firmware image size is invalid.");
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

export function Esp32FirmwareFlasher() {
  const [platform, setPlatform] = useState<Platform>("xiao_esp32c3");
  const [manifest, setManifest] = useState<OtaManifest | null>(null);
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
    setManifestState("loading");
    setManifestError("");
    fetchManifest(platform)
      .then((nextManifest) => {
        if (!current) return;
        setManifest(nextManifest);
        setManifestState("ready");
      })
      .catch((error: unknown) => {
        if (!current) return;
        setManifestError(errorMessage(error));
        setManifestState("error");
      });
    return () => { current = false; };
  }, [platform]);

  async function connectAndFlash() {
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
      setStatus("Checking for the latest firmware…");
      const latest = await fetchManifest(platform);
      const imageResponse = await fetch(latest.firmware_url, { cache: "no-store" });
      if (!imageResponse.ok) throw new Error(`Firmware download failed (${imageResponse.status}).`);

      const imageBuffer = await imageResponse.arrayBuffer();
      if (imageBuffer.byteLength !== latest.size) {
        throw new Error("The downloaded image size does not match the OTA manifest.");
      }
      const digest = await crypto.subtle.digest("SHA-256", imageBuffer);
      const imageSha256 = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
      if (imageSha256.toLowerCase() !== latest.sha256.toLowerCase()) {
        throw new Error("Firmware checksum verification failed. Nothing was flashed.");
      }

      setStatus("Connecting to the ESP32 bootloader…");
      const { ESPLoader, Transport } = await import("esptool-js");
      transport = new Transport(port, false);
      const terminal: IEspLoaderTerminal = { clean() {}, writeLine() {}, write() {} };
      const loader = new ESPLoader({ transport, baudrate: 460800, terminal });
      const detectedChip = await loader.main();
      if (!detectedChip.toUpperCase().includes(chipNames[platform])) {
        throw new Error(`Detected ${detectedChip}. Select the matching ESP32 target and try again.`);
      }

      setStatus(`Flashing ${latest.version || latest.tag || "latest firmware"} to the application slot…`);
      await loader.writeFlash({
        fileArray: [{ data: new Uint8Array(imageBuffer), address: 0x10000 }],
        flashMode: "keep",
        flashFreq: "keep",
        flashSize: "keep",
        eraseAll: false,
        compress: true,
        reportProgress: (_fileIndex, written, total) => {
          setProgress(total > 0 ? Math.min(100, Math.round((written / total) * 100)) : 0);
        },
      });

      setStatus("Restarting the device…");
      // Pulse DTR/RTS through the classic ESP32 auto-reset sequence. esptool-js's
      // hard_reset only releases RTS, which can leave some USB-UART boards in
      // ROM download mode after flashing.
      await loader.after("custom_reset", undefined, "D0|R1|W100|D1|R0|W50|D0");
      await new Promise((resolve) => window.setTimeout(resolve, 1000));
      setProgress(100);
      setComplete(true);
      setStatus("Firmware flashed. Reset signal sent; the watch should be starting now.");
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
        <button type="button" className="esp-flasher-button" onClick={connectAndFlash} disabled={!serialSupported || manifestState !== "ready" || busy}>
          {busy ? <LoaderCircle size={15} className="esp-flasher-spinner" /> : complete ? <Check size={15} /> : <Cable size={15} />}
          {busy ? "Flashing…" : complete ? "Flashed successfully" : "Connect & flash latest"}
          {!busy && !complete && <ArrowUpRight size={14} />}
        </button>
      </div>

      {manifestState === "error" && <p className="esp-flasher-message is-error" role="status">{manifestError}</p>}
      {!serialSupported && <p className="esp-flasher-message">Use Chrome or Edge on desktop over HTTPS to connect to a USB serial device.</p>}
      {status && <p className="esp-flasher-message" role="status">{status}</p>}
      {failure && <p className="esp-flasher-message is-error" role="alert">{failure}</p>}
      {busy && <div className="esp-flasher-progress" aria-label={`Flash progress ${progress}%`}><span style={{ width: `${progress}%` }} /></div>}
      <p className="esp-flasher-footnote"><ArrowDownToLine size={13} /> Gets the latest firmware for the selected board and checks it before installation.</p>
    </div>
  );
}
