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

const specifications = [
  { label: "BOARD", value: "Ampere Works T1E · XIAO ESP32-C3" },
  { label: "DISPLAY", value: "1.54″ monochrome e-paper · 200 × 200" },
  { label: "TIMEKEEPING", value: "DS3231 real-time clock" },
  { label: "COMPANION", value: "Apple notifications and media over Bluetooth LE" },
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
        <a href="https://github.com/ersascape/ersawearableos" target="_blank" rel="noopener noreferrer" className="product-primary-link">Explore the firmware on GitHub <ArrowUpRight size={15} /></a>
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

      <section className="product-details" aria-labelledby="wearable-details-title">
        <div className="product-details-heading"><p className="eyebrow">OPEN FIRMWARE · REAL HARDWARE</p><h2 id="wearable-details-title">Built in layers.<br />Ready to make yours.</h2></div>
        <div className="spec-list">
          {specifications.map((spec) => <div className="spec-row" key={spec.label}><span>{spec.label}</span><b>{spec.value}</b></div>)}
        </div>
      </section>

      <PlatformExplore current="wearable" />

      <BrandFooter />
    </main>
  );
}
