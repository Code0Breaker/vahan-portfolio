"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import LanguageSwitcher from "@/components/chrome/LanguageSwitcher";
import Monogram from "@/components/chrome/Monogram";
import { useLanguage } from "@/lib/i18n/context";
import { contactInfo } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { showcaseProjects } from "@/data/showcase-projects";
import { skillGroups } from "@/data/skills";

export default function CVPage() {
  const { t } = useLanguage();

  return (
    /* light-doc pins the daylight palette: the CV stays a print document
       while the rest of the site runs dark. */
    <div className="light-doc min-h-screen bg-paper">
      <div className="no-print border-b border-rule bg-surface">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-6 py-3">
          <Link
            href="/"
            className="t-meta inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={13} strokeWidth={2} />
            {t.cv.backToSite}
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => window.print()}
              className="t-meta inline-flex items-center gap-2 bg-ink px-3 py-1.5 text-paper transition-colors hover:bg-accent"
            >
              <Printer size={13} strokeWidth={2} />
              {t.cv.saveAsPdf}
            </button>
          </div>
        </div>
      </div>

      <article
        id="cv-content"
        className="mx-auto max-w-4xl bg-surface px-6 py-12 print:max-w-none print:px-0 print:py-0"
      >
        <header className="border-b-2 border-ink pb-6">
          <div className="flex items-start gap-3">
            <Monogram className="mt-1" />
            <div>
              <h1
                className="text-4xl font-bold leading-none tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vahan Muradyan
              </h1>
              <p className="mt-2 text-lg text-muted">{t.hero.nowRole}</p>
            </div>
          </div>

          <dl className="mt-6 grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex gap-3">
                <dt className="t-eyebrow w-20 shrink-0 pt-1 text-muted">
                  {t.content.contactLabels[item.id]}
                </dt>
                <dd>
                  {item.href ? (
                    <a href={item.href} className="underline underline-offset-2">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <Block title={t.cv.summary}>
          <p className="text-sm leading-relaxed">{t.about.bio1}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t.about.bio2}
          </p>
        </Block>

        <Block title={t.cv.experience}>
          <div className="space-y-7">
            {experiences.map((job) => {
              const copy = t.content.experience[job.id];
              return (
                <section key={job.id} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-base font-semibold">
                      {copy.role} — {job.company}
                    </h3>
                    <span className="t-meta text-muted">
                      {job.range.from} — {job.range.to ?? t.cv.present} ·{" "}
                      {job.location}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm text-muted">{copy.description}</p>

                  {copy.projects.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {copy.projects.map((project) => (
                        <li key={project.title} className="text-sm">
                          <span className="font-medium">{project.title}</span>
                          <ul className="mt-1 space-y-1">
                            {project.details.map((detail) => (
                              <li
                                key={detail}
                                className="flex gap-2.5 leading-relaxed text-muted"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.62em] h-px w-2.5 shrink-0 bg-rule"
                                />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </Block>

        <Block title={t.cv.skills}>
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.id} className="break-inside-avoid">
                <dt className="text-sm font-semibold">
                  {t.content.skillGroups[group.id]}
                </dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-muted">
                  {group.skills.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title={t.cv.projects}>
          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {showcaseProjects.map((project) => (
              <div key={project.id} className="break-inside-avoid">
                <dt className="text-sm font-semibold">
                  {t.content.showcase[project.id].title}
                </dt>
                <dd className="t-meta mt-0.5 text-muted">
                  {project.url.replace(/^https?:\/\//, "")} ·{" "}
                  {project.technologies.join(", ")}
                </dd>
              </div>
            ))}
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="break-inside-avoid">
                <dt className="text-sm font-semibold">
                  {t.content.projects[project.id].title}
                </dt>
                <dd className="t-meta mt-0.5 text-muted">
                  {project.company} · {project.technologies.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </Block>
      </article>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="t-eyebrow border-b border-rule pb-1.5 text-ink">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
