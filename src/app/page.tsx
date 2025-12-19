import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
