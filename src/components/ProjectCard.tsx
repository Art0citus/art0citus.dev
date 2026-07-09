"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
};

type Props = {
    project: Project;
    index: number;
    cardRef: (el: HTMLLIElement | null) => void;
};

export default function ProjectCard({ project, index, cardRef }: Props) {
    const topOffset = 96 + index * 16;

    return (
        <li
            ref={cardRef}
            className="project-card sticky mb-[45vh] origin-top will-change-transform last:mb-0"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
            }}
        >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <div className="flex flex-col md:flex-row">
                    <div className="relative h-72 w-full md:h-[200px] md:w-1/2">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-8">
                        <div>
                            <h3 className="text-4xl font-bold">{project.title}</h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-accent px-3 py-1 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="mt-6 text-lg text-muted-foreground">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <a
                                href={project.demo}
                                className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-background"
                            >
                                Live Demo
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}