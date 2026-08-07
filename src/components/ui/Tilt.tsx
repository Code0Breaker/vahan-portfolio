"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Shallow 3D pointer tilt for the panels that float above the rain. Mouse
 * only — touch and reduced-motion readers get a static panel — and springed,
 * so the instrument feels weighted rather than stuck to the cursor.
 */
export default function Tilt({
  children,
  className = "",
  max = 4,
}: {
  children: ReactNode;
  className?: string;
  /** Peak rotation in degrees. */
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 22, mass: 0.8 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: "56rem" }}>
      <motion.div
        ref={ref}
        className={className}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return;
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          px.set((e.clientX - rect.left) / rect.width);
          py.set((e.clientY - rect.top) / rect.height);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
