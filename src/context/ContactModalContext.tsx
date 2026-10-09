"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import ContactModal from "@/components/animations/ContactModal";

interface ContactModalContextType {
  isOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openContactModal: () => {},
  closeContactModal: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 1. Expose to global window object
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__openContactModal = openContactModal;
      (window as any).__closeContactModal = closeContactModal;
    }
  }, [openContactModal, closeContactModal]);

  // 2. Listen for custom events
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-contact-modal", handleOpen);
    window.addEventListener("close-contact-modal", handleClose);

    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      window.removeEventListener("close-contact-modal", handleClose);
    };
  }, []);

  // 3. Global click interception for any /contact link or contact triggers
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const trigger = target.closest("a, button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!trigger) return;

      // If clicked inside the modal itself, don't re-trigger
      if (trigger.closest(".contact-modal-card")) return;

      const href = trigger.getAttribute("href");
      const isContactLink =
        href === "/contact" ||
        href === "/contact/" ||
        href === "#contact";

      const dataAttr = trigger.getAttribute("data-contact-trigger");
      const isExplicitTrigger = dataAttr === "true" || dataAttr === "contact";

      if (isContactLink || isExplicitTrigger) {
        e.preventDefault();
        e.stopPropagation();
        openContactModal();
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [openContactModal]);

  return (
    <ContactModalContext.Provider value={{ isOpen, openContactModal, closeContactModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
