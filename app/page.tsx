
import {
  Hero,
  Education,
  Skills,
  Testimonials,
  Contact,
  Experience,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-on-surface">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
