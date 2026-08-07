import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Sans,
  Martian_Mono,
  Noto_Sans_Armenian,
} from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/context";
import "./globals.css";

/* Display: a grotesque with real width character, used large and sparingly. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

/* Body: IBM's engineering typeface — the right register for this subject,
   and the only one of the three that covers Cyrillic. */
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Mono: reserved for machine-generated values — times, counts, percentages. */
const martian = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Armenian fallback for the hy locale. */
const notoArmenian = Noto_Sans_Armenian({
  variable: "--font-noto-armenian",
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://vmuradyan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vahan Muradyan — Software Engineer",
    template: "%s — Vahan Muradyan",
  },
  description:
    "Full-stack software engineer at G42 in Abu Dhabi. Five years building production systems in React, Vue, Next.js, Node and Electron — build delivery over WebTorrent, RSA-encrypted payroll, procurement analytics.",
  keywords: [
    "Vahan Muradyan",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Vue.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Electron",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "G42",
    "Abu Dhabi",
    "Yerevan",
    "Armenia",
  ],
  authors: [{ name: "Vahan Muradyan", url: siteUrl }],
  creator: "Vahan Muradyan",
  publisher: "Vahan Muradyan",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vahan Muradyan",
    title: "Vahan Muradyan — Software Engineer",
    description:
      "Full-stack software engineer at G42 in Abu Dhabi. Five years building the systems companies run on.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vahan Muradyan — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vahan Muradyan — Software Engineer",
    description:
      "Full-stack software engineer at G42 in Abu Dhabi. Five years building the systems companies run on.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
  manifest: "/manifest.json",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050807",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vahan Muradyan",
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/vahan-muradyan/",
    "https://github.com/Code0Breaker",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "G42",
    url: "https://g42.ai",
  },
  address: { "@type": "PostalAddress", addressCountry: "AE" },
  email: "vahan0muradyan@gmail.com",
  telephone: "+37495579989",
  knowsLanguage: ["en", "ru", "hy"],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Electron",
    "WebRTC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${plex.variable} ${martian.variable} ${notoArmenian.variable}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
