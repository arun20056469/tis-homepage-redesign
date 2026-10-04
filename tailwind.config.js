/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          dark: "rgb(var(--brand-dark) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 12px 40px -12px rgb(0 0 0 / 0.18)",
        glow: "0 0 0 1px rgb(var(--brand) / 0.35), 0 20px 60px -20px rgb(var(--brand) / 0.45)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
