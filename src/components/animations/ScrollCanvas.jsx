"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { drawImageCover, resizeCanvasToElement } from "@/lib/canvas";
import { getAllFramePaths, TOTAL_FRAMES } from "@/lib/frames";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas({ scrollTriggerRef, onFrameChange }) {
  const canvasRef = useRef(null);
  const frameIndexRef = useRef(0);
  const rafIdRef = useRef(null);
  const renderQueuedRef = useRef(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const onFrameChangeRef = useRef(onFrameChange);

  onFrameChangeRef.current = onFrameChange;

  useEffect(() => {
    const container = scrollTriggerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let isMounted = true;
    let scrollTrigger = null;
    const images = [];
    const framePaths = getAllFramePaths();
    let loadedCount = 0;

    const renderFrame = (index) => {
      const image = images[index];
      if (!image?.complete) {
        return;
      }

      drawImageCover(ctx, image, canvas.clientWidth, canvas.clientHeight);
    };

    const scheduleRender = (index) => {
      frameIndexRef.current = index;

      if (renderQueuedRef.current) {
        return;
      }

      renderQueuedRef.current = true;
      rafIdRef.current = requestAnimationFrame(() => {
        renderQueuedRef.current = false;
        renderFrame(frameIndexRef.current);
      });
    };

    const handleResize = () => {
      resizeCanvasToElement(canvas);
      scheduleRender(frameIndexRef.current);
    };

    const preloadFrames = () =>
      new Promise((resolve) => {
        if (framePaths.length === 0) {
          resolve();
          return;
        }

        framePaths.forEach((path, index) => {
          const image = new Image();
          images[index] = image;

          const onLoad = () => {
            loadedCount += 1;
            if (isMounted) {
              setLoadProgress(Math.round((loadedCount / framePaths.length) * 100));
            }

            if (loadedCount === framePaths.length) {
              resolve();
            }
          };

          image.addEventListener("load", onLoad);
          image.addEventListener("error", onLoad);
          image.src = path;
        });
      });

    const initScrollAnimation = () => {
      resizeCanvasToElement(canvas);
      scheduleRender(0);
      onFrameChangeRef.current?.(0);

      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.8,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(self.progress * (TOTAL_FRAMES - 1))
          );

          scheduleRender(frameIndex);
          onFrameChangeRef.current?.(frameIndex);
        },
      });
    };

    preloadFrames().then(() => {
      if (!isMounted) {
        return;
      }

      setIsLoading(false);
      initScrollAnimation();
      ScrollTrigger.refresh();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);

      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      scrollTrigger?.kill();
    };
  }, [scrollTriggerRef]);

  return (
    <div className="story-canvas-wrap">
      <canvas ref={canvasRef} className="story-canvas" aria-hidden="true" />

      {isLoading && (
        <div className="story-canvas-loader" role="status" aria-live="polite">
          <p>Loading frames… {loadProgress}%</p>
        </div>
      )}
    </div>
  );
}
