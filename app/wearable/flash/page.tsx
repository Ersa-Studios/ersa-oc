import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { BrandFooter } from "@/components/site/brand-footer";
import { Esp32FirmwareFlasher } from "@/components/site/esp32-firmware-flasher";

export const metadata = {
  title: "Flash ersa.wearable — ESP32-C3 / C6 firmware",
  description: "Connect an ESP32-C3 or ESP32-C6 and flash the latest ersa.wearable firmware from your browser.",
};

export default function WearableFlashPage() {
  return (
    <main className="site-shell product-page wearable-page wearable-flash-page">
      <BrandHeader />
      <section className="wearable-flash-content" aria-labelledby="flash-title">
        <Link href="/wearable" className="back-link"><ArrowLeft size={14} /> ersa.wearable</Link>
        <p className="eyebrow product-kicker"><span className="status-dot" /> USB FIRMWARE INSTALLER</p>
        <h1 id="flash-title">Flash ersa.<span>wearable.</span></h1>
        <p className="wearable-flash-lede">Connect your watch, choose its board, and install the latest ersa.wearable software.</p>

        <Esp32FirmwareFlasher />

        <div className="wearable-flash-guidance">
          <article>
            <span>01 / CONNECT</span>
            <h2>Connect your watch.</h2>
            <p>Use a data USB cable and open this page in Chrome or Edge on desktop. Choose your watch when the browser asks.</p>
          </article>
          <article>
            <span>02 / TARGET</span>
            <h2>Choose your board.</h2>
            <p>Select ESP32-C3 or ESP32-C6. The flasher checks the connected board. For a legacy partition layout, use the one-time migration option.</p>
          </article>
          <article>
            <span>03 / FINISH</span>
            <h2>Keep it connected.</h2>
            <p>Wait for the success message. The watch will restart automatically when the installation is complete.</p>
          </article>
        </div>

      </section>
      <BrandFooter />
    </main>
  );
}
