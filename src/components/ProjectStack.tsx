"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const SCALE_STEP = 0.08;
const MIN_SCALE = 0.88;
const MIN_OPACITY = 0.6;

export default function ProjectStack() {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const updateCards = () => {
      const cards = cardRefs.current;
      const total = cards.length;

      cards.forEach((card, i) => {
        if (!card) return;

        if (i === total - 1) {
          card.style.transform = "scale(1)";
          card.style.opacity = "1";
          return;
        }

        const nextCard = cards[i + 1];
        if (!nextCard) return;

        const rect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        const gap = nextRect.top - rect.top;
        const stickyRange = window.innerHeight * 0.7;

        let progress = 1 - gap / stickyRange;
        progress = Math.min(Math.max(progress, 0), 1);

        const scale = 1 - progress * SCALE_STEP;
        const opacity = 1 - progress * (1 - MIN_OPACITY);

        card.style.transform = `scale(${Math.max(scale, MIN_SCALE)})`;
        card.style.opacity = `${Math.max(opacity, MIN_OPACITY)}`;
      });

      rafId.current = 0;
    };

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(updateCards);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateCards();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      id="projects"
      className="flex justify-center bg-background px-4 py-32"
    >
      <div className="w-full max-w-2xl">
        <div className="mb-16">
          <h2 className="font-sans text-5xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Some of my favourite projects exploring backend
            engineering, cloud computing and AI.
          </p>
        </div>

        <ul className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}