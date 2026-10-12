import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EditorialPage, EditorialHero, EditorialImage, editorialStyles as s } from "@/components/site/editorial-page";
import { WatchModel } from "@/components/site/watch-model";
import { ScrollText } from "@/components/site/scroll-text";

export const metadata = {title:"ersa.wearable — Open watch platform",description:"An open e-paper watch platform with first-class Apple ANCS/AMS support, CalDAV and Nextcloud integration."};
export default function WearablePage(){return <EditorialPage platform="wearable">
 <EditorialHero media={<WatchModel className={s.model} />}>
  <p className={s.brand}><b>ersa.</b><span>wearable</span></p>
  <h1>Your watch.<br/>Your software.</h1>
  <p className={s.lede}>An open e-paper watch platform with first-class ANCS and AMS support for iPhone. Your notifications, calls, and music—right on your wrist.</p>
  <div className={s.actions}><Link href="/wearable/flash" className={`${s.button} ${s.primary}`}>Get started <ArrowUpRight size={16}/></Link><a href="https://github.com/ersascape/ersawearableos" target="_blank" rel="noopener noreferrer" className={s.button}>View source <ArrowUpRight size={16}/></a></div>
  <div className={s.links}><a href="https://pkgs-wearables.ersa.dev/wiki/" target="_blank" rel="noopener noreferrer">Wiki ↗</a><a href="https://pkgs-wearables.ersa.dev/wiki/api/" target="_blank" rel="noopener noreferrer">C++ API ↗</a><a href="https://pkgs-wearables.ersa.dev/" target="_blank" rel="noopener noreferrer">Arch packages ↗</a></div>
  <Link href="#companion" className={s.cue} aria-label="Explore first-class iPhone support"><ArrowDown size={22} strokeWidth={1.25}/></Link>
 </EditorialHero>
 <section className={s.section} id="companion" aria-labelledby="companion-title"><div className={s.featurePanel}>
  <div className={s.featureCopy}><p className={s.label}>FIRST-CLASS ANCS + AMS</p><ScrollText id="companion-title">{"Your iPhone.\nOn your wrist."}</ScrollText><p>Built-in support for Apple Notification Center Service and Apple Media Service over Bluetooth LE. Keep your phone in your pocket and the essentials on your wrist.</p><div className={s.rows}><div className={s.row}><h3>ANCS · Notifications and calls.</h3><p>See iPhone notifications and caller details directly on your watch.</p></div><div className={s.row}><h3>AMS · Your music, in reach.</h3><p>View Now Playing information and control supported media from your wrist.</p></div></div></div>
  <EditorialImage src="/platforms/wearable/watch-everyday.webp" alt="ersa.wearable running its text watchface in its transparent case" position="50% 45%"/>
 </div></section>

 <section className={s.section} id="interface" aria-labelledby="interface-title"><div className={s.featurePanel}>
  <div className={s.featureCopy}><p className={s.label}>ON THE WATCH</p><ScrollText id="interface-title">Time, at a glance.</ScrollText><p>A monochrome interface designed for a 200 × 200 e-paper display. Keep the essentials readable and the controls straightforward.</p><div className={s.rows}><div className={s.row}><h3>A readable watchface.</h3><p>Time and date in a clear text layout on the e-paper display.</p></div><div className={s.row}><h3>Two-button navigation.</h3><p>Scroll through the app drawer and select what you need with physical buttons.</p></div></div></div>
  <div className={`${s.featureMedia} ${s.agendaMedia}`}><Image src="/platforms/wearable/text_watchface.png" alt="Text watchface showing the time and date" width={200} height={200} unoptimized/><Image src="/platforms/wearable/app_drawer.png" alt="App drawer navigated with two buttons" width={200} height={200} unoptimized/></div>
 </div></section>
 <section className={s.section} id="everyday" aria-labelledby="everyday-title"><div className={s.featurePanel}>
  <div className={s.featureCopy}><p className={s.label}>CALDAV + NEXTCLOUD</p><ScrollText id="everyday-title">{"Your day,\nin sync."}</ScrollText><p>Bring your Nextcloud calendar and task lists to your wrist. A local cache keeps the last sync available.</p><div className={s.rows}><div className={s.row}><h3>Your calendar, including repeats.</h3><p>Read upcoming events and recurring appointments in the daily agenda.</p></div><div className={s.row}><h3>Check things off.</h3><p>View your synced task lists and mark tasks complete from the watch.</p></div></div></div>
  <div className={`${s.featureMedia} ${s.agendaMedia}`}><Image src="/platforms/wearable/caldav_agenda.png" alt="Calendar agenda on the watch" width={200} height={200} unoptimized/><Image src="/platforms/wearable/caldav_tasks.png" alt="Synced task checklist on the watch" width={200} height={200} unoptimized/></div>
 </div></section>
 <section className={s.section} id="updates" aria-labelledby="updates-title"><div className={s.featurePanel}>
  <div className={s.featureCopy}><p className={s.label}>FLASH + UPDATE</p><ScrollText id="updates-title">{"Your next build,\nwithin reach."}</ScrollText><p>Install the firmware over USB, then keep your watch updated over the air.</p><div className={s.rows}><div className={s.row}><h3>Flash from your browser.</h3><p>Connect a supported ESP32 board over USB and follow the flasher.</p></div><div className={s.row}><h3>Update over the air.</h3><p>Install firmware updates through the watch’s OTA update support.</p></div></div><div className={s.actions}><Link href="/wearable/flash" className={`${s.button} ${s.primary}`}>Open flasher <ArrowUpRight size={16}/></Link></div></div>
  <EditorialImage src="/platforms/wearable/usb-board.jpg" alt="An ESP32 development board connected over USB"/>
 </div></section>
 <section className={s.section} id="hardware" aria-labelledby="hardware-title"><div className={s.featurePanel}>
  <div className={`${s.featureMedia} ${s.agendaMedia}`}><Image src="/platforms/wearable/system_status.png" alt="Watch system status showing device diagnostics" width={200} height={200} unoptimized/></div><div className={s.featureCopy}><p className={s.label}>SUPPORTED HARDWARE</p><ScrollText id="hardware-title">{"Open software.\nA real starting point."}</ScrollText><p>The Ampere Works T1E is the first supported target: an e-paper watch with two buttons and an ESP32-C3 at its core.</p><dl className={s.specs}><div><dt>BOARD</dt><dd>XIAO ESP32-C3</dd></div><div><dt>DISPLAY</dt><dd>1.54″ e-paper · 200 × 200</dd></div><div><dt>TIMEKEEPING</dt><dd>DS3231 real-time clock</dd></div><div><dt>INPUT</dt><dd>Two physical buttons</dd></div></dl><div className={s.actions}><a href="https://ampere.works/t1e" target="_blank" rel="noopener noreferrer" className={s.button}>Visit Ampere Works <ArrowUpRight size={16}/></a></div></div>
 </div></section>
 </EditorialPage>}
