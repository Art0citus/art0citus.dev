export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech?: string[];
}

// Replace these with your real roles.
export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Dettroin",
    duration: "Jun 2026 — Present",
    description:
      "Building and shipping features across the stack, from API design to frontend polish.",
    tech: ["Next.js", "Java", "PostgreSQL"],
  },
];
