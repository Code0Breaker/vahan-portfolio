"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.4)_50%,rgba(10,10,15,0.8)_100%)] pointer-events-none z-10" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-primary/30 text-sm text-primary font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            System.status = &quot;available&quot;
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-display)] mb-6 tracking-tight"
        >
          <span className="text-foreground">Vahan</span>{" "}
          <span className="text-primary drop-shadow-[0_0_25px_rgba(0,255,170,0.5)]">Muradyan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light font-mono">
            <span className="text-primary">&gt;</span> Software Engineer at{" "}
            <span className="text-secondary font-medium">G42</span>
            <span className="animate-pulse">_</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg mb-12 leading-relaxed"
        >
          Crafting exceptional web experiences with modern JavaScript frameworks.
          4+ years of turning complex challenges into elegant, user-friendly solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-background font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,170,0.6)] font-mono"
          >
            <span className="relative z-10">./contact --init</span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300 font-mono"
          >
            cat projects.log
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Code0Breaker", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vahan-muradyan/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:vahan0muradyan@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
        >
          <span className="tracking-widest">&gt;&gt; SCROLL</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
