"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PtlSimulatorModal } from "./PtlSimulatorModal";

export function Projects() {
  const [isPtlModalOpen, setIsPtlModalOpen] = useState(false);

  const projects = [
    {
      id: "fastapi-template",
      title: "FastAPI Template API Provider",
      subtitle: "Scalable REST API Microservice",
      desc: "Production-ready asynchronous FastAPI template server featuring modular routing, automatic OpenAPI / Swagger documentation, Pydantic data validation, and Docker container readiness.",
      tags: ["FastAPI", "Python", "REST API", "Swagger", "Render"],
      status: "LIVE API ENGINE",
      version: "PYTHON 3.11",
      link: "https://my-fastapi-template.onrender.com/",
      linkLabel: "my-fastapi-template.onrender.com",
      badge: "LIVE DEPLOY",
    },
    {
      id: "file-upload-api",
      title: "File Upload Server & API",
      subtitle: "Secure Asset Ingestion Service",
      desc: "Dedicated high-throughput file upload backend managing multipart binary streaming, MIME validation, thumbnail generation, and secure asset distribution for Hotel Mahal AIIMS.",
      tags: ["REST API", "Multipart", "Asset Storage", "Security"],
      status: "CLOUD STORAGE API",
      version: "v1.2.0",
      link: "https://apiapp.hotelmahalaiims.com/",
      linkLabel: "apiapp.hotelmahalaiims.com",
      badge: "SECURE HTTPS",
    },
    {
      id: "rera-experts",
      title: "Rera Experts Legal Portal",
      subtitle: "Real Estate Regulatory Platform",
      desc: "Client-facing regulatory and advisory portal for RERA compliance, dispute filing, property verifications, legal case indexing, and organic technical SEO search capture.",
      tags: ["PHP", "Laravel", "MySQL", "Technical SEO", "Legal Tech"],
      status: "LIVE PRODUCTION",
      version: "SEO RANKED",
      link: "https://www.reraexperts.com/",
      linkLabel: "www.reraexperts.com",
      badge: "ACTIVE PORTAL",
    },
    {
      id: "makkhan-chor",
      title: "Laddu Gopal E-Commerce (Makkhan Chor)",
      subtitle: "Retail Marketplace & Logistics Store",
      desc: "High-concurrency religious idols, accessories, and devotional products e-commerce store with dynamic inventory tracking, Razorpay payment gateway, and SMS shipping alerts.",
      tags: ["E-Commerce", "Laravel", "React", "Razorpay", "MySQL"],
      status: "RETAIL PRODUCTION",
      version: "HIGH CONCURRENCY",
      link: "https://makkhanchor.com/",
      linkLabel: "makkhanchor.com",
      badge: "CONSUMER E-COM",
    },
    {
      id: "deepkalp-ayurveda",
      title: "Deepkalp Ayurveda E-Commerce & Admin ERP",
      subtitle: "Herbal Healthcare & Stock Management",
      desc: "Dual storefront and comprehensive admin ERP system managing product SKU matrices, batch expiry dates, order dispatch manifests, and multi-state tax invoicing.",
      tags: ["Full-Stack ERP", "PHP", "Laravel", "MySQL", "Inventory"],
      status: "ENTERPRISE ERP",
      version: "DUAL STOREFRONT",
      link: "https://deepkalpayurveda.com/",
      linkLabel: "deepkalpayurveda.com",
      badge: "B2C & B2B ERP",
    },
    {
      id: "hotel-mahal-erp",
      title: "Hotel Mahal AIIMS Stock Management ERP",
      subtitle: "Hospitality Inventory & Kitchen Requisition",
      desc: "Custom on-premise stock ledger and POS tracking pantry consumables, linen inventories, laundry billing, supplier requisitions, and daily room service expense auditing.",
      tags: ["Laravel", "PHP", "MySQL", "POS Ledger", "Hospitality"],
      status: "CLIENT INTERNAL ERP",
      version: "ON-PREM / CLOUD",
      link: "https://apiapp.hotelmahalaiims.com/",
      linkLabel: "Hotel Mahal ERP System",
      badge: "PRIVATE SYSTEM",
    },
    {
      id: "germination-school",
      title: "Germination Mission School ERP",
      subtitle: "Institutional Student Information System",
      desc: "Complete campus management suite for admissions, student attendance, report card generation, teacher allocations, fee fee collections, and parent notification dispatch.",
      tags: ["School ERP", "Laravel", "PHP", "MySQL", "Reporting"],
      status: "CAMPUS ERP",
      version: "MULTI-ROLE",
      link: "#projects",
      linkLabel: "Germination Mission School ERP",
      badge: "EDUCATION ERP",
    },
    {
      id: "matcha-gardening",
      title: "Matcha & Gardening Tools Web Applications",
      subtitle: "Niche Direct-to-Consumer Portals",
      desc: "Bespoke e-commerce web applications built with high-speed landing funnels, custom cart checkouts, Three.js 3D product previews, and technical search engine optimization.",
      tags: ["React.js", "Three.js", "Node.js", "Technical SEO", "E-Com"],
      status: "ECOMMERCE WEB APPS",
      version: "3D ANIMATIONS",
      link: "#projects",
      linkLabel: "DTC Tooling Portals",
      badge: "HIGH CONVERSION",
    },
  ];

  return (
    <>
      <section
        className="w-full max-w-[1280px] mx-auto px-margin py-space-2xl border-t border-outline-variant/30 scroll-mt-24"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              // PORTFOLIO_SHOWCASE // VERIFIED RUNTIMES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold" id="projects-heading">
              Live Production Deployments &amp; APIs
            </h2>
          </div>
          <span className="font-code-body text-code-body text-on-surface-variant">
            ACTIVE CLIENT &amp; CLOUD DEPLOYMENTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/80 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="px-2 py-0.5 bg-primary-container/10 text-primary border border-primary-container/30 rounded font-label-caps text-[10px] uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    {proj.status}
                  </span>
                  <span className="font-code-inline text-[11px] text-outline">{proj.version}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="font-code-inline text-code-inline text-primary-fixed-dim mt-0.5 mb-space-sm">
                  {proj.subtitle}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-surface-container-highest font-code-inline text-[11px] rounded text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
                <Link
                  className="font-label-md text-label-md text-primary hover:text-secondary-fixed flex items-center gap-1 group-hover:underline"
                  href={proj.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`Visit ${proj.title}`}
                >
                  <span className="truncate max-w-[190px]">{proj.linkLabel}</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </Link>
                <span className="font-code-inline text-[11px] text-outline">{proj.badge}</span>
              </div>
            </article>
          ))}

          {/* Project 9: PTL System for Inventory (Pick-To-Light Warehouse ERP) */}
          <article
            className="bg-surface-container p-space-lg rounded-xl border border-outline-variant/40 flex flex-col justify-between hover:border-primary-container/80 transition-all group relative"
            id="project-ptl-card"
          >
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="px-2 py-0.5 bg-primary-container/10 text-primary border border-primary-container/30 rounded font-label-caps text-[10px] uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  SMART INVENTORY // IOT
                </span>
                <span className="font-code-inline text-[11px] text-outline">NEXT.JS + FASTAPI</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors">
                PTL System for Inventory
              </h3>
              <p className="font-code-inline text-code-inline text-primary-fixed-dim mt-0.5 mb-space-sm">
                Pick-to-Light Warehouse &amp; Fulfillment ERP
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                High-velocity Pick-To-Light (PTL) warehouse fulfillment system engineered with Next.js and
                FastAPI. Orchestrates real-time light-guided bin picking, SKU barcode scanning, IoT rack
                controller dispatch via WebSockets, and sub-second inventory ledger reconciliation.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-space-md">
                {["Next.js", "FastAPI", "Python", "WebSockets", "PostgreSQL", "Warehouse ERP"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-surface-container-highest font-code-inline text-[11px] rounded text-on-surface"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="pt-space-sm border-t border-outline-variant/30 flex items-center justify-between">
              <button
                className="font-label-md text-label-md text-primary hover:text-secondary-fixed flex items-center gap-1.5 group-hover:underline cursor-pointer bg-transparent border-0 p-0 text-left"
                id="open-ptl-demo-btn"
                type="button"
                aria-label="Open Live PTL System Simulator and Architecture"
                onClick={() => setIsPtlModalOpen(true)}
              >
                <span>Interactive Demo &amp; Blueprint</span>
                <span className="material-symbols-outlined text-[16px]">sensors</span>
              </button>
              <span className="font-code-inline text-[11px] text-outline">PRODUCTION SYSTEM</span>
            </div>
          </article>
        </div>
      </section>

      {/* PTL Simulator Interactive Modal */}
      <PtlSimulatorModal
        isOpen={isPtlModalOpen}
        onClose={() => setIsPtlModalOpen(false)}
      />
    </>
  );
}

export default Projects;
