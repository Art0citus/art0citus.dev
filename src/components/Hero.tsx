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
                        <h1 className="font-pixelta text-6xl">
                            Ritik Mishra
                        </h1>
                    </div>
                    <div className="absolute left-201 top-[250px]">
                        <h1 className=" font-pixelta text-2xl">
                            @Art0citus
                        </h1>
                    </div>

                    <div className="absolute left-1 top-[380px]">
                        <p className=" font-pixelta mt-2 text-2xl text-gray-500">
                            Building Scalable Backend Systems
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

            </div>

        </section>

    );
}