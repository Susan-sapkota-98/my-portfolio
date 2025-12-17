"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import Education from "./Education";

export default function Resume() {
  return (
    <section id="resume" className="max-w-7xl mx-auto px-6 py-160">
      <div className="relative w-full mb-10">
        <span className="absolute top-1/6 -translate-y-1/6 left-0 text-[100px] sm:text-[140px] md:text-[180px] font-extrabold text-white/5 select-none pointer-events-none">
          Resume
        </span>

        <h2 className="relative text-4xl sm:text-5xl font-bold mb-10 text-center md:text-left">
          Resume
        </h2>
      </div>

      <hr className="border-t-6 border-green-500 my-3" />
      <br />

      <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl mx-auto">
        Hello! Explore my professional journey and skills in detail by
        downloading my resume. It highlights my academic achievements, technical
        expertise, project experience, and passion for continuous learning in
        Computer Engineering. Feel free to review it to know more about my
        qualifications and how I can contribute to your team or project.
      </p>

      <div className="flex justify-center my-6">
        <Link
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button
            borderRadius="1.75rem"
            className="bg-green-500 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 px-8 py-3 text-lg"
          >
            Download Resume
          </Button>
        </Link>
      </div>

      {/* Education Section */}
      <Education />
    </section>
  );
}
