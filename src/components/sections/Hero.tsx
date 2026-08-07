"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Decode from "@/components/effects/Decode";
import Tilt from "@/components/ui/Tilt";
import { useLanguage } from "@/lib/i18n/context";
import { CAREER_START, experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { showcaseProjects } from "@/data/showcase-projects";

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

// Every number in the panel is derived, not typed in, so it stays true as the
// data grows. Read once per page load rather than on every render.
const YEARS_SHIPPING = Math.floor(
  (Date.now() - CAREER_START.getTime()) / YEAR_MS,
);
const SYSTEMS_LIVE = projects.length + showcaseProjects.length;
const COMPANIES = experiences.length;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-heading"
      className="shell flex min-h-[calc(100svh-var(--rail-top)-var(--rail-bottom))] items-center py-16 md:py-24"
    >
      <div className="grid w-full gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p
            className="boot inline-flex items-center gap-2 border border-rule px-2.5 py-1"
            style={{ "--boot-delay": "40ms" } as React.CSSProperties}
          >
            <span
              className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live"
              aria-hidden="true"
            />
            <span className="text-[0.6875rem] text-muted">{t.hero.status}</span>
          </p>

          <h1 id="hero-heading" className="t-hero mt-7">
            {[t.hero.line1, t.hero.line2, t.hero.line3].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em]">
                <span
                  className="boot block"
                  style={
                    { "--boot-delay": `${120 + i * 90}ms` } as React.CSSProperties
                  }
                >
                  {/* Each line resolves out of the same glyphs the rain
                      falls with, staggered to match the boot sequence. */}
                  <Decode text={line} delay={160 + i * 160} />
                </span>
              </span>
            ))}
          </h1>

          <p
            className="boot t-lead mt-8 max-w-xl text-muted"
            style={{ "--boot-delay": "440ms" } as React.CSSProperties}
          >
            {t.hero.lead}
          </p>

          <div
            className="boot mt-10 flex flex-wrap items-center gap-3"
            style={{ "--boot-delay": "540ms" } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {t.hero.ctaContact}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-rule px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="/cv"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-accent"
            >
              {t.hero.ctaResume}
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* The instrument inset: current state, reported the way the status
            bar reports document state. Tilted in 3D, lit above the rain. */}
        <div
          className="boot self-start lg:col-span-5"
          style={{ "--boot-delay": "380ms" } as React.CSSProperties}
        >
          <Tilt className="panel-glow on-panel bg-panel text-surface">
            <aside>
              <div className="flex items-center justify-between border-b border-rule-dark px-4 py-2.5">
                <span className="t-eyebrow text-muted-dark">
                  {t.hero.nowLabel}
                </span>
                <span
                  className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live"
                  aria-hidden="true"
                />
              </div>

              <div className="px-4 py-5">
                <p className="t-title">{t.hero.nowRole}</p>
                <p className="mt-1.5 text-sm text-muted-dark">{t.hero.nowOrg}</p>
                <p className="mt-4 text-sm">{t.hero.nowFocus}</p>
              </div>

              <dl className="grid grid-cols-3 border-t border-rule-dark">
                <Stat value={YEARS_SHIPPING} label={t.hero.statYears} live />
                <Stat value={SYSTEMS_LIVE} label={t.hero.statSystems} />
                <Stat value={COMPANIES} label={t.hero.statCompanies} />
              </dl>
            </aside>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  live = false,
}: {
  value: number;
  label: string;
  live?: boolean;
}) {
  return (
    /* dt before dd for valid markup; reversed visually so the number leads. */
    <div className="flex flex-col-reverse border-l border-rule-dark px-4 py-4 first:border-l-0">
      <dt className="mt-1.5 text-[0.6875rem] leading-snug text-muted-dark">
        {label}
      </dt>
      <dd
        className="font-mono text-2xl tabular"
        // Derived from the current date, so the prerendered value can lag by a
        // year until the next build.
        suppressHydrationWarning={live}
      >
        {String(value).padStart(2, "0")}
      </dd>
    </div>
  );
}
