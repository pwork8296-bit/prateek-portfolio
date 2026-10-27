import React from "react";
import Link from "next/link";

export function Pricing() {
  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="flex flex-col items-center text-center gap-space-xs mb-space-2xl">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
          // TRANSPARENT_CONTRACT_MODELS
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="pricing-heading">
          Flexible Freelance Contracts &amp; Training Retainers
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Transparent project milestones, dedicated freelance developer retainers, and corporate technical
          training intensives tailored to your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg items-stretch">
        {/* Tier 1: Sprint Milestone or 1-on-1 Mentorship */}
        <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              [ TIER_01 // SPRINT OR 1-ON-1 COACHING ]
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
              Sprint Build or Mentorship
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
              Rapid development of REST APIs and microservices, or intensive 1-on-1 developer coaching
              and architectural code audits.
            </p>
            <div className="flex items-baseline gap-1 my-space-md">
              <span className="font-display-hero text-headline-lg font-extrabold text-on-surface">
                Milestone
              </span>
              <span className="font-label-md text-label-md text-outline">/ or session block</span>
            </div>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-sm border-t border-outline-variant/30">
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>FastAPI, Django, or Laravel API sprint</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>1-on-1 developer coaching &amp; code reviews</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Database schema &amp; query optimization</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Swagger / Postman API documentation</span>
              </li>
            </ul>
          </div>
          <Link
            className="mt-space-lg w-full py-space-sm bg-surface-container-high hover:bg-surface-bright text-on-surface border border-outline-variant/40 font-label-md text-label-md rounded uppercase tracking-wider text-center transition-colors block"
            href="/contact?tier=sprint"
          >
            Inquire for Sprint / Coaching
          </Link>
        </div>

        {/* Tier 2: Dedicated Freelance Retainer (RECOMMENDED) */}
        <div className="relative bg-surface-container-high p-space-lg rounded-xl border-2 border-primary-container flex flex-col justify-between shadow-[0_0_30px_-5px_rgba(220,38,38,0.3)]">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-sm py-0.5 bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase rounded-full shadow-md tracking-wider">
            RECOMMENDED CONTRACT
          </div>
          <div>
            <span className="font-label-caps text-label-caps text-primary uppercase">
              [ TIER_02 // DEDICATED FREELANCE DEV ]
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
              Dedicated Engineering Retainer
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
              Dedicated freelance engineering power for continuous feature shipping, backend
              maintenance, API development, and frontend builds.
            </p>
            <div className="flex items-baseline gap-1 my-space-md">
              <span className="font-display-hero text-headline-lg font-extrabold text-on-surface">
                Monthly
              </span>
              <span className="font-label-md text-label-md text-outline">/ contract retainer</span>
            </div>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-sm border-t border-outline-variant/40">
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Full-Stack PR delivery (FastAPI, Django, Laravel, React)</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Custom ERP &amp; API architecture development</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Direct Slack, Bitbucket &amp; Jira collaboration</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>High-priority response &amp; ongoing bug fixes</span>
              </li>
            </ul>
          </div>
          <Link
            className="mt-space-lg w-full py-space-sm bg-primary-container hover:bg-secondary-container text-on-primary-container font-label-md text-label-md rounded uppercase tracking-wider text-center transition-all shadow-[0_0_20px_-3px_rgba(220,38,38,0.5)] block"
            href="/contact?tier=retainer"
          >
            Retain Prateek
          </Link>
        </div>

        {/* Tier 3: Corporate Bootcamps & Full Platform */}
        <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              [ TIER_03 // CORPORATE TRAINING &amp; FULL BUILDS ]
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
              Corporate Bootcamps or Turnkey Build
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
              Comprehensive multi-week software training bootcamps for engineering teams OR full-cycle
              custom ERP and platform builds.
            </p>
            <div className="flex items-baseline gap-1 my-space-md">
              <span className="font-display-hero text-headline-lg font-extrabold text-on-surface">
                Cohort / Turnkey
              </span>
              <span className="font-label-md text-label-md text-outline">/ tailored scope</span>
            </div>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-sm border-t border-outline-variant/30">
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Multi-week team bootcamps in Python, Django, FastAPI &amp; React</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Complete custom ERP &amp; inventory platform builds</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Live coding labs, architecture masterclasses &amp; audits</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Cloud deployment, SSL certification &amp; technical SEO</span>
              </li>
            </ul>
          </div>
          <Link
            className="mt-space-lg w-full py-space-sm bg-surface-container-high hover:bg-surface-bright text-on-surface border border-outline-variant/40 font-label-md text-label-md rounded uppercase tracking-wider text-center transition-colors block"
            href="/contact?tier=enterprise"
          >
            Reserve Cohort or Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
