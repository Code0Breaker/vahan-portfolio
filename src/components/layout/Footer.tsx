"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/30">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/90 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© {currentYear} Vahan Muradyan. Built with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>using Next.js</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Code0Breaker", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vahan-muradyan-1833331b7/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vahan0muradyan@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

