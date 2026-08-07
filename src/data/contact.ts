import type { ContactItem } from "@/types";

export const EMAIL = "vahan0muradyan@gmail.com";

/** Labels live in translations.content.contactLabels. */
export const contactInfo: ContactItem[] = [
  {
    id: "email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    id: "phone",
    value: "+374 95 579 989",
    href: "tel:+37495579989",
  },
  {
    id: "linkedin",
    value: "vahan-muradyan",
    href: "https://www.linkedin.com/in/vahan-muradyan/",
    external: true,
  },
  {
    id: "location",
    value: "Abu Dhabi, UAE",
    href: null,
  },
];
