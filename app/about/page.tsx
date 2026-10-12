import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EditorialPage, EditorialHero, EditorialSection, EditorialImage, editorialStyles as s } from "@/components/site/editorial-page";
import { ScrollText } from "@/components/site/scroll-text";

export const metadata={title:"About — ersa.opensource",description:"An open hardware and software collective based in India. Build, learn, and share with Ersa."};
const partners = [
  {
    name: "Absurd Industries",
    location: "Bengaluru, India",
    description: "An open hardware collective exploring electronics, making, and experimental projects.",
    links: [
      { label: "Website", href: "https://absurd.industries" },
      { label: "Discord", href: "https://discord.com/invite/DUSUtguG2H" },
    ],
  },
  {
    name: "Ampere Works",
    location: "Bengaluru, India",
    description: "A design and engineering collective working on hardware and open source projects.",
    links: [{ label: "Website", href: "https://ampere.works" }],
  },
  {
    name: "Deku Projects",
    location: "Bengaluru, India",
    description: "Open source projects and experimental hardware designs, shared with the maker community.",
    links: [{ label: "GitHub", href: "https://github.com/balub" }],
  },
];

const principles = [
  {
    number: "01",
    title: "Public by default",
    description: "Code, designs, and project notes are shared as the work develops.",
  },
  {
    number: "02",
    title: "Repair over replace",
    description: "Make devices and software people can inspect, fix, and adapt.",
  },
  {
    number: "03",
    title: "Build together",
    description: "Work alongside independent makers, engineers, and hardware partners.",
  },
];

export default function AboutPage(){return <EditorialPage>
 <EditorialHero map media={<div className={s.map}><Image src="/platforms/india-dot-map.svg?v=20261013-complete" alt="Dotted map of India including Jammu and Kashmir, Ladakh, Aksai Chin, Lakshadweep, and the Andaman and Nicobar Islands" width={560} height={570} unoptimized priority /></div>}>
  <p className={s.label}>ERSA · AN OPEN HARDWARE COLLECTIVE</p>
  <h1>Built in India.<br/>Shared everywhere.</h1>
  <p className={s.lede}>We’re a community building open hardware and software. We publish the work, learn together, and leave room for others to take it further.</p>
  <div className={s.actions} id="community" aria-label="Join the Ersa community"><a href="https://t.me/ersaopencollective" target="_blank" rel="noopener noreferrer" className={`${s.button} ${s.primary}`}>Telegram <ArrowUpRight size={16}/></a><a href="https://discord.gg/UgfguRX4mk" target="_blank" rel="noopener noreferrer" className={s.button}>Discord <ArrowUpRight size={16}/></a></div>
 </EditorialHero>
 <section className={s.section} id="approach" aria-labelledby="approach-title"><div className={s.featurePanel}>
  <EditorialImage src="/platforms/compute-circuitry.jpg" alt="The components and traces of a circuit board" className={s.editorialPhoto} position="50% center"/>
  <div className={s.featureCopy}><p className={s.label}>HOW WE WORK</p><ScrollText id="approach-title">{"Open by default.\nMade to be shared."}</ScrollText><div className={s.rows}>{principles.map(principle=><article className={s.row} key={principle.number}><h3>{principle.title}</h3><p>{principle.description}</p></article>)}</div></div>
 </div></section>
 <EditorialSection id="partners" label="PEOPLE WE BUILD WITH" title="Independent people. Shared work." description="Hardware, software, and making—with independent groups who care about keeping the work open.">
  <div className={s.cards}>{partners.map((partner,index)=><article className={s.card} key={partner.name}><div className={s.cardTop}><span>0{index+1}</span><span>{partner.location}</span></div><h3>{partner.name}</h3><p>{partner.description}</p><div className={s.links}>{partner.links.map(link=><a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={14}/></a>)}</div></article>)}</div>
 </EditorialSection>
 </EditorialPage>}
