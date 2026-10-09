"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContactModal } from "@/context/ContactModalContext";

export default function ContactPage() {
  const router = useRouter();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    openContactModal();
    // Redirect gracefully to home while keeping modal open
    router.replace("/");
  }, [openContactModal, router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );
}
