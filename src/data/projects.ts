export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

// Add real screenshots to public/images/projects/ and update the `image`
// paths below. Any project without an image falls back to a placeholder.
export const projects: Project[] = [
  {
    title: "Expenny",
    description: "Expense tracking and subscription management platform.",
    technologies: ["Flutter", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    image: "/images/projects/expenny.png",
    featured: true,
  },
  {
    title: "Tirtle",
    description: "Real-time messaging platform with Socket.IO.",
    technologies: ["Node.js", "Socket.IO", "Redis"],
    github: "#",
    demo: "#",
    image: "/images/projects/tirtle.png",
  },
  {
    title: "ArtoBot",
    description: "AI-powered assistant using FastAPI and Gemini.",
    technologies: ["Flutter", "FastAPI", "Gemini"],
    github: "#",
    demo: "#",
    image: "/images/projects/artobot.png",
  },
];