import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BrandFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" aria-label="ersa.opensource home" className="wordmark footer-wordmark">
        <span className="wordmark-ersa">ersa.</span><span className="wordmark-open">opensource</span>
      </Link>
      <div className="footer-credit">
        <span className="footer-mark" aria-hidden="true" />
        <span>© {new Date().getFullYear()} Ersa · Built in the open</span>
      </div>
      <a href="https://open.ersa.dev">open.ersa.dev <ArrowUpRight size={13} /></a>
    </footer>
  );
}
