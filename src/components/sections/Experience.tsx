"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/context";
import { experiences } from "@/data/experience";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="shell py-24 md:py-32">
      <SectionHeader
        index={4}
        eyebrow={t.experience.eyebrow}
        heading={t.experience.heading}
      />

      {/* One rail, filled by scroll position. The content is genuinely a
          sequence, so scrubbing carries information here. */}
      <ol className="relative mt-14 border-l border-rule pl-6 md:pl-10">
        <span
          aria-hidden="true"
          className="rail-fill absolute -left-px top-0 h-full w-px bg-ink"
        />

        {experiences.map((job) => {
          const copy = t.content.experience[job.id];
          const current = job.range.to === null;

          return (
            <li key={job.id} className="relative pb-16 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(1.5rem+3.5px)] top-1.5 h-2 w-2 md:-left-[calc(2.5rem+3.5px)] ${
                  current ? "bg-live" : "bg-ink"
                }`}
              />

              <div className="reveal grid gap-6 md:grid-cols-12 md:gap-8">
                <header className="md:col-span-4">
                  <p className="t-meta text-muted">
                    {job.range.from} — {job.range.to ?? t.experience.present}
                  </p>
                  <h3 className="t-title mt-2">{job.company}</h3>
                  <p className="mt-1 text-sm text-muted">{copy.role}</p>
                  <p className="t-meta mt-2 text-muted">{job.location}</p>
                  {current && (
                    <p className="mt-3 inline-flex items-center gap-1.5 border border-rule px-2 py-0.5">
                      <span
                        className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live"
                        aria-hidden="true"
                      />
                      <span className="text-[0.6875rem]">
                        {t.experience.current}
                      </span>
                    </p>
                  )}
                </header>

                <div className="md:col-span-8">
                  <p className="text-sm leading-relaxed text-muted">
                    {copy.description}
                  </p>

                  {copy.projects.length > 0 && (
                    <>
                      <h4 className="t-eyebrow mt-8 border-t border-rule pt-3 text-muted">
                        {t.experience.projectsLabel}
                      </h4>

                      <ul className="mt-4 space-y-6">
                        {copy.projects.map((project) => (
                          <li key={project.title}>
                            <p className="text-sm font-medium">
                              {project.title}
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {project.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-[0.6em] h-px w-2.5 shrink-0 bg-rule"
                                  />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
