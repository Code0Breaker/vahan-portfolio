"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MapPin, Calendar, Building2 } from "lucide-react";
import { experiences } from "@/data/experience";
import type { Job } from "@/types";


function JobCard({ job, index }: { job: Job; index: number }) {
  const [isExpanded, setIsExpanded] = useState(job.current || false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[27px]" />
      
      {/* Timeline dot */}
      <div className={`absolute left-[-4px] md:left-6 top-8 w-2 h-2 rounded-full ${job.current ? 'bg-primary animate-pulse' : 'bg-border'}`} />
      
      <div className="ml-6 md:ml-16">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-6 md:p-8 bg-card rounded-2xl border cursor-pointer transition-all duration-300 ${
            job.current 
              ? 'border-primary/50 glow' 
              : 'border-border hover:border-primary/30'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {job.current && (
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)]">
                  {job.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Building2 size={16} />
                <span>{job.company}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{job.period}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{job.description}</p>

          {job.projects.length > 0 && (
            <button
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <span>{isExpanded ? "Hide" : "Show"} projects</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}

          {isExpanded && job.projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 space-y-6"
            >
              {job.projects.map((project, i) => (
                <div
                  key={i}
                  className="p-4 bg-muted rounded-xl border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <ul className="space-y-2">
                    {project.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
            Where I&apos;ve <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((job, index) => (
            <JobCard key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

