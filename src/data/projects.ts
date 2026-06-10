import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "0",
    title: "MediaAI & AI Magazine",
    description: "AI-powered media platform and digital magazine focused on artificial intelligence news, insights, and industry trends. Building modern web interfaces for content delivery and user engagement.",
    company: "G42",
    technologies: ["Next.js", "React", "TypeScript", "AI/ML Integration"],
    featured: true,
    current: true,
  },
  {
    id: "1",
    title: "Build Download System",
    description: "High-performance build download application using WebTorrent technology. Optimized by separating UI and torrent functionalities, transitioning to Vue3, TypeScript, and Vite.",
    company: "Saber Interactive",
    technologies: ["Electron.js", "Vue.js", "TypeScript", "WebTorrent", "SQLite"],
    featured: true,
  },
  {
    id: "2",
    title: "Procurement Analytics System",
    description: "Comprehensive procurement management system with real-time analytics, built with Vue.js and GraphQL for efficient data handling and visualization.",
    company: "Saber Interactive",
    technologies: ["Vue.js", "TypeScript", "GraphQL", "PrimeVue"],
  },
  {
    id: "3",
    title: "Payroll Management System",
    description: "Secure payroll management system implementing asymmetric encryption (RSA) for handling sensitive salary data with public/private key pairs.",
    company: "Saber Interactive",
    technologies: ["Vue.js", "Electron.js", "TypeScript", "Playwright"],
  },
  {
    id: "4",
    title: "Educational Platform",
    description: "Educa Space - Comprehensive educational platform featuring course management, user progress tracking, and interactive learning modules.",
    company: "ItHire",
    technologies: ["Nuxt.js", "NestJS", "TypeORM", "PostgreSQL"],
  },
  {
    id: "5",
    title: "Flight & Hotel Booking",
    description: "Modern travel booking application with flight and hotel search, booking management, and Google OAuth integration.",
    company: "ItHire",
    technologies: ["Vue.js", "TypeScript", "Webpack", "Google Auth"],
  },
  {
    id: "6",
    title: "Freelancer Platform",
    description: "Freelancer marketplace featuring real-time video chat using WebRTC and Socket.io for seamless communication between clients and developers.",
    company: "ItHire",
    technologies: ["Next.js", "Socket.io", "WebRTC", "SCSS"],
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();
