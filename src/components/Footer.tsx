"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import {
    SiGithub,
    SiX,
} from "react-icons/si";

export default function Footer() {
    return (
        <footer className="flex w-full justify-center py-12">
            <div className="mx-auto w-full max-w-4xl border-t border-gray-200 px-4 sm:px-6 lg:px-8 pt-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Left */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight text-gray-900"
                        >
                            Art0<span className="text-sky-500">citus</span>
                        </Link>

                        <p className="mt-2 max-w-sm text-sm text-gray-500">
                            Building scalable backend systems, AI-powered applications, and
                            developer experiences.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
                        >
                            <SiGithub size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/ritikmxshra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
                        >
                            
                        </a>

                        <a
                            href="https://x.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
                        >
                            <SiX size={20} />
                        </a>

                        <a
                            href="mailto:mritik424@gmail.com"
                            className="rounded-full border border-gray-200 p-2 transition hover:bg-gray-100"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
                    <p>© {new Date().getFullYear()} Ritik Mishra. All rights reserved.</p>

                    <p>Built with Next.js • Tailwind CSS • TypeScript</p>
                </div>
            </div>
        </footer>
    );
}