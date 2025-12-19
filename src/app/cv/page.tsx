"use client";

import { useRef } from "react";
import { Download, Printer, Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #cv-content, #cv-content * {
            visibility: visible;
          }
          #cv-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>

      {/* Action buttons - hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg font-mono text-sm hover:bg-primary/90 transition-colors"
        >
          <Download size={16} />
          Save as PDF
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-muted border border-border text-foreground rounded-lg font-mono text-sm hover:border-primary transition-colors"
        >
          <Printer size={16} />
          Print
        </button>
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-muted border border-border text-foreground rounded-lg font-mono text-sm hover:border-primary transition-colors"
        >
          Back to Site
        </a>
      </div>

      {/* CV Content */}
      <div
        id="cv-content"
        ref={cvRef}
        className="max-w-4xl mx-auto p-8 bg-white text-gray-900 min-h-screen"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-6 mb-6">
          <h1 className="text-4xl font-bold mb-2">Vahan Muradyan</h1>
          <p className="text-xl text-gray-600 mb-4">Software Engineer</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a href="tel:+37495579989" className="flex items-center gap-1 hover:text-gray-900">
              <Phone size={14} />
              +(374) 95579989
            </a>
            <a href="mailto:vahan0muradyan@gmail.com" className="flex items-center gap-1 hover:text-gray-900">
              <Mail size={14} />
              vahan0muradyan@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/vahan-muradyan-1833331b7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900">
              <Linkedin size={14} />
              Vahan Muradyan
            </a>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              UAE
            </span>
          </div>
        </header>

        {/* About */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">About Me</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Passionate software engineer with over five years of experience in full-stack development. 
            I thrive on tackling complex challenges and crafting efficient, user-friendly web applications 
            using modern JavaScript frameworks. I believe in writing clean, maintainable code and always 
            strive for excellence in my work.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Experience</h2>
          
          {/* G42 */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-gray-600">G42, UAE</p>
              </div>
              <span className="text-sm text-gray-500">MAY 2025 - Present</span>
            </div>
            <p className="text-sm text-gray-700">
              Working on AI-powered media platforms and digital solutions, building modern web interfaces 
              for content delivery and user engagement.
            </p>
          </div>

          {/* Saber Interactive */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-gray-600">Saber Interactive, Yerevan</p>
              </div>
              <span className="text-sm text-gray-500">FEB 2023 - APR 2025</span>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Built download product using WebTorrent, Electron.js, Vue3, TypeScript</li>
              <li>Developed procurement management system with Vue.js and GraphQL</li>
              <li>Created payroll system with RSA encryption for secure data handling</li>
              <li>Wrote tests using Playwright and Cypress for application stability</li>
            </ul>
          </div>

          {/* ItHire */}
          <div className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold">Full Stack Developer</h3>
                <p className="text-gray-600">ItHire, Yerevan</p>
              </div>
              <span className="text-sm text-gray-500">SEP 2019 - JAN 2023</span>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Developed educational platform with Nuxt.js, NestJS, PostgreSQL</li>
              <li>Built flight & hotel booking application with Vue.js, Google Auth</li>
              <li>Created freelancer platform with Next.js, WebRTC video chat</li>
              <li>Developed websites using Vue3, Three.js, PayloadCMS</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Frontend</h4>
              <p className="text-gray-700">JavaScript, TypeScript, React.js, Next.js, Vue.js, Nuxt.js, SCSS, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Backend</h4>
              <p className="text-gray-700">Node.js, NestJS, GraphQL, TypeORM, PayloadCMS, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Desktop & Real-time</h4>
              <p className="text-gray-700">Electron.js, WebTorrent, Socket.io, WebRTC, PWA</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Tools & DevOps</h4>
              <p className="text-gray-700">Git, Webpack, Vite, NGINX, CI/CD, Docker, Playwright, Cypress</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-lg font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Notable Projects</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold">Aikikai Armenia</h4>
              <p className="text-gray-600">aikikai.am - Next.js, React, TypeScript</p>
            </div>
            <div>
              <h4 className="font-semibold">Terlemezyan Art School</h4>
              <p className="text-gray-600">terlemezyan.com - Next.js, React, TypeScript</p>
            </div>
            <div>
              <h4 className="font-semibold">DCP Armenia</h4>
              <p className="text-gray-600">dcp.am - Next.js, React, PayloadCMS</p>
            </div>
            <div>
              <h4 className="font-semibold">Build Download System</h4>
              <p className="text-gray-600">Electron.js, Vue3, WebTorrent</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

