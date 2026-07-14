"use client";

import StackIcon from "tech-stack-icons";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const displayNames: Record<string, string> = {
    nextjs: "Next.js",
    react: "React.js",
    typescript: "TypeScript",
    javascript: "JavaScript",
    tailwindcss: "TailwindCSS",
    flutter: "Flutter",
    dart: "Dart",
    nodejs: "Node.js",
    express: "Express",
    go: "Go",
    python: "Python",
    fastapi: "FastAPI",
    java: "Java",
    postgresql: "PostgreSQL",
    mongodb: "MongoDB",
    redis: "Redis",
    docker: "Docker",
    git: "Git",
    github: "GitHub",
    linux: "Linux",
};

const categories = [
    {
        number: "01",
        icon: Monitor,
        label: "Frontend",
        items: ["nextjs", "react", "typescript", "javascript", "tailwindcss", "flutter", "dart"],
    },
    {
        number: "02",
        icon: Server,
        label: "Backend",
        items: ["nodejs", "express", "go", "python", "fastapi", "java"],
    },
    {
        number: "03",
        icon: Database,
        label: "Databases",
        items: ["postgresql", "mongodb", "redis"],
    },
    {
        number: "04",
        icon: Wrench,
        label: "DevOps & Tools",
        items: ["docker", "git", "github", "linux"],
    },
];

export default function TechStack() {
    return (
        <section
            id="tech"
            className="flex justify-center bg-background px-4 py-32"
        >
            <div className="w-full max-w-4xl">
                <h2 className="font-sans text-5xl">Stack</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Technologies I use in building.
                </p>

                <div className="mt-12 h-px w-full bg-border" />

                {categories.map((cat, i) => (
                    <div key={cat.label}>
                        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[220px_1fr] sm:items-start">
                            <div className="flex items-center gap-2">
                                <span className="text-sm italic text-red-500">
                                    {cat.number}
                                </span>
                                <cat.icon size={16} className="text-muted-foreground" />
                                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                                    {cat.label}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors duration-200 hover:bg-accent"
                                    >
                                        <span className="h-4 w-4 shrink-0">
                                            <StackIcon
                                                name={item}
                                                className="h-full w-full"
                                            />
                                        </span>
                                        {displayNames[item] ?? item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="h-px w-full bg-border" />
                    </div>
                ))}
            </div>
        </section>
    );
}