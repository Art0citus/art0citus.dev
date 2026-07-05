"use client";

import Link from "next/link";
import { Pixelify_Sans } from "next/font/google";

const pixel = Pixelify_Sans({
    subsets: ["latin"],
    weight: ["700"],
});
import {
    BookOpen,
    Code2,
    FolderGit2,
    Mail,
    Menu,
    User,
} from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 flex w-full justify-center px-4">
            <nav className="flex h-10 w-full max-w-4xl items-center justify-around gap-185 rounded-6xl border border-gray-200 bg-white/80 px-6 shadow-sm backdrop-blur-md">
                {/* Logo */}
                <Link
                    href="/"
                    className={`${pixel.className} text-2xl tracking-wide text-gray-900`}
                >
                    Art0<span className="text-sky-500">citus</span>
                </Link>

                {/* Menu */}
                <div className="ml-auto mr-8">
                    <Sheet>
                        <SheetTrigger
                            className="rounded-lg p-2 transition hover:bg-gray-100"
                            aria-label="Open Menu"
                        >
                            <Menu size={24} />
                        </SheetTrigger>

                        <SheetContent side="right" className="w-72">
                            <SheetHeader>
                                <SheetTitle className="text-left text-2xl font-bold">
                                    Art0citus
                                </SheetTitle>
                            </SheetHeader>

                            <nav className="mt-10 flex flex-col gap-2">
                                <a
                                    href="#about"
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100"
                                >
                                    <User size={18} />
                                    About
                                </a>

                                <a
                                    href="#skills"
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100"
                                >
                                    <Code2 size={18} />
                                    Skills
                                </a>

                                <a
                                    href="#projects"
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100"
                                >
                                    <FolderGit2 size={18} />
                                    Projects
                                </a>

                                <Link
                                    href="/blog"
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100"
                                >
                                    <BookOpen size={18} />
                                    Blog
                                </Link>

                                <a
                                    href="#contact"
                                    className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-gray-100"
                                >
                                    <Mail size={18} />
                                    Contact
                                </a>
                            </nav>

                            <div className="mt-10 border-t pt-6">
                                <p className="mb-4 text-sm text-gray-500">
                                    Connect with me
                                </p>

                                <div className="flex flex-col gap-3">
                                    <a
                                        href="https://github.com/Art0citus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 transition hover:text-black"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/ritikmxshra"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 transition hover:text-black"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}