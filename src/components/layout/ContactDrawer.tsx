"use client";

import React from "react";
import ContactModal from "@/components/animations/ContactModal";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  return <ContactModal isOpen={isOpen} onClose={onClose} />;
}
