"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Loading from "@/components/animations/Loading";
import Banner from "@/components/home/Banner";
import Manifesto from "@/components/home/Manifesto";
import Projects from "@/components/home/Projects";
import StoryExperience from "@/components/animations/StoryExperience";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollY } = useScroll();

  // Enforce white background when scrolled to the very top
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 50 && typeof document !== "undefined") {
      document.body.style.backgroundColor = "#ffffff";
    }
  });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* <AnimatePresence>
        {loading && <Loading onComplete={() => setLoading(false)} />}
      </AnimatePresence> */}

      <div className="w-full flex-1 flex flex-col">
        {/* Main home page content goes here */}
        <Banner />
        <Manifesto />
        <Projects />
        <StoryExperience />
      </div>
    </main>
  );
}
