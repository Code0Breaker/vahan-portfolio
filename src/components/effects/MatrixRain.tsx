"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Drop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
  length: number;
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const animationRef = useRef<number>(0);
  const scrollRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Matrix characters - mix of katakana, numbers, and symbols
  const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/*-+=";

  const getRandomChar = useCallback(() => {
    return matrixChars[Math.floor(Math.random() * matrixChars.length)];
  }, []);

  const initDrops = useCallback((width: number, height: number) => {
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: Drop[] = [];

    for (let i = 0; i < columns; i++) {
      const length = Math.floor(Math.random() * 15) + 5;
      const chars: string[] = [];
      for (let j = 0; j < length; j++) {
        chars.push(getRandomChar());
      }
      
      drops.push({
        x: i * fontSize,
        y: Math.random() * height * -1,
        speed: Math.random() * 2 + 1,
        chars,
        opacity: Math.random() * 0.5 + 0.3,
        length,
      });
    }

    return drops;
  }, [getRandomChar]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    dropsRef.current = initDrops(dimensions.width, dimensions.height);

    const fontSize = 14;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const animate = () => {
      // Calculate scroll-based effects
      const scrollProgress = maxScroll > 0 ? scrollRef.current / maxScroll : 0;
      const speedMultiplier = 1 + scrollProgress * 2; // Rain speeds up as you scroll
      const hueShift = scrollProgress * 60; // Color shifts from green to cyan/blue

      // Semi-transparent black for trail effect
      ctx.fillStyle = `rgba(10, 10, 15, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      dropsRef.current.forEach((drop, index) => {
        // Update character randomly
        if (Math.random() > 0.95) {
          const charIndex = Math.floor(Math.random() * drop.chars.length);
          drop.chars[charIndex] = getRandomChar();
        }

        // Draw each character in the drop
        drop.chars.forEach((char, charIndex) => {
          const y = drop.y - charIndex * fontSize;
          
          if (y > 0 && y < canvas.height) {
            // First character is brightest (head of the drop)
            if (charIndex === 0) {
              ctx.fillStyle = `hsla(${150 + hueShift}, 100%, 70%, ${drop.opacity + 0.3})`;
              ctx.shadowColor = `hsla(${150 + hueShift}, 100%, 50%, 0.8)`;
              ctx.shadowBlur = 10;
            } else {
              // Fade out based on position in drop
              const fadeOpacity = drop.opacity * (1 - charIndex / drop.length);
              ctx.fillStyle = `hsla(${150 + hueShift}, 100%, 50%, ${fadeOpacity})`;
              ctx.shadowBlur = 0;
            }
            
            ctx.fillText(char, drop.x, y);
          }
        });

        ctx.shadowBlur = 0;

        // Move drop down
        drop.y += drop.speed * speedMultiplier;

        // Reset drop when it goes off screen
        if (drop.y - drop.length * fontSize > canvas.height) {
          dropsRef.current[index] = {
            x: drop.x,
            y: -drop.length * fontSize,
            speed: Math.random() * 2 + 1,
            chars: drop.chars.map(() => getRandomChar()),
            opacity: Math.random() * 0.5 + 0.3,
            length: drop.length,
          };
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, initDrops, getRandomChar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
}

