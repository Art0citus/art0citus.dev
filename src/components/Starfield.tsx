"use client";

import { useMemo } from "react";

/**
 * Deterministic seeded PRNG. Plain Math.random() would produce different
 * star positions on the server render vs. the client's first render,
 * which React flags as a hydration mismatch. A fixed seed makes both
 * passes compute the exact same output.
 */
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Draws `count` stars as a single box-shadow list on one 1px element —
 * one DOM node instead of hundreds, and the whole field animates
 * (twinkles) as one GPU-composited opacity fade rather than each star
 * repainting individually. `vw`/`vh` offsets mean the field re-covers
 * the viewport correctly at any screen size with no resize handling.
 */
function generateStars(count: number, seed: number) {
  const random = mulberry32(seed);
  const shadows: string[] = [];

  for (let i = 0; i < count; i++) {
    const x = (random() * 100).toFixed(2);
    const y = (random() * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh #fff`);
  }

  return shadows.join(", ");
}

export default function Starfield() {
  const small = useMemo(() => generateStars(180, 1), []);
  const medium = useMemo(() => generateStars(80, 2), []);
  const large = useMemo(() => generateStars(35, 3), []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-700 dark:opacity-100"
    >
      <div
        className="absolute h-[1px] w-[1px] animate-[twinkle_4s_ease-in-out_infinite] rounded-full"
        style={{ boxShadow: small }}
      />
      <div
        className="absolute h-[1.5px] w-[1.5px] animate-[twinkle_6s_ease-in-out_infinite] rounded-full"
        style={{ boxShadow: medium, animationDelay: "-2s" }}
      />
      <div
        className="absolute h-[2px] w-[2px] animate-[twinkle_8s_ease-in-out_infinite] rounded-full"
        style={{ boxShadow: large, animationDelay: "-4s" }}
      />
    </div>
  );
}