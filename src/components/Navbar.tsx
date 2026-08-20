"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import NowCard from "@/components/NowCard";
import Switch from "@/components/Switch";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const el = toggleRef.current;

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
      className={`sticky top-0 z-50 flex w-full justify-center px-4 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-20"
        }`}
    >
      <nav className="relative flex h-16 w-full max-w-4xl items-center justify-between bg-white px-4 transition-colors sm:px-6 dark:bg-background">
        {/* Left: pill */}
        <NowCard />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/#work"
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
            href="/contact"
            className="text-sm text-neutral-500 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 transition hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Theme switch */}
          <div
            ref={toggleRef}
            onClick={toggleTheme}
            className="shrink-0 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Switch
              isChecked={resolvedTheme === "dark"}
              onChange={() => { }}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute left-2 right-2 top-[68px] z-50 rounded-6xl border border-border/70 bg-background/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-5 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted"
              >
                Home
              </Link>

              <Link
                href="/#work"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-5 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted"
              >
                Work
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-5 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-5 py-4 text-base font-medium text-foreground transition-all duration-200 hover:bg-muted"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}