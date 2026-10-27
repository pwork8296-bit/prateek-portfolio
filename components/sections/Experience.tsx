import React from "react";

export function Experience() {
  const experiences = [
    {
      role: "Freelance Software Developer & Tech Trainer",
      company: "Independent Practice & Developer Training Cohorts // Global & Domestic Clients",
      period: "2025 — PRESENT",
      tag: "INDEPENDENT CONTRACTOR & TECHNICAL TRAINER",
      summary:
        "Architecting custom web applications, high-performance REST APIs, ERP systems, and modern full-stack web solutions for clients, while conducting specialized developer bootcamps, 1-on-1 coding mentorship, and corporate technical training.",
      highlights: [
        "Engineered modular FastAPI microservices and backend provider templates deployed on cloud PaaS environments with automated OpenAPI documentation.",
        "Built custom ERP and stock management systems for hospitality and institutional clients using Laravel, PHP, and MySQL.",
        "Conducted practical developer bootcamps and university masterclasses in Python, FastAPI, Django, Laravel, and React.js, mentoring 800+ aspiring engineers.",
        "Provided personalized 1-on-1 code reviews, architectural consultations, and interview readiness coaching for professional developers.",
      ],
      skills: [
        "FastAPI",
        "Django",
        "Laravel",
        "React.js",
        "Tech Bootcamps",
        "1-on-1 Mentorship",
        "PostgreSQL",
      ],
      current: true,
    },
    {
      role: "Backend Developer",
      company: "Swipewire Technologies, Chennai, Tamil Nadu",
      period: "Feb 2023 — Feb 2025",
      tag: "BACKEND ENGINEERING & MENTORSHIP",
      summary:
        "Spearheaded backend systems and RESTful API engineering across client enterprise platforms, focusing on speed, transaction security, cross-team frontend integrations, and engineering mentorship.",
      highlights: [
        "Developed web applications, REST APIs, frontend integrations, payment modules, dashboards, and enterprise business solutions.",
        "Built high-reliability backend systems and RESTful APIs using Laravel, Django, React.js, and Vanilla JS.",
        "Mentored junior engineers in clean code design, RESTful API conventions, database normalization, and Git collaboration workflows.",
      ],
      skills: [
        "Laravel",
        "Django",
        "React.js",
        "Code Mentorship",
        "Payment Gateways",
        "MySQL",
      ],
      current: false,
    },
    {
      role: "Web Developer",
      company: "Streamy Pvt. Ltd., East Patel Nagar, New Delhi",
      period: "Mar 2022 — Feb 2023",
      tag: "WEB DEVELOPMENT ROLE",
      summary:
        "Delivered full-lifecycle web applications, interactive 3D web features, and event-based architectures for diverse client verticals.",
      highlights: [
        "Developed web applications, REST APIs, frontend integrations, payment modules, dashboards, and custom business solutions.",
        "Created responsive websites for clients and handled event-based web applications with Core PHP, WordPress, Laravel, Three.js, Vanilla JS, and jQuery.",
        "Conducted internal technical knowledge-sharing sessions on Three.js 3D rendering and responsive DOM optimization.",
      ],
      skills: [
        "Core PHP",
        "WordPress",
        "Laravel",
        "Three.js",
        "jQuery",
        "Vanilla JS",
      ],
      current: false,
    },
    {
      role: "Web Developer & Technical SEO Specialist",
      company: "Webfries Pvt. Ltd., Gurgaon, Haryana",
      period: "Aug 2021 — Feb 2022",
      tag: "WEB DEVELOPMENT & SEO ROLE",
      summary:
        "Built performant websites while executing technical SEO audits, schema markup implementation, Core Web Vitals optimization, and indexing strategies.",
      highlights: [
        "Developed web applications, REST APIs, frontend integrations, payment modules, dashboards, and business solutions.",
        "Created websites for clients using Core PHP, WordPress, Vanilla JS, and jQuery while conducting technical SEO and audit implementations.",
        "Boosted client organic search visibility and mobile PageSpeed scores through clean semantic markup and asset optimization.",
      ],
      skills: [
        "Technical SEO",
        "Core PHP",
        "WordPress",
        "jQuery",
        "Vanilla JS",
      ],
      current: false,
    },
  ];

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="flex flex-col gap-space-xs mb-space-2xl">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
          // CAREER_TRAJECTORY (5+ yEARS)
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="experience-heading">
          Proven Track Record in Freelance Engineering &amp; Software Training
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A chronology of delivering scalable backend architectures, high-traffic consumer websites, and
          mission-critical business portals while mentoring and training engineering cohorts.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 md:pl-10 border-l border-outline-variant/50 flex flex-col gap-space-2xl">
        {experiences.map((exp, idx) => (
          <article key={idx} className="relative">
            {/* Crosshair Pin */}
            <div
              className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded flex items-center justify-center ${
                exp.current
                  ? "bg-primary-container shadow-[0_0_12px_rgba(220,38,38,0.7)]"
                  : "bg-surface-bright border border-outline"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  exp.current ? "bg-on-primary-container" : "bg-outline"
                }`}
              ></div>
            </div>

            <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 hover:border-primary-container/60 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-space-sm">
                <div>
                  <span
                    className={`font-label-caps text-label-caps uppercase ${
                      exp.current ? "text-primary" : "text-outline"
                    }`}
                  >
                    [ {exp.tag} ]
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    {exp.role}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`px-space-sm py-space-xs bg-surface-container-high rounded font-code-inline text-code-inline w-max ${
                    exp.current ? "text-primary font-semibold" : "text-on-surface-variant"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-space-sm">
                {exp.summary}
              </p>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-space-xs">
                    <span className="text-primary font-bold mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-space-xs">
                {exp.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-surface-container-highest font-code-inline text-[12px] rounded text-on-surface"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
