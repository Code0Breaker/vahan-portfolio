import type { ShowcaseProject } from "@/types";

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "Aikikai Armenia",
    description: "Official website for the Aikido Federation of Armenia. Built by order with modern design and smooth animations.",
    url: "https://aikikai.am",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "Project Manager", name: "Diana Yeghikyan", linkedin: "https://www.linkedin.com/in/diana-yeghikyan-968103182/" },
      { role: "UI/UX Designer", name: "Armine Petrosyan", linkedin: "https://www.linkedin.com/in/armine-petrosyan-160146216/" },
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "2",
    title: "Terlemezyan Art School",
    description: "Website for the prestigious Terlemezyan Art School. Built by order, showcasing student works and school information.",
    url: "https://terlemezyan.com",
    technologies: ["Next.js", "React", "TypeScript", "SCSS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "3",
    title: "DCP Armenia",
    description: "Political party website built by order with modern, responsive design and content management system.",
    url: "https://dcp.am",
    technologies: ["Next.js", "React", "TypeScript", "PayloadCMS"],
    myRole: "Full Stack Developer",
    team: [
      { role: "HTML/CSS Developer", name: "Harut Shahnubaryan", linkedin: "https://www.linkedin.com/in/harut-shahnubaryan-467669179/" },
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
  {
    id: "4",
    title: "AnimeHub",
    description: "Anime streaming platform built by order with modern UI, content management, and real-time features.",
    url: "https://animehub.club",
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL"],
    myRole: "Full Stack Developer",
    // animehub.club sends X-Frame-Options: SAMEORIGIN + CSP frame-ancestors 'self',
    // so browsers refuse to render it in a cross-origin iframe.
    embeddable: false,
    previewImage: "/previews/animehub.png",
    team: [
      { role: "Full Stack Developer", name: "Vahan Muradyan", linkedin: "https://www.linkedin.com/in/vahan-muradyan/" },
    ],
  },
];
