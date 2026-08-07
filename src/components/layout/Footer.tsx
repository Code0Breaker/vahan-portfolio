"use client";

import { useLanguage } from "@/lib/i18n/context";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-rule bg-paper/80 backdrop-blur-[2px]">
      <div className="shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.6875rem] text-muted">
          {t.footer.builtBy} · {t.footer.builtWith}
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const isMail = social.href.startsWith("mailto:");
            return (
              <a
                key={social.label}
                href={social.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                className="text-muted transition-colors hover:text-ink"
              >
                <social.icon size={15} />
              </a>
            );
          })}
          <span className="t-meta text-muted">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
