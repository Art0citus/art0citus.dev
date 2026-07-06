"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import HealthBar from "@/components/HealthBar";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 flex w-full justify-center px-4">
            <div className="relative w-full max-w-4xl">

                {/* Navbar */}
                <nav className="flex h-10 items-center justify-around gap-120  border border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">

                    {/* Logo */}
                    <HealthBar />

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 transition hover:bg-gray-100"
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </nav>

                {/* Sidebar */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                )}
                <aside
                    className={`absolute right-0 top-0 z-50 h-screen w-1/2 overflow-y-auto bg-white shadow-xl transition-all duration-300 ${isOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0 pointer-events-none"
                        }`}
                >

                    <nav className="flex flex-col gap-2 p-6">
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

                </aside>
            </div>
        </header>
    );
}