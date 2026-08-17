"use client";

import Image from "next/image";

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
                <div className="relative mt-24 h-[420px] overflow-hidden rounded-7xl">
                    <Image
                        src="/gifs/mario.gif"
                        alt="Hero Banner"
                        fill
                        priority
                        className="-translate-y-50 object-cover"
                    />
                </div>

                {/* Profile Picture */}
                <div className="absolute left-8 top-14 z-20 translate-y-1/2">
                    <ProfileStory />
                </div>

                {/* Hero Information */}
                <div className="mt-10 ml-56">
                    <div className="absolute left-0 top-[320px]">
                        <h1 className="font-sans text-6xl font-semibold tracking-tight">
                            Ritik Mishra
                        </h1>
                    </div>
                    <div className="absolute left-155 top-[230px] flex items-center gap-3 text-foreground">
                        <h1 className=" text-2xl">
                            Get in Touch
                        </h1>
                    </div>
                    <div className="absolute left-190 top-[230px] flex items-center gap-3 text-foreground">
                        <a
                            href="https://github.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl  bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                        >
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={100}
                                height={100}
                                className="dark:invert"
                            />
                        </a>

                        <a
                            href="https://linkedin.com/in/ritikmxshra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl  bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={100}
                                height={100}
                                className="dark:invert"
                            />
                        </a>

                        <a
                            href="https://x.com/Art0citus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                        >
                            <Image
                                src="/icons/x.svg"
                                alt="X"
                                width={100}
                                height={100}
                                className="dark:invert"
                            />
                        </a>

                        <a
                            href="mailto:mritik424@gmail.com"
                            className="rounded-xl  bg-card p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-accent"
                        >
                            <Image
                                src="/icons/envelope.svg"
                                alt="Email"
                                width={100}
                                height={100}
                                className="dark:invert"
                            />
                        </a>
                    </div>

                    <div className="absolute left-0 top-[395px] flex flex-col gap-4">
                        <p className="text-2xl">
                            Building software that just works.
                        </p>

                        <p className="max-w-2xl text-lg leading-8">
                            I enjoy turning ideas into fast, scalable web and mobile applications,
                            with a strong focus on backend engineering, clean architecture, and
                            building systems that are reliable, maintainable, and built to grow.
                            Whether it's designing APIs, working with databases, or solving
                            real-world problems, I'm always looking for better ways to build software.
                        </p>
                    </div>
                    <div className="absolute left-0 top-[600px]">

                        <div className="mt-6 flex flex-wrap items-center gap-3">

                            <span className="flex items-center gap-2 rounded-full  bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700">

                                <MapPinIcon size={14} />

                                Delhi, India

                            </span>



                            <span className="flex items-center gap-2 rounded-full  bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 dark:hover:border-neutral-700">

                                <span className="relative flex h-2 w-2">

                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />

                                </span>

                                Open to work

                            </span>

                        </div>

                    </div>
                    <div className="absolute left-0 top-[650px]">
                        <LiquidButton
                            href="/Ritik_Mishra_Resume.docx"
                            download
                        >
                            <Image
                                src="/icons/download.svg"
                                alt="Download"
                                width={18}
                                height={18}
                                className="dark:invert"
                            />
                            <span className="text-sm font-medium">Resume</span>

                        </LiquidButton>
                    </div>
                </div>
            </div>
        </section>

    );
}