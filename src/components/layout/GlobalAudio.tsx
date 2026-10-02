"use client";

import { useEffect, useRef } from "react";

export default function GlobalAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const clickSound = new Audio('/audio/click.mpeg');
    clickSound.volume = 0.6; // Slightly lowered to not be overwhelmingly loud
    audioRef.current = clickSound;

    const handleClick = (e) => {
      // Check if the clicked element (or its parent) is a button or a link
      const target = e.target.closest('button, a');
      
      if (target && audioRef.current) {
        // Reset the audio to start so rapid clicks don't delay
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => {
          // Browsers sometimes block audio if the user hasn't interacted enough yet
          console.warn("Click sound blocked by browser policy:", err);
        });
      }
    };

    // Listen to all clicks on the page globally
    document.addEventListener("click", handleClick);
    
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // This is a logic-only component, it renders no visible UI
  return null;
}
