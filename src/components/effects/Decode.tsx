"use client";

import { useEffect, useState } from "react";

/**
 * Text that resolves out of the rain: characters settle left to right from
 * the same glyph alphabet the background falls with. Server-rendered output
 * is the plain text, so crawlers and reduced-motion readers never see noise.
 */

const GLYPHS =
  "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロ0123456789<>*+-=";

const TICK_MS = 32;
/** Characters revealed per tick — the resolve front's speed. */
const STEP = 0.9;

export default function Decode({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    let frontier = 0;
    let interval = 0;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        frontier += STEP;
        if (frontier >= text.length) {
          setDisplay(text);
          window.clearInterval(interval);
          return;
        }
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (i < frontier || char === " ") return char;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join(""),
        );
      }, TICK_MS);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [text, delay]);

  return <span aria-label={text}>{display}</span>;
}
