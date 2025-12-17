import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/moving-border";

function About() {
  return (
    <section id="about" className=" flex max-w-4xl mx-auto px-6 py-16 mt-200">
      <hr className="border-t-6 border-green-500 my-3" />
      <br />

      <div className="flex flex-col items-start gap-4 mt-18">
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/aboutme.png"
            alt="profile_pic"
            width={900}
            height={800}
            className="object-cover w-full h-auto"
            priority
          />
        </div>

        <div className="text-base md:text-xl mt-18 w-full max-w-md ">
          <h2 className="whitespace-normal">
            <strong>Name: </strong> Susan Sapkota
          </h2>
          <br />

          <h2 className="whitespace-normal">
            <strong>Education: </strong> Undergraduate in Computer Engineering
          </h2>
          <br />

          <h2 className="whitespace-normal">
            <strong>Address: </strong> Buddhabhumi-09, Imiliya, Kapilvastu
          </h2>
        </div>

        <div className="mt-6">
          <Button className="bg-green-500 dark:bg-slate-900 text-white dark:text-white px-6 py-3 text-2xl rounded-lg">
            <a
              href="https://www.linkedin.com/in/susan-sapkota-9373b91b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center"
            >
              Linkedin
            </a>
          </Button>
        </div>
      </div>

      <div className="items-center md:items-start gap-10 mt-18 ml-4">
        <div className="relative w-full mb-10">
          <span className="absolute top-14 -translate-y-1/2 left-0 text-[100px] sm:text-[140px] md:text-[180px] font-extrabold text-white/5 select-none pointer-events-none">
            About
          </span>

          <h2 className="relative text-5xl font-bold mb-10 md:text-left whitespace-nowrap text-center">
            About Me
          </h2>
        </div>

        <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-4xl">
          Hello!{" "}
          <span className="font-extrabold text-gray-900 dark:text-white ">
            I’m Susan
          </span>
          , a dedicated Computer Engineering student at Purwanchal Campus,
          Dharan, under Tribhuvan University. I’m passionate about technology
          and driven to create innovative solutions through software
          development. Throughout my studies, I have gained a strong foundation
          in programming, data structures, algorithms, and computer systems,
          with hands-on experience in languages like Python, C++, and
          JavaScript. I enjoy building projects that challenge my
          problem-solving skills and help me grow as a developer. I’m eager to
          apply my knowledge in real-world scenarios, collaborate with
          like-minded professionals, and continue learning in the ever-evolving
          tech landscape. When I’m not coding, I love exploring new
          technologies, reading tech blogs, and occasionally hiking to clear my
          mind. Feel free to explore my portfolio and get in touch if you want
          to connect or work together!
        </p>
      </div>
    </section>
  );
}

export default About;
