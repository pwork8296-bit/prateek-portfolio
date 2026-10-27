import React from "react";

export function Testimonials() {
  const reviews = [
    {
      initials: "HM",
      quote:
        "Prateek engineered both our stock management ERP and our file upload server API. The inventory tracking system runs smoothly with zero downtime and eliminated all our billing discrepancies.",
      author: "Operations Director",
      company: "Hotel Mahal AIIMS Management",
    },
    {
      initials: "DA",
      quote:
        "The dual storefront and custom admin dashboard Prateek developed for Deepkalp Ayurveda gave us complete control over our catalog, payments, and dispatch logistics. Highly recommended!",
      author: "E-Commerce Head",
      company: "Deepkalp Ayurveda Healthcare",
    },
    {
      initials: "RE",
      quote:
        "Prateek conducted an intensive Python & FastAPI backend training cohort for our developers while auditing our portal. His teaching clarity is exceptional, transforming junior coders into confident API architects.",
      author: "Tech Lead & Advisory Team",
      company: "The RERA Expert Consultancy",
    },
  ];

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            // CLIENT_VERIFICATIONS &amp; COHORT_ENDORSEMENTS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="testimonials-heading">
            Trusted by Founders, Engineering Teams &amp; Students
          </h2>
        </div>
        <span className="font-code-body text-code-body text-on-surface-variant">VERIFIED FEEDBACK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/60 transition-all"
          >
            <div>
              <div className="flex items-center gap-1 text-primary mb-space-sm">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface italic mb-space-md">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>
            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/40 flex items-center justify-center font-bold text-primary font-headline-sm">
                {rev.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[16px] text-on-surface font-semibold leading-tight">
                  {rev.author}
                </span>
                <span className="font-code-inline text-[12px] text-on-surface-variant">
                  {rev.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
