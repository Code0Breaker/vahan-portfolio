"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Monogram from "@/components/chrome/Monogram";
import MatrixRain from "@/components/effects/MatrixRain";
import { useLanguage } from "@/lib/i18n/context";
import { SECTION_IDS } from "@/lib/sections";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <MatrixRain />

      <header className="relative z-10 border-b border-rule bg-paper/75 backdrop-blur-md">
        <div className="shell flex h-[var(--rail-top)] items-center gap-2.5">
          <Monogram />
          <span className="t-meta text-ink">vahan muradyan</span>
        </div>
      </header>

      <main className="shell relative z-10 flex flex-1 items-center py-20">
        <div className="grid w-full gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow text-muted">{t.notFound.code}</p>
            <h1 className="t-section mt-6">{t.notFound.heading}</h1>
            <p className="t-lead mt-5 max-w-lg text-muted">{t.notFound.body}</p>
            <Link
              href="/"
              className="group mt-9 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              <ArrowLeft
                size={15}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              {t.notFound.home}
            </Link>
          </div>

          <nav
            aria-label={t.ui.menu}
            className="self-start border-t border-rule lg:col-span-4 lg:col-start-9"
          >
            {SECTION_IDS.map((id, index) => (
              <a
                key={id}
                href={`/#${id}`}
                className="flex items-baseline justify-between border-b border-rule py-3 text-sm transition-colors hover:text-accent"
              >
                <span>{t.nav[id]}</span>
                <span className="t-meta text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
