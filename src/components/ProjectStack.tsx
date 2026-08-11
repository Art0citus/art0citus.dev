import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectStack() {
  return (
    <section
      id="projects"
      className="flex justify-center bg-background px-4 py-32"
    >
      <div className="w-full max-w-4xl">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">Things I&apos;ve Built</h2>
            <div className="ml-4 h-px flex-1 bg-border" />
          </div>

          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Some of my favourite projects exploring backend engineering,
            cloud computing and AI.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}