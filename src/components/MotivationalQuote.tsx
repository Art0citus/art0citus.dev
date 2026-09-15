"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg" },
];

function CloudPuff() {
  return (
    <svg viewBox="0 0 100 50" className="h-auto w-full fill-white">
      <ellipse cx="50" cy="35" rx="45" ry="14" />
      <circle cx="30" cy="24" r="17" />
      <circle cx="55" cy="17" r="21" />
      <circle cx="78" cy="27" r="15" />
    </svg>
  );
}

export default function MotivationalQuote() {
  // Start with a fixed quote so server and client render identically on
  // the first pass, then swap to a random one after mount (client-only).
  const [quote, setQuote] = useState<typeof quotes[0] | null>(() => quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    // Quote is initialized via useState initializer function
  }, []);

  const spidyAudioRef = useRef<HTMLAudioElement | null>(null);

  const playSpidySound = () => {
    if (typeof window === "undefined") return;

    try {
      if (!spidyAudioRef.current) {
        spidyAudioRef.current = new Audio("/audio/spidy.mp3");
        spidyAudioRef.current.volume = 0.4;
      }
      spidyAudioRef.current.currentTime = 0;
      spidyAudioRef.current.play().catch(() => {
        // Autoplay blocked before any user interaction — safe to ignore.
      });
    } catch {
      // Audio unsupported/blocked — fail silently.
    }
  };

  const stopSpidySound = () => {
    const audio = spidyAudioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div className="flex w-full justify-center px-4">
      <section
        className="relative h-[380px] w-full max-w-4xl overflow-hidden rounded-7xl bg-[#6DD8F8] sm:h-[480px] md:h-[560px]"
        onMouseEnter={playSpidySound}
        onMouseLeave={stopSpidySound}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background to-transparent sm:w-24 md:w-32" />

<div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background to-transparent sm:w-24 md:w-32" />
        {/* Cloud/wave divider — softens the hard rectangular edge where the
            blue scene meets the page background above it. Filled with the
            page's own background color so it reads as clouds sitting at
            the top of the sky, and follows light/dark mode automatically.
            The path is drawn twice back-to-back (2880 wide = two 1440-wide
            copies) so the animate-wave-drift loop has no visible seam. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-8 overflow-hidden sm:h-12">
          <svg
            className="animate-wave-drift h-full w-[200%]"
            viewBox="0 0 2880 60"
            preserveAspectRatio="none"
          >
            <path
              className="fill-background"
              d="M0,30 Q60,0 120,30 T240,30 T360,30 T480,30 T600,30 T720,30 T840,30 T960,30 T1080,30 T1200,30 T1320,30 T1440,30 T1560,30 T1680,30 T1800,30 T1920,30 T2040,30 T2160,30 T2280,30 T2400,30 T2520,30 T2640,30 T2760,30 T2880,30 L2880,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* A few small clouds drifting through the sky at different speeds/
            delays for a bit of parallax depth, sitting behind the quote
            box and Spider-Man. */}
        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
          <div
            className="animate-cloud-drift absolute w-16 opacity-80 sm:w-20"
            style={{ top: "14%", animationDuration: "26s", animationDelay: "-6s" }}
          >
            <CloudPuff />
          </div>
          <div
            className="animate-cloud-drift absolute w-10 opacity-70 sm:w-14"
            style={{ top: "26%", animationDuration: "34s", animationDelay: "-18s" }}
          >
            <CloudPuff />
          </div>
          <div
            className="animate-cloud-drift absolute w-20 opacity-60 sm:w-28"
            style={{ top: "8%", animationDuration: "44s", animationDelay: "-30s" }}
          >
            <CloudPuff />
          </div>
        </div>

        {/* Quote box on top, Spider-Man swinging just below/off its edge —
            the web thread already drawn into the gif does the rest of the
            work making it read as "swinging from the box." */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 pb-16 pt-6 sm:pb-24 sm:pt-8 md:pb-28">
          {/*
            All quotes are stacked in the same grid cell (row-start-1 / col-start-1).
            CSS Grid auto-sizes the row to fit the TALLEST child automatically,
            so the box's height is always exactly as tall as the longest quote
            needs — no matter which one is currently showing, and no hardcoded
            pixel guess required.
          */}
          <div className="relative z-10 grid w-full max-w-2xl rounded-2xl border-4 border-white bg-[#6DD8F8] px-6 py-5 text-center shadow-xl sm:rounded-3xl sm:px-10 sm:py-7">
            {quotes.map((q) => (
              <div
                key={q.text}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center transition-opacity duration-300 ${q.text === quote?.text
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                  }`}
                aria-hidden={q.text !== quote?.text}
              >
                <p className="text-base font-medium italic leading-relaxed text-slate-900 sm:text-xl md:text-2xl">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-slate-700 sm:text-sm">
                  &mdash; {q.author}
                </p>
              </div>
            ))}
          </div>

          <Image
            src="/gifs/spidy.gif"
            alt=""
            width={160}
            height={160}
            unoptimized
            className="pointer-events-none relative -mt-4 w-24 select-none sm:-mt-6 sm:w-32 md:-mt-8 md:w-40"
          />
        </div>

        {/* Skyline — pinned to the bottom edge, scrolling left-to-right forever. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-16 overflow-hidden sm:h-24 md:h-32">
          <div className="animate-skyline flex h-full w-max">
            <img
              src="/images/skyline.png"
              alt=""
              className="h-full w-auto shrink-0 object-contain object-bottom"
            />
            <img
              src="/images/skyline.png"
              alt=""
              aria-hidden="true"
              className="h-full w-auto shrink-0 object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </div>
  );
}