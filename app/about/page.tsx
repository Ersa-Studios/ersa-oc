import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import { BrandHeader } from "@/components/site/brand-header";
import { PlatformExplore } from "@/components/site/platform-explore";
import { BrandFooter } from "@/components/site/brand-footer";

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
    title: "Make it understandable",
    description: "Share designs, source, and the decisions behind them so other people can learn from the work.",
  },
  {
    number: "02",
    title: "Build for ownership",
    description: "Create technology people can inspect, repair, adapt, and keep using on their own terms.",
  },
  {
    number: "03",
    title: "Learn together",
    description: "Bring makers, engineers, and curious beginners into the same conversation and build practice.",
  },
];

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <BrandHeader />

      <section className="about-hero" aria-labelledby="about-title">
        <p className="eyebrow"><span className="status-dot" /> ABOUT ERSA · NEW DELHI, INDIA</p>
        <h1 id="about-title">Open hardware.<br />Shared <span>possibility.</span></h1>
        <div className="about-hero-bottom">
          <p>Ersa is an open hardware and software collective building tools people can understand, repair, and make their own. We share the work as we go, so others can learn from it and take it further.</p>
          <div className="community-links" aria-label="Join the Ersa community">
            <a href="https://t.me/ersaopencollective" target="_blank" rel="noopener noreferrer" className="community-link telegram-link"><Send size={15} /> Telegram <ArrowUpRight size={13} /></a>
            <a href="https://discord.gg/UgfguRX4mk" target="_blank" rel="noopener noreferrer" className="community-link discord-link"><MessageCircle size={15} /> Discord <ArrowUpRight size={13} /></a>
            <a href="mailto:oc@ersa.dev" className="community-link email-link"><Mail size={15} /> Email us <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="approach-title">
        <div className="about-section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2 id="approach-title">Built in the open,<br />made to be shared.</h2>
          </div>
          <p>We want more people to have the knowledge and freedom to shape the technology around them.</p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-section" aria-labelledby="partners-title">
        <div className="partners-heading">
          <div>
            <p className="eyebrow">PEOPLE WE BUILD WITH</p>
            <h2 id="partners-title">Our partners.</h2>
          </div>
          <p>Good work grows through shared skills, open conversations, and generous collaborators.</p>
        </div>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-card-top"><span>0{index + 1}</span><span>{partner.location}</span></div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
              <div className="partner-links">
                {partner.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label} <ArrowUpRight size={13} /></a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="partner-note">Have a project or practice that aligns with ours? <Link href="/join">Let&apos;s talk <ArrowUpRight size={13} /></Link></p>
      </section>

      <PlatformExplore />

      <BrandFooter />
    </main>
  );
}
