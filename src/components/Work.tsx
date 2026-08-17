"use client";

import { experience } from "@/data/experience";
import { openSourceContributions, type PRStatus } from "@/data/openSource";
import GithubActivity from "./GithubActivity";

const statusStyles: Record<PRStatus, string> = {
  merged:
    "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
  open:
    "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
  closed:
    "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
};

export default function Work() {
  return (
    <section
      id="work"
      className="flex justify-center bg-background px-4 py-32"
    >
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div className="mb-24 flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <h2 className="font-sans text-5xl whitespace-nowrap">
              Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Experience, open source contributions, and the code I ship along
            the way.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Experience */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Experience
            </h3>

            <div className="flex flex-col gap-6">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-2xl border border-border bg-card !px-6 !py-6 shadow-2xl"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-bold">
                      {item.role}{" "}
                      <span className="text-muted-foreground">
                        · {item.company}
                      </span>
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-muted-foreground">
                    {item.description}
                  </p>

                  {item.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-accent px-3 py-1 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Open Source */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Open Source
            </h3>

            <div className="flex flex-col gap-4">
              {openSourceContributions.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card !p-5 shadow-2xl transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.repo}</p>
                  </div>

                  <span
                    className={`inline-flex h-6 shrink-0 items-center justify-center rounded-full border px-4 text-xs font-medium capitalize leading-none ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contribution Activity
            </h3>

            <div className="w-full overflow-hidden rounded-2xl border border-border bg-card !p-5 shadow-2xl">
              <GithubActivity />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}