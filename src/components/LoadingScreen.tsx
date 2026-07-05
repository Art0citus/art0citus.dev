"use client";
import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Pixelify_Sans } from "next/font/google";


const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import Image from "next/image";


type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  {/*const [isLoading, setIsLoading] = useState(true);*/ }
  useEffect(() => {
    audioRef.current = new Audio("/audio/spidy.mp3");
    audioRef.current.volume = 0.3;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Pause for 300ms after reaching 100%
          setTimeout(() => {
            // Start fade-out animation
            setIsFading(true);

            // Wait for fade animation to finish (500ms)
            setTimeout(() => {
              // Remove loading screen
              onComplete();
            }, 500);
          }, 300);

          return 100;
        }

        return prev + 1;
      });
    }, 21); // Matches  Spider-Man GIF

    return () => {
      clearInterval(interval);

      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);
  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsMuted((prev) => !prev);
  };
  {/*if (!isLoading) {
  return <h1>Home Page</h1>;
  }*/}
  return (
    <div className="flex inset-0 z-50 w-full justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div
        className={`relative flex min-h-screen w-full max-w-4xl items-center justify-center overflow-hidden bg-[#6ED7F6] transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"
          }`}
      ><button
        onClick={toggleSound}
        className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30 sm:right-6 sm:top-6 sm:p-3"
      >
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
        <Image
          src="/images/skyline.png"
          alt="New York Skyline"
          width={1600}
          height={100}
          className="absolute bottom-0 left-0 w-[180%] max-w-none h-auto z-0  animate-skyline"
        />
        <div className="flex flex-col items-center">

          {/* Loading + Progress */}
          <div className="flex w-80 flex-col items-center gap-6">
            <div className="flex w-full items-center justify-between">
              <h1 className={`${pixel.className} text-2xl sm:text-3xl text-foreground`}>
                Loading Portfolio
              </h1>

              <span className={`${pixel.className} text-xl sm:text-2xl text-foreground`}>
                {progress}%
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-white duration-100 duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* GIF */}
          <Image
            src="/gifs/spidy.gif"
            alt="Pixel Spider-Man"
            width={300}
            height={300}
            className="-mt-6"
          />
        </div>
      </div>
    </div>
  );
}