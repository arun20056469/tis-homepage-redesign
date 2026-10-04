"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "@/data/site";

/** Animated count-up number that runs once when scrolled into view. */
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-brand sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="School at a glance" className="border-y border-line bg-surface/40 py-14">
      <div className="container-tis grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
