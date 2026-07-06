"use client";

import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="flex w-full justify-center px-4 pt-24">
      <div className="relative w-full max-w-4xl overflow-hidden  border border-gray-200 shadow-lg">
        {/* Background GIF */}
        <div className="relative mt-24 h-[420px] overflow-hidden rounded-t-6xl">
          <Image
            src="/gifs/cinema.gif"
            alt="Cinema"
            fill
            priority
            unoptimized
            className="object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-37 flex flex-col justify-center p-8 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-white">
              Blog
            </p>

            <h1 className="mt-2 text-5xl font-bold">
              Thoughts, Projects & Learning
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-gray-200">
              Documenting everything I learn about backend engineering,
              distributed systems, AI, and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}