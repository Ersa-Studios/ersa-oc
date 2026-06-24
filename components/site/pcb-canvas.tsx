"use client";
import { useEffect, useRef } from "react";

type Pt = { x: number; y: number };

// All coords are fractions of viewport width/height
const TRACES: Pt[][] = [
  // Top power bus — left segment
  [{ x: 0, y: 0.13 }, { x: 0.22, y: 0.13 }],
  // Drop from bus to center hub
  [{ x: 0.22, y: 0.13 }, { x: 0.22, y: 0.24 }, { x: 0.44, y: 0.24 }],
  // Right segment of bus
  [{ x: 0.56, y: 0.24 }, { x: 0.78, y: 0.24 }, { x: 0.78, y: 0.13 }, { x: 1, y: 0.13 }],
  // Center tap up
  [{ x: 0.5, y: 0.13 }, { x: 0.5, y: 0.06 }],
  // Center drop to mid
  [{ x: 0.5, y: 0.24 }, { x: 0.5, y: 0.54 }],
  // Left arm to card row
  [{ x: 0.22, y: 0.24 }, { x: 0.22, y: 0.66 }, { x: 0.08, y: 0.66 }],
  [{ x: 0.22, y: 0.66 }, { x: 0.38, y: 0.66 }],
  // Right arm to card row
  [{ x: 0.78, y: 0.24 }, { x: 0.78, y: 0.54 }, { x: 0.88, y: 0.54 }],
  [{ x: 0.78, y: 0.54 }, { x: 0.62, y: 0.54 }],
  // Mid horizontal cross-connect
  [{ x: 0.5, y: 0.54 }, { x: 0.38, y: 0.54 }, { x: 0.38, y: 0.66 }],
  [{ x: 0.38, y: 0.66 }, { x: 0.62, y: 0.66 }, { x: 0.62, y: 0.54 }],
  // Bottom ground bus
  [{ x: 0.08, y: 0.66 }, { x: 0.08, y: 0.88 }, { x: 0.92, y: 0.88 }],
  [{ x: 0.92, y: 0.88 }, { x: 0.92, y: 0.54 }, { x: 0.88, y: 0.54 }],
  // Extra branch for visual interest
  [{ x: 0.44, y: 0.24 }, { x: 0.56, y: 0.24 }],
  [{ x: 0.62, y: 0.66 }, { x: 0.78, y: 0.66 }, { x: 0.78, y: 0.54 }],
];

// Which trace paths animate signal dots (index into TRACES)
const DOT_CONFIGS = [
  { pi: 0,  speed: 0.07, offset: 0.0  },
  { pi: 1,  speed: 0.05, offset: 0.3  },
  { pi: 2,  speed: 0.06, offset: 0.6  },
  { pi: 4,  speed: 0.09, offset: 0.15 },
  { pi: 5,  speed: 0.07, offset: 0.5  },
  { pi: 9,  speed: 0.08, offset: 0.2  },
  { pi: 11, speed: 0.06, offset: 0.7  },
];

function traceLength(path: Pt[], w: number, h: number): number {
  let len = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const dx = (path[i + 1].x - path[i].x) * w;
    const dy = (path[i + 1].y - path[i].y) * h;
    len += Math.sqrt(dx * dx + dy * dy);
  }
  return len;
}

function pointAt(path: Pt[], t: number, w: number, h: number): { x: number; y: number } {
  const total = traceLength(path, w, h);
  let target = (t % 1) * total;
  for (let i = 0; i < path.length - 1; i++) {
    const dx = (path[i + 1].x - path[i].x) * w;
    const dy = (path[i + 1].y - path[i].y) * h;
    const segLen = Math.sqrt(dx * dx + dy * dy);
    if (target <= segLen) {
      const f = segLen > 0 ? target / segLen : 0;
      return {
        x: path[i].x * w + dx * f,
        y: path[i].y * h + dy * f,
      };
    }
    target -= segLen;
  }
  const last = path[path.length - 1];
  return { x: last.x * w, y: last.y * h };
}

function drawTrace(ctx: CanvasRenderingContext2D, path: Pt[], w: number, h: number) {
  if (path.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(path[0].x * w, path[0].y * h);
  for (let i = 1; i < path.length; i++) {
    ctx.lineTo(path[i].x * w, path[i].y * h);
  }
  ctx.stroke();
}

function drawVias(ctx: CanvasRenderingContext2D, path: Pt[], w: number, h: number) {
  // draw via rings at waypoints
  for (const pt of path) {
    ctx.beginPath();
    ctx.arc(pt.x * w, pt.y * h, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(pt.x * w, pt.y * h, 5.5, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export function PcbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) / 1000; // seconds
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // ── Draw traces ──────────────────────────────────────────
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(180, 105, 30, 0.22)";
      ctx.shadowColor = "rgba(200, 130, 40, 0.18)";
      ctx.shadowBlur = 5;
      ctx.fillStyle = "rgba(200, 140, 35, 0.3)";

      for (const trace of TRACES) {
        drawTrace(ctx, trace, w, h);
      }

      // ── Draw vias ─────────────────────────────────────────────
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(210, 160, 45, 0.3)";
      ctx.fillStyle = "rgba(180, 110, 25, 0.25)";
      ctx.shadowBlur = 4;
      for (const trace of TRACES) {
        drawVias(ctx, trace, w, h);
      }

      // ── Animated signal dots ─────────────────────────────────
      for (const { pi, speed, offset } of DOT_CONFIGS) {
        const path = TRACES[pi];
        if (!path) continue;
        const t = (elapsed * speed + offset) % 1;
        const pos = pointAt(path, t, w, h);

        // Outer glow
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(240, 160, 50, 0.08)";
        ctx.shadowColor = "rgba(240, 160, 50, 0.5)";
        ctx.shadowBlur = 14;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(250, 185, 70, 0.85)";
        ctx.shadowColor = "rgba(250, 185, 70, 0.9)";
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  );
}
