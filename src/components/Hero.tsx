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
            <div className="absolute left-50 top-[230px]">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Ritik Mishra
          </h1>
          </div>
          <div className="absolute left-120 top-[240px]">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            @Art0citus
          </h1>
          </div>
          
          <div className="absolute left-50 top-[280px]">
            <p className="mt-2 text-xl text-gray-500">
            Software Engineer • Backend Engineer • AI Enthusiast
          </p>
          </div>
          
            <div className="absolute left-10 top-[340px]">
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I build scalable backend systems, AI-powered applications, and
            developer tools. Passionate about distributed systems, cloud
            computing, AI, and building products that solve real-world
            problems.
          </p>
          </div>
            <div className="absolute left-10 top-[450px]">
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