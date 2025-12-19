"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Sample projects - you can replace these with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "Build Download System",
    description: "A high-performance build download application using WebTorrent technology",
    longDescription: "Developed a complete build download product for Saber Interactive, resolving performance issues using WebTorrent and Electron.js. Optimized by separating UI and torrent functionalities, transitioning to Vue3, TypeScript, and Vite.",
    image: "/projects/build-download.jpg",
    technologies: ["Electron.js", "Vue.js", "TypeScript", "WebTorrent", "SQLite"],
    featured: true,
  },
  {
    id: "2",
    title: "Procurement Analytics System",
    description: "Internal procurement management and analytics platform",
    longDescription: "A comprehensive procurement management system with real-time analytics, built with Vue.js and GraphQL for efficient data handling and visualization.",
    image: "/projects/procurement.jpg",
    technologies: ["Vue.js", "TypeScript", "GraphQL", "PrimeVue"],
    featured: true,
  },
  {
    id: "3",
    title: "Payroll Management System",
    description: "Secure employee payroll system with RSA encryption",
    longDescription: "A secure payroll management system implementing asymmetric encryption (RSA) for handling sensitive salary data with public/private key pairs.",
    image: "/projects/payroll.jpg",
    technologies: ["Vue.js", "Electron.js", "TypeScript", "Playwright"],
    featured: true,
  },
  {
    id: "4",
    title: "Educational Platform",
    description: "Full-stack educational platform with course management",
    longDescription: "Educa Space - A comprehensive educational platform built with Nuxt.js and NestJS, featuring course management, user progress tracking, and interactive learning modules.",
    image: "/projects/education.jpg",
    technologies: ["Nuxt.js", "NestJS", "TypeORM", "PostgreSQL"],
  },
  {
    id: "5",
    title: "Flight & Hotel Booking",
    description: "Travel booking application with Google authentication",
    longDescription: "A modern travel booking application built from scratch with Vue.js, featuring flight and hotel search, booking management, and Google OAuth integration.",
    image: "/projects/booking.jpg",
    technologies: ["Vue.js", "TypeScript", "Webpack"],
  },
  {
    id: "6",
    title: "Freelancer Platform",
    description: "Platform connecting clients with developers via video chat",
    longDescription: "A freelancer marketplace featuring real-time video chat using WebRTC and Socket.io, enabling seamless communication between clients and developers.",
    image: "/projects/freelancer.jpg",
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.1)]">
        {/* Image container */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold font-[family-name:var(--font-display)] text-foreground/5">
              {project.title.charAt(0)}
            </div>
          </div>
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary rounded-full text-background hover:scale-110 transition-transform"
                aria-label="View live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground rounded-full text-background hover:scale-110 transition-transform"
                aria-label="View source code"
              >
                <Github size={20} />
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
                Private Project
              </span>
            )}
          </motion.div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-background text-xs font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.longDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-muted rounded-md text-xs text-primary border border-primary/20">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border group-hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold font-[family-name:var(--font-display)] text-foreground/5">
              {project.title.charAt(0)}
            </div>
          </div>
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Featured Project
          </span>
          <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)]">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-muted rounded-lg text-sm text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-full hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
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

  const featuredProject = filteredProjects.find((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => p !== featuredProject);

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
                A selection of projects I&apos;ve worked on, from internal enterprise tools
                to consumer-facing applications.
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

        {/* Featured Project */}
        <AnimatePresence mode="wait">
          {featuredProject && !selectedTech && (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-16"
            >
              <FeaturedProject project={featuredProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {(selectedTech ? filteredProjects : otherProjects).map((project, index) => (
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
      </div>
    </section>
  );
}
