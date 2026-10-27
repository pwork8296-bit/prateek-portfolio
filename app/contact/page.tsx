import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | Prateek Kumar",
  description:
    "Get in touch with Prateek Kumar for freelance software development contracts, custom ERPs, REST APIs, or corporate developer training bootcamps.",
};

export default function ContactPage() {
  return <Contact />;
}
