"use client";

import { createElement, useEffect, useRef, type CSSProperties } from "react";

/** Reading-position reveal: letters brighten while their heading scrolls into view. */
export function ScrollText({ children, id, className, as = "h2" }: {
  children: string;
  id?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = element.getBoundingClientRect().top;
      const progress = motion.matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight * .88 - top) / (window.innerHeight * .43)));
      element.style.setProperty("--scroll-reveal", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    // Capture scroll from either the document or each page's scroll-snap container.
    document.addEventListener("scroll", schedule, { passive: true, capture: true });
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);

  let letter = 0;
  const count = children.replace(/\s/g, "").length;
  return createElement(as, {
    ref,
    id,
    className: ["scroll-text", className].filter(Boolean).join(" "),
    "aria-label": children.replace(/\n/g, " "),
    style: { "--letter-step": 1 / Math.max(count, 1) } as CSSProperties,
  }, children.split(/(\s+)/).map((word, wordIndex) => {
    if (word.includes("\n")) return <br key={wordIndex} />;
    if (/^\s+$/.test(word)) return word;
    return <span className="scroll-text-word" aria-hidden="true" key={wordIndex}>
      {Array.from(word).map((character, characterIndex) => <span className="scroll-text-letter" key={characterIndex} style={{ "--letter-index": letter++ } as CSSProperties}>{character}</span>)}
    </span>;
  }));
}
