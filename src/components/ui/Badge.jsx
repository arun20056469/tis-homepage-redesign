/** Small pill used for eyebrows and labels. Accepts an optional leading icon. */
export default function Badge({ children, icon: Icon, className = "" }) {
  return (
    <span className={`eyebrow ${className}`}>
      {Icon && <Icon size={14} className="text-accent" />}
      {children}
    </span>
  );
}
