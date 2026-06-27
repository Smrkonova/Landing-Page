"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage === 0) {
      const timer = setTimeout(() => setStage(1), 4500);
      return () => clearTimeout(timer);
    }
    if (stage === 1) {
      const timer = setTimeout(() => {
        setStage(2);
        if (onComplete) onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage < 2 && (
        <motion.div
          key="initial-loader"
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <AnimatePresence mode="wait">
            {/* STAGE 0: Hook */}
            {stage === 0 && (
              <motion.div
                key="stage0"
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-center px-4"
                >
                  Most businesses look good.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-3xl md:text-5xl font-bold text-gray-400 subtle-glitch tracking-tight text-center px-4"
                >
                  But very few actually grow.
                </motion.p>
              </motion.div>
            )}

            {/* STAGE 1: Micro Transition */}
            {stage === 1 && (
              <motion.div
                key="stage1"
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-400 tracking-widest uppercase font-medium">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                  Understanding growth...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
