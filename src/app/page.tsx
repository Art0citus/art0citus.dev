import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
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
        <Work />
        <ProjectStack />
        <TechStack />
        <FunFacts />
        <MotivationalQuote />
      </main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}