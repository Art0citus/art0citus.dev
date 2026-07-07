"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";


export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full justify-around gap-120 px-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <nav
        className="
          flex
          h-11
          w-full
          max-w-4xl
          items-center
          justify-around
          gap-120
          
          
          bg-white
          px-5
          
          
          transition-colors
          dark:bg-background
        "
      >
        {/* Left */}
        <div className="flex items-center gap-8">
          

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#projects"
              className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Work
            </Link>

            <Link
              href="/blog"
              className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Blog
            </Link>

            <Link
              href="/resume"
              className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-15">
          {/* Search */}
          <button
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-neutral-200
              px-3
              py-1.5
              text-sm
              text-neutral-500
              transition
              hover:bg-neutral-100
              dark:border-neutral-700
              dark:hover:bg-neutral-800
              md:flex
            "
          >
            <Search size={14} />

            <span>Ctrl</span>

            <kbd className="rounded border border-neutral-300 px-1 text-[10px] dark:border-neutral-600">
              K 
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              transition-all
              duration-200
              hover:bg-neutral-100
              hover:rotate-12
              dark:hover:bg-neutral-800
            "
            aria-label="Toggle Theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}