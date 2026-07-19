export type PRStatus = "merged" | "open" | "closed";

export interface OpenSourceContribution {
  repo: string;
  title: string;
  url: string;
  status: PRStatus;
}

// Add your real PRs here — repo, title, direct link, and its current status.
export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: "shadcn-ui/ui",
    title: "Fix scroll-anchor bug in MessageScroller",
    url: "https://github.com/shadcn-ui/ui/pulls",
    status: "merged",
  },
];
