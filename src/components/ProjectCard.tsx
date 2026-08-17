"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const link =
    project.demo && project.demo !== "#" ? project.demo : project.github;

  return (
    <li className="group flex flex-col gap-4">
      {/* Preview */}
      <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-border bg-white transition-transform duration-300 group-hover:-translate-y-1">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-sm text-neutral-400">
            Preview coming soon
          </div>
        )}
      </div>

      {/* Title + Link */}
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        {project.featured && (
          <span className="rounded-full border border-border bg-accent px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
            Featured
          </span>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
        >
          <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
             className="inline-flex h-5 items-center rounded-full bg-accent px-4 text-[11px] font-medium leading-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}