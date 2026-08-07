import type { Job } from "@/types";

/**
 * Roles, descriptions and project detail live in
 * translations.content.experience, keyed by id. Newest first.
 */
export const experiences: Job[] = [
  {
    id: "g42",
    company: "G42",
    location: "Abu Dhabi",
    range: { from: "2025.05", to: null },
  },
  {
    id: "saber",
    company: "Saber Interactive",
    location: "Yerevan",
    range: { from: "2023.02", to: "2025.04" },
  },
  {
    id: "ithire",
    company: "ItHire",
    location: "Yerevan",
    range: { from: "2019.09", to: "2023.01" },
  },
];

/** First month on the job — the hero derives years of experience from it. */
export const CAREER_START = new Date(2019, 8, 1);
