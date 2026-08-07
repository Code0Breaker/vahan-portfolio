/**
 * Single source of truth for the document's sections. The title bar, the
 * status bar readout and the command palette all read from this list, so
 * adding a section wires it into all three.
 */
export const SECTION_IDS = [
  "about",
  "work",
  "projects",
  "experience",
  "stack",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
