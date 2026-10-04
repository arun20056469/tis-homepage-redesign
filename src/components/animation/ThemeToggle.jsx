"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

/**
 * Feature C — Animated dark/light theme switcher.
 * Toggles the `.dark` class (persisted via ThemeProvider) and animates the
 * sun/moon swap with an AnimatePresence rotate-and-fade transition.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/70 text-content transition-colors hover:border-brand/60 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="grid place-items-center"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
