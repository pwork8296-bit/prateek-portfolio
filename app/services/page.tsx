import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services & Solutions | Prateek Kumar",
  description:
    "Explore freelance software development services and developer training programs led by Prateek Kumar (6 yrs experience). Specializing in C++, Java, Python, PHP, Node.js, Spring Boot, FastAPI, Django, Laravel, WordPress, Next.js, and React.",
};

export default function ServicesPage() {
  return <Services />;
}
