"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Monitor, Smartphone, Tablet, Maximize2, X, RefreshCw } from "lucide-react";

interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "Aikikai Armenia",
    description: "Official website for the Aikido Federation of Armenia. Features 3D visualizations and modern design.",
    url: "https://aikikai.am",
    technologies: ["Vue3", "TypeScript", "Three.js", "PayloadCMS"],
  },
  {
    id: "2",
    title: "Terlemezyan Art School",
    description: "Website for the prestigious Terlemezyan Art School, showcasing student works and school information.",
    url: "https://terlemezyan.com",
    technologies: ["Vue.js", "SCSS", "PayloadCMS"],
  },
  {
    id: "3",
    title: "DCP Armenia",
    description: "Political party website with modern, responsive design and content management system.",
    url: "https://dcp.am",
    technologies: ["Vue.js", "PayloadCMS", "MongoDB", "NGINX"],
  },
];

type DeviceType = "desktop" | "tablet" | "mobile";

interface DeviceFrameProps {
  url: string;
  title: string;
  device: DeviceType;
  isFullscreen?: boolean;
}

function DeviceFrame({ url, title, device, isFullscreen = false }: DeviceFrameProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const deviceStyles = {
    desktop: {
      width: isFullscreen ? "100%" : "100%",
      height: isFullscreen ? "calc(100vh - 120px)" : "400px",
      scale: isFullscreen ? 1 : 0.6,
    },
    tablet: {
      width: "768px",
      height: isFullscreen ? "calc(100vh - 120px)" : "500px",
      scale: isFullscreen ? 1 : 0.5,
    },
    mobile: {
      width: "375px",
      height: isFullscreen ? "calc(100vh - 120px)" : "600px",
      scale: isFullscreen ? 1 : 0.45,
    },
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  return (
    <div className={`relative ${isFullscreen ? "h-full" : ""}`}>
      {/* Browser Chrome */}
      <div className="bg-[#1a1a24] rounded-t-xl border border-border border-b-0">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-muted rounded-lg max-w-md mx-auto">
              <div className="w-4 h-4 rounded bg-primary/20" />
              <span className="text-xs text-muted-foreground font-mono truncate">{url}</span>
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
        className="relative bg-muted rounded-b-xl border border-border border-t-0 overflow-hidden"
        style={{ 
          height: deviceStyles[device].height,
        }}
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

        {/* Iframe Container with Scaling */}
        <div 
          className="origin-top-left"
          style={{
            width: device === "desktop" ? "100%" : deviceStyles[device].width,
            transform: isFullscreen ? "none" : `scale(${deviceStyles[device].scale})`,
            height: isFullscreen ? "100%" : `calc(100% / ${deviceStyles[device].scale})`,
          }}
        >
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            className="w-full h-full bg-white"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            sandbox="allow-scripts allow-same-origin allow-popups"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ShowcaseProject; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group"
      >
        <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,65,0.1)]">
          {/* Device Switcher & Actions */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDevice("desktop")}
                className={`p-2 rounded-lg transition-colors ${
                  device === "desktop" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                title="Desktop View"
              >
                <Monitor size={18} />
              </button>
              <button
                onClick={() => setDevice("tablet")}
                className={`p-2 rounded-lg transition-colors ${
                  device === "tablet" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                title="Tablet View"
              >
                <Tablet size={18} />
              </button>
              <button
                onClick={() => setDevice("mobile")}
                className={`p-2 rounded-lg transition-colors ${
                  device === "mobile" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                title="Mobile View"
              >
                <Smartphone size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                title="Fullscreen Preview"
              >
                <Maximize2 size={18} />
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                title="Open in New Tab"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Preview Area */}
          <div className="p-4">
            <DeviceFrame url={project.url} title={project.title} device={device} />
          </div>

          {/* Project Info */}
          <div className="p-6 border-t border-border">
            <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted rounded-md text-xs text-primary border border-primary/20 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDevice("desktop")}
                  className={`p-2 rounded-lg transition-colors ${
                    device === "desktop" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Monitor size={18} />
                </button>
                <button
                  onClick={() => setDevice("tablet")}
                  className={`p-2 rounded-lg transition-colors ${
                    device === "tablet" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Tablet size={18} />
                </button>
                <button
                  onClick={() => setDevice("mobile")}
                  className={`p-2 rounded-lg transition-colors ${
                    device === "mobile" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Smartphone size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-mono text-sm"
              >
                <ExternalLink size={16} />
                Open Site
              </a>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Fullscreen Preview */}
          <div className="p-4 h-[calc(100vh-80px)]">
            <div className={`mx-auto h-full ${device === "mobile" ? "max-w-[375px]" : device === "tablet" ? "max-w-[768px]" : "w-full"}`}>
              <DeviceFrame url={project.url} title={project.title} device={device} isFullscreen />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="relative py-32 overflow-hidden">
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
            &gt; Live Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            See them in <span className="text-gradient">action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive previews of some live projects I&apos;ve built. 
            Switch between device views or open in fullscreen to explore.
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

