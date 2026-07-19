"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GITHUB_USERNAME = "Art0citus";

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="overflow-x-auto rounded-3xl border border-border bg-card p-8 shadow-2xl">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        fontSize={14}
        blockSize={12}
        blockMargin={4}
      />
    </div>
  );
}