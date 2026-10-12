import { ScrollText } from "@/components/site/scroll-text";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export const metadata = {
  title: "ersa.compute — Open Linux for PC, automotive, embedded",
  description: "Ersa Compute Platform: an open foundation for reproducible builds, deployment, and device management across PC, mobile, automotive, and embedded systems.",
};

const platformPrinciples = [
  {
    number: "01",
    title: "Reproducible builds",
    description: "Repeatable build configurations make it easier to develop, verify, and ship the same system across machines.",
  },
  {
    number: "02",
    title: "Straightforward deployment",
    description: "A clear path from desktop development to target hardware, with packaging and setup designed to be repeatable.",
  },
  {
    number: "03",
    title: "Manage devices with ease",
    description: "Keep system configuration and updates manageable as deployments grow from one device to many.",
  },
];

export default function ComputePage() {
  return (
    <main className="site-shell product-page compute-page">
      <div className="interior-frame compute-photo-frame">
        <BrandHeader />
        <section className="product-hero compute-hero" aria-labelledby="compute-title">
        <Link href="/#platforms" className="back-link"><ArrowLeft size={14} /> All platforms</Link>
        <p className="eyebrow product-kicker compute-kicker"><span className="compute-status-dot" /> ERSA.COMPUTE · OPEN LINUX PLATFORM</p>
        <div className="compute-hero-layout">
          <div>
            <div className="product-title-row"><h1 id="compute-title"><span>ersa.</span><em>compute</em></h1><span className="coming-soon-badge">IN PROGRESS</span></div>
            <p className="product-lede">An open Linux foundation for PCs, automotive systems, and embedded devices. Built around repeatable builds, straightforward deployment, and manageable systems.</p>
            <Link href="#direction" className="compute-hero-cta">What we&apos;re working toward <ArrowRight size={14} /></Link>
            <Link className="page-scroll-link compute-scroll-link" href="#direction" aria-label="Scroll to the compute platform direction"><ArrowDown size={16} strokeWidth={1.6} /></Link>
          </div>
        </div>
        </section>
      </div>

      <section className="compute-usecases" id="direction" aria-labelledby="compute-usecases-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">ONE OPEN FOUNDATION</p><ScrollText id="compute-usecases-title">{"A simpler way to build and deploy."}</ScrollText></div>
          <p>Ersa Compute is a work in progress, with a focus on repeatable builds, simpler deployment, and practical device management.</p>
        </div>
        <div className="compute-principles">
          {platformPrinciples.map((item) => (
            <ScrollReveal className="compute-card-reveal" key={item.number} delay={Number(item.number) * 90}><article className="compute-principle">
              <span className="compute-principle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article></ScrollReveal>
          ))}
        </div>
        <div className="compute-targets">
          <p className="eyebrow">PLANNED PLATFORM TARGETS</p>
          <ul aria-label="Planned platform targets">
            {["PC", "Mobile", "Automotive", "Embedded"].map((target) => <li key={target}>{target}</li>)}
          </ul>
        </div>
      </section>

      <section className="compute-foundation compute-direction" aria-labelledby="direction-title">
        <div><p className="eyebrow">A PRACTICAL STARTING POINT</p><ScrollText id="direction-title">{"One system.\nAdapted to its device."}</ScrollText></div>
        <div className="foundation-copy">
          <p>Ersa Compute is still in development. The goal is a Linux base that can be built and maintained consistently, then adapted for the hardware and job at hand.</p>
          <p>From a desktop PC to a vehicle or embedded board, the same principles should make each build easier to reproduce, deploy, and manage.</p>
        </div>
      </section>

      <PlatformExplore current="compute" />

      <BrandFooter />
    </main>
  );
}
