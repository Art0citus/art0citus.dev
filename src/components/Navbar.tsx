"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Clock from "@/components/Clock";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-30 flex w-full justify-center px-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-4xl">
        <nav className="flex h-10 items-center justify-between border border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/80">
          <Clock />

          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}