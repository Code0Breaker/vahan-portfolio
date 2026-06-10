"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users } from "lucide-react";
import DeviceFrame from "@/components/ui/DeviceFrame";
import { showcaseProjects } from "@/data/showcase-projects";
import type { ShowcaseProject } from "@/types";

function ProjectCard({ project, index }: { project: ShowcaseProject; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,65,0.1)] w-full max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 border-b border-border">
          <div className="min-w-0">
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] group-hover:text-primary transition-colors truncate">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              My Role: <span className="text-primary">{project.myRole}</span>
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg font-mono text-sm hover:bg-primary hover:text-background transition-all flex-shrink-0"
          >
            <ExternalLink size={16} />
            <span className="hidden sm:inline">Visit Site</span>
            <span className="sm:hidden">Visit</span>
          </a>
        </div>

        {/* Preview Area */}
        <div className="p-2 sm:p-4">
          <DeviceFrame
            url={project.url}
            title={project.title}
            embeddable={project.embeddable}
            previewImage={project.previewImage}
          />
        </div>

        {/* Project Info */}
        <div className="p-6 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted rounded-md text-xs text-primary border border-primary/20 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Team Section */}
          {project.team && project.team.length > 0 && (
            <div className="pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Users size={14} />
                <span className="font-mono uppercase tracking-wider">Team</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member, i) => {
                  const isMe = member.name === "Vahan Muradyan";
                  const content = (
                    <>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isMe
                          ? "bg-primary text-background"
                          : "bg-border text-muted-foreground"
                      }`}>
                        {member.name ? member.name.charAt(0) : member.role.charAt(0)}
                      </div>
                      <div>
                        <span className="font-medium">{member.role}</span>
                        {member.name && member.name !== "Client" && (
                          <span className="opacity-70"> · {member.name}</span>
                        )}
                      </div>
                    </>
                  );

                  const baseClassName = `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
                    isMe
                      ? "bg-primary/10 border border-primary/30 text-primary"
                      : "bg-muted border border-border text-muted-foreground"
                  }`;

                  return member.linkedin ? (
                    <a
                      key={i}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseClassName} hover:border-primary/50 hover:text-primary cursor-pointer`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i} className={baseClassName}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="relative py-32 overflow-x-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block font-mono">
            &gt; Client Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Built by <span className="text-gradient">order</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Freelance projects built for clients. Live previews powered by Next.js and React.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {showcaseProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
