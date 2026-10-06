"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollCanvas } from "./ScrollCanvas";
import { CinematicOverlay } from "./CinematicOverlay";
import { ContactModal } from "./ContactModal";
import { SCENES } from "@/data/scenes";

gsap.registerPlugin(ScrollTrigger);

export default function StoryExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [loadedPercent, setLoadedPercent] = useState<number>(0);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      st?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="story-container relative w-full bg-black"
      id="story-experience"
    >
      {/* Pinned visual layer covering the viewport during the entire scroll runway */}
      <div className="story-visual-layer sticky top-0 w-full h-screen overflow-hidden pointer-events-none">
        {/* HTML5 Canvas Frame Renderer (loads /frames/contact-7/frame-XXXX.webp) */}
        <ScrollCanvas
          progress={scrollProgress}
          onFrameUpdate={setCurrentFrame}
          onLoadedPercent={setLoadedPercent}
        />

        {/* Cinematic Vignette */}
        <div className="vignette-overlay" />

        {/* Scanlines Atmosphere */}
        <div className="scanlines-overlay" />

        {/* 7 User Scenes Typography, Step 4 Subphase Pills & Pure Black Transitions */}
        <CinematicOverlay
          progress={scrollProgress}
          onContactClick={() => setIsContactOpen(true)}
        />

        {/* Subtle Ambient Step HUD Indicator */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-30 pointer-events-none hidden sm:flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
          <span>
            STEP {String(Math.min(7, Math.floor(scrollProgress * 7) + 1)).padStart(2, "0")} / 07 • FRAME {String(currentFrame).padStart(4, "0")}
          </span>
        </div>
      </div>

      {/* Dynamic scroll spacer sections providing the deliberate cinematic scroll distance */}
      {SCENES.map((scene) => (
        <div
          key={scene.id}
          className="story-scroll-section pointer-events-none"
          style={{ height: `${Math.max(160, (scene.endFrame - scene.startFrame) * 3.5)}vh` }}
          aria-hidden="true"
        />
      ))}

      {/* Agency Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
