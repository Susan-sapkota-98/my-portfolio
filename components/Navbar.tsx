"use client";

import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  act,
} from "react";
import { MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("Home"); // initial active
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "Home", ref: document.getElementById("home") },
        { id: "About", ref: document.getElementById("about") },
        { id: "Projects", ref: document.getElementById("projects") },
        { id: "Skills", ref: document.getElementById("skills") },
        { id: "Resume", ref: document.getElementById("resume") },
        { id: "Contact Us", ref: document.getElementById("contact") },
      ];

      const scrollMiddle = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i].ref;
        if (sec) {
          // Use offsetTop + offsetHeight/2 for better detection
          if (scrollMiddle >= sec.offsetTop) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMenuLink = (href: string, itemName: string) => (
    <div
      key={itemName}
      className="relative"
      onClick={() => setActive(itemName)}
    >
      <Link href={href}>
        <MenuItem setActive={setActive} active={active} item={itemName} />
      </Link>
    </div>
  );

  const toggleTheme = () => {
    if (!mounted) return;
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 bg-white bg-opacity-80 backdrop-blur-md px-6 py-3 rounded-md shadow-md flex items-center justify-between",
        className
      )}
    >
      <div className="logo text-xl font-bold text-gry-700 cursor-pointer">
        <Link href="/">
          Susan Sapkota <br />
          {active === "Home" && <span className="text-green-500">Hello!</span>}
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 relative" ref={containerRef}>
        {/* Underline indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-0 h-0.5 rounded transition-all duration-300 ease-out"
          style={{
            width: 0,
            transform: "translateX(0)",
            backgroundColor: "#2563eb",
            opacity: 0,
          }}
        />

        {renderMenuLink("#home", "Home")}
        {renderMenuLink("#about", "About")}
        {renderMenuLink("#projects", "Projects")}
        {renderMenuLink("#skills", "Skills")}
        {renderMenuLink("#resume", "Resume")}
        {renderMenuLink("#contact", "Contact Us")}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition"
        >
          {mounted ? (
            (resolvedTheme || theme) === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )
          ) : (
            <div style={{ width: 20, height: 20 }} />
          )}
        </button>

        <div className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
