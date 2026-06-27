"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const projectsData = [
  {
    id: 1,
    bgText: "GAMIFIED",
    bgColor: "#212121",
    title: "HiroGuild",
    description:
      "A custom-built platform designed with dual-user architecture, gamification logic, and reward-driven engagement systems to increase user retention and activity.",
    image: "/images/projects/heroguild.png",
    logo: "/images/projects/logo-hero.svg",
  },
  {
    id: 2,
    bgText: "YOU ARE SAFE",
    bgColor: "#F80090", // dark blue/gray
    title: "Project Two",
    description:
      "An innovative digital experience focusing on seamless user interactions, dynamic content delivery, and state-of-the-art visual design principles.",
    image: "/images/projects/nazr.png",
    logo: "/images/projects/logo-nazr.svg",
  },

];

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = projectsData.length;
    let newIndex = Math.floor(latest * total);
    newIndex = Math.max(0, Math.min(newIndex, total - 1));

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }

    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = projectsData[newIndex].bgColor;
    }
  });

  return (
    <div ref={containerRef} className="relative w-full z-10 bg-transparent" style={{ height: `${projectsData.length * 150}vh` }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {projectsData.map((project, index) => {
          let state = "upcoming";
          if (index === activeIndex) state = "visible";
          else if (index < activeIndex) state = "hidden";

          return <ProjectSlide key={project.id} project={project} state={state} />;
        })}
      </div>
    </div>
  );
}

function ProjectSlide({ project, state }) {
  return (
    <motion.div
      initial={false}
      animate={state}
      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center py-24 ${state === "visible" ? "pointer-events-auto z-10" : "pointer-events-none z-0"
        }`}
    >
      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-0">
        <motion.h2
          variants={{
            upcoming: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3, ease: "easeOut" } },
            hidden: { opacity: 0, y: -100, transition: { duration: 0.8, ease: "easeInOut" } }
          }}
          className="text-center text-[18vw] md:text-[13vw] font-bold font-good-times text-[#ffffff] opacity-[0.03] leading-none m-0 p-0 tracking-tight select-none"
        >
          {project.bgText}
        </motion.h2>
      </div>

      {/* Center Image Placeholder */}
      <motion.div
        variants={{
          upcoming: { opacity: 0, y: 150, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, delay: 0.5, type: "spring", bounce: 0.2 } },
          hidden: { opacity: 0, y: -100, scale: 0.95, transition: { duration: 0.8, ease: "easeInOut" } }
        }}
        className="relative z-10 flex-1 flex items-center justify-center w-full max-w-3xl px-8 mb-16"
      >
        <div className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square flex items-center justify-center overflow-hidden">
          <img src={project.image} className=" h-full object-cover" alt="" />
        </div>
      </motion.div>

      {/* Bottom Info Section */}
      <motion.div
        variants={{
          upcoming: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6, type: "spring", bounce: 0.2 } },
          hidden: { opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }
        }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 gap-8 mt-auto"
      >
        {/* Logo Area */}
        <div className="flex items-center w-full md:w-1/3">
          <div className="h-12 rounded-sm flex items-center justify-start overflow-hidden">
            {project.logo ? (
              <img src={project.logo} alt={`${project.title} logo`} className="h-full w-auto object-contain" />
            ) : (
              <span className="text-black font-bold text-xs bg-[#FFD700] px-4 h-full flex items-center justify-center">Logo</span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="w-full md:w-2/3 md:pl-12">
          <p className="text-gray-300 text-sm md:text-base font-sans leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
