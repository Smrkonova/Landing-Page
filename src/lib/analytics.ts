"use client";

import posthog from "posthog-js";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Universal event tracker for Google Tag Manager (dataLayer),
 * Google Analytics 4 (gtag), and PostHog.
 */
export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...parameters,
  };

  // 1. Google Analytics 4 (direct gtag)
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        page_path: window.location.pathname,
        ...parameters,
      });
    }
  } catch (err) {
    console.warn("gtag event tracking error:", err);
  }

  // 2. Google Tag Manager / GA4 DataLayer
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);
  } catch (err) {
    console.warn("GTM event tracking error:", err);
  }

  // 3. PostHog Event Capture
  try {
    if (typeof posthog !== "undefined" && typeof posthog.capture === "function") {
      posthog.capture(eventName, parameters);
    }
  } catch (err) {
    console.warn("PostHog event tracking error:", err);
  }
}

/**
 * Explicit helper to track outbound link clicks
 */
export function trackOutboundClick(url: string, label: string = "") {
  try {
    const parsed = new URL(url, typeof window !== "undefined" ? window.location.origin : undefined);
    trackEvent("click", {
      outbound: true,
      link_url: url,
      link_domain: parsed.hostname,
      link_classes: label,
      event_category: "outbound",
    });
  } catch {
    trackEvent("click", {
      outbound: true,
      link_url: url,
      event_category: "outbound",
    });
  }
}

/**
 * Track WhatsApp button clicks (both custom event and outbound click)
 */
export function trackWhatsAppClick(location: string = "floating_icon") {
  trackEvent("whatsapp_click", {
    category: "engagement",
    action: "click",
    label: "WhatsApp Chat",
    click_location: location,
    phone_number: "+91 97406 62046",
    outbound: true,
    link_url: "https://wa.me/919740662046",
    link_domain: "wa.me",
  });
}

/**
 * Track Contact Us / Get in Touch button clicks
 */
export function trackContactButtonClick(buttonText: string, location: string) {
  trackEvent("contact_button_click", {
    category: "engagement",
    action: "click",
    label: buttonText,
    button_text: buttonText,
    click_location: location,
  });
}

/**
 * Track Form Submissions (Contact Modal, Contact Drawer, etc.)
 */
export function trackFormSubmission(formType: string, status: "success" | "error" = "success") {
  trackEvent("form_submission", {
    category: "conversion",
    action: "submit",
    label: formType,
    form_type: formType,
    submission_status: status,
  });
}
