// app/about/page.tsx
import { Navbar } from "@/components/site/navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate">

        {/* Ambient orb */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 rounded-full"
          style={{
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(124,92,252,0.24) 0%, transparent 68%)",
            filter: "blur(70px)",
            animation: "orb-breathe 12s ease-in-out infinite",
            zIndex: 0,
          }}
        />

        {/* ── Page header ── */}
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
          style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.2em] mb-5"
            style={{ color: "rgba(180,178,200,0.36)" }}
          >
            About the collective
          </p>
          <h1
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
              lineHeight: "1.06",
              letterSpacing: "-0.025em",
              maxWidth: "22ch",
              textWrap: "balance",
              color: "#fff",
            }}
          >
            Building public tools for Delhi&apos;s makers
          </h1>
        </section>

        {/* ── Main content ── */}
        <section
          className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:px-20"
          style={{ paddingBottom: "5rem" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">

            {/* Left — narrative */}
            <div>
              <div
                className="space-y-5 text-base leading-[1.82]"
                style={{ color: "rgba(205,202,228,0.78)" }}
              >
                <p>
                  We draw inspiration from outfits like{" "}
                  <span className="text-white/90 font-medium">Absurd Industries</span>
                  {" "}— focused, and relentlessly hands-on. We believe cities like{" "}
                  <span className="text-white/90 font-medium">New Delhi</span>{" "}
                  can become hubs for open hardware and software if we lower
                  the cost of experimentation, share designs freely, and build
                  local supply chains.
                </p>
                <p>
                  Our goal is to assemble a community of designers, engineers,
                  fabricators, and writers who ship real tools — from electronics and
                  networking gear to machine tooling and bio instruments — and then
                  document them publicly so others can replicate, remix, and improve.
                </p>
                <p>
                  Everything we make is built to be understood. That means publishing
                  schematics, writing up failures as honestly as wins, and keeping the
                  cost of entry as low as we can. If you can solder, or want to learn,
                  you belong here.
                </p>
              </div>

              {/* Two-col detail cards */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5">
                  <h3
                    className="text-[11px] uppercase tracking-[0.16em] mb-3"
                    style={{ color: "rgba(180,178,200,0.45)" }}
                  >
                    Focus areas
                  </h3>
                  <ul className="space-y-1.5 text-sm" style={{ color: "rgba(210,208,228,0.8)" }}>
                    {["Open electronics", "Networking gear", "Machine tooling", "Bio instruments", "Local supply chains"].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7C5CFC" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-5">
                  <h3
                    className="text-[11px] uppercase tracking-[0.16em] mb-3"
                    style={{ color: "rgba(180,178,200,0.45)" }}
                  >
                    How we work
                  </h3>
                  <ul className="space-y-1.5 text-sm" style={{ color: "rgba(210,208,228,0.8)" }}>
                    {["Ship real tools", "Publish everything", "Lab nights in Delhi", "No gatekeeping", "Repair over replace"].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00C9A7" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-5">

              {/* Inspired by */}
              <div
                className="glass-card rounded-2xl p-7"
                style={{ borderColor: "rgba(124,92,252,0.15)" }}
              >
                <h2
                  className="text-[11px] uppercase tracking-[0.18em] mb-4"
                  style={{ color: "rgba(180,178,200,0.42)" }}
                >
                  Inspired by
                </h2>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-medium text-white/90 mb-1">Absurd Industries</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(200,196,220,0.62)" }}>
                      Bengaluru-based open hardware collective. Focused, experimental, and community-first.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90 mb-1">CERN OHL</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(200,196,220,0.62)" }}>
                      The open hardware licences we build under. Permissive, copyleft, and strongly protective of design freedom.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90 mb-1">Right to Repair movement</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(200,196,220,0.62)" }}>
                      The belief that people who own things should be able to fix them. Our north star.
                    </p>
                  </div>
                </div>
              </div>

              {/* Get in touch */}
              <div
                className="glass-card rounded-2xl p-7"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <h2
                  className="text-[11px] uppercase tracking-[0.18em] mb-3"
                  style={{ color: "rgba(180,178,200,0.42)" }}
                >
                  Get in touch
                </h2>
                <p className="text-sm mb-6" style={{ color: "rgba(200,196,220,0.7)", lineHeight: "1.7" }}>
                  Want to collaborate, contribute time, or bring parts? Say hello.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="mailto:oc@ersa.dev"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold transition-all duration-200 hover:bg-zinc-100"
                  >
                    Email us
                  </Link>
                  <Link
                    href="/join"
                    className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/[0.07]"
                    style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(205,202,228,0.82)" }}
                  >
                    Join the collective
                  </Link>
                </div>
                <p className="mt-5 text-xs font-mono" style={{ color: "rgba(180,178,200,0.3)" }}>
                  oc@ersa.dev
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
