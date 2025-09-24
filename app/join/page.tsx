// app/page.tsx
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Mail } from "lucide-react";

// Optional: declare local SVG icon props once to avoid repeating generics
export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        {/* background layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_40% at 50%_10%,#000_30%,transparent_70%)]">
          <div className="absolute left-1/2 top-0 h-64 w-[70vw] -translate-x-1/2 rounded-[40%] bg-white/5 blur-3xl" />
        </div>

        {/* centered hero */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-14">
          <div>
            <h3 className="text-2xl md:text-4xl font-serif font-semibold leading-[1.04] tracking-[-0.01em]">
              Join us to build the future
            </h3>
            <p className="mt-4 text-zinc-300">Say hello, propose a project, or just lurk and learn.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="https://discord.gg/UgfguRX4mk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#5865F2]/40 bg-[#5865F2]/18 text-white hover:bg-[#5865F2]/28 transition-colors px-4 py-3"
              >
                <MessageCircle className="size-4" /> Discord
              </Link>
              <Link
                href="@ersaopencollective"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#229ED9]/40 bg-[#229ED9]/18 text-white hover:bg-[#229ED9]/28 transition-colors px-4 py-3"
              >
                <Send className="size-4" /> Telegram
              </Link>
              <Link
                href="mailto:oc@ersa.dev"
                className="flex items-center gap-2 border border-white/12 bg-white/[0.06] text-white hover:bg-white/[0.10] transition-colors px-4 py-3"
              >
                <Mail className="size-4" /> oc@ersa.dev
              </Link>
            </div>

            {/* Partners Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight mb-8">
                Our Partners
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                {/* Absurd Industries Card */}
                <div className="border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm uppercase tracking-[0.1em] text-zinc-400">
                      ABSURD INDUSTRIES
                    </h3>
                    <Link
                      href="https://shop.absurd.industries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                      title="Visit Shop"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </Link>
                  </div>
                  <h3 className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 mb-3">
                      Bengaluru, India
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Open hardware, electronics, and experimental projects. Join their Discord to connect with makers and builders.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="https://discord.com/invite/DUSUtguG2H"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black hover:bg-zinc-200 text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      Discord
                    </Link>
                    <Link
                      href="https://absurd.industries"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-white/20 hover:bg-white/10 text-white text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      Website
                    </Link>
                  </div>
                </div>

                {/* Ampere Works Card */}
                <div className="border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-6">
                  <h3 className="text-sm uppercase tracking-[0.1em] text-zinc-400 mb-3">
                    AMPERE WORKS
                  </h3>
                  <h3 className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 mb-3">
                    Bengaluru, India
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Design and engineering collective working on innovative hardware solutions and open-source projects.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="https://ampere.works"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black hover:bg-zinc-200 text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      Website
                    </Link>
                    <Link
                      href="mailto:kailash@ampere.works"
                      className="flex-1 border border-white/20 hover:bg-white/10 text-white text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Deku Projects Card */}
                <div className="border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-6">
                  <h3 className="text-sm uppercase tracking-[0.1em] text-zinc-400 mb-3">
                    DEKU PROJECTS
                  </h3>
                  <h3 className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 mb-3">
                    Bengaluru, India
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Open source projects and experimental hardware designs. Check out their GitHub for latest builds and documentation.
                  </p>
                  <div className="flex gap-3">
                    <Link
                      href="https://github.com/balub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black hover:bg-zinc-200 text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="mailto:balub997@gmail.com"
                      className="flex-1 border border-white/20 hover:bg-white/10 text-white text-center py-2 px-4 text-sm font-medium transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
