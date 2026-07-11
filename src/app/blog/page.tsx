import Navbar from "@/components/Navbar";
import BlogHero from "@/components/BlogHero";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <BlogHero />
        <BlogPreview />
      </main>

      <Footer />
    </div>
  );
}
