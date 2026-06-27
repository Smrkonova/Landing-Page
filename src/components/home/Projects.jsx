"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";

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
    link: "/projects/hiroguild",
  },
  {
    id: 2,
    bgText: "YOU ARE SAFE",
    bgColor: "#F80090",
    title: "Project Two",
    description:
      "An innovative digital experience focusing on seamless user interactions, dynamic content delivery, and state-of-the-art visual design principles.",
    image: "/images/projects/nazr.png",
    logo: "/images/projects/logo-nazr.svg",
    link: "/projects/two",
  },
  {
    id: 3,
    bgText: "BUILDING TRUST",
    bgColor: "#FFFAEE",
    title: "Project Two",
    description:
      "An innovative digital experience focusing on seamless user interactions, dynamic content delivery, and state-of-the-art visual design principles.",
    image: "/images/projects/neela.png",
    logo: "/images/projects/logo-neela.svg",
    link: "/projects/two",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 64); // 64 is half of 128px (w-32)
      cursorY.set(e.clientY - 64);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const updateState = (latest) => {
    if (latest <= 0) {
      setActiveIndex(-1);
      if (typeof document !== "undefined") {
        document.body.style.backgroundColor = "#ffffff";
      }
      return;
    }

    const total = projectsData.length;
    let newIndex = Math.floor(latest * total);
    newIndex = Math.max(0, Math.min(newIndex, total - 1));

    setActiveIndex(newIndex);

    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = projectsData[newIndex].bgColor;
    }
  };

  useMotionValueEvent(scrollYProgress, "change", updateState);

  // Fix for browser back button / scroll restore
  useEffect(() => {
    const timer = setTimeout(() => {
      const latest = scrollYProgress.get();
      // If we are scrolled into the projects section, restore state immediately
      if (latest > 0) {
        updateState(latest);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="relative w-full z-10 bg-transparent"
        style={{ height: `${projectsData.length * 150}vh` }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        viewport={{ amount: 0.1 }}
      >
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          {projectsData.map((project, index) => {
            let state = "upcoming";
            if (index === activeIndex) state = "visible";
            else if (index < activeIndex) state = "hidden";

            return <ProjectSlide key={project.id} project={project} state={state} />;
          })}
        </div>
      </motion.div>

      {/* Custom Glass Cursor */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isHovering ? 1 : 0.8,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
        }}
        className="fixed top-0 left-0 w-32 h-32 rounded-full border border-white/50 bg-white/10 backdrop-blur-[4px] shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] pointer-events-none z-[100] flex flex-col items-center justify-center text-white"
      >
        <span className="text-4xl mb-1 font-light leading-none">↗</span>
        <span className="text-[11px] font-bold tracking-widest text-center uppercase">Learn<br />More</span>
      </motion.div>
    </>
  );
}

function ProjectSlide({ project, state }) {
  return (
    <motion.div
      initial={false}
      animate={state}
      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
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
