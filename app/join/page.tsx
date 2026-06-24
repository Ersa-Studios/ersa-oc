// app/join/page.tsx
import { Navbar } from "@/components/site/navbar";

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-screen">
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14"
          style={{ paddingTop: "7rem", paddingBottom: "4rem" }}
        >

          {/* Heading */}
          <h1
            className="font-serif font-semibold leading-[1.06]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              letterSpacing: "-0.02em",
              textWrap: "balance",
              background: "linear-gradient(150deg, #fff 30%, rgba(255,255,255,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join us to build the future
          </h1>
          <p className="mt-3 text-sm" style={{ color: "rgba(200,196,220,0.75)" }}>
            Say hello, propose a project, or just lurk and learn.
          </p>

          {/* Community channels */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://discord.gg/UgfguRX4mk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(88,101,242,0.35)",
                background: "rgba(88,101,242,0.12)",
                color: "rgba(180,185,255,0.9)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              Discord
            </a>
            <a
              href="https://t.me/ersaopencollective"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(34,158,217,0.35)",
                background: "rgba(34,158,217,0.10)",
                color: "rgba(140,210,255,0.9)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
            <a
              href="mailto:oc@ersa.dev"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/[0.06]"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(200,196,220,0.75)",
              }}
            >
              oc@ersa.dev
            </a>
          </div>

          {/* Partners */}
          <div className="mt-16">
            <h2
              className="text-xs uppercase tracking-[0.18em] mb-6"
              style={{ color: "rgba(180,178,200,0.45)" }}
            >
              Our Partners
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Absurd Industries */}
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Absurd Industries</h3>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(180,178,200,0.45)" }}>Bengaluru, India</p>
                  </div>
                  <a
                    href="https://shop.absurd.industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400/70 hover:text-orange-400 transition-colors"
                    title="Shop"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(200,196,220,0.72)" }}>
                  Open hardware, electronics, and experimental projects. Join their Discord to connect with makers and builders.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://discord.com/invite/DUSUtguG2H"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-full bg-white text-black text-xs font-semibold transition-all hover:bg-zinc-100"
                  >
                    Discord
                  </a>
                  <a
                    href="https://absurd.industries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all hover:bg-white/[0.08]"
                    style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(200,196,220,0.85)" }}
                  >
                    Website
                  </a>
                </div>
              </div>

              {/* Ampere Works */}
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]">
                <div>
                  <h3 className="text-sm font-semibold text-white">Ampere Works</h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(180,178,200,0.45)" }}>Bengaluru, India</p>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(200,196,220,0.72)" }}>
                  Design and engineering collective working on innovative hardware solutions and open-source projects.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://ampere.works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-full bg-white text-black text-xs font-semibold transition-all hover:bg-zinc-100"
                  >
                    Website
                  </a>
                  <a
                    href="mailto:kailash@ampere.works"
                    className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all hover:bg-white/[0.08]"
                    style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(200,196,220,0.85)" }}
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Deku Projects */}
              <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.01]">
                <div>
                  <h3 className="text-sm font-semibold text-white">Deku Projects</h3>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(180,178,200,0.45)" }}>Bengaluru, India</p>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(200,196,220,0.72)" }}>
                  Open source projects and experimental hardware designs. Check out their GitHub for latest builds and documentation.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/balub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-3 rounded-full bg-white text-black text-xs font-semibold transition-all hover:bg-zinc-100"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:balub997@gmail.com"
                    className="flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all hover:bg-white/[0.08]"
                    style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(200,196,220,0.85)" }}
                  >
                    Contact
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
