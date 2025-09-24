// components/site/navbar.tsx
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Mail } from "lucide-react";

function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
    </svg>
  );
}
function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M6.4 5l12.7 12.7-1.4 1.4L5 6.4 6.4 5Zm12.7 1.4L6.4 19.1 5 17.7 17.7 5l1.4 1.4Z" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Lock scroll when menu open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Focus first item when opened
  useEffect(() => {
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-3 items-center border-b border-white/10 px-6 md:px-10 lg:px-14 py-4">
            <div className="justify-self-start">
              <Link
                href="/"
                className="text-[11px] uppercase tracking-[0.22em] text-zinc-300"
              >
                ERSA OPEN COLLECTIVE
              </Link>
            </div>
            <div className="justify-self-center">
              <img src="/ersa.svg" alt="ERSA" className="h-6 md:h-7 w-auto opacity-90" />
            </div>
            <div className="justify-self-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="ersa-menu"
                className="h-9 w-9 text-zinc-200 hover:bg-white/10 rounded-none"
              >
                <IconMenu />
              </Button>
            </div>
          </div>
        </div>
      </header>
      {open && (
        <div
          id="ersa-menu"
          role="dialog"
          aria-modal="true"
          className="fixed max-w-6xl mx-auto inset-0 z-50 grid grid-rows-[auto_1fr] bg-black/96 backdrop-blur-md"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 md:px-10 lg:px-14 py-4">
            <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-9 w-9 grid place-items-center text-zinc-300 hover:bg-white/10"
            >
              <IconClose />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-10 md:py-14">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
                {/* Left column: big nav with rhythm */}
                <nav className="space-y-4 md:space-y-8">
                  {[
                    ["HOME", "/"],
                    ["JOIN", "/join"],
                    // ["PROJECTS", "/projects"],
                    ["ABOUT", "/about"],
                    // ["BLOG", "/blog"],
                  ].map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="group block tracking-[0.25em] text-[28px] md:text-[32px] lg:text-[34px] leading-[1.12] tracking-[0.01em] text-white"
                      ref={label === "HOME" ? firstLinkRef : undefined}
                    >
                      <span className="group-hover:opacity-90 bg-clip-text bg-gradient-to-r from-zinc-200 via-white to-zinc-300 group-hover:text-transparent">{label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Right column: copy + tiles + links */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                      What’s new
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-zinc-300 leading-relaxed">
                      Community builds, parts sourcing, and lab nights across
                      Delhi.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://discord.gg/UgfguRX4mk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-20 items-center justify-center gap-2 border border-[#5865F2]/40 bg-[#5865F2]/18 text-white hover:bg-[#5865F2]/28 transition-colors"
                      aria-label="Discord"
                    >
                      <MessageCircle className="size-4" />
                      <span className="text-sm tracking-[0.08em]">Discord</span>
                    </a>
                    <a
                      href="https://t.me/ersaopencollective"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-20 items-center justify-center gap-2 border border-[#229ED9]/40 bg-[#229ED9]/18 text-white hover:bg-[#229ED9]/28 transition-colors"
                      aria-label="Telegram"
                    >
                      <Send className="size-4" />
                      <span className="text-sm tracking-[0.08em]">Telegram</span>
                    </a>
                    <a
                      href="mailto:oc@ersa.dev"
                      className="flex h-20 items-center justify-center gap-2 border border-white/12 bg-white/[0.06] text-white hover:bg-white/[0.10] transition-colors"
                      aria-label="Email oc@ersa.dev"
                    >
                      <Mail className="size-4" />
                      <span className="text-sm tracking-[0.08em]">Email</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <a
                        href="/careers"
                        className="text-[11px] text-zinc-400 hover:text-zinc-200 tracking-[0.06em]"
                      >
                        WORK WITH ERSA
                      </a>
                      <a
                        href="https://ersa.dev"
                        className="text-[11px] text-zinc-400 hover:text-zinc-200 tracking-[0.06em]"
                      >
                        BUILT WITH ❤️ BY ERSA STUDIOS
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* footer spacer */}
              <div className="h-8" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
