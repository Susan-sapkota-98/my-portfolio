"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export const Hero = () => {
  const words = [
    { text: "Hi,", className: "text-3xl md:text-5xl lg:text-6xl" },
    { text: "I'M", className: "text-3xl md:text-5xl lg:text-6xl" },
    {
      text: "Susan",
      className:
        "text-Red-500 dark:text-red-500 text-3xl md:text-5xl lg:text-6xl",
    },
    {
      text: "Sapkota",
      className:
        "text-blue-500 dark:text-blue-500 text-3xl md:text-5xl lg:text-6xl",
    },
  ];

  const rotatingWords = [
    {
      text: "Learner",
      color: "text-amber-500 text-xl md:text-2xl lg:text-3xl",
    },
    {
      text: "Researcher",
      color: "text-green-500 text-xl md:text-2xl lg:text-3xl",
    },
    {
      text: "Computer Engineering Student",
      color: "text-yellow-400 text-xl md:text-2xl lg:text-3xl",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [startRotate, setStartRotate] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartRotate(true);
    }, 2800);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!startRotate) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [startRotate]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="w-full md:w-[400px] lg:w-[440px] overflow-hidden rounded-2xl flex-shrink-0">
          <div className="relative w-full h-64 md:h-[600px] lg:h-[640px]">
            <Image
              src="/profile.jpeg"
              alt="profile_pic"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex-1 flex flex-col items-start justify-center min-h-[22rem] md:min-h-[40rem]">
          <div className="w-full">
            <TypewriterEffect words={words} />
          </div>

          {startRotate && (
            <div className="flex flex-col mt-4 md:mt-6">
              <span
                className={`font-semibold mt-4 transition-all duration-500 ${rotatingWords[current].color}`}
              >
                {rotatingWords[current].text}
              </span>

              <div className="text-base md:text-2xl mt-4  space-y-1">
                <h2 className="font-medium">Student</h2>
                <h5 className="text-sm md:text-base">Computer Engineering</h5>
                <h5 className="text-sm md:text-base">
                  IOE Purwanchal campus Dharan
                </h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
