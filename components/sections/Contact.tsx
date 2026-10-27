"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "backend-api",
    phone: "",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
        {/* Left Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-surface-container p-space-lg rounded-xl border border-outline-variant/40">
          <div className="flex flex-col gap-space-xs mb-space-md">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              // TRANSMIT_PROJECT_BRIEF
            </span>
            <h2
              className="font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold"
              id="contact-heading"
            >
              Initiate Freelance Contract or Book Training
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Send your project scope or developer training requirement directly to Prateek Kumar's
              triage inbox. Response time is typically within 4-6 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-space-md rounded-lg bg-surface-container-high border border-primary-container text-on-surface flex flex-col items-center text-center gap-2">
              <span className="material-symbols-outlined text-primary text-[36px]">
                check_circle
              </span>
              <h3 className="font-headline-sm text-base font-bold text-on-surface">
                Message Transmitted Successfully!
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant max-w-md">
                Thank you, {formData.name || "friend"}. Prateek Kumar has received your project brief
                and will respond promptly via email.
              </p>
              <button
                className="mt-2 px-4 py-1.5 bg-primary-container text-white rounded text-xs font-code-inline uppercase tracking-wider cursor-pointer"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", serviceType: "backend-api", phone: "", scope: "" });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-space-md" id="project-inquiry-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-caps text-label-caps text-on-surface-variant uppercase"
                    htmlFor="client-name"
                  >
                    Your Name *
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container px-space-sm py-2 rounded font-code-inline text-code-inline text-on-surface placeholder:text-outline outline-none transition-colors"
                    id="client-name"
                    placeholder="John Doe"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-caps text-label-caps text-on-surface-variant uppercase"
                    htmlFor="client-email"
                  >
                    Email Address *
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container px-space-sm py-2 rounded font-code-inline text-code-inline text-on-surface placeholder:text-outline outline-none transition-colors"
                    id="client-email"
                    placeholder="john@company.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-caps text-label-caps text-on-surface-variant uppercase"
                    htmlFor="service-type"
                  >
                    Inquiry Requirement *
                  </label>
                  <select
                    className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container px-space-sm py-2 rounded font-code-inline text-code-inline text-on-surface outline-none transition-colors"
                    id="service-type"
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="backend-api">Freelance Backend REST API (FastAPI / Django / Laravel)</option>
                    <option value="full-stack">Freelance Full-Stack Web App (React / Next.js)</option>
                    <option value="erp-stock">Custom ERP &amp; Stock Management System</option>
                    <option value="bootcamp">Corporate Software Training / Team Bootcamp</option>
                    <option value="mentorship">1-on-1 Developer Mentorship &amp; Code Review</option>
                    <option value="retainer">Dedicated Developer Retainer (Part-time / Full-time)</option>
                    <option value="seo">Technical SEO &amp; Performance Audit</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-caps text-label-caps text-on-surface-variant uppercase"
                    htmlFor="client-phone"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container px-space-sm py-2 rounded font-code-inline text-code-inline text-on-surface placeholder:text-outline outline-none transition-colors"
                    id="client-phone"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="font-label-caps text-label-caps text-on-surface-variant uppercase"
                  htmlFor="project-scope"
                >
                  Project Scope or Training Objectives *
                </label>
                <textarea
                  className="bg-surface-container-lowest border border-outline-variant/50 focus:border-primary-container px-space-sm py-2 rounded font-code-inline text-code-inline text-on-surface placeholder:text-outline outline-none transition-colors resize-none"
                  id="project-scope"
                  placeholder="Briefly describe what you're building or training goals, technology preferences, timeline, and cohort size..."
                  required
                  rows={4}
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full py-space-sm bg-primary-container hover:bg-secondary-container text-on-primary-container font-label-md text-label-md rounded uppercase tracking-wider transition-all shadow-[0_0_20px_-3px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span>Send Inquiry Directly</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
          <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              // DIRECT_DISPATCH_CHANNELS
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Contact Coordinates
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Reach out directly via phone, email, or LinkedIn for freelance proposals, corporate
              software bootcamps, or 1-on-1 technical mentorship.
            </p>
            <div className="flex flex-col gap-space-xs font-code-inline text-code-inline mt-space-xs">
              <Link
                className="flex items-center gap-space-xs p-space-xs bg-surface-container-low hover:bg-surface-container-high rounded text-on-surface transition-colors"
                href="tel:+919721396405"
                aria-label="Call Prateek Kumar directly"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  phone_in_talk
                </span>
                <span>+91 9721396405</span>
              </Link>
              <Link
                className="flex items-center gap-space-xs p-space-xs bg-surface-container-low hover:bg-surface-container-high rounded text-on-surface transition-colors"
                href="mailto:prateekpppp4@gmail.com"
                aria-label="Email Prateek Kumar"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  alternate_email
                </span>
                <span>prateekpppp4@gmail.com</span>
              </Link>
              <Link
                className="flex items-center gap-space-xs p-space-xs bg-surface-container-low hover:bg-surface-container-high rounded text-on-surface transition-colors"
                href="https://linkedin.com/in/prateek-kumar-229599184"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Prateek Kumar on LinkedIn"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">link</span>
                <span>linkedin.com/in/prateek-kumar-229599184</span>
              </Link>
              <div className="flex items-center gap-space-xs p-space-xs bg-surface-container-low rounded text-on-surface">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <span>New Delhi &amp; Kanpur, India (Open to Remote Worldwide)</span>
              </div>
            </div>
          </div>

          {/* Technical SEO & Code Assurance Note */}
          <div className="bg-surface-container-low p-space-lg rounded-xl border border-primary-container/40 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-center gap-2 text-primary mb-1">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider">
                ENGINEERING &amp; PEDAGOGY ASSURANCE
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Fast Turnaround &amp; High Availability
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant my-space-xs">
              Every line of code is structured for high maintainability, strict typing, security, and
              top-tier Google search engine performance. Available for immediate freelance contracts
              and developer training cohorts.
            </p>
            <span className="font-label-caps text-[11px] text-primary block mt-2">
              Available for Immediate Engagement
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
