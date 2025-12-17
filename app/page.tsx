import { Hero } from "@/components/Hero";

import Image from "next/image";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import { Notes } from "@/components/Notes";
import { Contact } from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px]   min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Notes />
      <Contact />
    </div>
  );
}
