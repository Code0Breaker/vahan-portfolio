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

export const metadata: Metadata = {
  title: "Vahan Muradyan | Software Engineer",
  description: "Full-stack software engineer with 4+ years of experience building efficient, user-friendly web applications using modern JavaScript frameworks.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Vue", "Next.js", "TypeScript", "Node.js"],
  authors: [{ name: "Vahan Muradyan" }],
  openGraph: {
    title: "Vahan Muradyan | Software Engineer",
    description: "Full-stack software engineer crafting exceptional web experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
