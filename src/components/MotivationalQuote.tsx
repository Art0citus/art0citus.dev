"use client";

import { useEffect, useState } from "react";
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

export default function MotivationalQuote() {
  // Start with a fixed quote so server and client render identically on
  // the first pass, then swap to a random one after mount (client-only).
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <section className="flex justify-center bg-background px-4 py-32">
      <div className="w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#6DD8F8] p-10 text-center shadow-2xl sm:p-14">
          {/*
            All quotes are stacked in the same grid cell (row-start-1 / col-start-1).
            CSS Grid auto-sizes the row to fit the TALLEST child automatically,
            so the card's height is always exactly as tall as the longest quote
            needs — no matter which one is currently showing, and no hardcoded
            pixel guess required.
          */}
          <div className="relative z-10 mx-auto grid max-w-2xl">
            {quotes.map((q) => (
              <div
                key={q.text}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  q.text === quote.text
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                aria-hidden={q.text !== quote.text}
              >
                <p className="text-2xl font-medium italic leading-relaxed text-slate-900 sm:text-3xl">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="mt-6 text-sm uppercase tracking-widest text-slate-700">
                  &mdash; {q.author}
                </p>
              </div>
            ))}
          </div>

          {/* Spider-Man, carried over from the old loading screen */}
          <Image
            src="/gifs/spidy.gif"
            alt=""
            width={140}
            height={140}
            unoptimized
            className="pointer-events-none absolute -bottom-4 -right-2 z-0 opacity-90 sm:w-[160px]"
          />
        </div>
      </div>
    </section>
  );
}