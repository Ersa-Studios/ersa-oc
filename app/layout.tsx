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
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
