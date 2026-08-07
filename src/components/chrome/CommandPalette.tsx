"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  Copy,
  CornerDownLeft,
  FileText,
  Github,
  Hash,
  Languages,
  Linkedin,
  Mail,
  Search,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { languageNames } from "@/lib/i18n/translations";
import { SECTION_IDS } from "@/lib/sections";
import { EMAIL } from "@/data/contact";

type Group = "sections" | "links" | "actions";

interface Item {
  id: string;
  group: Group;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  run: () => void;
}

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // The dialog owns its own query and cursor. Unmounting it on close resets
  // both, so there is no state to clear on reopen.
  return (
    <AnimatePresence>{open && <Palette onClose={onClose} />}</AnimatePresence>
  );
}

function Palette({ onClose }: { onClose: () => void }) {
  const { t, language, languages, setLanguage } = useLanguage();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [copied, setCopied] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useMemo<Item[]>(() => {
    const go = (hash: string) => () => {
      onClose();
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
      window.history.replaceState(null, "", `#${hash}`);
    };
    const openUrl = (url: string) => () => {
      onClose();
      window.open(url, "_blank", "noopener,noreferrer");
    };

    return [
      ...SECTION_IDS.map<Item>((id, index) => ({
        id: `section-${id}`,
        group: "sections",
        label: t.nav[id],
        hint: String(index + 1).padStart(2, "0"),
        icon: Hash,
        run: go(id),
      })),
      {
        id: "link-cv",
        group: "links",
        label: t.nav.resume,
        hint: "/cv",
        icon: FileText,
        run: openUrl("/cv"),
      },
      {
        id: "link-github",
        group: "links",
        label: "GitHub",
        hint: "Code0Breaker",
        icon: Github,
        run: openUrl("https://github.com/Code0Breaker"),
      },
      {
        id: "link-linkedin",
        group: "links",
        label: "LinkedIn",
        hint: "vahan-muradyan",
        icon: Linkedin,
        run: openUrl("https://www.linkedin.com/in/vahan-muradyan/"),
      },
      {
        id: "link-email",
        group: "links",
        label: t.content.contactLabels.email,
        hint: EMAIL,
        icon: Mail,
        run: () => {
          onClose();
          window.location.href = `mailto:${EMAIL}`;
        },
      },
      {
        id: "action-copy",
        group: "actions",
        label: t.ui.copyEmail,
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(EMAIL);
          setCopied(true);
        },
      },
      ...languages
        .filter((lang) => lang !== language)
        .map<Item>((lang) => ({
          id: `action-lang-${lang}`,
          group: "actions",
          label: `${t.ui.language}: ${languageNames[lang]}`,
          icon: Languages,
          run: () => {
            setLanguage(lang);
            onClose();
          },
        })),
      {
        id: "action-top",
        group: "actions",
        label: t.ui.backToTop,
        icon: ArrowUp,
        run: () => {
          onClose();
          window.scrollTo({ top: 0 });
        },
      },
    ];
  }, [t, language, languages, setLanguage, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLocaleLowerCase().includes(q) ||
        item.hint?.toLocaleLowerCase().includes(q),
    );
  }, [items, query]);

  // Lock the page behind the modal surface.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Keep the highlighted row in view while arrowing through a long list.
  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (results.length ? (c + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) =>
        results.length ? (c - 1 + results.length) % results.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[cursor]?.run();
    }
  };

  const groupLabels: Record<Group, string> = {
    sections: t.ui.groupSections,
    links: t.ui.groupLinks,
    actions: t.ui.groupActions,
  };

  let renderedGroup: Group | null = null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.14 }}
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-[2px]"
      onMouseDown={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={t.ui.search}
        initial={{ opacity: 0, y: -8, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.99 }}
        transition={{ duration: 0.16, ease: [0.2, 0.7, 0.25, 1] }}
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        className="panel-glow w-full max-w-xl border border-rule-dark bg-panel"
      >
        <div className="flex items-center gap-3 border-b border-rule px-4">
          <Search size={14} strokeWidth={2} className="text-muted" />
          <input
            // Focusing on open is the whole point of a command palette.
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            placeholder={t.ui.searchPlaceholder}
            aria-label={t.ui.search}
            className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-muted"
          />
        </div>

        <div ref={listRef} className="max-h-[46vh] overflow-y-auto py-1.5">
          {results.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-muted">
              {t.ui.searchEmpty}
            </p>
          )}

          {results.map((item, index) => {
            const showHeader = item.group !== renderedGroup;
            renderedGroup = item.group;
            const active = index === cursor;
            const Icon = item.icon;

            return (
              <div key={item.id}>
                {showHeader && (
                  <p className="t-eyebrow px-4 pb-1 pt-3 text-muted">
                    {groupLabels[item.group]}
                  </p>
                )}
                <button
                  type="button"
                  data-active={active}
                  onMouseMove={() => setCursor(index)}
                  onClick={item.run}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                    active ? "bg-ink text-paper" : "text-ink"
                  }`}
                >
                  <Icon size={13} strokeWidth={1.75} />
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.id === "action-copy" && copied && (
                    <span className="t-meta text-accent">{t.ui.copied}</span>
                  )}
                  {item.hint && (
                    <span
                      className={`t-meta truncate ${
                        active ? "text-paper/60" : "text-muted"
                      }`}
                    >
                      {item.hint}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 border-t border-rule px-4 py-2 text-muted">
          <Hint keys="↑↓" label={t.ui.hintNavigate} />
          <Hint icon={CornerDownLeft} label={t.ui.hintOpen} />
          <Hint keys="esc" label={t.ui.hintClose} />
          <span className="t-meta ml-auto" aria-live="polite">
            {results.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hint({
  keys,
  icon: Icon,
  label,
}: {
  keys?: string;
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1.5">
      <kbd className="t-meta flex h-4 min-w-4 items-center justify-center border border-rule px-1 text-ink">
        {Icon ? <Icon size={9} strokeWidth={2.25} /> : keys}
      </kbd>
      <span className="text-[0.6875rem]">{label}</span>
    </span>
  );
}
