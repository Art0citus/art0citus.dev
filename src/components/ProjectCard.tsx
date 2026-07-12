"use client";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

// lucide-react removed all brand/logo icons (Github, Twitter, etc.) in v1.0,
// so this is a small inline replacement sized the same way as other lucide icons.
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.36-3.84-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.18-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-2xl  bg-card p-6 shadow-2xl transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
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

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl  transition-colors duration-200 hover:bg-accent"
        >
          <GithubIcon size={18} />
        </a>
      </div>
    </li>
  );
}