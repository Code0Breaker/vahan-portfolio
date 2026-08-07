"use client";

import { useEffect, useRef } from "react";

/**
 * The code-rain the document floats above. One canvas, three depth layers:
 * far glyphs are small, slow and dim; near ones are large, fast and bright
 * with a glowing head. Scrolling the page speeds the rain up and drifts its
 * hue toward teal, so the background registers the reader's movement.
 *
 * Draws in CSS pixels with a clamped DPR, pauses when the tab is hidden,
 * and renders a single static frame under reduced motion.
 */

const GLYPHS =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789<>[]{}*+-=/";

interface Drop {
  x: number;
  y: number;
  speed: number;
  len: number;
  chars: string[];
}

interface Layer {
  fontSize: number;
  minSpeed: number;
  maxSpeed: number;
  alpha: number;
  /** Fraction of available columns that actually rain — thins the far field. */
  density: number;
  glow: boolean;
  drops: Drop[];
}

const LAYER_SPECS = [
  { fontSize: 11, minSpeed: 0.3, maxSpeed: 0.7, alpha: 0.16, density: 0.55, glow: false },
  { fontSize: 15, minSpeed: 0.7, maxSpeed: 1.4, alpha: 0.3, density: 0.45, glow: false },
  { fontSize: 22, minSpeed: 1.5, maxSpeed: 2.6, alpha: 0.5, density: 0.3, glow: true },
] as const;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

function buildLayers(width: number, height: number): Layer[] {
  return LAYER_SPECS.map((spec) => {
    const columns = Math.floor(width / spec.fontSize);
    const drops: Drop[] = [];

    for (let i = 0; i < columns; i++) {
      if (Math.random() > spec.density) continue;
      const len = Math.floor(Math.random() * 14) + 6;
      drops.push({
        x: i * spec.fontSize,
        y: Math.random() * height * 1.5 - height * 0.5,
        speed:
          spec.minSpeed + Math.random() * (spec.maxSpeed - spec.minSpeed),
        len,
        chars: Array.from({ length: len }, randomGlyph),
      });
    }

    return { ...spec, drops };
  });
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let layers: Layer[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#050807";
      ctx.fillRect(0, 0, width, height);
      layers = buildLayers(width, height);
    };

    const drawStatic = () => {
      // Reduced motion: the atmosphere without the animation.
      for (const layer of layers) {
        ctx.font = `${layer.fontSize}px monospace`;
        ctx.fillStyle = `hsla(143, 80%, 55%, ${layer.alpha * 0.5})`;
        for (const drop of layer.drops) {
          if (Math.random() > 0.4) continue;
          ctx.fillText(
            drop.chars[0],
            drop.x,
            Math.abs(drop.y % height),
          );
        }
      }
    };

    const drawFrame = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      const hue = 143 + progress * 22;
      const speedUp = 1 + progress * 1.2;

      // Translucent ground fill: what turns motion into trails.
      ctx.fillStyle = "rgba(5, 8, 7, 0.09)";
      ctx.fillRect(0, 0, width, height);

      for (const layer of layers) {
        ctx.font = `${layer.fontSize}px monospace`;

        for (const drop of layer.drops) {
          if (Math.random() > 0.96) {
            drop.chars[Math.floor(Math.random() * drop.len)] = randomGlyph();
          }

          for (let i = 0; i < drop.len; i++) {
            const y = drop.y - i * layer.fontSize;
            if (y < -layer.fontSize || y > height + layer.fontSize) continue;

            if (i === 0) {
              ctx.fillStyle = `hsla(${hue}, 90%, ${layer.glow ? 82 : 70}%, ${
                layer.alpha + 0.25
              })`;
              if (layer.glow) {
                ctx.shadowColor = `hsla(${hue}, 95%, 55%, 0.8)`;
                ctx.shadowBlur = 10;
              }
            } else {
              ctx.fillStyle = `hsla(${hue}, 85%, 52%, ${
                layer.alpha * (1 - i / drop.len)
              })`;
              ctx.shadowBlur = 0;
            }

            ctx.fillText(drop.chars[i], drop.x, y);
          }
          ctx.shadowBlur = 0;

          drop.y += drop.speed * speedUp;

          if (drop.y - drop.len * layer.fontSize > height) {
            drop.y = -Math.random() * height * 0.4;
            drop.speed =
              layer.minSpeed +
              Math.random() * (layer.maxSpeed - layer.minSpeed);
            drop.chars = drop.chars.map(randomGlyph);
          }
        }
      }

      frame = requestAnimationFrame(drawFrame);
    };

    const start = () => {
      if (!frame && !reduceMotion) frame = requestAnimationFrame(drawFrame);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const onResize = () => {
      resize();
      if (reduceMotion) drawStatic();
    };

    resize();
    if (reduceMotion) drawStatic();
    else start();

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
      />
      {/* CRT finish: faint scanlines and a corner vignette that pushes the
          rain back and keeps prose columns readable. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[45]"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.14) 0px, rgba(0,0,0,0.14) 1px, transparent 1px, transparent 3px), radial-gradient(120% 100% at 50% 30%, transparent 55%, rgba(2,4,3,0.5) 100%)",
        }}
      />
    </>
  );
}
