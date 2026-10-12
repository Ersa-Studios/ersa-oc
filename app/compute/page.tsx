import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EditorialPage, EditorialHero, EditorialSection, EditorialImage, editorialStyles as s } from "@/components/site/editorial-page";
import { ScrollText } from "@/components/site/scroll-text";

export const metadata={title:"ersa.compute — Open Linux for PC, automotive, embedded",description:"An open Linux foundation for reproducible builds, deployment and device management. In development."};
const principles=[
 {number:"01",title:"Reproducible builds",description:"Repeatable configurations, so the same system can be built across development machines."},
 {number:"02",title:"Straightforward deployment",description:"A practical path from a desktop build to target hardware, with repeatable packaging and setup."},
 {number:"03",title:"Manageable systems",description:"Configuration and updates that remain understandable as a deployment grows."},
];
export default function ComputePage(){return <EditorialPage platform="compute">
 <EditorialHero photo="/platforms/compute-circuitry.jpg">
  <p className={s.brand}><b>ersa.</b><span>compute</span></p>
  <span className={s.status}>COMING SOON · IN DEVELOPMENT</span>
  <h1>One Linux base.<br/>Room to build.</h1>
  <p className={s.lede}>An open foundation for PCs, automotive systems, and embedded devices. Built around systems you can understand and adapt.</p>
  <Link href="#direction" className={s.cue} aria-label="Explore the compute platform direction"><ArrowDown size={22} strokeWidth={1.25}/></Link>
 </EditorialHero>
 <EditorialSection id="direction" label="WHAT WE’RE WORKING TOWARD" title={"Build it once.\nMake it repeatable."} description="ersa.compute is a work in progress. These are the principles guiding its development.">
  <div className={s.featurePanel}>
   <EditorialImage src="/platforms/compute-laptop.jpg" alt="Laptop keyboard illuminated in orange and blue" className={s.editorialPhoto} position="65% center"/>
   <div className={s.rows}>{principles.map(item=><article className={s.row} key={item.number}><span className={s.label}>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
  </div>
 </EditorialSection>
 <section className={s.section} id="devices" aria-labelledby="devices-title">
  <div className={s.featurePanel}><div className={s.featureCopy}><p className={s.label}>PLANNED PLATFORM TARGETS</p><ScrollText id="devices-title">{"The hardware changes.\nThe foundation carries on."}</ScrollText><p>The goal is a Linux base that can be built and maintained consistently, then adapted to the device and the job at hand.</p><div className={s.targetList}>{["PC","Mobile","Automotive","Embedded"].map(target=><span key={target}>{target}</span>)}</div><p>We’ll share the code and bring-up notes as the platform takes shape.</p><div className={s.actions}><Link href="/about#community" className={s.button}>Follow the work <ArrowUpRight size={16}/></Link></div></div>
  <EditorialImage src="/platforms/compute-circuitry.jpg" alt="Close-up of a circuit board and processor" className={s.editorialPhoto} position="65% center"/>
  </div>
 </section>
 </EditorialPage>}
