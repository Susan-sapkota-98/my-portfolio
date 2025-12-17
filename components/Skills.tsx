"use client";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Python", icon: <SiPython className="text-blue-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-teal-400" /> },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 left-0 text-[10px] sm:text-[20px] md:text-[100px] font-extrabold text-white/5 select-none pointer-events-none">
          Skills
        </span>
        <h2 className="relative text-5xl font-bold mb-10 md:text-left">
          Skills
        </h2>
      </div>

      <hr className="border-t-6 border-green-500 my-3" />
      <br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map(({ name, icon }) => (
          <motion.div
            key={name}
            className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl">{icon}</div>
            <span className="text-lg font-semibold dark:text-white">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
