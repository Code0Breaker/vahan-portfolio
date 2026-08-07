"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/context";
import { skillGroups } from "@/data/skills";

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section
      id="stack"
      className="on-panel relative overflow-hidden border-y border-rule-dark bg-panel py-24 text-surface md:py-32"
    >
      <div
        className="panel-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="shell relative">
        <SectionHeader
          index={5}
          eyebrow={t.stack.eyebrow}
          heading={t.stack.heading}
          description={t.stack.description}
          onPanel
        />

        <dl className="mt-14 border-t border-rule-dark">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="reveal grid gap-x-8 gap-y-3 border-b border-rule-dark py-7 md:grid-cols-12"
            >
              <dt className="t-title md:col-span-3">
                {t.content.skillGroups[group.id]}
              </dt>

              <dd className="md:col-span-8">
                <p className="text-[0.9375rem] leading-loose text-muted-dark">
                  {group.skills.map((skill, i) => (
                    <span key={skill}>
                      {i > 0 && (
                        <span className="px-2 text-rule-dark" aria-hidden="true">
                          /
                        </span>
                      )}
                      <span className="text-surface">{skill}</span>
                    </span>
                  ))}
                </p>
              </dd>

              <dd
                className="t-meta hidden text-right text-muted-dark md:col-span-1 md:block"
                aria-hidden="true"
              >
                {String(group.skills.length).padStart(2, "0")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
