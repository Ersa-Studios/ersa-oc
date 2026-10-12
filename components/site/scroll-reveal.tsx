"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function ScrollReveal({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={["scroll-reveal", visible && "is-visible", className].filter(Boolean).join(" ")}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
