"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-screen w-full justify-center bg-white px-4 sm:px-6 lg:px-8">
            <div className="relative flex w-full max-w-4xl flex-col">

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
                        <h1 className="font-pixelta text-6xl">
                            Ritik Mishra
                        </h1>
                    </div>
                    <div className="absolute left-201 top-[250px]">
                        <h1 className=" font-pixelta text-2xl tracking-tight text-gray-900">
                            @Art0citus
                        </h1>
                    </div>

                    <div className="absolute left-1 top-[380px]">
                        <p className=" font-pixelta mt-2 text-2xl text-gray-500">
                            Full Stack Developer | Web & Mobile Apps
                        </p>
                    </div>

                    <div className="absolute left-0 top-[430px]">
                        <p className="font-pixelta mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            I build scalable backend systems, AI-powered applications, and
                            developer tools. Passionate about distributed systems, cloud
                            computing, AI, and building products that solve real-world
                            problems.
                        </p>
                    </div>
                    <div className="absolute left-0 top-[600px]">
                        <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-500">
                            <span>📍 Delhi, India</span>
                            <span>💼 Open to Work</span>
                        </div>
                    </div>

                </div>
                <div className="absolute left-0 top-[800px]">
                    <h2 className="mb-6 font-pixelta text-4xl">
                        Work
                    </h2>

                    <a
                        href="#projects"
                        className="group flex items-center justify-between rounded-2xl border border-transparent p-6 transition hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Featured Projects
                            </h3>

                            <p className="mt-2 max-w-xl text-gray-500">
                                Building scalable backend systems, AI-powered
                                applications and developer tools.
                            </p>
                        </div>

                        <span className="text-gray-400 transition group-hover:translate-x-1">
                            Explore →
                        </span>
                    </a>
                </div>

                <div className="absolute left-0 top-[1000px]">
                    <h2 className="mb-6 font-pixelta text-4xl">
                        Blog
                    </h2>


                    <div className="absolute left-0 top-[1200px]">
                        <h3 className="text-2xl font-semibold">
                            Learning in Public
                        </h3>

                        <p className="mt-2 max-w-xl text-gray-500">
                            Articles on software engineering,
                            backend development and AI.
                        </p>
                    </div>

                    <span className="text-gray-400 transition group-hover:translate-x-1">
                        Read →
                    </span>

                </div>

                <div className="absolute left-0 top-[1500px]">
                    <h2 className="mb-6 font-pixelta text-4xl">
                        Personal
                    </h2>

                    <a
                        href="#about"
                        className="group flex items-center justify-between rounded-2xl border border-transparent p-6 transition hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Beyond Code
                            </h3>

                            <p className="mt-2 max-w-xl text-gray-500">
                                Football, books, photography,
                                gaming and everything that shapes me.
                            </p>
                        </div>

                        <span className="text-gray-400 transition group-hover:translate-x-1">
                            Discover →
                        </span>
                    </a>
                </div>

                <div className="absolute left-0 top-[1700px]">
                    <h2 className="mb-6 font-pixelta text-4xl">
                        Development
                    </h2>

                    <a
                        href="#setup"
                        className="group flex items-center justify-between rounded-2xl border border-transparent p-6 transition hover:border-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-900"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Setup & Workflow
                            </h3>

                            <p className="mt-2 max-w-xl text-gray-500">
                                My editor, terminal, keyboard,
                                favorite tools and workflow.
                            </p>
                        </div>

                        <span className="text-gray-400 transition group-hover:translate-x-1">
                            View →
                        </span>
                    </a>
                </div>
            </div>

        </section>

    );
}