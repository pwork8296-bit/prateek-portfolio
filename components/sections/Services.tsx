import React from "react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: "api",
      title: "Freelance Backend & APIs",
      desc: "Asynchronous, high-throughput RESTful API microservices built with Python (FastAPI, Django) and PHP (Laravel, Core PHP) with JWT authentication and payment gateways.",
      items: [
        "FastAPI & Django Microservices",
        "Laravel Enterprise Endpoints",
        "JWT Auth & Cloud Deployment",
      ],
    },
    {
      icon: "devices",
      title: "Custom ERPs & Web Apps",
      desc: "Tailored inventory stock management ERPs, responsive portals, and e-commerce platforms engineered with React.js, Next.js, Node.js, and MySQL.",
      items: [
        "Stock & Inventory ERP Systems",
        "React.js & Next.js Client Apps",
        "Multi-Tenant Role Permissions",
      ],
    },
    {
      icon: "school",
      title: "Software Bootcamps & Cohorts",
      desc: "Corporate upskilling cohorts, college workshops, and intensive coding bootcamps covering Python, Django, FastAPI, Laravel, React, and Git from ground zero to production.",
      items: [
        "Hands-On Project Curriculum",
        "Full-Stack & Backend Masterclasses",
        "Corporate Team Upskilling",
      ],
    },
    {
      icon: "psychology",
      title: "1-on-1 Mentorship & Audits",
      desc: "Personalized engineering guidance, architectural code reviews, debugging sessions, interview readiness, and technical SEO performance audits.",
      items: [
        "Personalized Code Audits",
        "System Design & Architecture",
        "Technical SEO & Speed Audits",
      ],
    },
  ];

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col gap-space-xs mb-space-2xl">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
          // FREELANCE_SERVICES &amp; TRAINING_PROGRAMS
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="services-heading">
          Freelance Engineering &amp; Software Training Services
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          High-velocity freelance development backed by clean architectural standards, alongside
          practical, hands-on software training and bootcamps for engineering teams and aspiring
          developers.
        </p>
        <div className="pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 hover:border-primary text-primary font-label-md text-xs uppercase tracking-wider transition-all"
          >
            <span>Inquire for Custom Scope &amp; Estimation</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/70 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">{svc.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                {svc.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                {svc.desc}
              </p>
            </div>
            <ul className="flex flex-col gap-1.5 font-code-inline text-[12px] text-on-surface-variant border-t border-outline-variant/20 pt-space-sm">
              {svc.items.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  <span>▸</span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
