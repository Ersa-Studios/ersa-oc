// app/page.tsx
import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate min-h-[calc(100vh-56px)]">
        {/* background layers */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* FULL CENTER: use grid or flex */}
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <section className="min-h-[calc(100vh-56px)] grid place-items-center text-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight leading-[1.05]">
                crafted for the common good
              </h1>
              <p className="mt-6 text-zinc-300 text-lg md:text-xl">
                A collective of builders advancing open hardware and software to
                reduce dependence on big corporations.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4">
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
                  className="border-zinc-800 text-white hover:bg-zinc-900"
                >
                  <Link href="/about">Learn more</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
