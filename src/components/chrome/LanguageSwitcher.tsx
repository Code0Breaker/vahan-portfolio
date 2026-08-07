"use client";

import { useLanguage } from "@/lib/i18n/context";
import { languageNames } from "@/lib/i18n/translations";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { language, setLanguage, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`flex items-center border border-rule ${className}`}
    >
      {languages.map((lang) => {
        const active = lang === language;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={active}
            className={`t-ui px-1.5 py-1 transition-colors ${
              active
                ? "bg-ink text-paper"
                : "text-muted hover:bg-panel-hi hover:text-surface"
            }`}
          >
            {languageNames[lang]}
          </button>
        );
      })}
    </div>
  );
}
