"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/animations/Loading";
import Banner from "@/components/home/Banner";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <AnimatePresence>
        {loading && <Loading onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="w-full flex-1 flex flex-col items-center justify-center ">
        {/* Main home page content goes here */}
        {!loading && (

          <Banner />

        )}
      </div>
    </main>
  );
}
