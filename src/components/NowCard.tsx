"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

type SpotifyTrack = {
  isPlaying: boolean;
  name: string;
  artist: string;
  albumImage: string | null;
  url: string;
};

function getGreeting(hour: number) {
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

export default function NowCard() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clock — client-only, updates every 30s. Starts null to avoid hydration mismatch.
  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Spotify data once on mount, refresh every 60s while the card exists.
  useEffect(() => {
    const fetchTrack = () => {
      fetch("/api/spotify")
        .then((res) => (res.ok ? res.json() : null))
        .then(setTrack)
        .catch(() => setTrack(null));
    };
    fetchTrack();
    const interval = setInterval(fetchTrack, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const timeLabel = now
    ? now
        .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
        .toLowerCase()
    : "--:--";

  const dateLabel = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-8 items-center rounded-full bg-neutral-100 px-3 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
      >
        {timeLabel}
      </button>

      {open && (
        <div className="absolute left-0 top-12 z-[60] w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Greeting */}
          <div className="flex items-center justify-between px-4 pt-4">
            <p className="text-sm font-semibold">{getGreeting(now?.getHours() ?? 12)}</p>
            <p className="text-sm text-muted-foreground">{timeLabel}</p>
          </div>
          <p className="px-4 pb-4 text-xs text-muted-foreground">{dateLabel}</p>

          <div className="h-px w-full bg-border" />

          {/* Last played */}
          <div className="px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {track?.isPlaying ? "Now playing" : "Last played"}
            </p>

            {track ? (
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
              >
                {track.albumImage ? (
                  <Image
                    src={track.albumImage}
                    alt={track.name}
                    width={40}
                    height={40}
                    className="shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-muted" />
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{track.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{track.artist}</p>
                </div>
              </a>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">Nothing to show yet.</p>
            )}
          </div>

          <div className="h-px w-full bg-border" />

          {/* Quick actions */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Art0citus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.18-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>

              <a
                href="mailto:mritik424@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
