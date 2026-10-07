import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PlatformExploreProps = {
  current?: "wearable" | "compute";
};

export function PlatformExplore({ current }: PlatformExploreProps) {
  return (
    <section className="platform-explore" aria-label="Explore Ersa platforms">
      <p className="eyebrow">EXPLORE THE PLATFORMS</p>
      <div className="platform-explore-links">
        <Link href="/wearable" className="platform-explore-link wearable-explore">
          <span><b>ersa.</b><span>wearable</span></span><small>{current === "wearable" ? "CURRENT PAGE" : "EXPLORE"}</small><ArrowUpRight size={15} />
        </Link>
        <Link href="/compute" className="platform-explore-link compute-explore">
          <span><b>ersa.</b><span>compute</span></span><small>{current === "compute" ? "CURRENT PAGE" : "COMING SOON"}</small><ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
