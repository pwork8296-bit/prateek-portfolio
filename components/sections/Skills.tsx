import React from "react";

export function Skills() {
  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            // PROFICIENCY_MATRIX, TECH_STACK &amp; TEACHING DOMAINS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="skills-heading">
            Engineering Arsenal &amp; Technical Pedagogy
          </h2>
        </div>
        <span className="font-code-body text-code-body text-on-surface-variant">4 SPECIALIZED DOMAINS</span>
      </div>

      {/* 4-Quadrant Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-lg">
        {/* Quad 1: Frontend & UI Engineering */}
        <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-caps text-label-caps text-primary tracking-wider">[ DOMAIN_01 ]</span>
              <span className="material-symbols-outlined text-primary text-[28px]">code</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
              Frontend &amp; Responsive UI Engineering
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Crafting interactive, accessible, and responsive user interfaces with modular component
              architecture, 3D animations, and dynamic state management.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React.js",
                "Next.js",
                "Three.js",
                "Vanilla JS",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
                "jQuery & Ajax",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 font-code-inline text-code-inline rounded text-on-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-space-lg pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-outline font-label-caps text-[11px]">
            <span>DOMAIN STATUS</span>
            <span className="text-primary font-bold">PRODUCTION READY</span>
          </div>
        </div>

        {/* Quad 2: Backend Architecture & REST APIs */}
        <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-caps text-label-caps text-primary tracking-wider">[ DOMAIN_02 ]</span>
              <span className="material-symbols-outlined text-primary text-[28px]">dns</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
              Backend Architecture &amp; RESTful APIs
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Developing robust asynchronous microservices, scalable API endpoints, secure authentication
              flows, payment integrations, and ERP business logic.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "Django",
                "Laravel",
                "PHP (Core & OOP)",
                "Node.js",
                "Express.js",
                "Java & Spring Boot",
                "C++",
                "WordPress",
                "REST APIs & JWT",
                "Payment Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 font-code-inline text-code-inline rounded text-on-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-space-lg pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-outline font-label-caps text-[11px]">
            <span>DOMAIN STATUS</span>
            <span className="text-primary font-bold">CORE SPECIALIZATION</span>
          </div>
        </div>

        {/* Quad 3: Databases & Realtime Telemetry */}
        <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-caps text-label-caps text-primary tracking-wider">[ DOMAIN_03 ]</span>
              <span className="material-symbols-outlined text-primary text-[28px]">database</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
              Databases &amp; Realtime Systems
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Relational schema design, high-concurrency indexing, query optimization, NoSQL document
              modeling, and realtime WebSocket communication.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "MySQL Workbench",
                "phpMyAdmin",
                "Socket.io",
                "Pusher WebSockets",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 font-code-inline text-code-inline rounded text-on-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-space-lg pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-outline font-label-caps text-[11px]">
            <span>DATABASE RELIABILITY</span>
            <span className="text-primary font-bold">OPTIMIZED SCHEMAS</span>
          </div>
        </div>

        {/* Quad 4: DevOps, Pedagogy & AI Workflow */}
        <div className="lg:col-span-6 bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-caps text-label-caps text-primary tracking-wider">[ DOMAIN_04 ]</span>
              <span className="material-symbols-outlined text-primary text-[28px]">school</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
              DevOps, Pedagogy &amp; AI Workflow
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Conducting interactive coding bootcamps, hands-on software workshops, 1-on-1 developer
              mentorship, production Linux/Git workflows, technical SEO, and generative AI tool
              integration.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Developer Bootcamps",
                "1-on-1 Mentorship",
                "System Design Labs",
                "Code Reviews",
                "Git & GitHub",
                "Bitbucket",
                "Linux (Debian/Ubuntu)",
                "Technical SEO",
                "GitHub Copilot",
                "ChatGPT & Claude AI",
                "Antigravity with Gemini",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/30 font-code-inline text-code-inline rounded text-on-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-space-lg pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-outline font-label-caps text-[11px]">
            <span>INSTRUCTION &amp; PRACTICE</span>
            <span className="text-primary font-bold">ACTIVE TRAINER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
