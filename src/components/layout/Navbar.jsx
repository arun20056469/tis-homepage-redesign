"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/animation/ThemeToggle";
import MobileNav from "@/components/layout/MobileNav";
import Button from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { navLinks, site } from "@/data/site";

/**
 * Sticky top navigation. Uses the useScrollProgress hook to add a solid
 * background + shadow once the user scrolls past the hero.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const scrolled = progress > 0.02;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-tis flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand font-display text-sm font-bold text-white">
            T
          </span>
          <span className="hidden font-display text-lg font-semibold sm:block">
            {site.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="#admissions" className="hidden md:inline-flex">
            Apply now
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
