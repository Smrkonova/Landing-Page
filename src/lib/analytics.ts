"use client";

import posthog from "posthog-js";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Universal event tracker for both Google Tag Manager (dataLayer) 
 * and PostHog.
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

  // 1. Google Tag Manager / GA4 DataLayer
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);
  } catch (err) {
    console.warn("GTM event tracking error:", err);
  }

  // 2. PostHog Event Capture
  try {
    if (typeof posthog !== "undefined" && typeof posthog.capture === "function") {
      posthog.capture(eventName, parameters);
    }
  } catch (err) {
    console.warn("PostHog event tracking error:", err);
  }
}

/**
 * Track WhatsApp button clicks
 */
export function trackWhatsAppClick(location: string = "floating_icon") {
  trackEvent("whatsapp_click", {
    category: "engagement",
    action: "click",
    label: "WhatsApp Chat",
    click_location: location,
    phone_number: "+91 97406 62046",
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
