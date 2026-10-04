"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the pointer position. Returns `null` coordinates until the first
 * move so the custom cursor doesn't flash in the top-left corner on load.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
