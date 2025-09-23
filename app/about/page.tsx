// app/about/page.tsx
import { Navbar } from "@/components/site/navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[1.04] tracking-tight">
                Building public tools for Delhi’s makers
              </h1>
              <div className="mt-6 prose prose-invert prose-zinc max-w-none">
                <p>
                  We draw inspiration from outfits like <strong>Absurd Industries</strong>
                  — small, focused, and relentlessly hands‑on. We believe cities like
                  <strong> New Delhi</strong> can become hubs for open hardware and
                  software if we lower the cost of experimentation, share designs freely,
                  and build local supply chains.
                </p>
                <p>
                  Our goal is to assemble a community of designers, engineers,
                  fabricators, and writers who ship real tools — from electronics and
                  networking gear to machine tooling and bio instruments — and then
                  document them publicly so others can replicate, remix, and improve.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-sm uppercase tracking-[0.14em] text-zinc-400">Focus</h3>
                  <p className="mt-2 text-sm text-zinc-200">Open electronics, networking, machine tooling, and bio instruments.</p>
                </div>
                <div className="border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-sm uppercase tracking-[0.14em] text-zinc-400">Method</h3>
                  <p className="mt-2 text-sm text-zinc-200">Ship real tools, publish designs and notes, and grow local supply chains.</p>
                </div>
              </div>
            </div>
            <div className="self-start border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Get in touch</h2>
              <p className="mt-3 text-sm text-zinc-300">Want to collaborate or contribute parts and time?</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link href="mailto:oc@ersa.dev" className="px-4 py-2 bg-white text-black text-sm hover:bg-zinc-200">Email</Link>
                <Link href="/join" className="px-4 py-2 border border-white/20 text-sm hover:bg-white/10">Join</Link>
              </div>
              <p className="mt-4 text-xs text-zinc-400">Email: oc@ersa.dev</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


