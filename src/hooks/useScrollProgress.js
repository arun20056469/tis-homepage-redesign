"use client";

import { useEffect, useState } from "react";

/**
 * Returns page scroll depth as a value between 0 and 1.
 * Uses a passive scroll listener wrapped in requestAnimationFrame to keep
 * reads off the critical path and avoid layout thrashing.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const value = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, value)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
