"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);

  const lines = [
    "Most Business Look Good",
    "Very Few Actually Grow",
    "Wait... What?",
  ];

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, lines.length, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex h-[35vh] w-[60%] items-center justify-center overflow-hidden">
        <AnimatePresence>
          {lineIndex < lines.length && (
            <motion.h2
              key={lineIndex}
              initial={{ y: "150%" }}
              animate={{ y: 0 }}
              exit={{ y: "-150%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter text-center leading-none"
            >
              {lines[lineIndex]}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
