import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { BrandHeader } from "@/components/site/brand-header";
import { BrandFooter } from "@/components/site/brand-footer";
import { DeviceOutline } from "@/components/site/device-outline";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { ScrollText } from "@/components/site/scroll-text";
import styles from "./home.module.css";

const platforms = [
  {
    number: "01", name: "wearable", accent: "#A8D66D", href: "/wearable", comingSoon: false, image: "/platforms/wearable/watch-everyday.webp",
    description: "An open e-paper watch platform with first-class ANCS/AMS support for iPhone.",
  },
  {
    number: "02", name: "compute", accent: "#E8A84A", href: "/compute", comingSoon: true, image: "/platforms/compute-laptop.jpg",
    description: "A foundation for computers you can understand, modify, and make your own.",
  },
];

export default function HomePage() {
  return (
    <main className={styles.site}>
      <section className={`${styles.panel} ${styles.heroPanel}`} aria-labelledby="hero-title">
        <div className={styles.heroSurface}>
          <BrandHeader />
          <div className={styles.heroBody}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title"><span>Truly own</span><span>your hardware.</span></h1>
              <p>Open hardware for a more independent,<br className="hidden lg:block" /> resilient and human future.</p>
              <Link className={styles.scrollCue} href="#platforms" aria-label="Scroll down to explore the platforms"><ArrowDown size={25} strokeWidth={1.25} /></Link>
            </div>
            <div className={styles.art}><DeviceOutline /></div>
          </div>
        </div>
      </section>
      <section className={`${styles.panel} ${styles.platformPanel}`} id="platforms" aria-labelledby="platforms-title">
        <div className={styles.contentSurface}>
        <div className={styles.sectionHeader}>
          <div><p className={styles.label}>OPEN PLATFORMS</p><ScrollText id="platforms-title">Built to be yours.</ScrollText></div>
          <p>Software and hardware for people who want to understand what they use.</p>
        </div>
        <div className={styles.platformGrid}>
          {platforms.map((platform, index) => (
            <ScrollReveal key={platform.name} className={styles.platformReveal} delay={index * 120}>
              <Link href={platform.href} className={styles.platformCard} style={{ "--platform-accent": platform.accent } as CSSProperties}>
                {platform.image && <span className={styles.cardMedia}><Image src={platform.image} alt="" fill unoptimized sizes="(max-width: 760px) 100vw, 45vw" /></span>}
                <span className={styles.cardTop}><span>{platform.number}</span>{platform.comingSoon && <span className={styles.comingSoon}>COMING SOON</span>}</span>
                <span className={styles.platformName}><b>ersa.</b><span>{platform.name}</span></span>
                <span className={styles.platformDescription}>{platform.description}</span>
                <span className={styles.platformAction}>Explore ersa.{platform.name}<ArrowUpRight size={20} strokeWidth={1.5} /></span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        </div>
      </section>
      <section className={`${styles.panel} ${styles.collectivePanel}`} aria-labelledby="collective-title">
        <div className={`${styles.contentSurface} ${styles.collectiveSurface}`}>
        <div className={styles.collectiveImage} aria-hidden="true"><Image src="/platforms/collective-earth.jpg" alt="" fill unoptimized sizes="100vw" /></div>
        <div className={styles.collectiveBody}>
          <p className={styles.label}>MADE IN THE OPEN</p>
          <div className={styles.collectiveGrid}>
            <ScrollText id="collective-title">{"Good technology\nbelongs to everyone."}</ScrollText>
            <ScrollReveal delay={140}>
              <p>Ersa is a community building open hardware and software together. Follow the work, learn from it, and help decide what comes next.</p>
              <Link href="/about" className={styles.collectiveLink}>Meet the collective <ArrowRight size={18} strokeWidth={1.5} /></Link>
            </ScrollReveal>
          </div>
        </div>
        </div>
      </section>
      <BrandFooter />
    </main>
  );
}
