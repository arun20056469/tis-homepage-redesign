import { Quote } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="voices" className="border-y border-line bg-surface/40 py-20 sm:py-28">
      <div className="container-tis flex flex-col gap-12">
        <SectionHeading
          eyebrow="Voices"
          title="Loved by students and parents alike"
          intro="The warmth of our community is what families remember most."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <Card as="figure" className="flex h-full flex-col gap-5">
                <Quote size={28} className="text-brand/40" />
                <blockquote className="flex-1 text-base leading-relaxed text-content">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/15 font-display font-semibold text-brand">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{testimonial.name}</span>
                    <span className="block text-xs text-muted">{testimonial.role}</span>
                  </span>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
