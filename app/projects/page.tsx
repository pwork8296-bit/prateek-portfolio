import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Featured Projects & Architectures | Prateek Kumar",
  description:
    "Explore live production deployments, custom ERPs, REST API microservices, Pick-to-Light warehouse systems, and e-commerce platforms engineered by Prateek Kumar.",
};

export default function ProjectsPage() {
  return <Projects />;
}
