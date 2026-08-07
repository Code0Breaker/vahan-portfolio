"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/lib/i18n/context";
import { allTechnologies, projects } from "@/data/projects";
import type { ProjectId } from "@/types";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<ProjectId | null>(null);

  const visible = useMemo(
    () =>
      filter
        ? projects.filter((p) => p.technologies.includes(filter))
        : projects,
    [filter],
  );

  return (
    <section id="projects" className="shell py-24 md:py-32">
      <SectionHeader
        index={3}
        eyebrow={t.projects.eyebrow}
        heading={t.projects.heading}
        description={t.projects.description}
      />

      <div className="reveal mt-14">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="t-eyebrow text-muted">{t.projects.filterLabel}</span>
          <span className="t-ui ml-auto text-muted" aria-live="polite">
            <span className="t-meta">{visible.length}</span>{" "}
            {t.projects.countSuffix}{" "}
            <span className="t-meta">{projects.length}</span>
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Chip active={filter === null} onClick={() => setFilter(null)}>
            {t.projects.filterAll}
          </Chip>
          {allTechnologies.map((tech) => (
            <Chip
              key={tech}
              active={filter === tech}
              onClick={() => setFilter(filter === tech ? null : tech)}
            >
              {tech}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="hidden grid-cols-12 gap-4 border-b border-rule pb-2 md:grid">
          <span className="t-eyebrow col-span-5 text-muted">
            {t.projects.colProject}
          </span>
          <span className="t-eyebrow col-span-3 text-muted">
            {t.projects.colCompany}
          </span>
          <span className="t-eyebrow col-span-3 text-muted">
            {t.projects.colStack}
          </span>
          <span className="t-eyebrow col-span-1 text-right text-muted">
            {t.projects.colStatus}
          </span>
        </div>

        <ul className="border-t border-rule md:border-t-0">
          {visible.map((project) => {
            const copy = t.content.projects[project.id];
            const isOpen = expanded === project.id;

            return (
              <li key={project.id} className="reveal border-b border-rule">
                <h3>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isOpen ? null : project.id)
                    }
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-1 gap-x-4 gap-y-1.5 py-4 text-left md:grid-cols-12 md:items-baseline"
                  >
                    <span className="flex items-center gap-2.5 md:col-span-5">
                      {isOpen ? (
                        <Minus size={13} strokeWidth={2} className="shrink-0 text-accent" />
                      ) : (
                        <Plus
                          size={13}
                          strokeWidth={2}
                          className="shrink-0 text-muted transition-colors group-hover:text-ink"
                        />
                      )}
                      <span className="t-title">{copy.title}</span>
                    </span>

                    <span className="pl-[23px] text-sm text-muted md:col-span-3 md:pl-0">
                      {project.company}
                    </span>

                    <span className="t-meta pl-[23px] text-muted md:col-span-3 md:pl-0">
                      {project.technologies.join(" · ")}
                    </span>

                    <span className="flex items-center gap-1.5 pl-[23px] md:col-span-1 md:justify-end md:pl-0">
                      {project.current && (
                        <span
                          className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`text-[0.6875rem] ${
                          project.current ? "text-ink" : "text-muted"
                        }`}
                      >
                        {project.current
                          ? t.projects.statusCurrent
                          : t.projects.statusShipped}
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.2, 0.7, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pl-[23px] text-sm leading-relaxed text-muted md:pl-0">
                        {copy.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {visible.length === 0 && (
          <p className="py-10 text-sm text-muted">
            {t.projects.empty}{" "}
            <button
              type="button"
              onClick={() => setFilter(null)}
              className="text-accent underline underline-offset-2"
            >
              {t.projects.filterClear}
            </button>
          </p>
        )}

        <p className="t-meta mt-6 text-muted">{t.projects.note}</p>
      </div>
    </section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`t-meta border px-2 py-1 transition-colors ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-rule text-muted hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
