"use client";

import Stack from "@/components/ui/Stack";
import FunFactCard from "@/components/FunFactCard";

const books = [
  { image: "/images/books/book1.jpg", title: "Book Title One", subtitle: "Author Name" },
  { image: "/images/books/book2.jpg", title: "Book Title Two", subtitle: "Author Name" },
  { image: "/images/books/book3.jpg", title: "Book Title Three", subtitle: "Author Name" },
];

const movies = [
  { image: "/images/movies/movie1.jpg", title: "Movie Title One", subtitle: "Director Name" },
  { image: "/images/movies/movie2.jpg", title: "Movie Title Two", subtitle: "Director Name" },
  { image: "/images/movies/movie3.jpg", title: "Movie Title Three", subtitle: "Director Name" },
];

export default function FunFacts() {
  const bookCards = books.map((b) => <FunFactCard key={b.title} {...b} />);
  const movieCards = movies.map((m) => <FunFactCard key={m.title} {...m} />);

  return (
    <section
      id="personal"
      className="flex justify-center bg-background px-4 pt-32 pb-48"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-12 text-center">
        <div className="max-w-sm">
          <h2 className="font-pixelta text-5xl">Personal</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A few things I love outside of code. Drag through the stacks.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 sm:flex-row sm:items-start sm:justify-center sm:gap-24">
          {/* Books */}
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Books
            </h3>
            <div className="h-72 w-64 shrink-0">
              <Stack
                cards={bookCards}
                randomRotation
                sensitivity={150}
                sendToBackOnClick
                mobileClickOnly
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </div>

          {/* Movies */}
          <div className="flex flex-col items-center gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Movies
            </h3>
            <div className="h-72 w-64 shrink-0">
              <Stack
                cards={movieCards}
                randomRotation
                sensitivity={150}
                sendToBackOnClick
                mobileClickOnly
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}