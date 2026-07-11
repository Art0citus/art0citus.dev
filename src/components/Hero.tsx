"use client";

import Image from "next/image";

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
    pb-32
    sm:px-6
    lg:px-8
  "
        >
            <div className="relative h-[850px] w-full max-w-4xl">

                {/* Banner */}
                <div className="relative mt-24 h-[420px] overflow-hidden rounded-3xl">
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
                    <div className="group h-40 w-40 [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                            {/* Front */}
                            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl [backface-visibility:hidden]">
                                <Image
                                    src="/images/face1.png"
                                    alt="Ritik Mishra"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Back */}
                            <div className="absolute inset-0 overflow-hidden rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <Image
                                    src="/images/logo.png"
                                    alt="Spidy Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>
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


                    <div className="absolute left-0 top-[395px]">
                        <p className=" mt-2 text-2xl">
                            Building Scalable Backend Systems
                        </p>
                    </div>

                    <div className="absolute left-0 top-[430px]">
                        <p className=" mt-6 max-w-2xl text-lg leading-8">
                        Building web and mobile applications, especially scalable backend systems.
                        Creating scalable software with a strong focus on backend engineering and solving real-world problems
                        </p>
                    </div>
                    <div className="absolute left-0 top-[600px]">
                        <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500">
                            <span>📍 Delhi, India</span>
                            <span>💼 Open to Work</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    );
}