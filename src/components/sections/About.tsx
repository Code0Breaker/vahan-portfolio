"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { highlights, aboutTechBadges } from "@/data/about";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Passionate about building{" "}
            <span className="text-gradient">exceptional</span> software
          </h2>
        </motion.div>

        {/* Photo and Bio Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-gradient-shift" />
              
              {/* Photo container */}
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-card border border-border">
                {/* Placeholder gradient - will be replaced by actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-secondary/20" />
                
                {/* Photo */}
                <Image
                  src="/photo.jpg"
                  alt="Vahan Muradyan"
                  fill
                  className="object-cover object-center"
                  priority
                  onError={(e) => {
                    // If image fails to load, show placeholder
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback placeholder with initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold font-[family-name:var(--font-display)] text-foreground/10">
                    VM
                  </span>
                </div>

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-secondary/30 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi there! I&apos;m Vahan, a passionate software engineer with over four years 
              of experience in full-stack development. I thrive on tackling complex 
              challenges and crafting efficient, user-friendly web applications using 
              modern JavaScript frameworks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What drives me is the opportunity to collaborate with others and turn 
              ideas into reality. I believe in writing clean, maintainable code and 
              always strive for excellence in my work. Whether I&apos;m optimizing a 
              backend system or designing an intuitive frontend, I&apos;m dedicated to 
              creating solutions that meet user needs and exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring the latest tech trends, 
              diving into new programming languages, or sharing my knowledge with 
              fellow developers. I&apos;m excited about the future of technology and am 
              always looking for ways to grow and innovate.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {aboutTechBadges.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-primary border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
