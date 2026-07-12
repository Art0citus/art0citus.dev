"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "Art0citus";

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="flex justify-center bg-background px-4 py-32">
      <div className="w-full max-w-4xl">
        <div className="mb-16">
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A living log of the code I&apos;ve been shipping, day to day.
          </p>
        </div>

        <div className="overflow-x-auto rounded-6xl  bg-card p-8 shadow-2xl">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            fontSize={14}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </section>
  );
}
