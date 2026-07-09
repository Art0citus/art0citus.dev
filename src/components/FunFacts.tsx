"use client";

import Stack from "@/components/ui/Stack";
import FunFactCard from "@/components/FunFactCard";
import { funFacts } from "@/data/funFacts";

export default function FunFacts() {
  const cards = funFacts.map((fact) => <FunFactCard key={fact.label} {...fact} />);

  return (
    <section
      id="about"
      className="flex justify-center bg-background px-4 pt-32 pb-48"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-12 text-center">
        <div className="max-w-sm">
          <h2 className="font-pixelta text-5xl">Fun Facts</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A few things about me beyond the code. Drag the cards to shuffle
            through them.
          </p>
        </div>

        <div className="mx-auto h-72 w-64 shrink-0">
          <Stack
            cards={cards}
            randomRotation
            sensitivity={150}
            sendToBackOnClick
            mobileClickOnly
            animationConfig={{ stiffness: 260, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
}