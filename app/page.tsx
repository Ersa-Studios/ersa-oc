import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { BrandHeader } from "@/components/site/brand-header";
import { BrandFooter } from "@/components/site/brand-footer";

const platforms = [
  {
    number: "01",
    title: "ersa.wearable",
    accent: "#A8D66D",
    pageHref: "/wearable",
    comingSoon: false,
    description: "Open tools for personal, repairable wearable technology.",
    tag: "HARDWARE · SOFTWARE",
    id: "wearable",
  },
  {
    number: "02",
    title: "ersa.compute",
    accent: "#E8A84A",
    pageHref: "/compute",
    comingSoon: true,
    description: "A foundation for computers you can understand, modify, and make your own.",
    tag: "COMPUTE · SYSTEMS",
    id: "compute",
  },
  // {
  //   number: "03",
  //   title: "ersa.mobile",
  //   accent: "#8CCDF0",
  //   description: "An open approach to mobile devices, built around ownership and choice.",
  //   tag: "MOBILE · OPEN SOURCE",
  //   id: "mobile",
  // },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <BrandHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AN OPEN HARDWARE COLLECTIVE</p>
          <h1 id="hero-title">Truly own<br />your <span className="hero-highlight">hardware.</span></h1>
          <p className="hero-description">
            We make open platforms for wearable technology and personal computing. Built in the open, made to be understood, repaired, and improved.
          </p>
          <Link className="begin-exploring" href="#platforms">Begin exploring <ArrowDown size={13} /></Link>
        </div>

      </section>

      <section className="platforms-section" id="platforms" aria-labelledby="platforms-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FAMILY OF OPEN PLATFORMS</p>
            <h2 id="platforms-title">Hardware, on your terms.</h2>
          </div>
          <p className="section-intro">One idea across two platforms: technology should be something you can shape, share, and call your own.</p>
        </div>
        <div className="platform-list">
          {platforms.map((platform) => (
            <article className="platform-row" id={platform.id} key={platform.number} style={{ "--platform-accent": platform.accent } as CSSProperties}>
              <span className="platform-number">{platform.number}</span>
              <span className="platform-main"><span className="platform-tag">{platform.tag}</span><span className="platform-name-line"><Link className="platform-name platform-name-link" href={platform.pageHref}><b>ersa.</b><span>{platform.title.slice(5)}</span></Link>{platform.comingSoon && <span className="coming-soon-badge">COMING SOON</span>}</span></span>
              <span className="platform-description">{platform.description}<Link className="platform-detail-link" href={platform.pageHref}>Explore {platform.title} <ArrowUpRight size={13} /></Link></span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-strip" id="about">
        <p className="eyebrow">MADE IN THE OPEN</p>
        <div className="about-content">
          <h2>Good technology<br />for <span className="about-highlight">everyone.</span></h2>
          <p>Ersa is a community building open hardware and software together. Follow the work, learn from it, and help decide what comes next.</p>
          <Link href="/about" className="text-link">Meet the collective <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <BrandFooter />
    </main>
  );
}
