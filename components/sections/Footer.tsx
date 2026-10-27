import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-2xl border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg pb-space-2xl">
          {/* Col 1: Bio & Socials */}
          <div className="md:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="relative w-8 h-8 rounded overflow-hidden border border-primary-container/40 flex items-center justify-center shrink-0 bg-surface-container shadow-sm">
                <Image
                  alt="Prateek Kumar Brand Logo"
                  className="brand-logo-dark object-cover object-center"
                  src="/images/dark.jpeg"
                  width={32}
                  height={32}
                />
                <Image
                  alt="Prateek Kumar Brand Logo"
                  className="brand-logo-light object-cover object-center"
                  src="/images/light.jpeg"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight uppercase">
                PRATEEK KUMAR
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Freelance Software Developer &amp; Software Teacher Trainer specializing in high-performance
              REST APIs, custom ERPs, developer bootcamps, and technical engineering mentorship.
            </p>
            <div className="flex items-center gap-space-sm pt-1">
              <Link
                className="w-10 h-10 rounded-lg bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary-container text-on-surface hover:text-primary flex items-center justify-center transition-all shadow-sm group"
                href="https://linkedin.com/in/prateek-kumar-229599184"
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn: https://linkedin.com/in/prateek-kumar-229599184"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                className="w-10 h-10 rounded-lg bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary-container text-on-surface hover:text-primary flex items-center justify-center transition-all shadow-sm group"
                href="mailto:prateekpppp4@gmail.com"
                title="Email: prateekpppp4@gmail.com"
                aria-label="Email"
              >
                <span
                  className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  alternate_email
                </span>
              </Link>
              <Link
                className="w-10 h-10 rounded-lg bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary-container text-on-surface hover:text-primary flex items-center justify-center transition-all shadow-sm group"
                href="tel:+919721396405"
                title="Phone: +91 9721396405"
                aria-label="Phone"
              >
                <span
                  className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  phone_in_talk
                </span>
              </Link>
            </div>
          </div>

          {/* Col 2: Core Engineering Specs & Pages */}
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              PAGES &amp; SPECIALIZATIONS
            </span>
            <div className="flex flex-col gap-1.5 font-code-inline text-xs text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors">
                ▸ Home Portfolio
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                ▸ Featured Projects
              </Link>
              <Link href="/services" className="hover:text-primary transition-colors">
                ▸ Services &amp; Solutions
              </Link>
              <Link href="/pricing" className="hover:text-primary transition-colors">
                ▸ Retainer &amp; Pricing
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                ▸ Contact Prateek
              </Link>
            </div>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-2 border-t border-outline-variant/30">
              <span className="font-code-body text-code-body">Backend: Python / FastAPI / Django</span>
              <span className="font-code-body text-code-body">Full-Stack: React.js / Laravel / Next.js</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant opacity-70 mt-1">
              High-performance production code &amp; curriculum-driven instruction.
            </p>
          </div>

          {/* Col 3: Direct Inquiry Card */}
          <div className="md:col-span-4 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              QUICK CONTACT PROTOCOL
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Available for freelance software contracts, corporate developer bootcamps, and 1-on-1 technical mentoring.
            </p>
            <div className="flex flex-col gap-2 font-code-inline text-code-inline">
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                <Link className="hover:underline" href="tel:+919721396405">
                  +91 9721396405
                </Link>
              </div>
              <div className="flex items-center gap-2 text-on-surface">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                <Link className="hover:underline" href="mailto:prateekpppp4@gmail.com">
                  prateekpppp4@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-label-caps text-label-caps border-t border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>STATUS: READY FOR FREELANCE &amp; TRAINING COHORTS</span>
          </div>
          <span>&copy; 2026 PRATEEK KUMAR. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
