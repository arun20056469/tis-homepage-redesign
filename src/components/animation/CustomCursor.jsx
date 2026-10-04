"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * Feature A — Custom cursor.
 * A spring-smoothed ring that follows the pointer and grows when hovering
 * interactive elements. Rendered only on fine-pointer (non-touch) devices;
 * uses transform via Framer Motion springs to stay on the GPU at 60 FPS.
 */
export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const springConfig = { stiffness: 350, damping: 28, mass: 0.4 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Enable only for devices with a precise pointer (skip touch screens).
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => {
      setEnabled(media.matches);
      document.body.classList.toggle("has-custom-cursor", media.matches);
    };
    apply();
    media.addEventListener("change", apply);
    return () => {
      media.removeEventListener("change", apply);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  // Grow the ring when the pointer is over a hoverable element.
  useEffect(() => {
    if (!enabled) return undefined;
    const interactive = "a, button, [role='button'], input, textarea, select, label";
    const over = (event) => setHovering(Boolean(event.target.closest?.(interactive)));
    document.addEventListener("mouseover", over);
    return () => document.removeEventListener("mouseover", over);
  }, [enabled]);

  useEffect(() => {
    if (x === null || y === null) return;
    cursorX.set(x);
    cursorY.set(y);
    setVisible(true);
  }, [x, y, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] flex h-8 w-8 items-center justify-center rounded-full border border-brand/70 mix-blend-difference"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        scale: hovering ? 1.9 : 1,
        opacity: visible ? 1 : 0,
        backgroundColor: hovering ? "rgba(29,171,124,0.15)" : "rgba(29,171,124,0)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
    </motion.div>
  );
}
