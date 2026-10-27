"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const handleDownloadCV = () => {
    const resumeText = `PRATEEK KUMAR
Freelance Software Developer & Software Teacher Trainer
Contact: +91 9721396405
Email: prateekpppp4@gmail.com
LinkedIn: https://linkedin.com/in/prateek-kumar-229599184

==================================================
SUMMARY
==================================================
Versatile Freelance Software Developer and Technical Trainer with 5+ years of hands-on experience building scalable REST APIs, custom ERPs, and full-stack web applications, while conducting coding bootcamps, workshops, and mentoring 800+ aspiring and working engineers in modern software craft.

==================================================
EDUCATION
==================================================
UIET, CSJM University, Kanpur
M.Sc Electronics (July 2019 – July 2021)

Zakir Husain Delhi College (Delhi University - DU)
B.Sc Electronics (July 2016 – June 2019)

==================================================
TECHNICAL SKILLS & PEDAGOGICAL DOMAINS
==================================================
Frontend:
HTML, CSS, JavaScript, jQuery, Ajax, Bootstrap, Tailwind CSS, Three.js, React.js, Next.js, Vanilla JS, TypeScript

Backend:
Python, FastAPI, Django, Laravel, PHP, Node.js, Express.js, Java, Spring Boot, C++, WordPress, RESTful APIs, JWT, Payment Integration

Databases:
MySQL, MySQL Workbench, phpMyAdmin, MongoDB, PostgreSQL

Teaching & Mentorship:
Corporate Coding Bootcamps, 1-on-1 Mentorship, System Design Labs, Code Reviews, Curriculum Engineering

Tools & DevOps:
Git, GitHub, Bitbucket, Jira, Linux, Socket.io, Pusher, Technical SEO, Payment Gateways

AI Tools:
GitHub Copilot, ChatGPT, Claude AI, Antigravity with Gemini

==================================================
WORK EXPERIENCE
==================================================
1. Freelance Software Developer & Software Teacher Trainer (2025 – Present)
- Developing end-to-end web applications, custom ERPs, REST APIs, and microservices for international and domestic clients.
- Conducting structured coding bootcamps and workshops in Python, FastAPI, Django, Laravel, and React.js, mentoring 800+ engineers and students.
- Providing 1-on-1 code reviews, architectural consultations, and interview readiness coaching.

2. Swipewire Technologies, Chennai, Tamil Nadu — Backend Developer & Technical Mentor
(February 2023 – February 2025)
- Developed web applications, REST APIs, frontend integrations, payment modules, dashboards and business solutions.
- Built backend systems and RESTful APIs using Laravel, Django, React.js, and Vanilla JS.
- Mentored junior engineers in clean code design, RESTful API conventions, and Git workflows.

3. Streamy Pvt. Ltd., East Patel Nagar, New Delhi — Web Developer
(March 2022 – February 2023)
- Developed web applications, REST APIs, frontend integrations, payment modules, dashboards and business solutions.
- Created websites for clients and handled event-based web applications with Core PHP, WordPress, Laravel, Three.js, Vanilla JS, and jQuery.
- Conducted internal technical knowledge-sharing sessions on Three.js 3D rendering and responsive DOM optimization.

4. Webfries Pvt. Ltd., Gurgaon — Web Developer, SEO
(August 2021 – February 2022)
- Developed web applications, REST APIs, frontend integrations, payment modules, dashboards and business solutions.
- Created websites for clients using Core PHP, WordPress, Vanilla JS, and jQuery while conducting technical SEO.

==================================================
FEATURED PROJECTS & VERIFIED RUNTIMES
==================================================
• FastAPI Template API Provider Server: https://my-fastapi-template.onrender.com/
• File Upload Server & API: https://apiapp.hotelmahalaiims.com/
• Rera Experts (Legal Compliance Portal): https://thereraexpert.com/
• Laddu Gopal E-Commerce (Makkhan Chor): https://makkhanchor.com/
• Matcha Web Application: https://matcha-eight-sigma.vercel.app
• Gardening Tools Web Application: https://gardening-tools-alpha.vercel.app
• Deepkalp Ayurveda E-Commerce & Admin ERP: https://deepkalpayurveda.com/ & https://deepkalpayurveda.com/admin
• Hotel Mahal Stock Management ERP: https://admin.hotelmahalaiims.com/
• Germination Mission School ERP: https://germinationmissionschool.com
• PTL System for Inventory (Pick-to-Light ERP): Next.js & FastAPI Microservices
`;
    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Prateek_Kumar_Freelance_Developer_and_Trainer_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative w-full max-w-[1280px] mx-auto px-margin py-space-xl overflow-hidden scroll-mt-24"
      id="about"
      aria-labelledby="hero-title"
    >
      {/* Ambient Glow Elements */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container border border-outline-variant/40 rounded-full w-max shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary">
              SYS.STATUS: Available for Freelance Contracts &amp; Developer Training Cohorts
            </span>
          </div>

          <h1
            className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface font-extrabold tracking-tight leading-tight"
            id="hero-title"
          >
            Prateek Kumar —{" "}
            <span className="text-primary-container underline decoration-primary-container/40 underline-offset-8">
              Freelance Developer
            </span>{" "}
            &amp; Software Teacher Trainer
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            5+ years of battle-tested engineering experience architecting scalable REST APIs, ERP
            systems, and e-commerce platforms using{" "}
            <strong className="text-on-surface font-semibold">
              FastAPI, Django, Laravel, Node.js, React.js
            </strong>
            , and modern Technical SEO — paired with high-impact corporate coding bootcamps, hands-on
            software workshops, and 1-on-1 developer mentorship.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
            <Link
              className="px-space-md py-space-sm bg-primary-container hover:bg-secondary-container text-on-primary-container font-label-md text-label-md rounded uppercase tracking-wider transition-all shadow-[0_0_25px_-4px_rgba(220,38,38,0.45)] inline-flex items-center gap-space-xs"
              href="/projects"
            >
              <span>Explore Live Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/50 font-label-md text-label-md rounded uppercase tracking-wider transition-all inline-flex items-center gap-space-xs"
              href="/contact"
            >
              <span>Hire Freelancer</span>
              <span className="material-symbols-outlined text-[18px]">contact_mail</span>
            </Link>
            <Link
              className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-primary border border-primary-container/40 font-label-md text-label-md rounded uppercase tracking-wider transition-all inline-flex items-center gap-space-xs"
              href="/services"
            >
              <span>Book Training</span>
              <span className="material-symbols-outlined text-[18px]">school</span>
            </Link>
            <button
              className="px-space-sm py-space-sm bg-transparent hover:text-primary text-on-surface-variant font-label-md text-label-md rounded transition-colors inline-flex items-center gap-space-xs cursor-pointer"
              id="download-cv-btn"
              type="button"
              aria-label="Download Prateek Kumar's Resume"
              onClick={handleDownloadCV}
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>[ Download CV ]</span>
            </button>
          </div>
        </div>

        {/* Right Bio Node Tile */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md bg-surface-container-low p-space-sm rounded-xl border border-outline-variant/60 shadow-2xl">
            <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30 text-on-surface-variant font-label-caps text-label-caps">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                DEV_NODE: PRATEEK-KUMAR
              </span>
              <span>STATUS: ACTIVE // PROD &amp; TRAINER</span>
            </div>

            {/* Developer Profile Card */}
            <div className="relative mt-space-sm aspect-square w-full rounded overflow-hidden bg-surface-container-highest">
              <Image
                alt="Prateek Kumar - Freelance Software Developer and Software Teacher Trainer"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAgObyoiAeGB7lLOu16AvHww9z-ukO94LNEB_P7DGuw8OEWPPr7KcmL5aojlEL23j44ebyQo6rE6RvGj7cTjEWI5JRVnHfy8OgcjlZRFHMvYlJOuWSfHgc4uvkLUi1El8OR3sMhm52RJS_eZ6tts2q-II0H7OHrnUGzpfhkq30hLnhyE-WrkRUy3FDsDoJY7GP_GPbaj_YixAQZ_UtA6DftqQkdqrFlngLIUPqrFNVpgBKBfvXLWSp"
                width={400}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-space-sm left-space-sm right-space-sm flex items-center justify-between bg-surface-container/90 backdrop-blur-md p-space-sm rounded border border-outline-variant/40">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">
                    Prateek Kumar
                  </span>
                  <span className="font-code-inline text-code-inline text-primary mt-1">
                    Freelance Dev<br />
                    &amp; Tech Trainer
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-primary-container/20 text-primary-fixed border border-primary-container/40 font-label-caps text-[10px] rounded uppercase">
                  VERIFIED
                </span>
              </div>
            </div>

            {/* Contact Credentials */}
            <div className="grid grid-cols-2 gap-space-xs mt-space-sm pt-space-xs border-t border-outline-variant/30 text-on-surface-variant font-code-inline text-code-inline">
              <div className="flex flex-col">
                <span className="text-outline text-[11px] uppercase">Core Tech</span>
                <span className="text-on-surface">FastAPI, Django, Laravel, React</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-outline text-[11px] uppercase">Direct Dispatch</span>
                <Link className="text-primary hover:underline font-semibold" href="tel:+919721396405">
                  +91 9721396405
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benchmarks & Metrics Strip */}
      <div className="mt-space-2xl grid grid-cols-2 md:grid-cols-4 gap-gutter bg-surface-container-low p-space-md rounded-xl border border-outline-variant/40 shadow-sm">
        <div className="flex flex-col p-space-xs border-l-2 border-primary-container">
          <span className="font-display-hero text-headline-lg lg:text-[44px] font-extrabold text-on-surface tracking-tight leading-none">
            5+
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
            Years Production &amp; Teaching
          </span>
        </div>
        <div className="flex flex-col p-space-xs border-l-2 border-primary-container">
          <span className="font-display-hero text-headline-lg lg:text-[44px] font-extrabold text-on-surface tracking-tight leading-none">
            10+
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
            Deployed Production Systems
          </span>
        </div>
        <div className="flex flex-col p-space-xs border-l-2 border-primary-container">
          <span className="font-display-hero text-headline-lg lg:text-[44px] font-extrabold text-on-surface tracking-tight leading-none">
            800+
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
            Engineers &amp; Students Mentored
          </span>
        </div>
        <div className="flex flex-col p-space-xs border-l-2 border-primary-container">
          <span className="font-display-hero text-headline-lg lg:text-[44px] font-extrabold text-on-surface tracking-tight leading-none">
            100%
          </span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
            On-Time Client &amp; Cohort Delivery
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
