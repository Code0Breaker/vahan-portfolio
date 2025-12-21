"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ExternalLink, RefreshCw, Users } from "lucide-react";

interface TeamMember {
  role: string;
  name?: string;
  linkedin?: string;
}

interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  myRole: string;
  team?: TeamMember[];
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "Aikikai Armenia",
    description: "Official website for the Aikido Federation of Armenia. Built by order with modern design and smooth animations.",
    url: "https://aikikai.am",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "Project Manager", name: "Diana Yeghikyan", linkedin: "https://www.linkedin.com/in/diana-yeghikyan-968103182/" },
      { role: "UI/UX Designer", name: "Armine Petrosyan", linkedin: "https://www.linkedin.com/in/armine-petrosyan-160146216/" },
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "2",
    title: "Terlemezyan Art School",
    description: "Website for the prestigious Terlemezyan Art School. Built by order, showcasing student works and school information.",
    url: "https://terlemezyan.com",
    technologies: ["Next.js", "React", "TypeScript", "SCSS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "3",
    title: "DCP Armenia",
    description: "Political party website built by order with modern, responsive design and content management system.",
    url: "https://dcp.am",
    technologies: ["Next.js", "React", "TypeScript", "PayloadCMS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "HTML/CSS Developer", name: "Harut Shahnubaryan", linkedin: "https://www.linkedin.com/in/harut-shahnubaryan-467669179/" },
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "4",
    title: "AnimeHub",
    description: "Anime streaming platform built by order with modern UI, content management, and real-time features.",
    url: "https://animehub.club",
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL"],
    myRole: "Full Stack Developer",
    team: [
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
];

// Desktop viewport width
const VIEWPORT_WIDTH = 1440;

interface DeviceFrameProps {
  url: string;
  title: string;
}

function DeviceFrame({ url, title }: DeviceFrameProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [scale, setScale] = useState(0.5);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate scale based on container width
  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newScale = containerWidth / VIEWPORT_WIDTH;
      setScale(Math.min(newScale, 1));
    }
  }, []);

  // Update scale on mount and resize
  useEffect(() => {
    updateScale();
    
    const handleResize = () => updateScale();
    window.addEventListener("resize", handleResize);
    
    const timer = setTimeout(updateScale, 100);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [updateScale]);

  const handleRefresh = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      {/* Browser Chrome */}
      <div className="bg-[#1a1a24] rounded-t-xl border border-border border-b-0">
        <div className="flex items-center justify-between px-2 sm:px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-2 sm:mx-4 min-w-0">
            <div className="flex items-center gap-2 px-2 sm:px-4 py-1.5 bg-muted rounded-lg">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-primary/20 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-muted-foreground font-mono truncate">{url}</span>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            title="Refresh"
          >
            <RefreshCw size={14} className={`text-muted-foreground ${isLoading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div 
        ref={containerRef}
        className="relative bg-white rounded-b-xl border border-border border-t-0 overflow-hidden w-full max-w-full"
        style={{ height: "300px" }}
      >
        {/* Loading State */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-10">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-primary/30 rounded-full animate-spin border-t-primary" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground font-mono">Loading {title}...</p>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-10">
            <p className="text-muted-foreground mb-4">Unable to load preview</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-mono text-sm"
            >
              <ExternalLink size={16} />
              Visit Site Directly
            </a>
          </div>
        )}

        {/* Iframe */}
        <iframe
          ref={iframeRef}
          src={url}
          title={title}
          className="absolute top-0 left-0 border-0 origin-top-left"
          style={{
            width: `${VIEWPORT_WIDTH}px`,
            height: "1000px",
            transform: `scale(${scale})`,
          }}
          onLoad={() => {
            setIsLoading(false);
            updateScale();
          }}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
        />
      </div>
    </div>
  );
}

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
          <DeviceFrame url={project.url} title={project.title} />
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
