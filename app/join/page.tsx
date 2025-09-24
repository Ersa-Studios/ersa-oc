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
          </div>
        </section>
      </main>
    </>
  );
}
