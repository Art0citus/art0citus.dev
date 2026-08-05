"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const link = project.demo && project.demo !== "#" ? project.demo : project.github;

  return (
    <li className="flex flex-col gap-5">
      {/* Title row */}
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-3xl font-bold">{project.title}</h3>

        {project.featured && (
          <span className="rounded-full border border-border bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Featured
          </span>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Big preview panel */}
      <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border bg-white shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:h-80">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm text-neutral-400">
            Preview coming soon
          </div>
        )}
      </div>

      {/* Description + tech */}
      <div>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}