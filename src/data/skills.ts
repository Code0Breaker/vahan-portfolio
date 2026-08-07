import type { SkillGroup } from "@/types";

/** Group names live in translations.content.skillGroups. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue 2",
      "Vue 3",
      "Nuxt",
      "SCSS",
      "Tailwind CSS",
      "MUI",
      "Vuetify",
      "PrimeVue",
      "Three.js",
    ],
  },
  {
    id: "backend",
    skills: ["Node.js", "NestJS", "TypeORM", "GraphQL", "REST", "PayloadCMS"],
  },
  {
    id: "database",
    skills: ["PostgreSQL", "MongoDB", "Better-SQLite"],
  },
  {
    id: "desktop",
    skills: ["Electron", "WebTorrent", "Socket.io", "WebRTC", "PWA"],
  },
  {
    id: "tooling",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier",
      "TeamCity",
      "CI/CD",
      "NGINX",
      "Cloudflare",
    ],
  },
  {
    id: "quality",
    skills: ["Playwright", "Cypress", "RSA", "SSL/TLS", "Google Auth"],
  },
];
