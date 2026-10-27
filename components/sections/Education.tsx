import React from "react";

export function Education() {
  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            // ACADEMIC_FOUNDATION &amp; CREDENTIALS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="education-heading">
            Electronics &amp; Computing Science Foundation
          </h2>
        </div>
        <span className="font-code-body text-code-body text-on-surface-variant">UNIVERSITY DEGREES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
        {/* Degree 1: M.Sc Electronics */}
        <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/60 transition-all">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-primary text-[32px]">school</span>
              <span className="px-space-xs py-0.5 bg-primary-container/10 text-primary border border-primary-container/30 rounded font-label-caps text-label-caps">
                POSTGRADUATE
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">
              M.Sc Electronics
            </h3>
            <p className="font-code-inline text-code-inline text-primary-fixed-dim">
              UIET, CSJM University, Kanpur
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Advanced study in digital signal processing, microcontrollers, embedded computing systems,
              electronic hardware architecture, and computer communications.
            </p>
          </div>
          <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 font-code-inline text-code-inline text-outline">
            July 2019 – July 2021
          </div>
        </div>

        {/* Degree 2: B.Sc Electronics */}
        <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/60 transition-all">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-primary text-[32px]">menu_book</span>
              <span className="px-space-xs py-0.5 bg-primary-container/10 text-primary border border-primary-container/30 rounded font-label-caps text-label-caps">
                UNDERGRADUATE
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">
              B.Sc Electronics
            </h3>
            <p className="font-code-inline text-code-inline text-primary-fixed-dim">
              Zakir Husain Delhi College, Delhi University (DU)
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Rigorous foundation in electronics principles, computer logic design, semiconductor devices,
              network theory, and algorithmic problem solving.
            </p>
          </div>
          <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 font-code-inline text-code-inline text-outline">
            July 2016 – June 2019
          </div>
        </div>

        {/* Card 3: AI Development & Modern Tooling */}
        <div className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/60 transition-all">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-primary text-[32px]">psychology</span>
              <span className="px-space-xs py-0.5 bg-surface-container-highest text-on-surface font-label-caps text-label-caps">
                MODERN AI
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-xs">
              AI-Assisted Modern Tooling
            </h3>
            <p className="font-code-inline text-code-inline text-primary-fixed-dim">
              Next-Gen Developer Workflows
            </p>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>GitHub Copilot &amp; ChatGPT Automation</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Claude AI System Architecture Prompting</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary font-bold">✓</span>
                <span>Antigravity with Gemini Autonomous Workflows</span>
              </li>
            </ul>
          </div>
          <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 font-code-inline text-code-inline text-outline">
            Continuous Learning &amp; Rapid Execution
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
