"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

// Sample testimonials - replace with your actual testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    content:
      "Vahan is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills made our project a success. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Working with Vahan was a pleasure. He quickly understood our requirements and delivered a robust solution that exceeded our expectations. His expertise in React and Vue is impressive.",
    rating: 5,
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Digital Agency",
    content:
      "Vahan's technical skills are top-notch. He brought innovative solutions to complex problems and was always willing to go the extra mile. A true professional!",
    rating: 5,
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Product Owner",
    company: "E-Commerce Platform",
    content:
      "Vahan transformed our outdated system into a modern, efficient application. His communication was excellent throughout the project, and he delivered on time.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 md:p-8 bg-card rounded-2xl border border-border h-full flex flex-col">
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      
      <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "text-primary fill-primary" : "text-muted"}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-[family-name:var(--font-display)]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/75 z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            What people <span className="text-gradient">say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

