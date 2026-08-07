import type { Project } from "@/types";

/** In-house work. Prose lives in translations.content.projects, keyed by id. */
export const projects: Project[] = [
  {
    id: "0",
    company: "G42",
    technologies: ["Next.js", "React", "TypeScript"],
    current: true,
  },
  {
    id: "1",
    company: "Saber Interactive",
    technologies: ["Electron", "Vue", "TypeScript", "WebTorrent", "SQLite"],
  },
  {
    id: "2",
    company: "Saber Interactive",
    technologies: ["Vue", "TypeScript", "GraphQL", "PrimeVue"],
  },
  {
    id: "3",
    company: "Saber Interactive",
    technologies: ["Vue", "Electron", "TypeScript", "Playwright"],
  },
  {
    id: "4",
    company: "ItHire",
    technologies: ["Nuxt", "NestJS", "TypeORM", "PostgreSQL"],
  },
  {
    id: "5",
    company: "ItHire",
    technologies: ["Vue", "TypeScript", "Webpack", "Google Auth"],
  },
  {
    id: "6",
    company: "ItHire",
    technologies: ["Next.js", "Socket.io", "WebRTC", "SCSS"],
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies)),
).sort((a, b) => a.localeCompare(b));
