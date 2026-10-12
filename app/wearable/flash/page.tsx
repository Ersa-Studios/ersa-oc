import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { EditorialPage, editorialStyles as s } from "@/components/site/editorial-page";
import { Esp32FirmwareFlasher } from "@/components/site/esp32-firmware-flasher";
import styles from "./flash.module.css";

export const metadata = {
  title: "Flash ersa.wearable — ESP32-C3 / C6 firmware",
  description: "Connect an ESP32-C3 or ESP32-C6 and flash the latest ersa.wearable firmware from your browser.",
};

export default function WearableFlashPage() {
  return (
    <EditorialPage platform="wearable">
      <section className={s.hero} aria-labelledby="flash-title">
        <div className={s.frame}>
          <BrandHeader />
          <div className={styles.body}>
            <div className={styles.copy}>
              <Link href="/wearable" className={styles.back}><ArrowLeft size={16} /> ersa.wearable</Link>
              <p className={s.label}>INSTALL FROM YOUR BROWSER</p>
              <h1 id="flash-title">A fresh start.<br />For your watch.</h1>
              <p className={s.lede}>Connect your watch, choose its board, and install the latest ersa.wearable software.</p>
              <ol className={styles.steps}>
                <li><span>01</span><p>Open Chrome or Edge on desktop and plug in a data USB cable.</p></li>
                <li><span>02</span><p>Choose your board, then connect and flash.</p></li>
                <li><span>03</span><p>Keep it connected until installation finishes. Your watch will restart.</p></li>
              </ol>
            </div>
            <div className={styles.installer}>
              <h2>Install the latest build.</h2>
              <p className={styles.intro}>Choose the board inside your watch.</p>
              <Esp32FirmwareFlasher />
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}
