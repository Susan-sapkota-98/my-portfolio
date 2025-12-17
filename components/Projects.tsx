"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Food-item",
      description: "This project is created using React.js.",
      link: "https://react-project-471o5b4of-susan-sapkota-98s-projects.vercel.app",
      image: "/food-react.png",
    },
    {
      title: "Music-course",
      description:
        "A streaming service offering a variety of award-winning TV shows, movies, anime, and documentaries.",
      link: "https://next-js-music-lyg3k7mel-susan-sapkota-98s-projects.vercel.app",
      image: "/next-music.png",
    },
    {
      title: "E-commerce",
      description:
        "Online shopping website built with MERN stack. Users can browse, add to cart, purchase safely, and admins can manage products and orders.",
      link: "https://e-commerce-web-ueiz-bwa15ogk8-susan-sapkota-98s-projects.vercel.app/",
      image: "/E-commerce.png",
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 -mt-170 ">
      <div className="relative text-white w-full mb-10">
        <span className="absolute top-1/4 -translate-y-1/6 left-0 text-[100px] sm:text-[120px] md:text-[100px] font-extrabold text-white/5 select-none pointer-events-none">
          Projects
        </span>

        <h2 className="relative text-4xl sm:text-5xl font-bold mb-10 text-center md:text-left text-black dark:text-white">
          Projects
        </h2>
      </div>

      <hr className="border-t-6 border-green-500 my-3" />
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block bg-black dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 mx-auto"
          >
            <div className="relative w-full h-64 md:h-72">
              <Image
                src={p.image}
                alt={`${p.title} logo`}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {p.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium underline">Visit</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
