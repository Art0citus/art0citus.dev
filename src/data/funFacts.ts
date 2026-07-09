import { LucideIcon, Code2, Dumbbell, Cat, Gamepad2, Music, Coffee } from "lucide-react";

export type FunFact = {
  icon: LucideIcon;
  label: string;
  detail: string;
  color: string; // hex color used for icon badge + accent stripe
};

export const funFacts: FunFact[] = [
  {
    icon: Code2,
    label: "LeetCode Grinder",
    detail: "Solving DSA problems most days to sharpen problem-solving skills.",
    color: "#38bdf8", // sky blue
  },
  {
    icon: Dumbbell,
    label: "Fitness First",
    detail: "Balancing gym sessions with late-night coding sprints.",
    color: "#f97316", // orange
  },
  {
    icon: Cat,
    label: "Cat Person",
    detail: "There's a reason a cat follows the cursor around this site.",
    color: "#a855f7", // purple
  },
  {
    icon: Gamepad2,
    label: "Gamer at Heart",
    detail: "Down for a co-op session after a good debugging win.",
    color: "#22c55e", // green
  },
  {
    icon: Music,
    label: "Lo-fi on Loop",
    detail: "Can't code without background music playing.",
    color: "#ec4899", // pink
  },
  {
    icon: Coffee,
    label: "Chai > Coffee",
    detail: "Fueled by chai more often than not.",
    color: "#eab308", // amber
  },
];