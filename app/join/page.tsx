// app/join/page.tsx
import { Navbar } from "@/components/site/navbar";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { StaggerGrid } from "@/components/site/stagger-grid";

const partners = [
  {
    name: "Absurd Industries",
    location: "Bengaluru, India",
    description:
      "Open hardware, electronics, and experimental projects. Join their Discord to connect with makers and builders.",
    accent: "#7C5CFC",
    bg: "rgba(124,92,252,0.09)",
    border: "rgba(124,92,252,0.22)",
    primary: { label: "Discord", href: "https://discord.com/invite/DUSUtguG2H" },
    secondary: { label: "Website", href: "https://absurd.industries" },
    shopHref: "https://shop.absurd.industries",
  },
  {
    name: "Ampere Works",
    location: "Bengaluru, India",
    description:
      "Design and engineering collective working on innovative hardware solutions and open-source projects.",
    accent: "#00C9A7",
    bg: "rgba(0,201,167,0.09)",
    border: "rgba(0,201,167,0.22)",
    primary: { label: "Website", href: "https://ampere.works" },
    secondary: { label: "Contact", href: "mailto:kailash@ampere.works" },
  },
  {
    name: "Deku Projects",
    location: "Bengaluru, India",
    description:
      "Open source projects and experimental hardware designs. Check out their GitHub for latest builds and documentation.",
    accent: "#FFB450",
    bg: "rgba(255,180,80,0.08)",
    border: "rgba(255,180,80,0.2)",
    primary: { label: "GitHub", href: "https://github.com/balub" },
    secondary: { label: "Contact", href: "mailto:balub997@gmail.com" },
  },
];

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-screen">

        {/* ── Ambient orbs ── */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 rounded-full"
          style={{
            width: "700px", height: "700px",
            background: "radial-gradient(circle, rgba(124,92,252,0.28) 0%, transparent 65%)",
            filter: "blur(72px)",
            animation: "orb-breathe 10s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed rounded-full"
          style={{
            right: "8%", top: "20%",
            width: "440px", height: "440px",
            background: "radial-gradient(circle, rgba(0,201,167,0.13) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "orb-breathe 14s ease-in-out infinite 4s",
            zIndex: 0,
          }}
        />

        {/* ── Dot grid ── */}
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0"
          style={{
            height: "110vh",
            maskImage: "radial-gradient(ellipse 80% 55% at 50% 25%, black 15%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 25%, black 15%, transparent 100%)",
            zIndex: 0,
          }}
        />

        {/* ── Hero ── */}
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
          style={{ paddingTop: "9rem", paddingBottom: "5rem" }}
        >
          {/* Label */}
          <p
            className="text-[11px] uppercase tracking-[0.22em] mb-6"
            style={{
              color: "rgba(180,178,200,0.45)",
              animation: "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "20ms",
            }}
          >
            Get involved
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.026em",
              maxWidth: "16ch",
            }}
          >
            <span
              className="block"
              style={{
                color: "#fff",
                animation: "hero-line 0.75s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "80ms",
              }}
            >
              Join us to build
            </span>
            <span
              className="block"
              style={{
                color: "rgba(255,255,255,0.38)",
                animation: "hero-line 0.75s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "200ms",
              }}
            >
              the future.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6"
            style={{
              maxWidth: "42ch",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              color: "rgba(205,202,228,0.7)",
              animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "340ms",
            }}
          >
            Say hello, propose a project, or just lurk and learn. No entry
            requirements — everyone is welcome.
          </p>

          {/* Channel buttons */}
          <div
            className="mt-10 flex flex-wrap gap-3"
            style={{
              animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "460ms",
            }}
          >
            <a
              href="https://discord.gg/UgfguRX4mk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
              style={{
                border: "1px solid rgba(88,101,242,0.38)",
                background: "rgba(88,101,242,0.14)",
                color: "rgba(185,188,255,0.95)",
                boxShadow: "0 2px 20px rgba(88,101,242,0.15)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Discord
            </a>

            <a
              href="https://t.me/ersaopencollective"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
              style={{
                border: "1px solid rgba(34,158,217,0.38)",
                background: "rgba(34,158,217,0.12)",
                color: "rgba(140,210,255,0.95)",
                boxShadow: "0 2px 20px rgba(34,158,217,0.12)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>

            <a
              href="mailto:oc@ersa.dev"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/[0.07] hover:scale-[1.04] active:scale-[0.98]"
              style={{
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(200,196,220,0.7)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              oc@ersa.dev
            </a>
          </div>
        </section>

        {/* ── What happens when you join ── */}
        <ScrollReveal>
          <section
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
            style={{ paddingBottom: "5.5rem" }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-7"
              style={{ color: "rgba(180,178,200,0.36)" }}
            >
              What you get
            </p>

            <StaggerGrid className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Build threads",
                  body: "Real-time project logs, design decisions, and build sessions shared openly. Nothing gated.",
                  accent: "#7C5CFC",
                  bg: "rgba(124,92,252,0.1)",
                  border: "rgba(124,92,252,0.22)",
                  icon: (
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  ),
                },
                {
                  title: "Lab nights",
                  body: "In-person sessions across Delhi. Bring something to work on, leave with new collaborators.",
                  accent: "#00C9A7",
                  bg: "rgba(0,201,167,0.1)",
                  border: "rgba(0,201,167,0.22)",
                  icon: (
                    <>
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </>
                  ),
                },
                {
                  title: "Open everything",
                  body: "Every design, schematic, and decision is public. Fork it, remix it — that's the point.",
                  accent: "#FFB450",
                  bg: "rgba(255,180,80,0.08)",
                  border: "rgba(255,180,80,0.2)",
                  icon: (
                    <>
                      <circle cx="18" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <path d="M13 6h3a2 2 0 0 1 2 2v7M11 18H8a2 2 0 0 1-2-2V9" />
                    </>
                  ),
                },
              ].map(({ title, body, accent, bg, border, icon }) => (
                <div key={title} className="glass-card glass-card-hover rounded-2xl p-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(200,196,220,0.62)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </StaggerGrid>
          </section>
        </ScrollReveal>

        {/* ── Partners ── */}
        <ScrollReveal delay={60}>
          <section
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
            style={{ paddingBottom: "9rem" }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-7"
              style={{ color: "rgba(180,178,200,0.36)" }}
            >
              Our Partners
            </p>

            <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map(({ name, location, description, accent, bg, border, primary, secondary, shopHref }) => (
                <div
                  key={name}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4"
                  style={{ borderColor: border }}
                >
                  {/* Accent line */}
                  <div
                    className="w-8 h-0.5 rounded-full"
                    style={{ background: accent, opacity: 0.7 }}
                  />

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(180,178,200,0.42)" }}>
                        {location}
                      </p>
                    </div>
                    {shopHref && (
                      <a
                        href={shopHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors shrink-0"
                        style={{ color: `${accent}99` }}
                        title="Shop"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(200,196,220,0.7)" }}>
                    {description}
                  </p>

                  <div className="flex gap-2 pt-1">
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-3 rounded-full bg-white text-black text-xs font-semibold transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {primary.label}
                    </a>
                    <a
                      href={secondary.href}
                      target={secondary.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.98]"
                      style={{ border: "1px solid rgba(255,255,255,0.13)", color: "rgba(200,196,220,0.82)" }}
                    >
                      {secondary.label}
                    </a>
                  </div>
                </div>
              ))}
            </StaggerGrid>
          </section>
        </ScrollReveal>

      </main>
    </>
  );
}
