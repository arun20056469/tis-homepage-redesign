import { ArrowRight } from "lucide-react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants = {
  primary: "bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-glow",
  secondary: "border border-line bg-surface/70 text-content hover:border-brand/60 hover:text-brand",
  ghost: "text-content hover:text-brand",
};

/**
 * Polymorphic button — renders an <a> when `href` is supplied, otherwise a
 * <button>. `withArrow` appends an icon that nudges on hover.
 */
export default function Button({
  href,
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
