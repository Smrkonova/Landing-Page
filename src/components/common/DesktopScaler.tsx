"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * DesktopScaler Component
 * 
 * Provides fluid desktop scaling (default 1440px base width).
 * Scales smoothly with (windowWidth / desktopWidth) so zooming out (Ctrl -)
 * or zooming in (Ctrl +) preserves the exact layout ratio without breaking or shifting.
 * 
 * Features:
 * - Uses native CSS zoom when supported (Chrome, Edge, Safari) for crisp non-blurry rendering
 * - Falls back to CSS transform: scale() on browsers without zoom (e.g. Firefox)
 * - Automatically detects mobile screens (<768px) and scales fluidly against a 390px base
 * - Detects "Request Desktop Site" on mobile devices and prevents height inflation
 * - Exposes --desktop-scale CSS variable and toggles .dsm-mode on <html>
 * - Uses ResizeObserver to maintain accurate parent height in transform fallback mode
 */
const ScalerContext = React.createContext(false);

export interface DesktopScalerProps {
  children?: React.ReactNode;
  desktopWidth?: number;
  bgColor?: string;
  className?: string;
  style?: React.CSSProperties & { [key: string]: any };
}

export function DesktopScaler({
  children,
  desktopWidth = 1440,
  bgColor = "transparent",
  className = "",
  style = {},
}: DesktopScalerProps = {}) {
  const isNested = React.useContext(ScalerContext);
  if (isNested) {
    return <>{children}</>;
  }

  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktopSiteMobile, setIsDesktopSiteMobile] = useState(false);
  const [useTransformFallback, setUseTransformFallback] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.zoom = "1";
    }

    const supportsZoom =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("zoom", "1");

    setUseTransformFallback(!supportsZoom);

    const checkScale = () => {
      if (typeof window === "undefined") return;

      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 768;

      // Detect "Request Desktop Site" on mobile phone/tablet:
      // Viewport reports wide (>=768px), but physical screen is small (<768px)
      // and device is touch-primary.
      const desktopSiteMobile =
        !mobile &&
        typeof screen !== "undefined" &&
        screen.width < 768 &&
        typeof navigator !== "undefined" &&
        navigator.maxTouchPoints > 0;

      setIsMobile(mobile);
      setIsDesktopSiteMobile(desktopSiteMobile);

      if (mobile) {
        setScale(windowWidth / 390);
        return;
      }

      /**
       * Global Desktop Scaling (desktopWidth base, default 1440px)
       * Scales fluidly with windowWidth / desktopWidth so zooming out below 100%
       * holds the 1440px layout ratio without collapsing or overflowing.
       */
      setScale(windowWidth / desktopWidth);
    };

    checkScale();

    window.addEventListener("resize", checkScale);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", checkScale);
    }

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          setContentHeight(
            entries[0].target.clientHeight ||
            entries[0].contentRect.height
          );
        }
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
        setContentHeight(containerRef.current.offsetHeight);
      }
    }

    return () => {
      window.removeEventListener("resize", checkScale);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", checkScale);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [desktopWidth]);

  // Toggle a class on <html> so global CSS can override section heights if needed
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isDesktopSiteMobile) {
      document.documentElement.classList.add("dsm-mode");
    } else {
      document.documentElement.classList.remove("dsm-mode");
    }
    return () => {
      document.documentElement.classList.remove("dsm-mode");
    };
  }, [isDesktopSiteMobile]);

  const targetWidth = isMobile ? 390 : desktopWidth;

  const parentStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: "100%",
    position: "relative" as const,
    overflow:
      (!isMobile && useTransformFallback) || className.includes("overflow-hidden")
        ? ("hidden" as const)
        : undefined,
    height:
      !isMobile && useTransformFallback && contentHeight > 0
        ? contentHeight * scale
        : undefined,
    ...style,
  };

  const innerStyle: React.CSSProperties & Record<string, any> = {
    width: `${targetWidth}px`,
    margin: "0 auto",
    transformOrigin: "top center" as const,
    // When desktop-site-on-mobile, decouple --desktop-scale from the actual zoom.
    // Set it to 9999 so calc(100vh/9999) ≈ 0, making max(750px, ~0) = 750px.
    // The CSS zoom still applies normally (content renders at 1440px, zoomed to fit).
    "--desktop-scale": isDesktopSiteMobile ? 9999 : scale,
    ...(useTransformFallback
      ? {
          transform: `scale(${scale})`,
        }
      : {
          zoom: scale,
        }),
  };

  return (
    <ScalerContext.Provider value={true}>
      <div
        className={`w-full min-h-screen flex justify-center ${className}`}
        style={parentStyle}
      >
        <div
          ref={containerRef}
          className="relative flex shrink-0 flex-col min-h-screen w-[390px] md:w-[1440px]"
          style={innerStyle}
        >
          {children}
        </div>
      </div>
    </ScalerContext.Provider>
  );
}

export default DesktopScaler;
