import type { Job } from "@/types";

export const experiences: Job[] = [
  {
    company: "G42",
    role: "Software Engineer",
    location: "UAE",
    period: "MAY 2025 - Present",
    current: true,
    description: "G42 is a leading AI and cloud computing company headquartered in Abu Dhabi, UAE, focused on accelerating digital transformation across industries.",
    projects: [],
  },
  {
    company: "Saber Interactive",
    role: "Software Engineer",
    location: "Yerevan",
    period: "FEB 2023 - APR 2025",
    description: "Saber Interactive is an international company known for developing video games such as World War Z and SnowRunner. The company has offices worldwide and collaborates with leading publishers in the gaming industry.",
    projects: [
      {
        title: "Build Download Product Using WebTorrent, Electron.js, and React.js",
        details: [
          "Developed a complete build download product, resolving performance issues using WebTorrent and Electron.js based on Vue2",
          "Optimized performance by separating UI and torrent functionalities, transitioning to Vue3, TypeScript, Electron.js, and Vite",
          "Worked with Better-SQLITE, TypeORM, Workers, and Electron-updater for data management",
          "Wrote tests using Playwright to ensure application stability",
          "Collaborated on integrating a Python-based torrent service with libtorrent",
        ],
      },
      {
        title: "Internal Procurement System with Analytics",
        details: [
          "Developed a procurement management and analytics system based on Vue.js and TypeScript",
          "Used PrimeVue for UI components and vee-validate for form validation",
          "Worked with GraphQL for query execution and implemented CI/CD processes using TeamCity",
        ],
      },
      {
        title: "Employee Payroll Process Management System",
        details: [
          "Developed a system for managing employee payrolls with asymmetric encryption (RSA)",
          "Implemented secure handling of payroll data using public/private key pairs",
          "Built frontend using Vue3 and Electron.js with TypeScript and PrimeVue",
        ],
      },
    ],
  },
  {
    company: "ItHire",
    role: "Full Stack Developer",
    location: "Yerevan",
    period: "SEP 2019 - JAN 2023",
    description: "ItHire is an outsourcing company specializing in web application development using modern technologies such as JavaScript frameworks. The company provides custom solutions for various businesses.",
    projects: [
      {
        title: "Educational Platform (Educa Space)",
        details: [
          "Conducted extensive bug fixing in Nuxt.js, enhancing platform stability",
          "Developed and optimized APIs using TypeORM (Nest.js)",
          "Resolved complex database relationship issues in PostgreSQL",
        ],
      },
      {
        title: "One X Player Application",
        details: [
          "Created an Electron and React.js application for game aggregation",
          "Added functionality to display time spent on each game",
          "Implemented cross-device game download via link sharing",
        ],
      },
      {
        title: "Flight and Hotel Booking Application",
        details: [
          "Developed application from scratch using Vue.js and TypeScript",
          "Configured project builds through Webpack",
          "Implemented Google Auth for streamlined authentication",
        ],
      },
      {
        title: "Aikido Federation Website",
        details: [
          "Developed website using Vue3 with TypeScript and Three.js for data visualization",
          "Created custom admin panel with Payload CMS and GraphQL",
        ],
      },
      {
        title: "Japan Radio Community (JRC) Platform",
        details: [
          "Developed a platform in Vue.js focusing on user and community interaction",
          "Implemented PWA for improved performance",
          "Used GraphQL for data management",
        ],
      },
      {
        title: "Freelancer Platform",
        details: [
          "Developed using Next.js with SCSS and BEM methodology",
          "Implemented video chat feature using Socket.io and WebRTC",
        ],
      },
    ],
  },
];
