import SiteChrome from "@/components/layout/SiteChrome";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <SiteChrome>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
    </SiteChrome>
  );
}
