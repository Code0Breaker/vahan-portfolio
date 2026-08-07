"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

const LANGUAGES: Language[] = ["en", "ru", "am"];
const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE: Language = "en";

function isLanguage(value: string | null | undefined): value is Language {
  return typeof value === "string" && (LANGUAGES as string[]).includes(value);
}

/**
 * The chosen language lives in localStorage, which is an external store — so
 * it is read with useSyncExternalStore rather than mirrored into state. That
 * keeps the prerendered HTML on the default language and lets React swap to
 * the reader's choice immediately after hydration.
 */
const store = (() => {
  let current: Language = DEFAULT_LANGUAGE;
  let detected = false;
  const listeners = new Set<() => void>();

  const detect = (): Language => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
    // Fall back to the browser's preference before defaulting to English.
    const preferred = navigator.languages
      ?.map((tag) => tag.slice(0, 2).toLowerCase())
      .map((code) => (code === "hy" ? "am" : code))
      .find(isLanguage);
    return preferred ?? DEFAULT_LANGUAGE;
  };

  const ensure = () => {
    if (!detected && typeof window !== "undefined") {
      detected = true;
      current = detect();
    }
  };

  return {
    subscribe(listener: () => void) {
      ensure();
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot(): Language {
      ensure();
      return current;
    },
    getServerSnapshot(): Language {
      return DEFAULT_LANGUAGE;
    },
    set(lang: Language) {
      detected = true;
      current = lang;
      window.localStorage.setItem(STORAGE_KEY, lang);
      listeners.forEach((listener) => listener());
    },
  };
})();

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: Language[];
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );

  // Keep the document language in sync so assistive tech and the browser's own
  // translation prompt read the page correctly.
  useEffect(() => {
    document.documentElement.lang = language === "am" ? "hy" : language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => store.set(lang), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      languages: LANGUAGES,
      t: translations[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
