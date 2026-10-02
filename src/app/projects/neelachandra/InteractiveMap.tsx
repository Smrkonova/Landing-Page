"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Pin {
  id: string;
  name: string;
  top: string;
  left: string;
  labelPosition: 'top' | 'bottom' | 'left' | 'right';
  isDefault?: boolean;
}

const pins: Pin[] = [
  { id: 'tumkur', name: 'TUMKUR', top: '79.1%', left: '46.9%', labelPosition: 'left', isDefault: true },
  { id: 'nelamangala', name: 'NELAMANGALA', top: '79.4%', left: '62.2%', labelPosition: 'right' },
  { id: 'bengaluru', name: 'BENGALURU', top: '81.6%', left: '74.8%', labelPosition: 'right' },
  { id: 'ramanagara', name: 'RAMANAGARA', top: '90.4%', left: '70.5%', labelPosition: 'right' },
  { id: 'mysuru', name: 'MYSURU', top: '97.2%', left: '52.6%', labelPosition: 'bottom' },
];

export default function InteractiveMap() {
  const [activePin, setActivePin] = useState<string>('tumkur');

  return (
    <div className="relative w-full max-w-[600px] aspect-[860/1341] flex items-center justify-center select-none">
      {/* Background Map Shape */}
      <img
        src="/images/projects/neelachandra/map.png"
        alt="Neelachandra Regional Map"
        className="w-full h-full object-contain pointer-events-none drop-shadow-md"
      />

      {/* Interactive Map Pins */}
      {pins.map((pin) => {
        const isSelected = activePin === pin.id;

        return (
          <div
            key={pin.id}
            style={{ top: pin.top, left: pin.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onMouseEnter={() => setActivePin(pin.id)}
            onClick={() => setActivePin(pin.id)}
          >
            {/* Pop-up Label on Hover / Active */}
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: pin.labelPosition === 'top' ? 8 : -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`absolute pointer-events-none whitespace-nowrap z-30 font-bold uppercase tracking-wider text-white ${
                    pin.labelPosition === 'left'
                      ? 'right-full mr-3 top-1/2 -translate-y-1/2 text-right'
                      : pin.labelPosition === 'right'
                      ? 'left-full ml-3 top-1/2 -translate-y-1/2 text-left'
                      : pin.labelPosition === 'top'
                      ? 'bottom-full mb-3 left-1/2 -translate-x-1/2 text-center'
                      : 'top-full mt-3 left-1/2 -translate-x-1/2 text-center'
                  }`}
                >
                  <span className="text-[clamp(13px,1.2vw+4px,18px)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] bg-black/20 px-2 py-0.5 rounded backdrop-blur-[2px]">
                    {pin.name}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pin Target: Outer Ring & Inner Dot as per Figma (44px ring, 30px circle, no pulsing/ping animation) */}
            <div className="relative flex items-center justify-center">
              <div
                className={`w-[44px] h-[44px] rounded-full border border-white flex items-center justify-center transition-transform duration-200 ${
                  isSelected ? 'scale-105' : 'group-hover:scale-105'
                }`}
              >
                <div className="w-[30px] h-[30px] rounded-full bg-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
