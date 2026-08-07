"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { SECTION_IDS } from "@/lib/sections";
import LanguageSwitcher from "./LanguageSwitcher";
import Monogram from "./Monogram";

interface TitleBarProps {
  activeIndex: number;
  onSearch: () => void;
}

export default function TitleBar({ activeIndex, onSearch }: TitleBarProps) {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // The drawer is a modal surface: lock the page behind it.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[var(--rail-top)] border-b border-rule bg-paper/75 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[78rem] items-center gap-4 px-5 md:px-10">
          <a
            href="#top"
            className="flex items-center gap-2.5 no-underline"
            aria-label="Vahan Muradyan"
          >
            <Monogram />
            <span className="t-meta hidden whitespace-nowrap text-ink sm:inline">
              vahan muradyan
            </span>
            <span className="t-meta hidden whitespace-nowrap text-muted lg:inline">
              — software engineer
            </span>
          </a>

          <nav
            aria-label={t.ui.menu}
            className="ml-auto hidden items-center gap-5 md:flex"
          >
            {SECTION_IDS.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`t-ui transition-colors ${
                  index === activeIndex
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-4">
            <button
              type="button"
              onClick={onSearch}
              className="t-meta flex items-center gap-2 border border-rule px-2 py-1.5 text-muted transition-colors hover:border-ink hover:text-ink"
              aria-label={t.ui.search}
            >
              <Search size={12} strokeWidth={2} />
              <span className="hidden lg:inline">⌘K</span>
            </button>

            <LanguageSwitcher className="hidden sm:flex" />

            <a
              href="/cv"
              target="_blank"
              rel="noopener"
              className="t-ui hidden bg-accent px-2.5 py-1.5 text-paper transition-opacity hover:opacity-85 md:inline-block"
            >
              {t.nav.resume}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-1 text-ink md:hidden"
              aria-label={t.ui.menu}
              aria-expanded={menuOpen}
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-paper md:hidden"
          >
            <div className="flex h-[var(--rail-top)] items-center justify-between border-b border-rule px-5">
              <Monogram />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-1 text-ink"
                aria-label={t.ui.close}
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label={t.ui.menu} className="flex flex-col px-5">
              {SECTION_IDS.map((id, index) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + index * 0.035, duration: 0.24 }}
                  className="flex items-baseline justify-between border-b border-rule py-4"
                >
                  <span className="t-title">{t.nav[id]}</span>
                  <span className="t-meta text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between px-5 py-6">
              <LanguageSwitcher />
              <a
                href="/cv"
                target="_blank"
                rel="noopener"
                className="t-meta bg-accent px-3 py-2 text-paper"
              >
                {t.nav.resume}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
