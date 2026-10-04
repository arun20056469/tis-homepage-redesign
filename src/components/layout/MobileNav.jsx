"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";

/** Full-screen mobile navigation overlay with staggered link entrances. */
export default function MobileNav({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[55] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" />

          <div className="relative flex h-full flex-col">
            <div className="container-tis flex h-16 items-center justify-between">
              <span className="font-display text-lg font-semibold text-brand">{site.shortName}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="container-tis flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06 }}
                  className="border-b border-line py-4 font-display text-2xl font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button href="#admissions" withArrow className="mt-8 w-full" onClick={onClose}>
                Apply now
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
