"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onComplete={() => setLoading(false)} />
  ) : (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </>
  );
}