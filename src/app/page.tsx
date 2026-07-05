"use client";

import { useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onComplete={() => setLoading(false)} />
  ) : (
    <>
      <Navbar />
      <Hero />
    </>
  );
}