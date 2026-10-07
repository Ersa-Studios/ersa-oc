// app/layout.tsx
import type { Metadata } from "next";
import * as React from "react";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ersa.opensource — Truly own your hardware",
  description: "Open platforms for wearable, compute, and mobile technology. Built in the open by Ersa.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="text-white antialiased" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
