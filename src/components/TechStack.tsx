"use client";

import StackIcon from "tech-stack-icons";

const skills = [
    "go",
    "java",
    "typescript",
    "javascript",
    "react",
    "nextjs",
    "flutter",
    "tailwindcss",
    "nodejs",
    "express",
    "postgresql",
    "mongodb",
    "redis",
    "docker",
    "git",
    "linux",
    "github",
];

export default function TechStack() {
    return (
        <section
            id="tech"
            className="flex justify-center bg-background px-4 py-32"
        >
            <div className="w-full max-w-4xl">
                <h2 className="font-pixelta text-5xl">
                    Tech Stack
                </h2>

                <p className="mt-4 text-lg text-muted-foreground">
                    Technologies I use to build scalable applications.
                </p>

                <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="group flex flex-col items-center gap-3 rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >
                            <div className="h-12 w-12">
                                <StackIcon
                                    name={skill}
                                    className="h-full w-full"
                                />
                            </div>

                            <span className="text-sm font-medium capitalize">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}