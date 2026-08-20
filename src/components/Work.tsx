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
      className="flex justify-center bg-background px-4 py-20 sm:py-24 md:py-32"
    >
      <div className="flex w-full max-w-4xl flex-col gap-4">
        <div className="mb-14 flex flex-col gap-3 sm:mb-20 md:mb-24 md:gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <h2 className="whitespace-nowrap font-sans text-3xl sm:text-4xl md:text-5xl">
              Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base md:mt-6 md:text-lg md:leading-8">
            Experience, open source contributions, and the code I ship along
            the way.
          </p>
        </div>

        <div className="flex flex-col gap-14 sm:gap-20 md:gap-24">

          {/* Experience */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Experience
            </h3>

            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {experience.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-xl border border-border bg-card px-4 py-4 shadow-2xl sm:rounded-2xl sm:px-5 sm:py-5 md:px-6 md:py-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5 sm:gap-2">
                    <h4 className="text-sm font-bold sm:text-base md:text-lg">
                      {item.role}{" "}
                      <span className="text-muted-foreground">
                        · {item.company}
                      </span>
                    </h4>

                    <span className="text-[10px] text-muted-foreground sm:text-xs md:text-sm">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6 md:text-base md:leading-7">
                    {item.description}
                  </p>

                  {item.tech && (
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-accent px-2.5 py-1 text-[10px] sm:px-3 sm:text-xs"
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
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Open Source
            </h3>

            <div className="flex flex-col gap-3 sm:gap-4">
              {openSourceContributions.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:rounded-2xl sm:p-5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium sm:text-sm">
                      {item.title}
                    </p>

                    <p className="mt-0.5 truncate text-[10px] text-muted-foreground sm:mt-1 sm:text-xs">
                      {item.repo}
                    </p>
                  </div>

                  <span
                    className={`inline-flex h-5 shrink-0 items-center justify-center rounded-full border px-2.5 text-[10px] font-medium capitalize leading-none sm:h-6 sm:px-3 sm:text-xs ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contribution Activity */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
              Contribution Activity
            </h3>

            <div className="w-full overflow-hidden rounded-xl border border-border bg-card p-3 shadow-2xl sm:rounded-2xl sm:p-4 md:p-5">
              <GithubActivity />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}