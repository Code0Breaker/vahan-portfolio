"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

interface DocumentState {
  /** Index into the supplied id list, or -1 before the first section. */
  activeIndex: number;
  /** 0–1 through the scrollable height. */
  progress: number;
}

/**
 * One rAF-throttled scroll listener feeding the whole status bar: which
 * section is under the top rail, and how far through the document we are.
 */
export function useDocumentState(ids: readonly string[]): DocumentState {
  const [state, setState] = useState<DocumentState>({
    activeIndex: -1,
    progress: 0,
  });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0;

      // The section that has most recently passed under the top rail wins.
      const threshold = scrollY + window.innerHeight * 0.35;
      let activeIndex = -1;
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= threshold) activeIndex = i;
      }

      setState((prev) =>
        prev.activeIndex === activeIndex &&
        Math.abs(prev.progress - progress) < 0.002
          ? prev
          : { activeIndex, progress },
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return state;
}

const TIME_PLACEHOLDER = "--:--";

/**
 * Wall-clock time in a fixed zone, read from the clock rather than mirrored
 * into state — so the prerendered HTML never ships a stale timestamp.
 */
export function useLocalTime(timeZone: string): string {
  const subscribe = useCallback((onChange: () => void) => {
    const id = window.setInterval(onChange, 20_000);
    return () => window.clearInterval(id);
  }, []);

  const getSnapshot = useCallback(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date()),
    [timeZone],
  );

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => TIME_PLACEHOLDER,
  );
}
