"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Feature D — Scroll progress bar.
 * A fixed top indicator driven by Framer Motion's `useScroll`, smoothed with
 * `useSpring` for a fluid 60 FPS reading-progress effect.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand via-brand to-accent"
    />
  );
}
