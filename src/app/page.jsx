"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/animations/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* <AnimatePresence>
        {loading && <Loading onComplete={() => setLoading(false)} />}
      </AnimatePresence> */}

      <div className="w-full flex-1 flex flex-col items-center justify-center p-24">
        {/* Main home page content goes here */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold">Home Page</h1>
          </motion.div>
        )}
      </div>
    </main>
  );
}
