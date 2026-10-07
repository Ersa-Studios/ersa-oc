import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";

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
      <BrandHeader />
      <section className="product-hero" aria-labelledby="compute-title">
        <Link href="/#platforms" className="back-link"><ArrowLeft size={14} /> All platforms</Link>
        <p className="eyebrow product-kicker compute-kicker"><span className="compute-status-dot" /> ERSA.COMPUTE · OPEN LINUX PLATFORM</p>
        <div className="product-title-row"><h1 id="compute-title"><span>ersa.</span><em>compute</em></h1><span className="coming-soon-badge">COMING SOON</span></div>
        <p className="product-lede">An open compute foundation for PCs, mobile devices, automotive systems, and embedded hardware. The architecture is still taking shape, with a focus on systems that can adapt to their hardware and the people using them.</p>
        <Link href="#architecture" className="product-primary-link compute-primary-link">Explore the architecture <ArrowUpRight size={15} /></Link>
      </section>

      <section className="compute-usecases" aria-labelledby="compute-usecases-title">
        <div className="product-section-heading">
          <div><p className="eyebrow">ONE OPEN FOUNDATION</p><h2 id="compute-usecases-title">A simpler way to build and deploy.</h2></div>
          <p>Ersa Compute is a work in progress, with a focus on repeatable builds, simpler deployment, and practical device management.</p>
        </div>
        <div className="compute-principles">
          {platformPrinciples.map((item) => (
            <article className="compute-principle" key={item.number}>
              <span className="compute-principle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="compute-targets">
          <p className="eyebrow">PLANNED PLATFORM TARGETS</p>
          <ul aria-label="Planned platform targets">
            {["PC", "Mobile", "Automotive", "Embedded"].map((target) => <li key={target}>{target}</li>)}
          </ul>
        </div>
      </section>

      <section className="compute-foundation" id="architecture" aria-labelledby="architecture-title">
        <div><p className="eyebrow">INTENDED OS ARCHITECTURE · IN PROGRESS</p><h2 id="architecture-title">One system.<br />A consistent HAL.</h2></div>
        <div className="foundation-copy">
          <p>A consistent hardware abstraction layer (HAL) is the proposed boundary between Ersa&apos;s system services and device specific hardware. It gives the OS a common way to work across different boards and form factors, while keeping hardware details in the right place.</p>
          <div className="architecture-stack" aria-label="Proposed Ersa Compute architecture">
            <div><b>Applications &amp; shell</b><span>PC · mobile · automotive · embedded</span></div>
            <div><b>Shared platform services</b><span>Common system capabilities</span></div>
            <div className="architecture-hal"><b>Hardware abstraction layer <small>HAL</small></b><span>Consistent interfaces across devices</span></div>
            <div><b>Device specific drivers</b><span>Hardware and board support</span></div>
          </div>
        </div>
      </section>

      <PlatformExplore current="compute" />

      <BrandFooter />
    </main>
  );
}
