"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const STORY_DURATION = 5000; // ms

export default function ProfileStory() {
  const [open, setOpen] = useState(false);

  // Auto-close after the story duration, like a real Instagram story
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => setOpen(false), STORY_DURATION);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="View story"
        className="relative h-40 w-40 shrink-0 rounded-full"
      >
        {/* Rotating gradient ring */}
        <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888,#833ab4,#f09433)]" />

        {/* Gap so the ring reads as a ring, not a filled disc */}
        <div className="absolute inset-[3px] rounded-full bg-background" />

        {/* Avatar */}
        <div className="absolute inset-[7px] overflow-hidden rounded-full border-2 border-white shadow-xl">
          <Image
            src="/images/face1.png"
            alt="Ritik Mishra"
            fill
            className="object-cover"
          />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close story"
            className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
          >
            <X size={28} />
          </button>

          <div
            className="relative h-[70vh] w-[90vw] max-w-md overflow-hidden rounded-2xl bg-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Story progress bar */}
            <div className="absolute left-4 right-4 top-4 z-10 h-1 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full origin-left rounded-full bg-white"
                style={{
                  animation: `story-progress ${STORY_DURATION}ms linear forwards`,
                }}
              />
            </div>

            <div className="absolute left-4 top-9 z-10 flex items-center gap-2">
              <div className="h-7 w-7 overflow-hidden rounded-full border border-white/50">
                <Image
                  src="/images/face1.png"
                  alt=""
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-white">
                Ritik Mishra
              </span>
            </div>

            <Image
              src="/images/logo.png"
              alt="Spidy Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes story-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
