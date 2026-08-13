export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "coming-soon",
    title: "Coming Soon...",
    excerpt: "Blog posts are currently being written. Stay tuned for upcoming articles.",
    date: "",
    readTime: "",
  },
];