"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import Switch from "@/components/Switch"; // Adjust path as needed

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const toggleRef = useRef<HTMLDivElement>(null);

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

  // Single source of truth for toggling the theme.
  // Triggers the circle-reveal View Transition from the toggle's position.
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const el = toggleRef.current;

    // Fallback for browsers without View Transitions support (e.g. Firefox)
    if (!el || !document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const { top, left, width, height } = el.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full justify-around gap-120 px-4 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-20"
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
              href="/Contact"
              className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-15">
          {/* Search */}
          <button
            className="
              hidden
              min-w-[100px]
              items-center
              gap-1
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
            <span>Ctrl+</span>
            <kbd className="rounded  px-1 text-sm dark:border-neutral-600">
              K
            </kbd>
          </button>

          {/* Theme Toggle - Custom Switch */}
          <div
            ref={toggleRef}
            onClick={toggleTheme}
            className="cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Switch
              isChecked={resolvedTheme === "dark"}
              onChange={() => {}}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}