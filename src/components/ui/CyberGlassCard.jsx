"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function CyberGlassCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.8)",
  borderGlowColor = "rgba(0, 0, 0, 0.08)",
  tiltSensitivity = 15,
  delay = 0,
  theme = "light"
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse tracking
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D Tilt transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [tiltSensitivity, -tiltSensitivity]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-tiltSensitivity, tiltSensitivity]);

  // Spotlight position
  const glowX = useSpring(useMotionValue(50), { damping: 40, stiffness: 200 });
  const glowY = useSpring(useMotionValue(50), { damping: 40, stiffness: 200 });

  // Dynamic gradients using Framer Motion templates
  const backgroundSpotlight = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, ${glowColor}, transparent 60%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(400px circle at ${glowX}% ${glowY}%, ${borderGlowColor}, transparent 40%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;

    mouseX.set(relativeX - 0.5);
    mouseY.set(relativeY - 0.5);

    glowX.set(relativeX * 100);
    glowY.set(relativeY * 100);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-3xl group perspective-1000 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {/* Animated Glow Border Trail (Behind the glass) */}
      <motion.div
        className="absolute -inset-[1px] rounded-[inherit] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: borderSpotlight }}
      />

      {/* Inner Glass Body */}
      <div className={`absolute inset-0 backdrop-blur-xl rounded-[inherit] border z-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.05)] ${theme === 'dark' ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-white/30 border-white/50'}`}>

        {/* Spotlight Follow effect inside the glass */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-soft-light"
          style={{ background: backgroundSpotlight }}
        />

        {/* Subtle noise/texture overlay for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      {/* Content Container (Parallax lifted) */}
      <motion.div
        className="relative z-20 h-full w-full"
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
