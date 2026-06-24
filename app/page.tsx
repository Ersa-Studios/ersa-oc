// app/page.tsx
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { StaggerGrid } from "@/components/site/stagger-grid";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate">

        {/* Ambient orbs */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 rounded-full"
          style={{
            width: "760px", height: "760px",
            background: "radial-gradient(circle, rgba(124,92,252,0.32) 0%, transparent 65%)",
            filter: "blur(72px)",
            animation: "orb-breathe 10s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed rounded-full"
          style={{
            left: "6%", top: "32%",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(0,201,167,0.15) 0%, transparent 70%)",
            filter: "blur(65px)",
            animation: "orb-breathe 14s ease-in-out infinite 5s",
            zIndex: 0,
          }}
        />

        {/* Dot grid */}
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

        {/* ── Hero — stagger-animated via CSS keyframes (no JS needed) ── */}
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
          style={{ paddingTop: "9.5rem", paddingBottom: "6.5rem" }}
        >
          {/* Headline: each line staggers in */}
          <h1
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 6rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.028em",
              maxWidth: "15ch",
            }}
          >
            <span
              className="block"
              style={{
                color: "#fff",
                animation: "hero-line 0.75s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "60ms",
              }}
            >
              Repair it.
            </span>
            <span
              className="block"
              style={{
                color: "rgba(255,255,255,0.42)",
                animation: "hero-line 0.75s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "180ms",
              }}
            >
              Build it.
            </span>
            <span
              className="block"
              style={{
                color: "rgba(255,255,255,0.2)",
                animation: "hero-line 0.75s cubic-bezier(0.22,1,0.36,1) both",
                animationDelay: "300ms",
              }}
            >
              Open it.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8"
            style={{
              maxWidth: "44ch",
              fontSize: "1.065rem",
              lineHeight: "1.8",
              color: "rgba(205,202,228,0.75)",
              animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "420ms",
            }}
          >
            A collective of makers in Delhi building hardware and software
            designed to be repaired, understood, and improved by anyone.
            Open designs. Honest documentation. Nothing locked down.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: "2.5rem",
              animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
              animationDelay: "560ms",
            }}
          >
            <Link
              href="/join"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-black transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.03] active:scale-[0.98]"
              style={{ boxShadow: "0 2px 30px rgba(255,255,255,0.15), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              Join the Collective
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── Values — staggered card grid ── */}
        <ScrollReveal>
          <section
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
            style={{ paddingBottom: "6rem" }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-7"
              style={{ color: "rgba(180,178,200,0.36)" }}
            >
              What we stand for
            </p>

            <StaggerGrid className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {([
                {
                  title: "Repairability first",
                  body: "Every tool ships with schematics, part numbers, and teardown notes. Built to be fixed, not replaced.",
                  accent: "#7C5CFC", bg: "rgba(124,92,252,0.1)", border: "rgba(124,92,252,0.2)",
                  icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
                },
                {
                  title: "Learn as you build",
                  body: "No entry requirements. Bring a question, stay for the session. Everything gets documented.",
                  accent: "#00C9A7", bg: "rgba(0,201,167,0.1)", border: "rgba(0,201,167,0.2)",
                  icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
                },
                {
                  title: "Open by default",
                  body: "Every design is published publicly. Fork it, remix it, improve it — that's the whole point.",
                  accent: "#FFB450", bg: "rgba(255,180,80,0.08)", border: "rgba(255,180,80,0.18)",
                  icon: <><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><path d="M11 18H8a2 2 0 0 1-2-2V9" /></>,
                },
                {
                  title: "Community-owned",
                  body: "No investors, no bosses. Members drive the roadmap and show up at lab nights across Delhi.",
                  accent: "#FF8099", bg: "rgba(255,100,120,0.08)", border: "rgba(255,100,120,0.18)",
                  icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
                },
              ] as const).map(({ title, body, accent, bg, border, icon }) => (
                <div key={title} className="glass-card glass-card-hover rounded-2xl p-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(200,196,220,0.62)" }}>{body}</p>
                </div>
              ))}
            </StaggerGrid>
          </section>
        </ScrollReveal>

        {/* ── Community ── */}
        <ScrollReveal delay={60}>
          <section
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
            style={{ paddingBottom: "6rem" }}
          >
            <div
              className="rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,92,252,0.12) 0%, rgba(0,201,167,0.07) 55%, rgba(124,92,252,0.07) 100%)",
                border: "1px solid rgba(124,92,252,0.2)",
                transition: "border-color 0.3s ease",
              }}
            >
              <div className="px-8 md:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <h2
                    className="font-serif font-semibold"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                      letterSpacing: "-0.015em",
                      color: "#fff",
                      maxWidth: "24ch",
                      textWrap: "balance",
                    }}
                  >
                    A warm community of builders
                  </h2>
                  <p className="mt-2 text-sm" style={{ color: "rgba(200,196,220,0.6)", maxWidth: "42ch", lineHeight: "1.7" }}>
                    Jump into a build thread, ask a question, or just watch what people are shipping. No gatekeeping.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a
                    href="https://discord.gg/UgfguRX4mk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                    style={{ background: "rgba(88,101,242,0.16)", border: "1px solid rgba(88,101,242,0.3)", color: "rgba(185,188,255,0.9)" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
                    Discord
                  </a>
                  <a
                    href="https://t.me/ersaopencollective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                    style={{ background: "rgba(34,158,217,0.12)", border: "1px solid rgba(34,158,217,0.25)", color: "rgba(140,210,255,0.88)" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ── Partners ── */}
        <ScrollReveal delay={80}>
          <section
            className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
            style={{ paddingBottom: "8rem" }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(180,178,200,0.3)" }}
            >
              Building alongside
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {["Absurd Industries", "Ampere Works", "Deku Projects"].map(name => (
                <span key={name} className="text-base font-medium" style={{ color: "rgba(200,196,220,0.32)" }}>
                  {name}
                </span>
              ))}
              <Link href="/join" className="text-sm hover:text-white/60 transition-colors duration-200" style={{ color: "rgba(176,157,255,0.45)" }}>
                see all →
              </Link>
            </div>
          </section>
        </ScrollReveal>

      </main>
    </>
  );
}
