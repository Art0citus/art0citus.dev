"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import "@/components/ScrollStack.css";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <section
            id="projects"
            className="
    flex
    w-full
    justify-center
    bg-background
    text-foreground
    transition-colors
    duration-300
    px-4
    py-32
    sm:px-6
    lg:px-8
  "
        >
            <div className="w-full max-w-4xl">
                <div className="mb-16">
                    <h2 className="font-pixelta text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        Some of the projects i have built while exploring backend
                        engineering, cloud computing and AI.
                    </p>
                </div>

                <ScrollStack
                    useWindowScroll
                    itemDistance={55}
                    itemScale={0.03}
                    baseScale={0.96}
                    rotationAmount={-1}
                    blurAmount={0}
                >
                {/* Project 1 */}
                <ScrollStackItem>
                    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl md:flex-row">

                        <div className="relative h-72 w-full md:h-auto md:w-1/2">
                            <Image
                                src="/images/projects/expenny.png"
                                alt="Expenny"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-10">
                            <div>
                                <h3 className="text-4xl font-bold">Expenny</h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Flutter", "Node.js", "MongoDB"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-accent px-3 py-1 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-6 text-lg text-muted-foreground">
                                    Expense tracking and subscription management platform with
                                    budgeting, analytics and secure authentication.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background">
                                    Live Demo
                                    <ArrowUpRight size={18} />
                                </button>

                            </div>
                        </div>

                    </div>
                </ScrollStackItem>

                {/* Project 2 */}
                <ScrollStackItem>
                    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl md:flex-row">

                        <div className="relative h-72 w-full md:h-auto md:w-1/2">
                            <Image
                                src="/images/projects/tirtle.png"
                                alt="Tirtle"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-10">
                            <div>
                                <h3 className="text-4xl font-bold">Tirtle</h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Node.js", "Socket.IO", "Redis", "MongoDB"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-accent px-3 py-1 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-6 text-lg text-muted-foreground">
                                    A real-time messaging platform featuring instant chat,
                                    authentication and scalable WebSocket communication.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background">
                                    Live Demo
                                    <ArrowUpRight size={18} />
                                </button>


                            </div>
                        </div>

                    </div>
                </ScrollStackItem>

                {/* Project 3 */}
                <ScrollStackItem>
                    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl md:flex-row">

                        <div className="relative h-72 w-full md:h-auto md:w-1/2">
                            <Image
                                src="/images/projects/artobot.png"
                                alt="ArtoBot"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between p-10">
                            <div>
                                <h3 className="text-4xl font-bold">ArtoBot</h3>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Flutter", "FastAPI", "Gemini API"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-accent px-3 py-1 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-6 text-lg text-muted-foreground">
                                    AI-powered assistant capable of answering questions,
                                    searching information and helping users complete tasks.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-4">
                                <button className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background">
                                    Live Demo
                                    <ArrowUpRight size={18} />
                                </button>


                            </div>
                        </div>

                    </div>
                </ScrollStackItem>
            </ScrollStack>
        </div>
        </section >
    );
}