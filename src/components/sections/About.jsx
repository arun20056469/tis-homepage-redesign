import { Check } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Badge from "@/components/ui/Badge";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-tis grid items-center gap-12 lg:grid-cols-2">
        {/* Decorative stacked panels */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-square max-w-md overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-accent/15 via-surface to-brand/10 shadow-soft">
            <div className="absolute inset-6 rounded-[1.5rem] border border-line/70" />
            <div className="absolute inset-12 rounded-[1rem] border border-line/50" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-7xl font-bold text-brand/25">2008</span>
            </div>
            <span className="absolute bottom-6 left-6 text-sm font-medium text-muted">
              Est. — nurturing excellence since
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <Badge>{about.eyebrow}</Badge>
          </Reveal>
          <Reveal as="h2" delay={0.05} className="heading-display text-3xl sm:text-4xl lg:text-5xl">
            {about.title}
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-base leading-relaxed text-muted sm:text-lg">
            {about.body}
          </Reveal>
          <ul className="mt-2 flex flex-col gap-4">
            {about.points.map((point, index) => (
              <Reveal as="li" key={point} delay={0.15 + index * 0.08} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                  <Check size={14} />
                </span>
                <span className="text-sm leading-relaxed text-content sm:text-base">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
