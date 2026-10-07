import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BrandHeader() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="ersa.opensource home" className="wordmark">
        <span className="wordmark-ersa">ersa.</span><span className="wordmark-open">opensource</span>
      </Link>
      <nav className="header-nav" aria-label="Main navigation">
        <Link href="/#platforms">Platforms</Link>
        <Link href="/about">About</Link>
        <a className="open-link" href="https://open.ersa.dev">open.ersa.dev <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}
