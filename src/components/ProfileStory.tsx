"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, Plus } from "lucide-react";
import CameraCapture from "./CameraCapture";

const STORY_DURATION = 5000; // ms
const DEFAULT_STORY = { url: "/images/logo.jpg", uploadedAt: "" };

export default function ProfileStory() {
  const searchParams = useSearchParams();
  const adminKey = searchParams.get("admin");
  const isAdminUI = Boolean(adminKey); // presence only shows the button; the
  // real check happens server-side on upload — see app/api/stories/route.ts

  const [stories, setStories] = useState<{ url: string; uploadedAt: string }[]>([
    DEFAULT_STORY,
  ]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const fetchStories = useCallback(() => {
    fetch("/api/stories", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.stories && data.stories.length > 0) {
          setStories(data.stories);
        }
      })
      .catch(() => {
        // Keep the default fallback story on any error.
      });
  }, []);

  useEffect(() => {
    fetchStories();
    setMounted(true);
  }, [fetchStories]);

  const openViewer = () => {
    setIndex(0);
    setOpen(true);
  };

  const closeViewer = () => setOpen(false);

  const goNext = useCallback(() => {
    setIndex((prev) => {
      if (prev + 1 >= stories.length) {
        setOpen(false);
        return prev;
      }
      return prev + 1;
    });
  }, [stories.length]);

  const goPrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // Auto-advance through stories, like a real Instagram story
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(goNext, STORY_DURATION);
    return () => clearTimeout(timer);
  }, [open, index, goNext]);

  return (
    <>
      <div className="relative h-40 w-40 shrink-0">
        <button
          onClick={openViewer}
          aria-label="View story"
          className="relative h-full w-full rounded-full"
        >
          {/* Rotating gradient ring */}
          <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888,#833ab4,#f09433)]" />
          <div className="absolute inset-[3px] rounded-full bg-background" />
          <div className="absolute inset-[7px] overflow-hidden rounded-full border-2 border-white shadow-xl">
            <Image
              src="/images/face1.png"
              alt="Ritik Mishra"
              fill
              className="object-cover"
            />
          </div>
        </button>

        {/* Admin-only: add-story button. Only its VISIBILITY depends on the
            URL param — the actual upload is verified server-side. */}
        {isAdminUI && (
          <button
            onClick={() => setCameraOpen(true)}
            aria-label="Add story"
            className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white shadow-lg transition-transform hover:scale-105"
          >
            <Plus size={18} />
          </button>
        )}
      </div>

      {mounted &&
        createPortal(
          <>
            {open && (<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8">
          <div className="relative h-[90vh] w-[min(90vw,520px)] max-w-[520px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
            {/* Segmented progress bar — one segment per story */}
            <div className="absolute left-4 right-4 top-4 z-20 flex gap-1.5">
              {stories.map((s, i) => (
                <div
                  key={s.url}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/30"
                >
                  {i < index && <div className="h-full w-full bg-white" />}
                  {i === index && (
                    <div
                      key={`${s.url}-${open}`}
                      className="h-full origin-left rounded-full bg-white"
                      style={{
                        animation: `story-progress ${STORY_DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="absolute left-5 top-10 z-20 flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-white/50">
                <Image
                  src="/images/face1.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-white">Ritik Mishra</span>
            </div>

            <button
              onClick={closeViewer}
              aria-label="Close story"
              className="absolute right-5 top-10 z-20 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={26} />
            </button>

            {/* Large hero-style story */}
            <div className="relative h-full w-full bg-black">
              <Image
                src={stories[index].url}
                alt="Story"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
              />

              {/* Subtle readability gradient */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

              {/* Tap zones */}
              <div className="absolute inset-0 flex">
                <button
                  aria-label="Previous story"
                  onClick={goPrev}
                  className="h-full w-1/3"
                />
                <button
                  aria-label="Next story"
                  onClick={goNext}
                  className="h-full w-2/3"
                />
              </div>
            </div>
          </div>
        </div>            )}
          </>,
          document.body
        )}

      {cameraOpen && adminKey && (
        <CameraCapture
          adminKey={adminKey}
          onClose={() => setCameraOpen(false)}
          onUploaded={fetchStories}
        />
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