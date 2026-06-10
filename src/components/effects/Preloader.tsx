"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          {/* Matrix rain effect in preloader */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary font-mono text-sm"
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: "100vh", 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
                style={{ left: `${i * 5}%` }}
              >
                {[...Array(10)].map((_, j) => (
                  <div key={j}>
                    {String.fromCharCode(0x30A0 + Math.random() * 96)}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-display)] text-primary">
              VM
            </h1>
            <motion.div
              className="absolute inset-0 text-6xl md:text-8xl font-bold font-[family-name:var(--font-display)] text-primary blur-lg opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              VM
            </motion.div>
          </motion.div>

          {/* Terminal-style loading */}
          <div className="relative z-10 font-mono text-sm text-muted-foreground mb-6">
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              &gt;
            </motion.span>{" "}
            Initializing system...
          </div>

          {/* Progress bar */}
          <div className="relative z-10 w-64 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)",
              }}
            />
          </div>

          {/* Progress percentage */}
          <div className="relative z-10 mt-4 font-mono text-primary text-sm">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

