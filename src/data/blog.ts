export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-backend-systems",
    title: "Building Scalable Backend Systems",
    excerpt:
      "Notes on designing services that hold up under real load — queueing, caching, and horizontal scaling.",
    date: "Jan 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "why-i-contributed-to-shadcn-ui",
    title: "Why I Contributed to shadcn/ui",
    excerpt:
      "Walking through my first open source PR — the bug, the fix, and everything I learned about testing at scale.",
    date: "Dec 28, 2025",
    readTime: "4 min read",
  },
  {
    slug: "go-postgres-multi-tenant-saas",
    title: "Designing a Multi-Tenant SaaS in Go and Postgres",
    excerpt:
      "Breaking down the 3-layer architecture behind TeamHub, and the tradeoffs of tenant isolation strategies.",
    date: "Dec 10, 2025",
    readTime: "8 min read",
  },
  {
    slug: "dsa-roadmap-that-actually-worked",
    title: "The DSA Roadmap That Actually Worked for Me",
    excerpt:
      "What I wish I knew when I started competitive programming, and how I structured my prep.",
    date: "Nov 22, 2025",
    readTime: "5 min read",
  },
];