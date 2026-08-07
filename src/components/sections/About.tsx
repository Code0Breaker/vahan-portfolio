"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/context";
import { principles } from "@/data/about";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="shell py-24 md:py-32">
      <SectionHeader
        index={1}
        eyebrow={t.about.eyebrow}
        heading={t.about.heading}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <figure className="reveal lg:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-rule-dark bg-panel lg:max-w-none">
            {/* The plate sits underneath: if photo.jpg is missing the frame
                still reads as deliberate rather than broken. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-5xl text-rule-dark"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              VM
            </span>
            <Image
              src="/photo.jpg"
              alt="Vahan Muradyan"
              fill
              sizes="(min-width: 1024px) 22rem, 20rem"
              className="object-cover grayscale"
              priority
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <figcaption className="t-meta mt-2 flex max-w-xs justify-between border-t border-rule pt-2 text-muted lg:max-w-none">
            <span>VM</span>
            <span>{t.about.photoCaption}</span>
          </figcaption>
        </figure>

        <div className="reveal space-y-6 lg:col-span-7 lg:col-start-6">
          <p className="t-lead">{t.about.bio1}</p>
          <p className="t-lead text-muted">{t.about.bio2}</p>
          <p className="t-lead text-muted">{t.about.bio3}</p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="t-eyebrow text-muted">{t.about.principlesLabel}</h3>
        <dl className="mt-5 grid border-t border-rule sm:grid-cols-2">
          {principles.map((id) => (
            <div
              key={id}
              className="reveal border-b border-rule py-6 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <dt className="t-title">{t.content.principles[id].title}</dt>
              <dd className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {t.content.principles[id].body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
