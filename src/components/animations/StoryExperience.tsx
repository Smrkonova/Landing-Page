"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ScrollCanvas } from "./ScrollCanvas";
import { CinematicOverlay } from "./CinematicOverlay";
import { ContactModal } from "./ContactModal";
import { SCENES } from "@/data/scenes";

export default function StoryExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const hudFrameRef = useRef<HTMLSpanElement | null>(null);

  const handleFrameUpdate = useCallback((frame: number) => {
    if (hudFrameRef.current) {
      hudFrameRef.current.textContent = String(frame).padStart(4, "0");
    }
  }, []);

  useEffect(() => {
    let animId: number | null = null;

    const updateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Section top has not reached top of viewport yet -> strictly 0 progress (Step 01 static)
      if (rect.top > 0) {
        setScrollProgress(0);
        return;
      }

      const scrollableDistance = rect.height - viewportHeight;
      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      // Progress is strictly measured once the section is pinned at top: 0
      const scrolled = -rect.top;
      const p = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      setScrollProgress(p);
    };

    const onScroll = () => {
      if (animId) cancelAnimationFrame(animId);
      animId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    const lenis = typeof window !== "undefined" && (window as any).__lenis;
    if (lenis) {
      lenis.on("scroll", onScroll);
    }

    updateProgress();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      if (lenis) {
        lenis.off("scroll", onScroll);
      }
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
          onFrameUpdate={handleFrameUpdate}
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
            STEP {String(Math.min(7, Math.floor(scrollProgress * 7) + 1)).padStart(2, "0")} / 07 • FRAME <span ref={hudFrameRef}>0001</span>
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
