import { HoverEffect } from "./ui/card-hover-effect";

const educationItems = [
  {
    title: "2023-2027",
    description:
      "Bachelor in Computer Engineering, IOE, Purwanchal Campus, Dharan",
  },
  {
    title: "2020-2022",
    description:
      "Higher Secondary School at Shree Secondary School, Imiliya",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-60">
      <div className="relative w-full mb-10">
        <span className="absolute top-1/4 -translate-y-1/6 left-0 text-[100px] sm:text-[100px] md:text-[100px] font-extrabold text-white/5 select-none pointer-events-none">
          Education
        </span>

        <h2 className="relative text-4xl sm:text-5xl font-bold mb-10 text-center md:text-left">
          Education
        </h2>
      </div>

      <hr className="border-t-6 border-green-500 my-3" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {educationItems.map(({ title, description }) => (
          <div
            key={title}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-800 dark:text-gray-300 ">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
