"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

const STORAGE_KEY = "tis-theme";

/**
 * Lightweight theme provider backed by a `.dark` class on <html> and
 * persisted to localStorage. A no-flash inline script (see layout) sets the
 * initial class before paint, so this only needs to hydrate React state.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(stored);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* localStorage may be unavailable (private mode) — fail quietly. */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
