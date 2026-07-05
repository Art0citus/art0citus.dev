"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-screen w-full justify-center bg-white px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col w-full max-w-4xl">
                <div className="relative mt-24 h-[420px] overflow-hidden rounded-3xl">
                    <Image
                        src="/gifs/mario.gif"
                        alt="Hero Banner"
                        fill
                        priority
                        className="-translate-y-50"
                    />
                </div>
                <div className="absolute left-8 top-14 translate-y-1/2 z-20">
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
                            <div className="absolute inset-0 flex items-center justify-center rounded-full shadow-x2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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
            </div>
        </section>
    );
}