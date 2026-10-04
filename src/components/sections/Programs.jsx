import Reveal from "@/components/animation/Reveal";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { iconMap } from "@/lib/icons";
import { programs } from "@/data/site";

export default function Programs() {
  return (
    <section id="academics" className="py-20 sm:py-28">
      <div className="container-tis flex flex-col gap-12">
        <SectionHeading
          eyebrow="Academics"
          title="A continuous journey, grade by grade"
          intro="From first steps to final exams, every stage is designed to build on the last — keeping learning joyful, challenging and personal."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon];
            return (
              <Reveal key={program.title} delay={index * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-brand transition-transform duration-300 group-hover:scale-110">
                    {Icon && <Icon size={24} />}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {program.grades}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{program.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{program.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
