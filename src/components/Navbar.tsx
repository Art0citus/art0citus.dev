"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import Clock from "@/components/Clock";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Don't hide navbar while sidebar is open
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
    <>
      {/* Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 z-30 flex w-full justify-center px-4 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative w-full max-w-4xl">
          {/* Navbar */}
          <nav className="flex h-10 items-center justify-around gap-140 border border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">
            <Clock />

            <button
              onClick={() => setIsOpen(true)}
              className="rounded-lg p-2 transition hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          <nav className="flex flex-col gap-6">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}