// app/page.tsx
import type { JSX } from "react";
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";

// Optional: declare local SVG icon props once to avoid repeating generics
type IconProps = JSX.IntrinsicElements["svg"];

export default function HomePage(): JSX.Element {
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
        <section className="relative z-10 mx-auto max-w-[960px] px-6 min-h-[calc(100vh-56px)] grid place-items-center text-center">
          <div>
            <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              ERSA OPEN COLLECTIVE
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.04] tracking-[-0.01em]">
              crafted for the common good
            </h1>
            <p className="mt-6 text-zinc-300 text-base md:text-lg leading-relaxed">
              A collective of builders advancing open hardware and software to
              reduce dependence on big corporations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-zinc-200"
              >
                <Link href="/join">Join Open Collective</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/15 text-white hover:bg-white/10"
              >
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
