"use client";

import StackIcon from "tech-stack-icons";

const rowOne = [
    "go",
    "python",
    "java",
    "typescript",
    "javascript",
    "react",
    "nextjs",
    "flutter",
    "dart",
    "tailwindcss",
];

const rowTwo = [
    "nodejs",
    "express",
    "fastapi",
    "postgresql",
    "mongodb",
    "redis",
    "docker",
    "git",
    "github",
];

function MarqueeRow({
    items,
    direction = "left",
    speed = 32,
}: {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
}) {
    // Duplicate the list so the loop is seamless
    const loop = [...items, ...items];

    return (
        <div className="group relative flex overflow-hidden">
            <div
                className="flex shrink-0 gap-4 pr-4"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                }}
            >
                {loop.map((skill, i) => (
                    <div
                        key={`${skill}-${i}`}
                        className="flex items-center gap-2.5 rounded-full bg-card px-5 py-3 transition-colors duration-300 hover:bg-accent"
                    >
                        <div className="h-7 w-7 shrink-0 grayscale transition-all duration-300 hover:grayscale-0">
                            <StackIcon name={skill} className="h-full w-full" />
                        </div>
                        <span className="whitespace-nowrap text-sm font-medium capitalize text-muted-foreground">
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
    return (
        <section
            id="tech"
            className="flex justify-center bg-background px-4 py-32"
        >
            <div className="w-full max-w-4xl">
                <h2 className="font-sans text-5xl">
                    Tech Stack
                </h2>

                <p className="mt-4 text-lg text-muted-foreground">
                    Technologies I use to build scalable applications.
                </p>

                <div
                    className="mt-12 flex flex-col gap-4"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    <MarqueeRow items={rowOne} direction="left" speed={34} />
                    <MarqueeRow items={rowTwo} direction="right" speed={30} />
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                @keyframes marquee-right {
                    from {
                        transform: translateX(-50%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    [style*="marquee-left"],
                    [style*="marquee-right"] {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
}