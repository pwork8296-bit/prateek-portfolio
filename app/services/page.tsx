import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services & Solutions | Prateek Kumar",
  description:
    "Explore freelance software development services and developer training programs led by Prateek Kumar. Specializing in Python, FastAPI, Django, Laravel, React.js, ERP software, and technical coaching.",
};

export default function ServicesPage() {
  return <Services />;
}
