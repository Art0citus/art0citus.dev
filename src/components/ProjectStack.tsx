import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectStack() {
  return (
    <section
      id="projects"
      className="flex justify-center bg-background px-4 py-32"
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <h2 className="whitespace-nowrap text-3xl font-bold">
              Things I&apos;ve Built
            </h2>

            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Some of my favourite projects exploring backend engineering,
            cloud computing and AI.
          </p>
        </div>

        {/* Projects */}
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}