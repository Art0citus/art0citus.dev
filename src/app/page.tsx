"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectStack from "@/components/ProjectStack";
import FunFacts from "@/components/FunFacts";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex flex-1 flex-col gap-24">
        <Hero />
        <ProjectStack />
        <TechStack />
        <FunFacts />
      </main>

      <Footer />
    </div>
  );
}