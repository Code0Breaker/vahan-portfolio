import type { ShowcaseProject } from "@/types";

/** Client sites. Prose lives in translations.content.showcase, keyed by id. */
export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    url: "https://aikikai.am",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    team: [
      {
        role: "pm",
        name: "Diana Yeghikyan",
        linkedin: "https://www.linkedin.com/in/diana-yeghikyan-968103182/",
      },
      {
        role: "designer",
        name: "Armine Petrosyan",
        linkedin: "https://www.linkedin.com/in/armine-petrosyan-160146216/",
      },
      {
        role: "fullstack",
        name: "Vahan Muradyan",
        linkedin: "https://www.linkedin.com/in/vahan-muradyan/",
      },
    ],
  },
  {
    id: "2",
    url: "https://terlemezyan.com",
    technologies: ["Next.js", "React", "TypeScript", "SCSS"],
    team: [
      {
        role: "fullstack",
        name: "Vahan Muradyan",
        linkedin: "https://www.linkedin.com/in/vahan-muradyan/",
      },
    ],
  },
  {
    id: "3",
    url: "https://dcp.am",
    technologies: ["Next.js", "React", "TypeScript", "PayloadCMS"],
    team: [
      {
        role: "markup",
        name: "Harut Shahnubaryan",
        linkedin: "https://www.linkedin.com/in/harut-shahnubaryan-467669179/",
      },
      {
        role: "fullstack",
        name: "Vahan Muradyan",
        linkedin: "https://www.linkedin.com/in/vahan-muradyan/",
      },
    ],
  },
  {
    id: "4",
    url: "https://animehub.club",
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL"],
    // animehub.club sends X-Frame-Options: SAMEORIGIN and CSP frame-ancestors
    // 'self', so browsers refuse to render it in a cross-origin iframe.
    embeddable: false,
    previewImage: "/previews/animehub.png",
    team: [
      {
        role: "fullstack",
        name: "Vahan Muradyan",
        linkedin: "https://www.linkedin.com/in/vahan-muradyan/",
      },
    ],
  },
];
