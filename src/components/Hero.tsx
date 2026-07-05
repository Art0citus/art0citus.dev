"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex min-h-screen w-full justify-center bg-white px-4 sm:px-6 lg:px-8">
            <div className="relative flex min-h-screen w-full max-w-4xl">
                <div className="relative mt-24 h-[420px] overflow-hidden rounded-3x1">
                    <Image
                        src="/gifs/mario.gif"
                        alt="Hero Banner"
                        width={896}
                        height={600}
                        priority
                        className="-translate-y-65"
                    />
                    <div className="relative -mt-20 ml-8 z-10">
                        <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl">
                            <Image
                                src="/images/face1.png"
                                alt="Ritik Mishra"
                                width={160}
                                height={160}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}