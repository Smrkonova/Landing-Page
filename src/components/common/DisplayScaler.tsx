"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import DesktopScaler from "./DesktopScaler";

/**
 * DisplayScaler Component
 * 
 * Provides responsive, fixed-proportion scaling for:
 * 1. Embedded live websites (iframes) inside aspect-ratio containers
 * 2. Entire UI components / sections / layouts via DesktopScaler
 * 
 * Prevents layout breaking, breakpoint collapsing, and text squishing
 * when users zoom in (Ctrl +) or zoom out (Ctrl -), or view on different screen DPIs.
 * 
 * Usage:
 * 1. For embedded live websites:
 *    <DisplayScaler src="https://www.nazrco.in/" baseWidth={1440} aspectRatio={16/9} />
 * 
 * 2. For wrapping UI sections:
 *    <DisplayScaler baseWidth={1440}>
 *       <MyComponent />
 *    </DisplayScaler>
 */
export interface DisplayScalerProps {
  src?: string;
  title?: string;
  children?: React.ReactNode;
  baseWidth?: number;
  baseHeight?: number;
  aspectRatio?: number | string;
  mode?: "fit" | "fit-width" | "cover";
  className?: string;
  style?: React.CSSProperties & { [key: string]: any };
  sandbox?: string;
  loading?: "lazy" | "eager";
  allowInteraction?: boolean;
  showOpenButton?: boolean;
  hideScrollbar?: boolean;
  clampText?: boolean | string;
  iframeProps?: Record<string, any>;
}

export default function DisplayScaler({
  src,
  title = "Embedded Website",
  children,
  baseWidth = 1440,
  baseHeight,
  aspectRatio = 16 / 9,
  mode = "fit", // 'fit' (contain & center) | 'fit-width' (match width) | 'cover' (fill without bars)
  className = "",
  style = {},
  sandbox = "allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-presentation",
  loading = "lazy",
  allowInteraction = true,
  showOpenButton = false,
  hideScrollbar = true,
  clampText = false,
  iframeProps = {},
}: DisplayScalerProps = {}) {
  // If no iframe src is provided but children are present, delegate to DesktopScaler
  if (!src && children) {
    return (
      <DesktopScaler
        desktopWidth={baseWidth}
        bgColor={style?.backgroundColor || "transparent"}
        className={className}
        style={style}
      >
        {children}
      </DesktopScaler>
    );
  }

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useTransformFallback, setUseTransformFallback] = useState(false);

  // Parse aspectRatio if given as string like "16/9"
  const numericRatio = typeof aspectRatio === "string" 
    ? (aspectRatio.includes("/") 
        ? Number(aspectRatio.split("/")[0]) / Number(aspectRatio.split("/")[1])
        : Number(aspectRatio))
    : (aspectRatio || 16 / 9);

  const initialHeight = baseHeight || (numericRatio ? Math.round(baseWidth / numericRatio) : Math.round(baseWidth * (9 / 16)));
  const [dimensions, setDimensions] = useState({ width: baseWidth, height: initialHeight });

  const calculateScale = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const containerWidth = rect.width;
    const containerHeight = rect.height;

    if (containerWidth === 0) return;

    const targetWidth = baseWidth;
    let targetHeight = baseHeight;

    if (!targetHeight) {
      if (numericRatio) {
        targetHeight = Math.round(targetWidth / numericRatio);
      } else if (containerHeight > 0) {
        targetHeight = Math.round(targetWidth * (containerHeight / containerWidth));
      } else {
        targetHeight = Math.round(targetWidth * (9 / 16));
      }
    }

    const scaleX = containerWidth / targetWidth;
    let calculatedScale = scaleX;

    if (mode === "fit" && containerHeight > 0) {
      const scaleY = containerHeight / targetHeight;
      // Contain within container bounds
      calculatedScale = Math.min(scaleX, scaleY);
    } else if (mode === "cover" && containerHeight > 0) {
      const scaleY = containerHeight / targetHeight;
      // Cover entire container
      calculatedScale = Math.max(scaleX, scaleY);
    } else if (mode === "fit-width") {
      calculatedScale = scaleX;
      // In fit-width mode, set container height to match scaled target height
      if (containerRef.current) {
        containerRef.current.style.height = `${Math.round(targetHeight * scaleX)}px`;
      }
    }

    setScale(calculatedScale > 0 ? calculatedScale : 1);
    setDimensions({ width: targetWidth, height: targetHeight });
  }, [baseWidth, baseHeight, numericRatio, mode]);

  useEffect(() => {
    setIsMounted(true);

    const supportsZoom =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("zoom", "1");

    setUseTransformFallback(!supportsZoom);

    calculateScale();

    // Secondary calculations after styles/layout settle
    const t1 = setTimeout(calculateScale, 100);
    const t2 = setTimeout(calculateScale, 400);

    // ResizeObserver on the container to detect container size & zoom changes
    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateScale();
      });
      resizeObserver.observe(containerRef.current);
    }

    // Window resize event
    const handleResize = () => calculateScale();
    window.addEventListener("resize", handleResize);

    // VisualViewport resize for pinch-to-zoom and browser zoom changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    // DevicePixelRatio change listener (triggers directly on Ctrl +/- zoom)
    let dprMediaQuery = null;
    const handleDprChange = () => {
      calculateScale();
      setupDprListener();
    };

    const setupDprListener = () => {
      if (typeof window === "undefined" || !window.matchMedia) return;
      if (dprMediaQuery) {
        dprMediaQuery.removeEventListener("change", handleDprChange);
      }
      dprMediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      dprMediaQuery.addEventListener("change", handleDprChange);
    };

    setupDprListener();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
      if (dprMediaQuery) {
        dprMediaQuery.removeEventListener("change", handleDprChange);
      }
    };
  }, [calculateScale]);

  // Loading safety timeout: ensure preview is never stuck in infinite loading state
  useEffect(() => {
    if (!src || isLoaded) return;
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, [src, isLoaded]);

  // Determine whether to apply default aspect ratio style to prevent 0-height container collapse
  const containerStyle = {
    ...style,
  };
  if (
    !style.height &&
    !className.includes("h-") &&
    !className.includes("aspect-") &&
    numericRatio &&
    mode !== "fit-width"
  ) {
    containerStyle.aspectRatio = `${numericRatio}`;
  }

  // Positioning style based on zoom support & mode
  const isCentered = mode === "fit" || mode === "cover";
  
  const wrapperStyle: React.CSSProperties & Record<string, any> = {
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    pointerEvents: allowInteraction ? "auto" : "none",
    opacity: isMounted ? 1 : 0,
    transition: "opacity 0.2s ease-out",
    ...(clampText
      ? { fontSize: typeof clampText === "string" ? clampText : "clamp(12px, 1.2vw, 16px)" }
      : {}),
    ...(useTransformFallback
      ? {
          position: "absolute" as const,
          top: isCentered ? "50%" : 0,
          left: isCentered ? "50%" : 0,
          transform: isCentered
            ? `translate(-50%, -50%) scale(${scale})`
            : `scale(${scale})`,
          transformOrigin: isCentered ? "center center" : "top left",
        }
      : {
          zoom: scale,
          margin: isCentered ? "auto" : 0,
          position: "relative" as const,
        }),
  };

  const iframeSandboxProp = sandbox && sandbox !== "none" ? { sandbox } : {};

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${
        !useTransformFallback && isCentered ? "flex items-center justify-center" : ""
      } ${className}`}
      style={containerStyle}
    >
      {/* Loading Indicator for Iframe */}
      {src && !isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xs text-white/80 transition-opacity duration-300">
          <div className="w-8 h-8 border-2 border-white/20 border-t-[#F80090] rounded-full animate-spin mb-3" />
          <span className="font-mono tracking-widest uppercase text-gray-300 text-[clamp(10px,1.2vw,14px)]">
            Loading Preview...
          </span>
        </div>
      )}

      {/* Optional external link button */}
      {src && showOpenButton && (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-[clamp(8px,1vw,14px)] py-[clamp(4px,0.5vw,7px)] rounded-full bg-black/70 hover:bg-black/90 text-white/80 hover:text-white text-[clamp(10px,1vw,12px)] font-medium backdrop-blur-md border border-white/10 transition-all duration-200 shadow-lg cursor-pointer pointer-events-auto"
          title="Open live website in new tab"
        >
          <span>Live Site</span>
          <svg className="w-[clamp(10px,1vw,13px)] h-[clamp(10px,1vw,13px)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      {/* Scaled Wrapper Layer */}
      <div style={wrapperStyle}>
        {src ? (
          <iframe
            src={src}
            title={title}
            className="w-full h-full border-0 block"
            scrolling={hideScrollbar ? "no" : undefined}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
            loading={loading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            tabIndex={allowInteraction ? 0 : -1}
            style={{
              scrollbarWidth: hideScrollbar ? "none" : undefined,
              msOverflowStyle: hideScrollbar ? "none" : undefined,
              ...iframeProps.style,
            }}
            {...iframeSandboxProp}
            {...iframeProps}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

// Convenient named exports
export { DisplayScaler, DesktopScaler };
export const IframeScaler = DisplayScaler;
export const ScreenScaler = DisplayScaler;
