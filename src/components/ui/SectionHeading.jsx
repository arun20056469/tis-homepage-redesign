import Reveal from "@/components/animation/Reveal";
import Badge from "@/components/ui/Badge";

/**
 * Shared section header: optional eyebrow badge, display title and intro.
 * Centres by default; `align="left"` for asymmetric layouts.
 */
export default function SectionHeading({ eyebrow, title, intro, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center mx-auto";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal as="h2" delay={0.05} className="heading-display text-3xl sm:text-4xl lg:text-5xl">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.1} className="text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </Reveal>
      )}
    </div>
  );
}
