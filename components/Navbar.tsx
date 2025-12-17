"use client";

import React, { useRef, useState, useEffect } from "react";
import { MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* ================= Scroll Active Section ================= */
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
        if (sec && scrollMiddle >= sec.offsetTop) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Menu Item Renderer ================= */
  const renderMenuLink = (href: string, itemName: string) => (
    <div
      key={itemName}
      className="relative"
      onClick={() => {
        setActive(itemName);
        setMobileOpen(false);
      }}
    >
      <Link href={href}>
        <MenuItem setActive={setActive} active={active} item={itemName} />
      </Link>
    </div>
  );

  /* ================= Theme Toggle ================= */
  const toggleTheme = () => {
    if (!mounted) return;
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 bg-white bg-opacity-80 backdrop-blur-md px-6 py-3 rounded-md shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="logo text-xl font-bold cursor-pointer">
          <Link href="/">
            Susan Sapkota <br />
            {active === "Home" && (
              <span className="text-green-500">Hello!</span>
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 relative" ref={containerRef}>
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-0.5 rounded transition-all duration-300"
          />
          {renderMenuLink("#home", "Home")}
          {renderMenuLink("#about", "About")}
          {renderMenuLink("#projects", "Projects")}
          {renderMenuLink("#skills", "Skills")}
          {renderMenuLink("#resume", "Resume")}
          {renderMenuLink("#contact", "Contact Us")}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition"
          >
            {mounted ? (
              (resolvedTheme || theme) === "dark" ? (
                "🌞"
              ) : (
                "🌙"
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
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
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white rounded-md shadow-lg py-4 flex flex-col items-center gap-4">
          {renderMenuLink("#home", "Home")}
          {renderMenuLink("#about", "About")}
          {renderMenuLink("#projects", "Projects")}
          {renderMenuLink("#skills", "Skills")}
          {renderMenuLink("#resume", "Resume")}
          {renderMenuLink("#contact", "Contact Us")}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
