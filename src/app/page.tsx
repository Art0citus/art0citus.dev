import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GithubActivity from "@/components/GithubActivity";
import ProjectStack from "@/components/ProjectStack";
import TechStack from "@/components/TechStack";
import FunFacts from "@/components/FunFacts";
import MotivationalQuote from "@/components/MotivationalQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex flex-1 flex-col gap-24">
        <Hero />
        <GithubActivity />
        <ProjectStack />
        <TechStack />
        <FunFacts />
        <MotivationalQuote />
      </main>

      <Footer />
    </div>
  );
}