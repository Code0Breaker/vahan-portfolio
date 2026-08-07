"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import SitePreview from "@/components/ui/SitePreview";
import Tilt from "@/components/ui/Tilt";
import { useLanguage } from "@/lib/i18n/context";
import { showcaseProjects } from "@/data/showcase-projects";

export default function Work() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="on-panel relative overflow-hidden border-y border-rule-dark bg-panel py-24 text-surface md:py-32"
    >
      <div className="panel-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeader
          index={2}
          eyebrow={t.work.eyebrow}
          heading={t.work.heading}
          description={t.work.description}
          onPanel
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {showcaseProjects.map((project, index) => {
            const copy = t.content.showcase[project.id];

            return (
              <article key={project.id} className="reveal">
                <Tilt max={3} className="panel-glow bg-panel">
                  <SitePreview
                    url={project.url}
                    title={copy.title}
                    index={index + 1}
                    embeddable={project.embeddable}
                    previewImage={project.previewImage}
                  />

                  <div className="border border-t-0 border-rule-dark px-4 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="t-title">{copy.title}</h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="t-ui inline-flex shrink-0 items-center gap-1 text-muted-dark transition-colors hover:text-surface"
                      >
                        {t.ui.visit}
                        <ArrowUpRight size={11} strokeWidth={2} />
                      </a>
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted-dark">
                      {copy.description}
                    </p>

                    <dl className="mt-5 space-y-0 border-t border-rule-dark text-[0.6875rem]">
                      <Row label={t.ui.stack}>
                        <span className="text-surface">
                          {project.technologies.join(" · ")}
                        </span>
                      </Row>
                      <Row label={t.ui.team}>
                        <ul className="flex flex-wrap gap-x-3 gap-y-1">
                          {project.team.map((member) => (
                            <li key={member.name}>
                              {member.linkedin ? (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-surface underline decoration-rule-dark underline-offset-2 transition-colors hover:decoration-surface"
                                >
                                  {member.name}
                                </a>
                              ) : (
                                <span className="text-surface">
                                  {member.name}
                                </span>
                              )}
                              <span className="text-muted-dark">
                                {" "}
                                — {t.content.roles[member.role]}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </Row>
                    </dl>
                  </div>
                </Tilt>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-rule-dark py-2.5 sm:flex-row sm:gap-4">
      <dt className="t-eyebrow w-20 shrink-0 pt-0.5 text-muted-dark">{label}</dt>
      <dd className="flex-1">{children}</dd>
    </div>
  );
}
