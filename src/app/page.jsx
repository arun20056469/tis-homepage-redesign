import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import WhyTis from "@/components/sections/WhyTis";
import Testimonials from "@/components/sections/Testimonials";
import Admissions from "@/components/sections/Admissions";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <WhyTis />
      <Testimonials />
      <Admissions />
    </>
  );
}
