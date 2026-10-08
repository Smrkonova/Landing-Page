"use client";

import React, { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

function AnalyticsPageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Page view & page title tracking on route changes
  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;

    const fullUrl = window.location.origin + pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Short timeout allows Next.js metadata to update document.title in DOM
    const timer = setTimeout(() => {
      const pageTitle = document.title || "Smrkonova Softech Solutions";

      // Send page_view to GA4 directly via gtag
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "page_view", {
          page_path: pathname,
          page_location: fullUrl,
          page_title: pageTitle,
        });
      }

      // Also push to GTM dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_location: fullUrl,
        page_title: pageTitle,
      });

      // Capture SPA pageview in PostHog
      if (typeof posthog !== "undefined" && typeof posthog.capture === "function") {
        posthog.capture("$pageview", {
          $current_url: fullUrl,
          $title: pageTitle,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // 2. Global outbound link click tracking
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOutboundClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore anchor jumps and script links
      if (href.startsWith("#") || href.startsWith("javascript:")) return;

      try {
        const url = new URL(href, window.location.href);
        const isExternal = url.origin !== window.location.origin;

        if (isExternal) {
          const linkDomain = url.hostname;
          const linkText = anchor.textContent?.trim().slice(0, 100) || "";
          const linkId = anchor.id || "";
          const linkClasses = typeof anchor.className === "string" ? anchor.className : "";

          // GA4 standard enhanced measurement outbound click event: 'click'
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "click", {
              outbound: true,
              link_url: href,
              link_domain: linkDomain,
              link_id: linkId,
              link_classes: linkClasses,
              link_text: linkText,
              event_category: "outbound",
            });
          }

          // Push to GTM dataLayer
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "outbound_click",
            outbound: true,
            link_url: href,
            link_domain: linkDomain,
            link_id: linkId,
            link_classes: linkClasses,
            link_text: linkText,
            page_path: window.location.pathname,
          });

          // PostHog outbound event
          if (typeof posthog !== "undefined" && typeof posthog.capture === "function") {
            posthog.capture("outbound_click", {
              url: href,
              domain: linkDomain,
              text: linkText,
            });
          }
        }
      } catch {
        // Not a valid URL, ignore
      }
    };

    document.addEventListener("click", handleOutboundClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleOutboundClick, { capture: true });
    };
  }, []);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        person_profiles: "identified_only",
        capture_pageview: false, // Handled automatically by AnalyticsPageViewTracker on route change
      });
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <AnalyticsPageViewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}

