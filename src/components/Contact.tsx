"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vahan0muradyan@gmail.com",
    href: "mailto:vahan0muradyan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+(374) 95579989",
    href: "tel:+37495579989",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Vahan Muradyan",
    href: "https://www.linkedin.com/in/vahan-muradyan-1833331b7/",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "UAE",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Let&apos;s <span className="text-gradient">connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-muted-foreground block mb-1">
                      {item.label}
                    </span>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </span>
                  </div>
                  {item.external && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </a>
              ) : (
                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      {item.label}
                    </span>
                    <span className="text-foreground font-medium">{item.value}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent">
            <div className="px-8 py-12 bg-card rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
              </p>
              <a
                href="mailto:vahan0muradyan@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,255,170,0.4)] transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Send me a message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

