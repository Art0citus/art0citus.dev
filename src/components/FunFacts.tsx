"use client";

import { useRef } from "react";
import Stack from "@/components/ui/Stack";
import FunFactCard from "@/components/FunFactCard";

const books = [
  { image: "/images/book1.png", title: "  " },
  { image: "/images/book2.jpg", title: "  " },
  { image: "/images/book3.jpg", title: "  " },
];

const movies = [
  { image: "/images/movie1.jpg", title: " " },
  { image: "/images/movie2.jpg", title: " " },
  { image: "/images/movie3.png", title: " " },
];

export default function FunFacts() {
  const bookCards = books.map((b) => <FunFactCard key={b.title} {...b} />);
  const movieCards = movies.map((m) => <FunFactCard key={m.title} {...m} />);

  const flipAudioTemplateRef = useRef<HTMLAudioElement | null>(null);

  const playFlipSound = () => {
    if (typeof window === "undefined") return;

    try {
      if (!flipAudioTemplateRef.current) {
        flipAudioTemplateRef.current = new Audio("/audio/flipcard.mp3");
        flipAudioTemplateRef.current.volume = 0.5;
      }
      // Clone a fresh instance for every play instead of reusing one
      // element. Reusing + resetting currentTime races when this fires
      // more than once in quick succession (common during drag-release),
      // where the second play() call can abort the first mid-playback.
      const sound = flipAudioTemplateRef.current.cloneNode(
        true
      ) as HTMLAudioElement;
      sound.volume = 0.5;
      sound.play().catch(() => {
        // Autoplay blocked before any user interaction — safe to ignore.
      });
    } catch {
      // Audio unsupported/blocked — fail silently.
    }
  };

  return (
    <section
      id="personal"
      className="flex justify-center bg-background px-4 pt-32 pb-48"
    >
      <div className="flex w-full max-w-4xl flex-col items-start gap-12">
        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-sans text-5xl whitespace-nowrap">
              Personal
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            A few things I love outside of code.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 items-start justify-items-center gap-6 sm:flex sm:justify-center sm:gap-24">

          {/* Books */}
          <div className="flex w-full flex-col items-center gap-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Books
            </h3>

            <div
              className="h-56 w-full max-w-[160px] shrink-0 sm:h-72 sm:w-64 sm:max-w-none"
              onPointerUp={playFlipSound}
            >
              <Stack
                cards={bookCards}
                randomRotation
                sensitivity={150}
                sendToBackOnClick
                mobileClickOnly
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </div>

          {/* Movies */}
          <div className="flex w-full flex-col items-center gap-4">
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Movies
            </h3>

            <div
              className="h-56 w-full max-w-[160px] shrink-0 sm:h-72 sm:w-64 sm:max-w-none"
              onPointerUp={playFlipSound}
            >
              <Stack
                cards={movieCards}
                randomRotation
                sensitivity={150}
                sendToBackOnClick
                mobileClickOnly
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}