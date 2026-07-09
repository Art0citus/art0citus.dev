"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex w-full justify-center py-0">
            <div className="mx-auto w-full max-w-4xl border-t border-gray-200 px-4 sm:px-6 lg:px-8 pt-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Left */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold "
                        >
                            Art0<span className="text-red-500">citus</span>
                        </Link>


                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="group rounded-2xl  bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                        >
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={22}
                                height={22}
                                className="transition duration-300 dark:invert"
                            />
                        </a>

                        <a
                            href="https://linkedin.com/in/ritikmxshra"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="group rounded-2xl bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={22}
                                height={22}
                                className="transition duration-300 dark:invert"
                            />
                        </a>

                        <a
                            href="https://x.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                            className="group rounded-2xl bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                        >
                            <Image
                                src="/icons/x.svg"
                                alt="X"
                                width={22}
                                height={22}
                                className="transition duration-300 dark:invert"
                            />
                        </a>

                        <a
                            href="mailto:mritik424@gmail.com"
                            aria-label="Email"
                            className="group rounded-2xl  bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                        >
                            <Image
                                src="/icons/envelope.svg"
                                alt="Email"
                                width={22}
                                height={22}
                                className="transition duration-300 dark:invert"
                            />
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