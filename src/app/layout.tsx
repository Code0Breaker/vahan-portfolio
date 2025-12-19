import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://vmuradyan.com"; // Update this with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vahan Muradyan | Software Engineer",
    template: "%s | Vahan Muradyan",
  },
  description:
    "Full-stack software engineer with 5+ years of experience specializing in React, Vue.js, Next.js, TypeScript, and Node.js. Currently at G42 in UAE. Building efficient, user-friendly web applications.",
  keywords: [
    "Vahan Muradyan",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Vue.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Web Developer",
    "G42",
    "UAE",
    "Yerevan",
    "Armenia",
    "Electron.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Vahan Muradyan", url: siteUrl }],
  creator: "Vahan Muradyan",
  publisher: "Vahan Muradyan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vahan Muradyan Portfolio",
    title: "Vahan Muradyan | Software Engineer",
    description:
      "Full-stack software engineer with 5+ years of experience. Specializing in React, Vue.js, Next.js, TypeScript, and Node.js. Currently at G42 in UAE.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vahan Muradyan - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vahan Muradyan | Software Engineer",
    description:
      "Full-stack software engineer with 5+ years of experience. Specializing in React, Vue.js, Next.js, TypeScript, and Node.js.",
    images: ["/og-image.png"],
    creator: "@vahanmuradyan", // Update with your Twitter handle if you have one
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
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vahan Muradyan",
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/vahan-muradyan-1833331b7/",
    "https://github.com/Code0Breaker",
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "G42",
    url: "https://g42.ai",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
  email: "vahan0muradyan@gmail.com",
  telephone: "+37495579989",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Vue.js",
    "Next.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Electron.js",
    "Web Development",
    "Full Stack Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Software Engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} antialiased bg-background`}
      >
        <ClientWrapper>
          <div className="noise" />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
