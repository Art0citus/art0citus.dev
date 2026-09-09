"use client";

import Image from "next/image";
import { Suspense } from "react";
import ProfileStory from "./ProfileStory";
import LiquidButton from "@/components/ui/LiquidButton";
import { MapPinIcon } from "@animateicons/react/lucide";

export default function Hero() {
    return (
        <section
            className="
    flex
    w-full
    justify-center
    bg-background
    text-foreground
    transition-colors
    duration-300
    px-4
    pt-24
    pb-16
    sm:px-6
    lg:px-8
  "
        >
            <div className="relative h-[680px] w-full max-w-4xl">

                {/* Banner */}
                <div className="relative mt-16 h-[260px] overflow-hidden rounded-7xl sm:mt-20 sm:h-[340px] md:mt-24 md:h-[420px]">
                    <Image
                        src="/gifs/mario.gif"
                        alt="Hero Banner"
                        fill
                        priority
                        className="-translate-y-16 object-cover sm:-translate-y-24 md:-translate-y-50"
                    />
                </div>

                {/* Profile Picture */}
                <div className="absolute left-3 top-[90px] z-20 origin-bottom-left scale-[0.68] sm:left-6 sm:top-[190px] sm:scale-80 md:left-8 md:top-14 md:scale-100 md:translate-y-1/2">
                    <Suspense fallback={null}>
                        <ProfileStory />
                    </Suspense>
                </div>

                {/* Hero Information */}
                <div className="mt-10 ml-56">
                    <div className="absolute left-0 top-[320px]">
                        <h1 className="font-sans text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                            Ritik Mishra
                        </h1>
                    </div>
                    <div className="absolute right-0 top-[192px] flex flex-col items-end gap-3 sm:top-[230px] md:left-161 md:right-auto md:flex-row md:items-center">
                        <h1 className="text-xl sm:text-2xl">
                            Get in Touch
                        </h1>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/Art0citus"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="rounded-xl bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                            >
                                <Image
                                    src="/icons/github.svg"
                                    alt="GitHub"
                                    width={18}
                                    height={18}
                                    className="dark:invert"
                                />
                            </a>

                            <a
                                href="https://linkedin.com/in/ritikmxshra"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-xl bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                            >
                                <Image
                                    src="/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                    className="dark:invert"
                                />
                            </a>

                            <a
                                href="https://x.com/Art0citus"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="rounded-xl bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                            >
                                <Image
                                    src="/icons/x.svg"
                                    alt="X"
                                    width={18}
                                    height={18}
                                    className="dark:invert"
                                />
                            </a>

                            <a
                                href="mailto:mritik424@gmail.com"
                                aria-label="Email"
                                className="rounded-xl bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                            >
                                <Image
                                    src="/icons/envelope.svg"
                                    alt="Email"
                                    width={18}
                                    height={18}
                                    className="dark:invert"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="absolute left-0 right-0 top-[395px] flex flex-col gap-3 px-5 sm:top-[395px] sm:px-0">
                        <p className="text-lg sm:text-xl md:text-2xl">
                            Building software that just works.
                        </p>

                        <p className="max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                            I enjoy turning ideas into fast, scalable web and mobile applications,
                            with a strong focus on backend engineering, clean architecture, and
                            building systems that are reliable, maintainable, and built to grow.
                            Whether it&apos;s designing APIs, working with databases, or solving
                            real-world problems, I&apos;m always looking for better ways to build software.
                        </p>
                    </div>
                    {/* Location + availability */}
                    <div className="absolute left-0 top-[590px] sm:top-[600px] md:top-[600px]">
                        <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">

                            <span className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                                <MapPinIcon size={13} />
                                Delhi, India
                            </span>

                            <span className="flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                </span>

                                Open to work
                            </span>

                        </div>
                    </div>

                    {/* Resume */}
                    <div className="absolute left-0 top-[665px] sm:top-[675px] md:top-[650px]">
                        <LiquidButton
                            href="/Ritik_Mishra_Resume.docx"
                            download
                        >
                            <Image
                                src="/icons/download.svg"
                                alt="Download"
                                width={16}
                                height={16}
                                className="dark:invert"
                            />

                            <span className="text-xs font-medium sm:text-sm">
                                Resume
                            </span>
                        </LiquidButton>
                    </div>
                </div>
            </div>
        </section>

    );
}