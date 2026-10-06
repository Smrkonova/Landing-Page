"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { TOTAL_FRAMES, getFrameUrl } from "@/data/story";

interface ScrollCanvasProps {
  progress: number; // 0 to 1
  onFrameUpdate?: (frame: number) => void;
  onLoadedPercent?: (percent: number) => void;
}

export const ScrollCanvas: React.FC<ScrollCanvasProps> = ({
  progress,
  onFrameUpdate,
  onLoadedPercent,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES + 1).fill(null)
  );
  const loadedFlagsRef = useRef<boolean[]>(
    new Array(TOTAL_FRAMES + 1).fill(false)
  );

  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);
  const loadedCountRef = useRef<number>(0);

  const onFrameUpdateRef = useRef(onFrameUpdate);
  onFrameUpdateRef.current = onFrameUpdate;

  const onLoadedPercentRef = useRef(onLoadedPercent);
  onLoadedPercentRef.current = onLoadedPercent;

  // Draw frame function
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameIndex)));

    // Find requested or nearest available frame
    let imgToDraw = imagesRef.current[clampedIndex];
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      for (let offset = 1; offset < 80; offset++) {
        const left = clampedIndex - offset;
        const right = clampedIndex + offset;
        if (left >= 1 && imagesRef.current[left]?.complete && imagesRef.current[left]!.naturalWidth > 0) {
          imgToDraw = imagesRef.current[left];
          break;
        }
        if (right <= TOTAL_FRAMES && imagesRef.current[right]?.complete && imagesRef.current[right]!.naturalWidth > 0) {
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

  // Window resize handler
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    if (lastDrawnFrameRef.current > 0) {
      drawFrameRef.current(lastDrawnFrameRef.current);
    } else {
      drawFrameRef.current(1);
    }
  }, []);

  const progressRef = useRef<number>(progress);
  progressRef.current = progress;

  // Scene 7 begins at 8/9 (0.8888)
  const SCENE_7_START = 8 / 9;
  const SCENE_6_MAX_FRAME = 379;
  const LOOP_START = 380;
  const LOOP_END = 449;

  // Update target frame from progress for scenes 1 to 6
  useEffect(() => {
    if (progress < SCENE_7_START) {
      const normProgress = Math.max(0, progress / SCENE_7_START);
      targetFrameRef.current = 1 + normProgress * (SCENE_6_MAX_FRAME - 1);
    } else {
      targetFrameRef.current = LOOP_START;
    }
  }, [progress, SCENE_7_START]);

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

      if (isScene7) {
        // Once entering the last step: no need to scroll or wait, play as autonomous video loop
        if (!isLoopingRef.current) {
          isLoopingRef.current = true;
          flightFrameRef.current = LOOP_START;
        }

        // Advance forward at ~26 fps video playback
        flightFrameRef.current += 0.45;
        if (flightFrameRef.current >= LOOP_END) {
          flightFrameRef.current = LOOP_START; // Forward loop repetition
        }

        currentFrameRef.current = flightFrameRef.current;
        drawFrameRef.current(Math.round(flightFrameRef.current));
      } else {
        // Normal scroll-controlled lerp across scenes 1 to 6 (frames 1 to 379)
        isLoopingRef.current = false;
        flightFrameRef.current = LOOP_START;
        const target = targetFrameRef.current;
        const diff = target - currentFrameRef.current;
        if (Math.abs(diff) > 0.01) {
          currentFrameRef.current += diff * 0.3;
          drawFrameRef.current(Math.round(currentFrameRef.current));
        } else if (Math.round(currentFrameRef.current) !== lastDrawnFrameRef.current) {
          drawFrameRef.current(Math.round(currentFrameRef.current));
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
  }, [SCENE_7_START]);

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

  // Progressive preloader pipeline
  useEffect(() => {
    let isCancelled = false;

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
          const percent = Math.min(100, Math.round((count / TOTAL_FRAMES) * 100));
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
      // 1. Milestone frames
      const samples: number[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i += 8) {
        samples.push(i);
      }
      await Promise.all(samples.map((n) => loadSingleFrame(n)));

      // 2. Early frames (1-40)
      const early: number[] = [];
      for (let i = 1; i <= Math.min(40, TOTAL_FRAMES); i++) {
        if (!loadedFlagsRef.current[i]) early.push(i);
      }
      await Promise.all(early.map((n) => loadSingleFrame(n)));

      // 3. Remainder with pool of 14 concurrent workers
      const rest: number[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!loadedFlagsRef.current[i]) rest.push(i);
      }

      const CONCURRENCY = 14;
      let idx = 0;
      const worker = async () => {
        while (idx < rest.length && !isCancelled) {
          const frameNum = rest[idx++];
          await loadSingleFrame(frameNum);
        }
      };

      await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
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
