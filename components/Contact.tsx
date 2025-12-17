import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative text-center text-white px-4 sm:px-6 lg:px-0 max-w-5xl mx-auto py-20"
    >
      <span className="absolute  top-1/4 left-0 -translate-y-1/2 text-[100px] sm:text-[140px] md:text-[180px] font-extrabold text-white/5 select-none pointer-events-none w-full text-center">
        Contact
      </span>

      <h1 className="relative text-4xl sm:text-5xl font-bold mb-10 text-black dark:text-white">
        Contact Me
      </h1>

      <p className="relative mb-8 sm:mb-10 text-gray-400">
        Below are the details to reach out to me!
      </p>

      <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32">
        <div className="flex flex-col items-center">
          <Avatar className="bg-gray-800 w-16 h-16 sm:w-20 sm:h-20 mb-4">
            <AvatarImage
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Address Icon"
            />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="text-lg text-gray-700 sm:text-xl font-semibold">
            ADDRESS
          </span>
          <br />
          <span className="text-lg text-gray-500 sm:text-2xl text-center break-words">
            Buddhabhumi-09, Imiliya Kapilvastu
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Avatar className="bg-gray-800 w-16 h-16 sm:w-20 sm:h-20 mb-4">
            <AvatarImage
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email Icon"
            />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
          <span className="text-lg text-gray-700 sm:text-xl font-semibold">
            EMAIL ADDRESS
          </span>
          <span className="text-lg text-gray-500 sm:text-2xl break-words text-center">
            <Link href="mailto:susansapkota986@gmail.com">
              susansapkota986@gmail.com
            </Link>
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Avatar className="bg-gray-800 w-16 h-16 sm:w-20 sm:h-20 mb-4">
            <AvatarImage
              src="https://github.com/github.png"
              alt="GitHub Icon"
            />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <span className="text-sm sm:text-xl text-gray-700 font-semibold">
            GITHUB
          </span>
          <span className="text-lg sm:text-2xl break-words text-center">
            <Link
              className="text-gray-500"
              href="https://github.com/Susan-sapkota-98"
            >
              Github Link
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
