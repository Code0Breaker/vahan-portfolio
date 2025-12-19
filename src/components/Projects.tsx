"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Filter, X, Building2, Briefcase } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  technologies: string[];
  featured?: boolean;
  current?: boolean;
}

const projects: Project[] = [
  {
    id: "0",
    title: "MediaAI & AI Magazine",
    description: "AI-powered media platform and digital magazine focused on artificial intelligence news, insights, and industry trends. Building modern web interfaces for content delivery and user engagement.",
    company: "G42",
    technologies: ["Next.js", "React", "TypeScript", "AI/ML Integration"],
    featured: true,
    current: true,
  },
  {
    id: "1",
    title: "Build Download System",
    description: "High-performance build download application using WebTorrent technology. Optimized by separating UI and torrent functionalities, transitioning to Vue3, TypeScript, and Vite.",
    company: "Saber Interactive",
    technologies: ["Electron.js", "Vue.js", "TypeScript", "WebTorrent", "SQLite"],
    featured: true,
  },
  {
    id: "2",
    title: "Procurement Analytics System",
    description: "Comprehensive procurement management system with real-time analytics, built with Vue.js and GraphQL for efficient data handling and visualization.",
    company: "Saber Interactive",
    technologies: ["Vue.js", "TypeScript", "GraphQL", "PrimeVue"],
  },
  {
    id: "3",
    title: "Payroll Management System",
    description: "Secure payroll management system implementing asymmetric encryption (RSA) for handling sensitive salary data with public/private key pairs.",
    company: "Saber Interactive",
    technologies: ["Vue.js", "Electron.js", "TypeScript", "Playwright"],
  },
  {
    id: "4",
    title: "Educational Platform",
    description: "Educa Space - Comprehensive educational platform featuring course management, user progress tracking, and interactive learning modules.",
    company: "ItHire",
    technologies: ["Nuxt.js", "NestJS", "TypeORM", "PostgreSQL"],
  },
  {
    id: "5",
    title: "Flight & Hotel Booking",
    description: "Modern travel booking application with flight and hotel search, booking management, and Google OAuth integration.",
    company: "ItHire",
    technologies: ["Vue.js", "TypeScript", "Webpack", "Google Auth"],
  },
  {
    id: "6",
    title: "Freelancer Platform",
    description: "Freelancer marketplace featuring real-time video chat using WebRTC and Socket.io for seamless communication between clients and developers.",
    company: "ItHire",
    technologies: ["Next.js", "Socket.io", "WebRTC", "SCSS"],
  },
];

// Extract all unique technologies for filtering
const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className={`relative h-full bg-card rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,65,0.1)] ${
        project.current 
          ? "border-primary/50 hover:border-primary" 
          : "border-border hover:border-primary/50"
      }`}>
        {/* Header with company badge */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${project.current ? "bg-primary/20" : "bg-muted"}`}>
                <Building2 size={16} className={project.current ? "text-primary" : "text-muted-foreground"} />
              </div>
              <span className={`text-xs font-mono ${project.current ? "text-primary" : "text-muted-foreground"}`}>
                {project.company}
              </span>
            </div>
            {project.current && (
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Current
              </span>
            )}
            {project.featured && !project.current && (
              <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs font-mono rounded-full">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground border border-border/50 hover:text-primary hover:border-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 ${
          project.current ? "bg-primary" : "bg-secondary"
        }`} style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        }} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter((p) => p.technologies.includes(selectedTech));
  }, [selectedTech]);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70 z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
                Things I&apos;ve <span className="text-gradient">built</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A selection of projects from companies I&apos;ve worked with.
                Due to confidentiality, details are limited but the impact was real.
              </p>
            </div>

            {/* Filter toggle button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all font-mono text-sm ${
                showFilters || selectedTech
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              <Filter size={16} />
              {selectedTech ? `Filtered: ${selectedTech}` : "Filter by tech"}
            </button>
          </div>
        </motion.div>

        {/* Filter chips */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 p-4 bg-card/50 rounded-xl border border-border">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${
                    !selectedTech
                      ? "bg-primary text-background"
                      : "bg-muted text-muted-foreground hover:text-primary border border-border"
                  }`}
                >
                  All
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                    className={`px-3 py-1.5 rounded-full text-sm font-mono transition-all ${
                      selectedTech === tech
                        ? "bg-primary text-background"
                        : "bg-muted text-muted-foreground hover:text-primary border border-border"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
                {selectedTech && (
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="px-3 py-1.5 rounded-full text-sm font-mono bg-accent/20 text-accent hover:bg-accent/30 transition-all flex items-center gap-1"
                  >
                    <X size={14} />
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        {selectedTech && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-sm mb-8 font-mono"
          >
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} with {selectedTech}
          </motion.p>
        )}

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground font-mono">
              No projects found with {selectedTech}
            </p>
            <button
              onClick={() => setSelectedTech(null)}
              className="mt-4 px-4 py-2 text-primary hover:underline font-mono"
            >
              Clear filter
            </button>
          </motion.div>
        )}

        {/* Confidentiality note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 p-4 bg-muted/50 rounded-xl border border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Briefcase size={14} />
            <span>Some project details are confidential. More information available upon request.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
