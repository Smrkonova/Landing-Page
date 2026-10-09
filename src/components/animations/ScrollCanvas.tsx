"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { TOTAL_FRAMES, getFrameUrl } from "@/data/story";

interface ScrollCanvasProps {
  progress: number; // 0 to 1
  onFrameUpdate?: (frame: number) => void;
  onLoadedPercent?: (percent: number) => void;
}

// Scene 7 constants
const SCENE_7_START = 8 / 9;
const SCENE_6_MAX_FRAME = 379;
const LOOP_START = 380;
const LOOP_END = 449;

// Key milestone frames that mark scene transitions
const KEY_TRANSITION_FRAMES = [1, 48, 49, 97, 98, 133, 134, 254, 255, 343, 345, 380, 449];

/**
 * Determine frame step based on device type:
 * Desktop: step = 1 (all 449 frames, maximum quality)
 * Mobile: step = 2 (skips alternate frames, reduces 50% frames for ultra-fast loading & 60fps)
 */
function getDeviceFrameStep(): number {
  if (typeof window === "undefined") return 1;
  const isMobile =
    window.innerWidth < 768 ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (!isMobile) return 1;

  // On low-memory devices or slow network, step by 2 or 3
  const isLowMemory =
    typeof navigator !== "undefined" &&
    "deviceMemory" in navigator &&
    (navigator as any).deviceMemory <= 4;
  const isSlowConn =
    typeof navigator !== "undefined" &&
    "connection" in navigator &&
    ((navigator as any).connection?.saveData ||
      /2g|3g/i.test((navigator as any).connection?.effectiveType || ""));

  if (isSlowConn || isLowMemory) {
    return 3; // 66% frame reduction on constrained devices
  }
  return 2; // 50% frame reduction on standard mobile
}

/**
 * Snap any arbitrary frame index to the nearest preloaded step frame,
 * ensuring critical keyframe boundaries are preserved.
 */
function snapToPreloadedFrame(frame: number, step: number): number {
  const clamped = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frame)));
  if (step <= 1) return clamped;

  // Preserve critical keyframes exactly if close
  for (let i = 0; i < KEY_TRANSITION_FRAMES.length; i++) {
    const kf = KEY_TRANSITION_FRAMES[i];
    if (Math.abs(clamped - kf) <= 1) {
      return kf;
    }
  }

  // Snap to odd/step sequence (1, 1+step, 1+2*step...)
  const stepped = Math.round((clamped - 1) / step) * step + 1;
  return Math.max(1, Math.min(TOTAL_FRAMES, stepped));
}

/**
 * Returns the sorted list of frame numbers that should be loaded for this step.
 */
function getFramesToLoad(step: number): number[] {
  const set = new Set<number>();
  for (let i = 1; i <= TOTAL_FRAMES; i += step) {
    set.add(i);
  }
  for (let i = 0; i < KEY_TRANSITION_FRAMES.length; i++) {
    set.add(KEY_TRANSITION_FRAMES[i]);
  }
  const list = Array.from(set);
  list.sort((a, b) => a - b);
  return list;
}

export const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  progress,
  onFrameUpdate,
  onLoadedPercent,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES + 1).fill(null)
  );
  const loadedFlagsRef = useRef<boolean[]>(
    new Array(TOTAL_FRAMES + 1).fill(false)
  );

  const isMobileRef = useRef<boolean>(false);
  const frameStepRef = useRef<number>(1);

  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);
  const loadedCountRef = useRef<number>(0);

  const onFrameUpdateRef = useRef(onFrameUpdate);
  onFrameUpdateRef.current = onFrameUpdate;

  const onLoadedPercentRef = useRef(onLoadedPercent);
  onLoadedPercentRef.current = onLoadedPercent;

  // Draw frame function with O(1) direct snap and nearest loaded fallback
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx = ctxRef.current;
    if (!ctx) {
      ctx = canvas.getContext("2d", {
        alpha: false,
        desynchronized: true,
      });
      if (!ctx) return;
      ctxRef.current = ctx;
    }

    const step = frameStepRef.current;
    const clampedIndex = snapToPreloadedFrame(frameIndex, step);

    // Skip redundant draw if frame hasn't changed
    if (clampedIndex === lastDrawnFrameRef.current) {
      return;
    }

    // Find requested or nearest available frame
    let imgToDraw = imagesRef.current[clampedIndex];
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      const searchStride = Math.max(1, step);
      for (let offset = searchStride; offset < 80; offset += searchStride) {
        const left = clampedIndex - offset;
        const right = clampedIndex + offset;
        if (
          left >= 1 &&
          imagesRef.current[left]?.complete &&
          imagesRef.current[left]!.naturalWidth > 0
        ) {
          imgToDraw = imagesRef.current[left];
          break;
        }
        if (
          right <= TOTAL_FRAMES &&
          imagesRef.current[right]?.complete &&
          imagesRef.current[right]!.naturalWidth > 0
        ) {
          imgToDraw = imagesRef.current[right];
          break;
        }
      }
    }

    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      return;
    }

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // 16:9 aspect ratio cover calculation
    const imgW = imgToDraw.naturalWidth || 1600;
    const imgH = imgToDraw.naturalHeight || 900;
    const imgRatio = imgW / imgH;
    const canvasRatio = canvasW / canvasH;

    let drawW: number;
    let drawH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    } else {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(imgToDraw, offsetX, offsetY, drawW, drawH);
    lastDrawnFrameRef.current = clampedIndex;
    onFrameUpdateRef.current?.(clampedIndex);
  }, []);

  const drawFrameRef = useRef(drawFrame);
  drawFrameRef.current = drawFrame;

  // Window resize handler with DPR cap for mobile performance
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile =
      window.innerWidth < 768 ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    isMobileRef.current = isMobile;
    frameStepRef.current = getDeviceFrameStep();

    // Mobile: Cap DPR at 1.0 (or 1.25 max) to eliminate 75% fill-rate memory & GPU work.
    // Desktop: Allow up to 2.0 DPR for retina sharpness.
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.round(window.innerWidth * dpr);
    const targetH = Math.round(window.innerHeight * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d", {
        alpha: false,
        desynchronized: true,
      });
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = isMobile ? "low" : "medium";
        ctxRef.current = ctx;
      }
    }

    if (lastDrawnFrameRef.current > 0) {
      drawFrameRef.current(lastDrawnFrameRef.current);
    } else {
      drawFrameRef.current(1);
    }
  }, []);

  const progressRef = useRef<number>(progress);
  progressRef.current = progress;

  // Update target frame from progress for scenes 1 to 6
  useEffect(() => {
    if (progress < SCENE_7_START) {
      const normProgress = Math.max(0, progress / SCENE_7_START);
      targetFrameRef.current = 1 + normProgress * (SCENE_6_MAX_FRAME - 1);
    } else {
      targetFrameRef.current = LOOP_START;
    }
  }, [progress]);

  // Flight loop state for final scene
  const flightFrameRef = useRef<number>(LOOP_START);
  const isLoopingRef = useRef<boolean>(false);

  // RequestAnimationFrame render loop: manual scroll for scenes 1-6, autonomous video loop for scene 7
  useEffect(() => {
    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      const currentProg = progressRef.current;
      const isScene7 = currentProg >= SCENE_7_START;
      const isMobile = isMobileRef.current;
      const step = frameStepRef.current;

      if (isScene7) {
        // Scene 7: autonomous continuous playback
        if (!isLoopingRef.current) {
          isLoopingRef.current = true;
          flightFrameRef.current = LOOP_START;
        }

        // Advance forward at ~24-26 fps video playback
        flightFrameRef.current += isMobile ? 0.4 : 0.45;
        if (flightFrameRef.current >= LOOP_END) {
          flightFrameRef.current = LOOP_START;
        }

        currentFrameRef.current = flightFrameRef.current;
        const snapped = snapToPreloadedFrame(flightFrameRef.current, step);
        if (snapped !== lastDrawnFrameRef.current) {
          drawFrameRef.current(snapped);
        }
      } else {
        // Normal scroll-controlled lerp across scenes 1 to 6 (frames 1 to 379)
        isLoopingRef.current = false;
        flightFrameRef.current = LOOP_START;
        const target = targetFrameRef.current;
        const diff = target - currentFrameRef.current;

        // Snappier lerp on mobile (0.45) for instant touch reaction; 0.3 on desktop for cinematic glide
        const lerpRate = isMobile ? 0.45 : 0.3;

        if (Math.abs(diff) > 0.01) {
          currentFrameRef.current += diff * lerpRate;
          const snapped = snapToPreloadedFrame(currentFrameRef.current, step);
          if (snapped !== lastDrawnFrameRef.current) {
            drawFrameRef.current(snapped);
          }
        } else {
          const snapped = snapToPreloadedFrame(currentFrameRef.current, step);
          if (snapped !== lastDrawnFrameRef.current) {
            drawFrameRef.current(snapped);
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Canvas size setup
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Immediate frame 1 load
  useEffect(() => {
    const img1 = new Image();
    img1.onload = () => {
      imagesRef.current[1] = img1;
      loadedFlagsRef.current[1] = true;
      drawFrameRef.current(1);
    };
    img1.src = getFrameUrl(1);
    if (img1.complete) {
      imagesRef.current[1] = img1;
      loadedFlagsRef.current[1] = true;
      drawFrameRef.current(1);
    }
  }, []);

  // Optimized Progressive preloader pipeline
  useEffect(() => {
    let isCancelled = false;
    const isMobile = isMobileRef.current;
    const step = frameStepRef.current;
    const framesToLoad = getFramesToLoad(step);
    const totalTarget = framesToLoad.length;

    const loadSingleFrame = (frameNum: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[frameNum] && imagesRef.current[frameNum]!.complete) {
          resolve();
          return;
        }

        const img = new Image();

        const onDone = () => {
          if (isCancelled) return;
          imagesRef.current[frameNum] = img;
          loadedFlagsRef.current[frameNum] = true;
          loadedCountRef.current++;

          const count = loadedCountRef.current;
          const percent = Math.min(100, Math.round((count / totalTarget) * 100));
          onLoadedPercentRef.current?.(percent);

          if (frameNum === 1 && lastDrawnFrameRef.current === -1) {
            drawFrameRef.current(1);
          }
          resolve();
        };

        img.onload = onDone;
        img.onerror = () => resolve();
        img.src = getFrameUrl(frameNum);

        if (img.complete) {
          onDone();
        }
      });
    };

    const runPipeline = async () => {
      // 1. Milestone frames across the entire story (every 4th item in framesToLoad)
      // This loads only ~40-56 frames and makes the whole page scrollable immediately!
      const milestones: number[] = [];
      const mStep = step <= 1 ? 8 : 4;
      for (let i = 0; i < framesToLoad.length; i += mStep) {
        milestones.push(framesToLoad[i]);
      }
      if (!milestones.includes(TOTAL_FRAMES)) {
        milestones.push(TOTAL_FRAMES);
      }
      await Promise.all(milestones.map((n) => loadSingleFrame(n)));

      if (isCancelled) return;

      // 2. Early frames (First 30 frames of the story so Step 1 is immediately complete)
      const early = framesToLoad.filter(
        (n) => n <= Math.min(30, TOTAL_FRAMES) && !loadedFlagsRef.current[n]
      );
      await Promise.all(early.map((n) => loadSingleFrame(n)));

      if (isCancelled) return;

      // 3. Remainder of frames loaded via worker pool
      // Concurrency 3 on mobile keeps CPU/GPU free for 60fps scrolling; 12 on desktop
      const rest = framesToLoad.filter((n) => !loadedFlagsRef.current[n]);
      const concurrency = isMobile ? 3 : 12;

      let idx = 0;
      const worker = async () => {
        while (idx < rest.length && !isCancelled) {
          const frameNum = rest[idx++];
          await loadSingleFrame(frameNum);
        }
      };

      await Promise.all(Array.from({ length: concurrency }, () => worker()));
    };

    runPipeline();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animation-canvas"
      aria-label="Cybernetic Falcon 3D Frame Animation Canvas"
    />
  );
};

export default ScrollCanvas;
