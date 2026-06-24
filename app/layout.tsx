// app/layout.tsx
import type { Metadata } from "next";
import * as React from "react";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ersa Open Collective",
  description: "Open hardware and software collective in Delhi",
};

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="text-white antialiased" style={{ backgroundColor: "#0f0f1a" }}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/[0.06]">
            <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-7 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-[11px] tracking-[0.14em] text-white/25 uppercase">
                © {new Date().getFullYear()} Ersa Studios
              </p>
              <p className="text-[11px] text-white/20">
                New Delhi, India — building in the open
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
