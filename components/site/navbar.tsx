// components/site/navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const NAV_LINKS = [
  { to: "/",      label: "Home"  },
  { to: "/about", label: "About" },
  { to: "/join",  label: "Join"  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)]"
      style={{ maxWidth: "1080px" }}
    >
      {/* ── Main pill: 3-column grid ── */}
      <div
        className="glass rounded-full px-5 py-3 grid items-center"
        style={{
          gridTemplateColumns: "1fr auto 1fr",
          transition: "box-shadow 0.4s ease, background 0.4s ease",
          ...(scrolled ? {
            background: "rgba(14, 14, 22, 0.86)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 16px 60px rgba(0,0,0,0.65), 0 1px 0 rgba(0,0,0,0.5)",
          } : {}),
        }}
      >

        {/* LEFT — wordmark */}
        <div className="justify-self-start flex items-center">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 hidden md:block"
            style={{ color: "rgba(200,196,220,0.5)", fontFamily: "Inter, sans-serif" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(200,196,220,0.5)"; }}
          >
            Ersa Open Collective
          </Link>
          {/* Mobile: show small wordmark */}
          <Link href="/" className="md:hidden text-sm font-semibold text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>
            ersa.oc
          </Link>
        </div>

        {/* CENTER — Lion logo */}
        <div className="justify-self-center px-6">
          <Link href="/" className="block transition-opacity duration-200 hover:opacity-75">
            <Image
              src="/ersa.svg"
              alt="Ersa"
              width={34}
              height={34}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.92 }}
            />
          </Link>
        </div>

        {/* RIGHT — nav links + CTA */}
        <div className="justify-self-end flex items-center gap-0.5">

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 mr-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                href={to}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? "bg-white/10 text-white"
                    : "text-white/55 hover:text-white hover:bg-white/[0.05]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Discord CTA pill */}
          <a
            href="https://discord.gg/UgfguRX4mk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(124,92,252,0.18)",
              border: "1px solid rgba(124,92,252,0.32)",
              color: "#B09DFF",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(124,92,252,0.28)";
              el.style.color = "#fff";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(124,92,252,0.18)";
              el.style.color = "#B09DFF";
            }}
          >
            Discord
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-full text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h10.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className="md:hidden mt-2 overflow-hidden"
        style={{
          maxHeight: open ? "320px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height 0.32s cubic-bezier(0.22,1,0.36,1), opacity 0.22s ease",
        }}
      >
        <div className="glass rounded-2xl p-3 space-y-0.5">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className={`flex items-center px-4 py-3 rounded-xl text-sm transition-colors duration-200 ${
                pathname === to ? "text-white bg-white/[0.08]" : "text-white/65 hover:text-white"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://discord.gg/UgfguRX4mk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
            style={{ color: "#B09DFF", fontFamily: "Inter, sans-serif" }}
          >
            Join Discord ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
