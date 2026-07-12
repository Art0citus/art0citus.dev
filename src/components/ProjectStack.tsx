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
          <h2 className="font-sans text-5xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Some of my favourite projects exploring backend engineering,
            cloud computing and AI.
          </p>
        </div>

        <ul className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}