"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import CommandPalette from "@/components/chrome/CommandPalette";
import StatusBar from "@/components/chrome/StatusBar";
import TitleBar from "@/components/chrome/TitleBar";
import MatrixRain from "@/components/effects/MatrixRain";
import { useDocumentState } from "@/lib/hooks";
import { useLanguage } from "@/lib/i18n/context";
import { SECTION_IDS } from "@/lib/sections";
import Footer from "./Footer";

/**
 * The application frame: a title bar above the document, a live status bar
 * below it, and a command palette on ⌘K. Both rails are fixed, so the
 * wrapper reserves their height with `railed`.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { activeIndex, progress } = useDocumentState(SECTION_IDS);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  return (
    <div className="railed" id="top">
      <a
        href="#main"
        className="t-meta sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-[calc(var(--rail-top)+0.5rem)] focus:z-[80] focus:bg-accent focus:px-3 focus:py-2 focus:text-paper"
      >
        {t.ui.skipToContent}
      </a>

      <MatrixRain />

      <TitleBar
        activeIndex={activeIndex}
        onSearch={() => setPaletteOpen(true)}
      />

      {/* Lifted above the rain canvas; panel sections occlude it, ground
          sections let it show through. */}
      <main id="main" className="relative z-10">
        {children}
      </main>

      <Footer />

      <StatusBar activeIndex={activeIndex} progress={progress} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </div>
  );
}
