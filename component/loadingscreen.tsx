"use client";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 21);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        {/* Loading + Progress */}
        <div className="flex w-80 flex-col items-center gap-6">
          <h1 className="text-3xl font-bold text-foreground">
            Loading...
          </h1>

          <div className="h-3 w-full overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full rounded-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* GIF */}
        <Image
          src="/spidy.gif"
          alt="Pixel Spider-Man"
          width={300}
          height={300}
          className="-mt-6"
        />
      </div>
    </div>
  );
}