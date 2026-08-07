import type { Translations } from "@/lib/i18n/translations";

/**
 * Content ids are derived from the translation dictionary, so a data entry
 * can't point at prose that is missing from one of the languages.
 */
export type ShowcaseId = keyof Translations["content"]["showcase"];
export type ProjectId = keyof Translations["content"]["projects"];
export type CompanyId = keyof Translations["content"]["experience"];
export type SkillGroupId = keyof Translations["content"]["skillGroups"];
export type PrincipleId = keyof Translations["content"]["principles"];
export type RoleId = keyof Translations["content"]["roles"];
export type ContactId = keyof Translations["content"]["contactLabels"];

export interface TeamMember {
  role: RoleId;
  name: string;
  linkedin?: string;
}

export interface ShowcaseProject {
  id: ShowcaseId;
  url: string;
  technologies: string[];
  team: TeamMember[];
  /** False when the site sends X-Frame-Options or CSP frame-ancestors. */
  embeddable?: boolean;
  /** Static screenshot shown in place of the iframe when embeddable is false. */
  previewImage?: string;
}

export interface Project {
  id: ProjectId;
  company: string;
  technologies: string[];
  current?: boolean;
}

/** Numeric YYYY.MM, so a date range reads identically in every language. */
export interface DateRange {
  from: string;
  to: string | null;
}

export interface Job {
  id: CompanyId;
  company: string;
  location: string;
  range: DateRange;
}

export interface SkillGroup {
  id: SkillGroupId;
  skills: string[];
}

export interface ContactItem {
  id: ContactId;
  value: string;
  href: string | null;
  external?: boolean;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  href: string;
  label: string;
}
