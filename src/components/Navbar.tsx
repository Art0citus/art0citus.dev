"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, Briefcase, Newspaper, Mail } from "lucide-react";
import NowCard from "@/components/NowCard";
import Switch from "@/components/Switch";

const mobileNavItems = [
  { href: "/", label: "Home", icon: Home, match: (p: string) => p === "/" },
  { href: "/#work", label: "Work", icon: Briefcase, match: () => false },
  { href: "/blog", label: "Blog", icon: Newspaper, match: (p: string) => p.startsWith("/blog") },
  { href: "/contact", label: "Contact", icon: Mail, match: (p: string) => p.startsWith("/contact") },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const toggleRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
    <>
      <header
        className={`sticky top-0 z-50 flex w-full justify-center px-4 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-20"
          }`}
      >
        <nav className="relative flex h-16 w-full max-w-4xl items-center justify-between bg-white px-4 transition-colors sm:px-6 dark:bg-background">
          {/* Left side: pill + desktop navigation */}
          <div className="flex items-center gap-8">
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
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">

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

        </nav>
      </header>

      {/* Mobile bottom tab bar — replaces the old hamburger menu.
          Hidden at md+ where the desktop nav links (above) take over. */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="flex h-16 items-stretch justify-around">
          {mobileNavItems.map(({ href, label, icon: Icon, match }) => {
            const active = match(pathname);

            return (
              <li key={label} className="flex-1">
                <Link
                  href={href}
                  className="relative flex h-full w-full flex-col items-center justify-center gap-1"
                >
                  {active && (
                    <span className="absolute top-0 h-0.5 w-8 rounded-full bg-primary" />
                  )}

                  <Icon
                    size={20}
                    strokeWidth={active ? 2.4 : 1.8}
                    className={active ? "text-primary" : "text-muted-foreground"}
                  />

                  <span
                    className={`text-[11px] leading-none ${active ? "font-medium text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}