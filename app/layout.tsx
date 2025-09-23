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
      <body className="bg-black text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-6">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                © {new Date().getFullYear()} ERSA STUDIOS
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
