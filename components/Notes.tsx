"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Button } from "@/components/ui/stateful-button";

export function Notes() {
  const handleClick = () => {
    return new Promise((resolve) => {
      window.open("https://github.com/Susan-sapkota-98");
      setTimeout(resolve, 4000);
    });
  };

  return (
    <div className="mt-5 md:mt-40 lg:mt-60 relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }} // start slightly lower
          animate={{ y: 0, opacity: 1 }} // move upward slowly
          transition={{ duration: 1.5, ease: "easeOut" }} // slow upward animation
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
            More Projects on <ColourfulText text="Github" /> <br />
            <p className="text-xs sm:text-sm md:text-2xl mt-2">
              I love to solve problems & uncover hidden data stories
            </p>
          </h1>
          <div className="flex h-32 sm:h-36 md:h-40 w-full items-center justify-center mt-4">
            <Button
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl"
              onClick={handleClick}
            >
              GITHUB
            </Button>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
}
