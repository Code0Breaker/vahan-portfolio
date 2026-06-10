import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import type { ContactItem } from "@/types";

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "vahan0muradyan@gmail.com",
    href: "mailto:vahan0muradyan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+(374) 95579989",
    href: "tel:+37495579989",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Vahan Muradyan",
    href: "https://www.linkedin.com/in/vahan-muradyan-1833331b7/",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "UAE",
    href: null,
  },
];
