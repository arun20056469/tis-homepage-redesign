import { Mail, MapPin, Phone } from "lucide-react";
import { footer, site } from "@/data/site";

/** Site footer with brand blurb, link columns and contact details. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-tis grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-display text-sm font-bold text-white">
              T
            </span>
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{footer.blurb}</p>
          <ul className="mt-2 flex flex-col gap-3 text-sm text-muted">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand" /> {site.location}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand" /> {site.email}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand" /> {site.phone}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-content">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-tis flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built as a homepage redesign concept.</p>
        </div>
      </div>
    </footer>
  );
}
