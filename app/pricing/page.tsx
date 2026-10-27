import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing & Retainer Models | Prateek Kumar",
  description:
    "Explore transparent pricing models for freelance software engineering, dedicated developer retainers, custom ERP builds, and corporate software bootcamps with Prateek Kumar. Clear milestones, no hidden fees.",
};

export default function PricingPage() {
  return <Pricing />;
}
