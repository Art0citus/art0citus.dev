"use client";

import { useRef, useState } from "react";
import StackIcon from "tech-stack-icons";
import { Monitor, Server, Database, Wrench, Volume2, VolumeX } from "lucide-react";

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
        icon: Monitor,
        label: "Frontend",
        items: ["nextjs", "react", "typescript", "javascript", "tailwindcss", "flutter", "dart"],
    },
    {
        icon: Server,
        label: "Backend",
        items: ["nodejs", "express", "go", "python", "fastapi", "java"],
    },
    {
        icon: Database,
        label: "Databases",
        items: ["postgresql", "mongodb", "redis"],
    },
    {
        icon: Wrench,
        label: "DevOps & Tools",
        items: ["docker", "git", "github", "linux"],
    },
];

export default function TechStack() {
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Synthesizes a short, clean rising "blip" — no audio file needed.
    const playHoverSound = () => {

        try {
            if (!audioCtxRef.current) {
                const AudioCtx =
                    window.AudioContext ||
                    (window as unknown as { webkitAudioContext: typeof AudioContext })
                        .webkitAudioContext;
                audioCtxRef.current = new AudioCtx();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === "suspended") ctx.resume();

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(700, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.07);

            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.1);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch {
            // Web Audio unsupported/blocked — fail silently, no sound is fine.
        }
    };

    return (
        <section
            id="tech"
            className="flex justify-center bg-background px-4 py-32"
        >
            <div className="w-full max-w-4xl">
                <div className="flex items-center gap-4">
                    <h2 className="font-sans text-5xl whitespace-nowrap">
                        Stack
                    </h2>
                    <div className="h-px flex-1 bg-border" />
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                    Technologies I use in building.
                </p>

                <div className="mt-16 flex flex-col gap-14">
                    {categories.map((cat) => (
                        <div
                            key={cat.label}
                            className="grid grid-cols-1 gap-4 sm:grid-cols-[220px_1fr] sm:items-start"
                        >
                            <div className="flex items-center gap-2">
                                <cat.icon size={16} className="text-muted-foreground" />
                                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                                    {cat.label}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        onMouseEnter={playHoverSound}
                                        className="group flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-lg"
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
                    ))}
                </div>
            </div>
        </section>
    );
}