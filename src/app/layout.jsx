import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animation/ScrollProgress";
import CustomCursor from "@/components/animation/CustomCursor";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "A future-ready international school in Dehradun blending academic rigour with character, creativity and compassion. Admissions open for 2026–27.",
  keywords: ["Tulas International School", "TIS", "Dehradun school", "international school", "admissions"],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "A future-ready international school in Dehradun. Shaping curious minds into global changemakers.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0e7c5a",
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before paint to apply the stored (or system) theme, preventing a
 * flash of the wrong colour scheme on first load.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('tis-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
