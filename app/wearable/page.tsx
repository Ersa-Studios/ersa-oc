import { ScrollText } from "@/components/site/scroll-text";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";
import { ScrollReveal } from "@/components/site/scroll-reveal";

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
      <div className="interior-frame">
        <BrandHeader />
        <section className="product-hero wearable-hero" aria-labelledby="wearable-title">
        <div className="wearable-hero-copy">
        <Link href="/#platforms" className="back-link"><ArrowLeft size={14} /> All platforms</Link>
        <p className="eyebrow product-kicker"><span className="status-dot" /> ERSA.WEARABLE · OPEN WATCH PLATFORM</p>
        <h1 id="wearable-title"><span>ersa.</span><em>wearable</em></h1>
        <p className="product-lede">An open-source watch operating environment built to be understood, repaired, and extended. The firmware brings a calm, text-first interface to the Ampere Works T1E.</p>
        <div className="product-resource-links wearable-resource-links" aria-label="ersa.wearable resources">
          <div className="wearable-primary-actions">
            <Link href="/wearable/flash" className="wearable-start-button">Get started <ArrowUpRight size={13} /></Link>
            <a href="https://github.com/ersascape/ersawearableos" target="_blank" rel="noopener noreferrer" className="wearable-source-button">View source <ArrowUpRight size={13} /></a>
          </div>
          <div className="wearable-resource-secondary">
            <a href="https://pkgs-wearables.ersa.dev/wiki/" target="_blank" rel="noopener noreferrer">Wiki <ArrowUpRight size={13} /></a>
            <a href="https://pkgs-wearables.ersa.dev/wiki/api/" target="_blank" rel="noopener noreferrer">C++ API <ArrowUpRight size={13} /></a>
            <a href="https://pkgs-wearables.ersa.dev/" target="_blank" rel="noopener noreferrer">Arch packages <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <Link className="page-scroll-link wearable-scroll-link" href="#screens" aria-label="Scroll to the wearable interface"><ArrowDown size={16} strokeWidth={1.6} /></Link>
        </div>
        <a className="wearable-hero-image" href="https://ampere.works/t1e" target="_blank" rel="noopener noreferrer" aria-label="Learn about the Ampere Works T1E">
          <Image src="/platforms/wearable/ampere-terra-runtime.png" alt="The Ampere Works T1E running ersa.wearable" fill priority unoptimized sizes="(max-width: 760px) 100vw, 45vw" />
          <span className="home-visual-shade" />
          <span className="home-visual-caption"><span><b>SUPPORTED DEVICE</b> / FIRST TARGET</span><strong>Ampere Works T1E</strong></span>
          <span className="home-visual-arrow"><ArrowUpRight size={17} /></span>
        </a>
      </section>
      </div>

      <section className="device-section" id="screens" aria-labelledby="screens-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">FIRMWARE INTERFACE</p><ScrollText id="screens-title">{"Small screen.\nUseful by design."}</ScrollText></div>
          <p>Real host-rendered captures from the firmware UI. The 200 × 200 monochrome display keeps the essentials legible and the interface low-power.</p>
        </div>
        <div className="wearable-gallery">
          {screens.map((screen, index) => (
            <ScrollReveal className="wearable-card-reveal" key={screen.image} delay={index * 60}><figure className="wearable-screen">
              <div className="screen-image-wrap"><Image src={`/platforms/wearable/${screen.image}`} alt={`${screen.title} running on ersa.wearable`} width={200} height={200} unoptimized /></div>
              <figcaption><span className="screen-index">0{index + 1}</span><span className="screen-caption"><b>{screen.title}</b><small>{screen.detail}</small></span></figcaption>
            </figure></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="wearable-capabilities" aria-labelledby="capabilities-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">MADE FOR THE EVERYDAY</p><ScrollText id="capabilities-title">{"More than a watchface."}</ScrollText></div>
          <p>Everyday tools, with the system behavior documented in the open.</p>
        </div>
        <div className="wearable-capability-grid">
          <ScrollReveal className="wearable-card-reveal" delay={80}><article className="wearable-capability wearable-capability-organizer">
            <span className="capability-index">01 / ORGANIZER</span>
            <h3>Your day, at a glance.</h3>
            <p>Calendar, agenda, and checklist apps keep everyday information readable on the watch&apos;s monochrome screen.</p>
            <div className="capability-tags"><span>CALENDAR</span><span>AGENDA</span><span>TASKS</span></div>
          </article></ScrollReveal>
          <ScrollReveal className="wearable-card-reveal" delay={160}><article className="wearable-capability">
            <span className="capability-index">02 / COMPANION</span>
            <h3>Stay in the loop.</h3>
            <p>See Apple notifications and caller details, then view Now Playing metadata and control supported media over Bluetooth LE.</p>
            <div className="capability-tags"><span>ANCS</span><span>AMS</span><span>BLUETOOTH LE</span></div>
          </article></ScrollReveal>
          <ScrollReveal className="wearable-card-reveal" delay={240}><article className="wearable-capability">
            <span className="capability-index">03 / CALDAV + NEXTCLOUD</span>
            <h3>Your Nextcloud, in sync.</h3>
            <p>Sync events and task lists over CalDAV. Recurring events expand into the agenda, tasks can be checked off on the watch, and a local cache keeps the last sync available.</p>
            <div className="capability-tags"><span>NEXTCLOUD</span><span>CALDAV</span><span>EVENTS + TASKS</span></div>
          </article></ScrollReveal>
        </div>
      </section>

      <section className="wearable-device" aria-labelledby="device-title">
        <div className="terra-device-layout">
          <div className="terra-device-copy">
            <p className="eyebrow">SUPPORTED HARDWARE</p>
            <ScrollText id="device-title">{"Built for the T1E."}</ScrollText>
            <p className="terra-device-intro">The Ampere Works T1E is the first supported target for ersa.wearable.</p>
            <a className="terra-device-link" href="https://ampere.works/t1e" target="_blank" rel="noopener noreferrer">Visit Ampere Works <ArrowUpRight size={15} /></a>
          </div>
          <dl className="terra-device-specs">
            <div><dt>BOARD</dt><dd>Ampere Works T1E · XIAO ESP32-C3</dd></div>
            <div><dt>DISPLAY</dt><dd>1.54″ monochrome e-paper · 200 × 200</dd></div>
            <div><dt>TIMEKEEPING</dt><dd>DS3231 real-time clock</dd></div>
            <div><dt>INPUT</dt><dd>Two physical buttons</dd></div>
            <div><dt>BATTERY</dt><dd>Voltage sensing · percentage is estimated</dd></div>
          </dl>
        </div>
      </section>

      <PlatformExplore current="wearable" />

      <BrandFooter />
    </main>
  );
}
