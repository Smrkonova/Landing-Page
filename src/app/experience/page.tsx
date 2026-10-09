"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ScrollCanvas } from "@/components/animations/ScrollCanvas";
import { CinematicOverlay } from "@/components/animations/CinematicOverlay";
import { ContactModal } from "@/components/animations/ContactModal";
import { SCROLL_CONFIG } from "@/data/scenes";
import { soundManager } from "@/utils/audio";

export default function ExperiencePage() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  // Smooth lerp loop for virtual scroll progress
  useEffect(() => {
    let animId: number;

    const tick = (now: number) => {
      // Autoplay / Tour progression
      if (isPlaying) {
        targetProgressRef.current += SCROLL_CONFIG.tourSpeed;
        if (targetProgressRef.current > 1) {
          targetProgressRef.current = 0;
          currentProgressRef.current = 0;
        }
      }

      // Smooth interpolation with weighted damping
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.00003) {
        currentProgressRef.current += diff * SCROLL_CONFIG.lerpDamping;
        const clamped = Math.max(0, Math.min(1, currentProgressRef.current));
        setScrollProgress(clamped);

        // Calculate velocity for sound synthesizer
        const dt = Math.max(1, now - lastTimeRef.current);
        const dp = clamped - lastProgressRef.current;
        const velocity = (dp / dt) * 1000;
        lastProgressRef.current = clamped;
        lastTimeRef.current = now;

        if (soundManager) {
          soundManager.updateVelocity(clamped, velocity);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  // Wheel listener: deliberate, slower, cinematic pace
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 20;
      else if (e.deltaMode === 2) delta *= 300;

      const cappedDelta = Math.max(-90, Math.min(90, delta));
      const next = targetProgressRef.current + cappedDelta * SCROLL_CONFIG.wheelSensitivity;
      targetProgressRef.current = Math.max(0, Math.min(1, next));
      setIsPlaying(false);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Touch gesture support for mobile / touchpads
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const delta = touchStartYRef.current - e.touches[0].clientY;
        touchStartYRef.current = e.touches[0].clientY;
        const next = targetProgressRef.current + delta * SCROLL_CONFIG.touchSensitivity;
        targetProgressRef.current = Math.max(0, Math.min(1, next));
        setIsPlaying(false);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === "ArrowDown" || e.code === "ArrowRight") {
        e.preventDefault();
        setIsPlaying(false);
        targetProgressRef.current = Math.min(1, targetProgressRef.current + SCROLL_CONFIG.keyboardStep);
      } else if (e.code === "ArrowUp" || e.code === "ArrowLeft") {
        e.preventDefault();
        setIsPlaying(false);
        targetProgressRef.current = Math.max(0, targetProgressRef.current - SCROLL_CONFIG.keyboardStep);
      } else if (e.code === "Home") {
        e.preventDefault();
        setIsPlaying(false);
        targetProgressRef.current = 0;
      } else if (e.code === "End") {
        e.preventDefault();
        setIsPlaying(false);
        targetProgressRef.current = 1;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="viewport-fixed bg-black text-white" id="experience-root">
      {/* HTML5 Canvas Frame Renderer */}
      <ScrollCanvas
        progress={scrollProgress}
      />

      {/* Cinematic Vignette */}
      <div className="vignette-overlay" />

      {/* Scanlines Atmosphere */}
      <div className="scanlines-overlay" />

      {/* 7 Scenes Agency Typography & Pure Black Transitions */}
      <CinematicOverlay
        progress={scrollProgress}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Agency Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
