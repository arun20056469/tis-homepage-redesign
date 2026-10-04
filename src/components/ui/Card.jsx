/**
 * Surface card with a subtle hover lift and brand-tinted border.
 * `as` lets callers render it as an <article>, <li>, etc. for semantics.
 */
export default function Card({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
