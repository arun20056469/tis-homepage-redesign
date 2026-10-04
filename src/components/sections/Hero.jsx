"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { hero, site } from "@/data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* Ambient background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container-tis grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.div variants={item}>
            <Badge icon={Sparkles}>{hero.eyebrow}</Badge>
          </motion.div>

          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {hero.title.map((line, index) => (
              <motion.span key={line} variants={item} className="block">
                {index === hero.title.length - 1 ? (
                  <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} withArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {hero.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <Star size={14} className="text-accent" />
                {highlight}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-brand/15 via-surface to-accent/10 shadow-soft">
            <div className="absolute inset-0 grid place-items-center">
              <GraduationCap className="h-40 w-40 text-brand/30" strokeWidth={1} />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/80 to-transparent p-6">
              <p className="font-display text-xl font-semibold">{site.shortName}</p>
              <p className="text-sm text-muted">{site.tagline}</p>
            </div>
          </div>

          {/* Floating stat chips */}
          <motion.div
            className="absolute -left-4 top-10 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-soft backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-display text-xl font-bold text-brand">1:12</p>
            <p className="text-xs text-muted">Teacher ratio</p>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-16 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-soft backdrop-blur"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-display text-xl font-bold text-accent">98%</p>
            <p className="text-xs text-muted">Board results</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
