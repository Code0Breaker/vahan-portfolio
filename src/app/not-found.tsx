"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.6)_50%,rgba(10,10,15,0.9)_100%)] pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6">
        {/* Glitchy 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold font-[family-name:var(--font-display)] text-primary leading-none select-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-bold font-[family-name:var(--font-display)] text-secondary/30 leading-none select-none blur-sm animate-pulse" style={{ animationDelay: "0.1s" }}>
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] mb-4 text-foreground">
            <span className="text-primary">&gt;</span> Page_Not_Found
          </h2>
          <p className="text-muted-foreground font-mono mb-2">
            ERROR: The requested resource could not be located.
          </p>
          <p className="text-muted-foreground font-mono mb-8">
            <span className="text-primary">$</span> status: <span className="text-accent">disconnected</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,255,65,0.4)] transition-all duration-300 font-mono"
          >
            <Home size={18} />
            ./home --return
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-full hover:bg-primary/10 transition-all duration-300 font-mono"
          >
            <ArrowLeft size={18} />
            cd ..
          </button>
        </motion.div>

        {/* Terminal-style decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-primary/30 max-w-md mx-auto text-left font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <p className="text-muted-foreground">
            <span className="text-primary">vahan@portfolio</span>:<span className="text-secondary">~</span>$ find /page
          </p>
          <p className="text-accent">find: /page: No such file or directory</p>
          <p className="text-muted-foreground">
            <span className="text-primary">vahan@portfolio</span>:<span className="text-secondary">~</span>$ <span className="animate-pulse">_</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

