"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Tilt from "@/components/ui/Tilt";
import { useLanguage } from "@/lib/i18n/context";
import { EMAIL, contactInfo } from "@/data/contact";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <section id="contact" className="shell py-24 md:py-32">
      <SectionHeader
        index={6}
        eyebrow={t.contact.eyebrow}
        heading={t.contact.heading}
        description={t.contact.description}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <dl className="reveal border-t border-rule lg:col-span-7">
          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="t-eyebrow w-28 shrink-0 text-muted">
                {t.content.contactLabels[item.id]}
              </dt>
              <dd className="text-[0.9375rem]">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {item.value}
                    {item.external && (
                      <ArrowUpRight
                        size={13}
                        strokeWidth={2}
                        className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Compose panel: the address, ready to use, in the same instrument
            language as the rest of the chrome. Tilted, lit above the rain. */}
        <div className="reveal self-start lg:col-span-5">
          <Tilt className="panel-glow on-panel bg-panel text-surface">
            <div className="flex items-center gap-3 border-b border-rule-dark px-4 py-2.5">
              <span className="t-eyebrow text-muted-dark">TO</span>
              <span className="t-meta flex-1 truncate text-surface">
                {t.contact.ctaNote}
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(EMAIL);
                  setCopied(true);
                }}
                aria-label={t.ui.copyEmail}
                className="p-1 text-muted-dark transition-colors hover:text-surface"
              >
                {copied ? (
                  <Check size={13} strokeWidth={2} />
                ) : (
                  <Copy size={13} strokeWidth={2} />
                )}
              </button>
            </div>

            <div className="p-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-center gap-2 bg-surface px-5 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                <Mail size={15} strokeWidth={1.75} />
                {t.contact.cta}
              </a>
              <p
                className="t-meta mt-3 text-center text-muted-dark"
                aria-live="polite"
              >
                {copied ? t.ui.copied : " "}
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
