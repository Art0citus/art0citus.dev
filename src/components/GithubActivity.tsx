"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "Art0citus";

const calendarTheme = {
  dark: ["#282a36", "#3b82f6", "#a855f7", "#ec4899", "#facc15"],
  light: ["#eceef5", "#60a5fa", "#c084fc", "#f472b6", "#fbbf24"],
};

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="gh-calendar overflow-x-auto rounded-6xl">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={calendarTheme}
        fontSize={14}
        blockSize={12}
        blockMargin={4}
        blockRadius={4}
      />

      <style jsx global>{`
        /* Every day cell is a plain <rect> inside the calendar's <svg>.
           Targeting the element itself avoids depending on any
           library-internal class name, which has proven unreliable. */
        .gh-calendar svg rect {
          transition: transform 0.15s ease-out, filter 0.15s ease-out;
          transform-box: fill-box;
          transform-origin: center;
          cursor: pointer;
        }
        .gh-calendar svg rect:hover {
          transform: scale(1.4);
          filter: drop-shadow(0 0 5px currentColor) brightness(1.3);
        }
        @media (prefers-reduced-motion: reduce) {
          .gh-calendar svg rect {
            transition: none;
          }
          .gh-calendar svg rect:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}