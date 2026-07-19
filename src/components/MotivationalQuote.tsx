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
        <div className="relative overflow-hidden rounded-3xl bg-[#6DD8F8] to-slate-200 p-10 text-center shadow-2xl sm:p-14">
          <p className="relative z-10 max-w-2xl mx-auto text-2xl font-medium italic leading-relaxed text-slate-900 sm:text-3xl">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="relative z-10 mt-6 text-sm uppercase tracking-widest text-slate-700">
            &mdash; {quote.author}
          </p>

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