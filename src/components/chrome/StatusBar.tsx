"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { useLocalTime } from "@/lib/hooks";
import { SECTION_IDS } from "@/lib/sections";

const METER_CELLS = 8;

/**
 * The status bar is the signature of this design: a persistent readout that
 * reports where you are, how far through you are, and what time it is where
 * the work is happening. Every value in it is real.
 */
export default function StatusBar({
  activeIndex,
  progress,
}: {
  activeIndex: number;
  progress: number;
}) {
  const { t } = useLanguage();
  const time = useLocalTime("Asia/Dubai");

  const filled = Math.round(progress * METER_CELLS);
  const percent = Math.round(progress * 100);
  const section = activeIndex >= 0 ? SECTION_IDS[activeIndex] : null;

  return (
    <div className="on-panel fixed inset-x-0 bottom-0 z-50 h-[var(--rail-bottom)] border-t border-rule-dark bg-panel">
      <div className="mx-auto flex h-full max-w-[78rem] items-stretch px-2 md:px-6">
        <Cell first>
          <span
            className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live"
            aria-hidden="true"
          />
          <span className="text-[0.6875rem] text-muted-dark">
            {t.ui.available}
          </span>
        </Cell>

        <Cell>
          <span className="t-meta text-muted-dark" aria-hidden="true">
            {section ? String(activeIndex + 1).padStart(2, "0") : "--"}
          </span>
          <span className="text-[0.6875rem] text-surface">
            {section ? t.nav[section] : "—"}
          </span>
        </Cell>

        <Cell className="ml-auto">
          <span
            role="progressbar"
            aria-label={t.ui.position}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            className="flex gap-[2px]"
          >
            {Array.from({ length: METER_CELLS }, (_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`block h-2.5 w-[3px] transition-colors duration-150 ${
                  i < filled ? "bg-surface" : "bg-rule-dark"
                }`}
              />
            ))}
          </span>
          <span className="t-meta w-8 text-right text-muted-dark">
            {percent}%
          </span>
        </Cell>

        <Cell className="hidden sm:flex">
          <span className="text-[0.6875rem] text-muted-dark">
            {t.ui.localTime}
          </span>
          <span className="t-meta text-surface" suppressHydrationWarning>
            {time}
          </span>
        </Cell>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          className="flex items-center gap-1.5 border-l border-rule-dark px-3 text-muted-dark transition-colors hover:bg-panel-hi hover:text-surface"
          aria-label={t.ui.backToTop}
        >
          <ArrowUp size={11} strokeWidth={2.25} />
          <span className="t-meta hidden md:inline">TOP</span>
        </button>
      </div>
    </div>
  );
}

function Cell({
  children,
  className = "",
  first = false,
}: {
  children: React.ReactNode;
  className?: string;
  first?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 ${
        first ? "" : "border-l border-rule-dark"
      } ${className}`}
    >
      {children}
    </div>
  );
}
