"use client";

import { useEffect, useState } from "react";

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
        <div className="rounded-3xl   text-center  sm:p-14">
          <p className="text-2xl font-medium italic leading-relaxed sm:text-3xl">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
            &mdash; {quote.author}
          </p>
        </div>
      </div>
    </section>
  );
}
