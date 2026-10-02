"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardsData = [
  {
    id: 0,
    title: "BRAND STRATEGY",
    text: "Defined the brand experience and digital direction around the founders' vision.",
    icon: "/images/projects/reading-elf/logo.png"
  },
  {
    id: 1,
    title: "UX/UI DESIGN",
    text: "Designed a magical, immersive interface tailored for children and parents alike.",
    icon: "/images/projects/reading-elf/fly-book.png"
  },
  {
    id: 2,
    title: "DEVELOPMENT",
    text: "Built a robust platform bridging the physical library and digital den.",
    icon: "/images/projects/reading-elf/open-book.png"
  },
  {
    id: 3,
    title: "SOCIAL MEDIA",
    text: "Crafted engaging campaigns to spread the magic to the community.",
    icon: "/images/projects/reading-elf/logo.png" // Reusing placeholder
  },
  {
    id: 4,
    title: "MARKETING",
    text: "Strategic local outreach to position Reading Elf as the premier children's library.",
    icon: "/images/projects/reading-elf/fly-book.png" // Reusing placeholder
  }
];

export default function FannedCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card active

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-[350px] md:h-[450px] mb-48 md:mb-64 perspective-[1000px]">
      <AnimatePresence>
        {cardsData.map((card, index) => {
          // Calculate relative position to active index, wrapping around to create an infinite carousel
          const diff = ((index - activeIndex + 5 + 2) % 5) - 2;
          
          // Determine styles based on position
          let x = "0%";
          let y = "0%";
          let rotate = 0;
          let zIndex = 30;
          let scale = 1;
          let opacity = 1;
          let bgClass = "bg-gradient-to-b from-[#F3EFE9] to-[#EBDCCC] border-[3px] border-white/80 shadow-[0_30px_60px_rgba(0,0,0,0.15)]";
          
          if (diff === 0) {
            // Center (Active)
            x = "0%";
            y = "0%";
            rotate = 0;
            zIndex = 30;
            scale = 1;
            opacity = 1;
          } else if (diff === -1) {
            // Inner Left
            x = "-55%";
            y = "15%";
            rotate = -15;
            zIndex = 20;
            scale = 0.95;
            opacity = 0.95;
            bgClass = "bg-[#F3EFE9]/90 backdrop-blur-md border-[2px] border-white/80 shadow-xl";
          } else if (diff === 1) {
            // Inner Right
            x = "55%";
            y = "15%";
            rotate = 15;
            zIndex = 20;
            scale = 0.95;
            opacity = 0.95;
            bgClass = "bg-[#F3EFE9]/90 backdrop-blur-md border-[2px] border-white/80 shadow-xl";
          } else if (diff === -2) {
            // Outer Left
            x = "-105%";
            y = "35%";
            rotate = -30;
            zIndex = 10;
            scale = 0.9;
            opacity = 0.8;
            bgClass = "bg-[#F3EFE9]/60 backdrop-blur-md border-[2px] border-white/60 shadow-lg";
          } else if (diff === 2) {
            // Outer Right
            x = "105%";
            y = "35%";
            rotate = 30;
            zIndex = 10;
            scale = 0.9;
            opacity = 0.8;
            bgClass = "bg-[#F3EFE9]/60 backdrop-blur-md border-[2px] border-white/60 shadow-lg";
          }

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x,
                y,
                rotate,
                scale,
                opacity,
                zIndex
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.8
              }}
              onClick={() => handleCardClick(index)}
              className={`absolute inset-0 m-auto w-[200px] md:w-[260px] aspect-[3/4] rounded-2xl md:rounded-[32px] flex flex-col items-center justify-start p-6 text-center cursor-pointer hover:brightness-105 ${bgClass}`}
            >
              <motion.div 
                layout="position"
                className={`transition-all duration-500 drop-shadow-xl flex justify-center items-center ${diff === 0 ? "w-20 h-20 md:w-24 md:h-24 mb-6 mt-4" : "w-28 h-28 md:w-36 md:h-36 mt-[30%]"}`}
              >
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
              </motion.div>
              
              <AnimatePresence>
                {diff === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-[clamp(10px,0.6vw+4px,11px)] font-black text-gray-800 uppercase tracking-widest mb-3 leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-[clamp(9px,0.5vw+4px,10px)] text-gray-700/80 leading-relaxed font-bold px-2">
                      {card.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
