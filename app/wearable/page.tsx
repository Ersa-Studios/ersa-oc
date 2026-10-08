import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";

export const metadata = {
  title: "ersa.wearable — Open watch platform",
  description: "An open-source watch operating environment for the Ampere Works T1E, with a text-first e-paper interface.",
};

const screens = [
  { image: "text_watchface.png", title: "Text watchface", detail: "Time, at a glance" },
  { image: "app_drawer.png", title: "App drawer", detail: "Two-button navigation" },
  { image: "caldav_agenda.png", title: "Daily agenda", detail: "CalDAV events" },
  { image: "caldav_tasks.png", title: "Tasks", detail: "On-watch checklist" },
  { image: "system_status.png", title: "System status", detail: "Device diagnostics" },
];

export default function WearablePage() {
  return (
    <main className="site-shell product-page wearable-page">
      <BrandHeader />
      <section className="product-hero" aria-labelledby="wearable-title">
        <Link href="/#platforms" className="back-link"><ArrowLeft size={14} /> All platforms</Link>
        <p className="eyebrow product-kicker"><span className="status-dot" /> ERSA.WEARABLE · OPEN WATCH PLATFORM</p>
        <h1 id="wearable-title"><span>ersa.</span><em>wearable</em></h1>
        <p className="product-lede">An open-source watch operating environment built to be understood, repaired, and extended. The firmware brings a calm, text-first interface to the Ampere Works T1E.</p>
        <div className="product-resource-links wearable-resource-links" aria-label="ersa.wearable resources">
          <a href="https://github.com/ersascape/ersawearableos" target="_blank" rel="noopener noreferrer" className="wearable-github-link">Browse source on GitHub <ArrowUpRight size={15} /></a>
          <div className="wearable-resource-secondary">
            <a href="https://github.com/ersascape/ersawearableos#build-and-validate" target="_blank" rel="noopener noreferrer">Getting started <ArrowUpRight size={13} /></a>
            <a href="https://pkgs-wearables.ersa.dev/wiki/" target="_blank" rel="noopener noreferrer">Wiki <ArrowUpRight size={13} /></a>
            <a href="https://pkgs-wearables.ersa.dev/" target="_blank" rel="noopener noreferrer">Arch packages <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </section>

      <section className="device-section" id="screens" aria-labelledby="screens-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">FIRMWARE INTERFACE</p><h2 id="screens-title">Small screen.<br />Useful by design.</h2></div>
          <p>Real host-rendered captures from the firmware UI. The 200 × 200 monochrome display keeps the essentials legible and the interface low-power.</p>
        </div>
        <div className="wearable-gallery">
          {screens.map((screen, index) => (
            <figure className="wearable-screen" key={screen.image}>
              <div className="screen-image-wrap"><Image src={`/platforms/wearable/${screen.image}`} alt={`${screen.title} running on ersa.wearable`} width={200} height={200} unoptimized /></div>
              <figcaption><span className="screen-index">0{index + 1}</span><span className="screen-caption"><b>{screen.title}</b><small>{screen.detail}</small></span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wearable-capabilities" aria-labelledby="capabilities-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">MADE FOR THE EVERYDAY</p><h2 id="capabilities-title">More than a watchface.</h2></div>
          <p>Everyday tools, with the system behavior documented in the open.</p>
        </div>
        <div className="wearable-capability-grid">
          <article className="wearable-capability wearable-capability-organizer">
            <span className="capability-index">01 / ORGANIZER</span>
            <h3>Your day, at a glance.</h3>
            <p>Sync CalDAV events and tasks, browse the daily agenda, and keep a local cache for quick access.</p>
            <div className="capability-tags"><span>CALENDAR</span><span>AGENDA</span><span>TASKS</span></div>
          </article>
          <article className="wearable-capability">
            <span className="capability-index">02 / COMPANION</span>
            <h3>Stay in the loop.</h3>
            <p>See Apple notifications and caller details, then view Now Playing metadata and control supported media over Bluetooth LE.</p>
            <div className="capability-tags"><span>ANCS</span><span>AMS</span><span>BLUETOOTH LE</span></div>
          </article>
          <article className="wearable-capability">
            <span className="capability-index">03 / UPDATES &amp; TOOLS</span>
            <h3>Updates with a safety net.</h3>
            <p>Over-the-air updates validate firmware before writing to the inactive slot; boot rollback protection handles failed starts.</p>
            <div className="capability-tags"><span>A/B UPDATES</span><span>ROLLBACK</span><span>OPEN SOURCE</span></div>
          </article>
        </div>
      </section>

      <section className="wearable-device" aria-labelledby="device-title">
        <div className="terra-device-layout">
          <figure className="terra-device-photo">
            <Image src="/platforms/wearable/ampere-terra-runtime.png" alt="Ampere Terra runtime watch with a transparent case and mesh band" width={1000} height={1000} priority unoptimized />
          </figure>
          <div className="terra-device-copy">
            <h2 id="device-title">Built for Ampere Terra.</h2>
            <p className="terra-device-intro">The T1E is the first supported target for ersa.wearable.</p>
            <a className="terra-device-link" href="https://ampere.works/t1e" target="_blank" rel="noopener noreferrer">Visit Ampere Works <ArrowUpRight size={15} /></a>
            <dl className="terra-device-specs">
              <div><dt>BOARD</dt><dd>Ampere Works T1E · XIAO ESP32-C3</dd></div>
              <div><dt>DISPLAY</dt><dd>1.54″ monochrome e-paper · 200 × 200</dd></div>
              <div><dt>TIMEKEEPING</dt><dd>DS3231 real-time clock</dd></div>
              <div><dt>INPUT</dt><dd>Two physical buttons</dd></div>
              <div><dt>BATTERY</dt><dd>Voltage sensing · percentage is estimated</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="wearable-architecture" aria-labelledby="architecture-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">PLATFORM ARCHITECTURE</p><h2 id="architecture-title">Clear boundaries.<br />Composable hardware.</h2></div>
          <p>Applications use stable hardware contracts; platform adapters and board support connect those contracts to each device.</p>
        </div>
        <p className="architecture-takeaway"><span>THE SHORT VERSION</span><strong>Applications → HAL contracts → platform adapters + drivers → board support</strong></p>
        <div className="architecture-diagram-list">
          <figure className="wearable-diagram">
            <figcaption>HAL AND BOARD LAYERS</figcaption>
            <div className="hal-stack" aria-label="Wearable operating system architecture from applications through HAL contracts and platform drivers to board support">
              <div className="hal-layer hal-layer-apps">
                <div className="hal-layer-heading"><strong>Applications &amp; services</strong><span>APPLICATION LAYER</span></div>
                <div className="hal-layer-items"><div>Watch interface</div><div>Bluetooth services</div><div>Power management</div><div>Time &amp; alarms</div></div>
              </div>
              <div className="hal-relation"><i aria-hidden="true" /><span>depend on stable contracts</span><i aria-hidden="true" /></div>
              <div className="hal-layer hal-layer-contracts">
                <div className="hal-layer-heading"><strong>Hardware abstraction layer</strong><code>include/ersa/hal/</code></div>
                <div className="hal-layer-items"><div>Display</div><div>Input</div><div>Connectivity</div><div>Power</div><div>Storage</div></div>
              </div>
              <div className="hal-relation"><i aria-hidden="true" /><span>implemented for each target</span><i aria-hidden="true" /></div>
              <div className="hal-layer hal-layer-implementation">
                <div className="hal-implementation-group"><div className="hal-layer-heading"><strong>Platform adapter</strong><code>src/hal/&lt;platform&gt;/</code></div><div className="hal-layer-items"><div>MCU</div><div>RTOS</div></div></div>
                <div className="hal-implementation-group"><div className="hal-layer-heading"><strong>Peripheral drivers</strong><code>src/drivers/&lt;domain&gt;/</code></div><div className="hal-layer-items"><div>Device drivers</div><div>Bus interfaces</div></div></div>
              </div>
              <div className="hal-relation"><i aria-hidden="true" /><span>selected and composed by</span><i aria-hidden="true" /></div>
              <div className="hal-layer hal-layer-board">
                <div className="hal-layer-heading"><strong>Board support package</strong><span>TARGET HARDWARE</span></div>
                <div className="hal-layer-items"><div>Manufacturer</div><div>Board family</div><div>Device variant</div><div>Build configuration</div></div>
                <code className="hal-layer-path">src/bsp/&lt;manufacturer&gt;/&lt;platform&gt;/&lt;codename&gt;/</code>
              </div>
            </div>
          </figure>
          <figure className="wearable-diagram">
            <figcaption>HOST CONTROL BRIDGE</figcaption>
            <div className="control-flow" aria-label="ewctl host commands travel over USB Serial JTAG to the application loop and existing firmware services">
              <div className="control-node"><small>HOST</small><strong>ewctl</strong><span>CLI</span></div>
              <div className="control-connector"><span>⇄</span><small>USB Serial/JTAG<br />NDJSON</small></div>
              <div className="control-node"><small>FIRMWARE INPUT</small><strong>USB endpoint</strong><span>Bounded reads</span></div>
              <div className="control-connector"><span>→</span></div>
              <div className="control-node control-node-loop"><small>APPLICATION LOOP</small><strong>Scan → parse → dispatch</strong><span>One command per pass · 512-byte limit</span></div>
              <div className="control-connector"><span>→</span></div>
              <div className="control-node"><small>EXISTING SERVICES</small><strong>Firmware</strong><span>BLE · battery · power · apps</span></div>
            </div>
            <div className="control-logs"><span>DIAGNOSTIC LOG RING</span><strong>16 records</strong><span className="control-logs-link" aria-hidden="true">↔</span><span>Command dispatcher</span></div>
          </figure>
        </div>
      </section>

      <PlatformExplore current="wearable" />

      <BrandFooter />
    </main>
  );
}
