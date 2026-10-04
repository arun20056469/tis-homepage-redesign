import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { admissions } from "@/data/site";

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 sm:py-28">
      <div className="container-tis">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-white shadow-glow sm:px-12 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="flex flex-col gap-6">
              <Reveal>
                <Badge className="border-white/25 bg-white/10 text-white">{admissions.eyebrow}</Badge>
              </Reveal>
              <Reveal as="h2" delay={0.05} className="heading-display text-3xl sm:text-4xl lg:text-5xl">
                {admissions.title}
              </Reveal>
              <Reveal as="p" delay={0.1} className="max-w-md text-base leading-relaxed text-white/85">
                {admissions.body}
              </Reveal>
              <Reveal delay={0.15}>
                <Button
                  href={admissions.cta.href}
                  withArrow
                  className="bg-white text-brand hover:bg-white/90 hover:shadow-none"
                >
                  {admissions.cta.label}
                </Button>
              </Reveal>
            </div>

            {/* Steps timeline */}
            <ol className="grid gap-4 sm:grid-cols-2">
              {admissions.steps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.step}
                  delay={index * 0.1}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-bold text-white/70">{step.step}</span>
                    {index < admissions.steps.length - 1 && (
                      <ArrowRight size={16} className="text-white/40" />
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
