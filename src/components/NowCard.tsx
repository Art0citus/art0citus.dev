"use client";

import { useEffect, useRef, useState } from "react";
import LiquidButton from "@/components/ui/LiquidButton";


function getGreeting(hour: number) {
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

export default function NowCard() {
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(interval);
  }, []);

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
    <div ref={containerRef} className="relative shrink-0 px-3">
  <LiquidButton
        onClick={() => setOpen((prev) => !prev)}
        size="compact"
        className="!h-8"
      >
        {timeLabel}
      </LiquidButton>
      {open && (
        <div className="absolute left-0 top-12 z-[60] w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Greeting */}
          <div className="flex items-center justify-between !px-5 !pt-5">
            <p className="text-sm font-semibold">{getGreeting(now?.getHours() ?? 12)}</p>
            <p className="text-sm text-muted-foreground">{timeLabel}</p>
          </div>
          <p className="!px-5 !pb-5 text-xs text-muted-foreground">{dateLabel}</p>

          <div className="h-px w-full bg-border" />

         

          {/* Quick links */}
          <div className="flex items-center gap-3 !px-5 !py-4">
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
        </div>
      )}
    </div>
  );
}