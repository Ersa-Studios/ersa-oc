import { ScrollText } from "@/components/site/scroll-text";
import { ArrowDown, ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";
import { ScrollReveal } from "@/components/site/scroll-reveal";

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

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <div className="interior-frame">
        <BrandHeader />
        <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-layout">
          <div>
        <p className="eyebrow"><span className="status-dot" /> AN OPEN HARDWARE COLLECTIVE · INDIA</p>
        <h1 id="about-title">Technology should<br /><span>be yours to change.</span></h1>
          </div>
          <div className="about-hero-copy-aside">
        <div className="about-hero-bottom">
          <p>Ersa is a community building open hardware and software. We publish the work, learn with others, and make room for people to take it further.</p>
          <div className="community-links" id="community" aria-label="Join the Ersa community">
            <a href="https://t.me/ersaopencollective" target="_blank" rel="noopener noreferrer" className="community-link telegram-link"><Send size={15} /> Telegram <ArrowUpRight size={13} /></a>
            <a href="https://discord.gg/UgfguRX4mk" target="_blank" rel="noopener noreferrer" className="community-link discord-link"><MessageCircle size={15} /> Discord <ArrowUpRight size={13} /></a>
            <a href="mailto:gagan@ersa.dev" className="community-link email-link"><Mail size={15} /> Email us <ArrowUpRight size={13} /></a>
          </div>
        </div>
          </div>
        </div>
        <a className="page-scroll-link about-scroll-link" href="#approach" aria-label="Scroll to how Ersa works"><ArrowDown size={16} strokeWidth={1.6} /></a>
      </section>
      </div>

      <section className="about-principles" id="approach" aria-labelledby="approach-title">
        <div className="about-section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <ScrollText id="approach-title">{"Built in the open,\nmade to be shared."}</ScrollText>
          </div>
          <p>Open source, repairability, and shared work guide what we choose to build.</p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <ScrollReveal className="about-card-reveal" key={principle.number} delay={Number(principle.number) * 90}><article className="principle-card">
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="partners-section" aria-labelledby="partners-title">
        <div className="partners-heading">
          <div>
            <p className="eyebrow">PEOPLE WE BUILD WITH</p>
            <ScrollText id="partners-title">{"Our partners."}</ScrollText>
          </div>
          <p>Independent groups we work with across hardware, software, and making.</p>
        </div>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <ScrollReveal className="about-card-reveal" key={partner.name} delay={index * 90}><article className="partner-card">
              <div className="partner-card-top"><span>0{index + 1}</span><span>{partner.location}</span></div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <div className="partner-links">
                {partner.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label} <ArrowUpRight size={13} /></a>
                ))}
              </div>
            </article></ScrollReveal>
          ))}
        </div>
        <p className="partner-note">Have a project or practice that aligns with ours? <a href="mailto:gagan@ersa.dev">Let&apos;s talk <ArrowUpRight size={13} /></a></p>
      </section>

      <PlatformExplore />

      <BrandFooter />
    </main>
  );
}
