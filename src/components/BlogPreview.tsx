"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

    return (
        <section className="flex w-full justify-center px-4 py-24">
            <div className="w-full max-w-4xl">
                <ul className="flex flex-col space-y-10">
                    {blogPosts.map((post) => {
                        const isHovered = hoveredSlug === post.slug;
                        const isDimmed = hoveredSlug !== null && !isHovered;

                        return (
                            <li key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    onMouseEnter={() => setHoveredSlug(post.slug)}
                                    onMouseLeave={() => setHoveredSlug(null)}
                                    className={`block border-b border-border pb-10 transition-all duration-300 ease-out ${isDimmed
                                            ? "opacity-40 blur-[2px]"
                                            : "opacity-100 blur-0"
                                        }`}
                                >
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                        {post.date} &middot; {post.readTime}
                                    </p>
                                    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                        {post.title}
                                    </h2>
                                    <p className="mt-3 max-w-2xl text-muted-foreground">
                                        {post.excerpt}
                                    </p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}