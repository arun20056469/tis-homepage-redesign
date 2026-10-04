import Reveal from "@/components/animation/Reveal";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { iconMap } from "@/lib/icons";
import { features } from "@/data/site";

export default function WhyTis() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="container-tis flex flex-col gap-12">
        <SectionHeading
          eyebrow="Life at TIS"
          title="More than a school — a place to belong"
          intro="Six reasons families choose Tulas International School for a well-rounded, future-ready education."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={(index % 3) * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    {Icon && <Icon size={24} />}
                  </span>
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
