"use client";

import { motion } from "framer-motion";

/**
 * Feature B — Scroll-triggered reveal.
 * A reusable wrapper that fades + slides its children into view once, using
 * Framer Motion's `whileInView`. Entrance durations stay within the
 * recommended 0.3s–0.6s range; `delay` enables staggered sequences.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  className,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
