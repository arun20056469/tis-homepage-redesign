/**
 * Maps the string icon names used in `data/site.js` to Lucide components.
 * Centralising this keeps the data file framework-agnostic (plain strings)
 * while still tree-shaking to only the icons actually referenced.
 */
import {
  BookOpen,
  FlaskConical,
  Globe2,
  GraduationCap,
  Leaf,
  Palette,
  ShieldCheck,
  Sprout,
  Trophy,
  Users,
} from "lucide-react";

export const iconMap = {
  Sprout,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Globe2,
  Users,
  Palette,
  Trophy,
  Leaf,
  ShieldCheck,
};
