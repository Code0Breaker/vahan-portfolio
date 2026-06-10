export interface TeamMember {
  role: string;
  name?: string;
  linkedin?: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  myRole: string;
  team?: TeamMember[];
  /** Set to false when the site blocks framing (X-Frame-Options / CSP frame-ancestors). */
  embeddable?: boolean;
  /** Static screenshot shown instead of the iframe when embeddable is false. */
  previewImage?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  technologies: string[];
  featured?: boolean;
  current?: boolean;
}

export interface JobProject {
  title: string;
  details: string[];
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  projects: JobProject[];
}

export interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}

export interface Highlight {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}
