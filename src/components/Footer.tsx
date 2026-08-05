"use client";

import Link from "next/link";
import Image from "next/image";

const socials = [
    { href: "https://github.com/Art0citus", label: "GitHub", icon: "/icons/github.svg" },
    { href: "https://linkedin.com/in/ritikmxshra", label: "LinkedIn", icon: "/icons/linkedin.svg" },
    { href: "https://x.com/Art0citus", label: "X", icon: "/icons/x.svg" },
    { href: "mailto:mritik424@gmail.com", label: "Email", icon: "/icons/envelope.svg" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-background">
            {/* Top divider — now spans the full viewport width */}
            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />

            <div className="w-full px-8 py-12 sm:px-10 lg:px-16">
                <div className="flex flex-col items-center gap-6 pt-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
                    {/* Wordmark */}
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
                    >
                        Art0<span className="text-#6DD8F8">citus</span>
                    </Link>

                    {/* Socials — flat icons, no cards/shadows */}
                    <div className="flex items-center gap-5">
                        {socials.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="opacity-50 transition-opacity duration-200 hover:opacity-100"
                            >
                                <Image
                                    src={icon}
                                    alt=""
                                    width={17}
                                    height={17}
                                    className="dark:invert"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-neutral-400 dark:text-neutral-600 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} Ritik Mishra</p>
                    <p className="tracking-wide">Next.js &middot; Tailwind &middot; TypeScript</p>
                </div>
            </div>
        </footer>
    );
}