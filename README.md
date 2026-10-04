# Tulas International School (TIS) — Homepage Redesign

A modern, animated redesign of the [Tulas International School](https://tis.edu.in/) homepage, focusing on high conversion, fluid animations, and mobile responsiveness. Built as a single-page, fully responsive landing experience that retains the school's core brand identity and copy while elevating it into a cutting-edge web experience.

## 🚀 Live Demo

- **Live URL:** _add your Vercel / Netlify link here after deploying_
- **Repository:** _add your GitHub repo link here_

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18
- **Styling:** Tailwind CSS (with CSS variables for theming)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Fraunces (display) + Inter (body) via `next/font`
- **Deployment:** Vercel (recommended)

## ✨ Standout Features Implemented

All **four** optional standout features are included and fully functional:

1. **Custom Cursor** — A spring-smoothed follower ring (`components/animation/CustomCursor.jsx`) that grows when hovering interactive elements. Driven by Framer Motion springs (GPU transforms) for 60 FPS, and automatically disabled on touch / coarse-pointer devices.
2. **Scroll-Triggered Reveals** — A reusable `<Reveal>` wrapper (`components/animation/Reveal.jsx`) using Framer Motion's `whileInView` with `viewport={{ once: true }}`. Entrance durations stay within the recommended 0.3s–0.6s and support staggered delays.
3. **Animated Theme Switcher** — Animated dark/light toggle (`components/animation/ThemeToggle.jsx`) backed by a `ThemeProvider` context, persisted to `localStorage`, with a no-flash inline script that applies the stored/system theme before paint.
4. **Scroll Progress Bar** — A fixed top reading-progress indicator (`components/animation/ScrollProgress.jsx`) driven by `useScroll` + `useSpring` for smooth motion.

## 📦 Getting Started Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build   # creates an optimized production build
npm run start   # serves the production build locally
npm run lint    # runs ESLint (next/core-web-vitals)
```

## 🧩 Component Architecture Overview

```
src/
├── app/
│   ├── layout.jsx          # Root layout: fonts, metadata, providers, no-flash theme script
│   ├── page.jsx            # Homepage — composes the sections in order
│   └── globals.css         # Tailwind layers + theme tokens (light/dark CSS variables)
├── components/
│   ├── ui/                 # Reusable primitives — Button, Card, Badge, SectionHeading
│   ├── layout/             # Navbar, MobileNav, Footer
│   ├── sections/           # Hero, Stats, About, Programs, WhyTis, Testimonials, Admissions
│   └── animation/          # ScrollProgress, CustomCursor, ThemeToggle, Reveal
├── hooks/                  # useScrollProgress, useMousePosition
├── context/               # ThemeProvider (dark/light state + persistence)
├── lib/                    # icons.js — string-name → Lucide component map
└── data/                   # site.js — all static content & copy in one place
```

**Design decisions**

- **Separation of content and presentation:** all copy and data live in `data/site.js`, so section components stay purely presentational and the page is easy to update.
- **Custom hooks** (`useScrollProgress`, `useMousePosition`) isolate browser/event logic from UI, keep listeners passive and `requestAnimationFrame`-batched, and are reused across components.
- **Theming** uses CSS variables (RGB channels) consumed by Tailwind's `rgb(var(--x) / <alpha-value>)` colours, so a single `.dark` class on `<html>` recolours the whole site with full opacity-utility support.
- **Accessibility & performance:** semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), `aria-label`s on icon buttons, focus-visible rings, `prefers-reduced-motion` support, and `next/font` for zero-layout-shift fonts.

## 📱 Responsiveness

Tested and tuned for the required breakpoints:

- **Mobile — 375px:** single-column layouts, full-screen mobile nav overlay.
- **Tablet — 768px:** two-column grids, desktop nav appears.
- **Desktop — 1280px+:** full multi-column layouts with the `max-w-container` (1200px) content width.

## 🎨 Brand Identity Retained

- School name, tagline, section copy and admissions messaging reflect Tulas International School.
- An emerald-green + gold palette echoes a premium, trustworthy school aesthetic, defined as theme tokens and adapted for both light and dark modes.

## ☁️ Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Copy the resulting URL into the **Live URL** section above.

> Alternatively, deploy to Netlify by connecting the repo (build command `npm run build`, the official Next.js runtime is detected automatically).

---

Built as a homepage redesign concept for an evaluation task. Not affiliated with the official school website.
