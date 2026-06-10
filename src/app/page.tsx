import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  About,
  ProjectShowcase,
  Projects,
  Experience,
  Skills,
  Testimonials,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="relative" role="main">
        <Hero />
        <About />
        <ProjectShowcase />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
