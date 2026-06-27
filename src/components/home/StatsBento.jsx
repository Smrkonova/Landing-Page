"use client";

import { motion } from "framer-motion";
import { FolderOpen, User, PieChart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import CyberGlassCard from "@/components/ui/CyberGlassCard";

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      // Handle decimals (like 4.8)
      if (end % 1 !== 0) {
        setCount((easeOutQuart * end).toFixed(1));
      } else {
        setCount(Math.floor(easeOutQuart * end));
      }

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const MiniChart = ({ strokeColor = "#3395ff" }) => (
  <div className="w-24 h-12 relative opacity-40 group-hover:opacity-100 transition-opacity duration-500">
    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
      <motion.path
        d="M0,35 Q10,35 15,25 T30,20 T45,28 T60,15 T75,18 T100,5"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Little nodes on the graph */}
      <circle cx="15" cy="25" r="2" fill={strokeColor} />
      <circle cx="30" cy="20" r="2" fill={strokeColor} />
      <circle cx="45" cy="28" r="2" fill={strokeColor} />
      <circle cx="60" cy="15" r="2" fill={strokeColor} />
      <circle cx="75" cy="18" r="2" fill={strokeColor} />
      <circle cx="100" cy="5" r="2" fill={strokeColor} />
    </svg>
  </div>
);

const StatCard = ({ icon: Icon, value, suffix, label, delay = 0, glowColor, borderGlowColor, accentColor }) => {
  return (
    <CyberGlassCard 
        delay={delay}
        glowColor={glowColor}
        borderGlowColor={borderGlowColor}
        className="w-full"
    >
      <div className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-6 md:gap-10 z-10 w-full">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500 border border-black/5" style={{ color: accentColor }}>
            <Icon strokeWidth={1.5} className="w-8 h-8" />
          </div>
          
          {/* Divider */}
          <div className="w-px h-16 bg-black/10" />
          
          {/* Text */}
          <div className="flex flex-col flex-1">
            <div className="text-4xl md:text-5xl font-bold tracking-tighter flex items-baseline" style={{ color: accentColor }}>
              <Counter end={value} suffix={suffix} />
            </div>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-widest uppercase mt-2">{label}</p>
          </div>

          {/* Mini Graph */}
          <div className="hidden sm:block z-10 shrink-0">
            <MiniChart strokeColor={accentColor} />
          </div>
        </div>
      </div>
    </CyberGlassCard>
  );
};

export default function StatsBento() {
  return (
    <section className="bg-[#f2f2f6] py-24 md:py-32 w-full px-6 md:px-12 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Grid & Arcs (Reference Image Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
          <svg className="w-full h-full min-w-[1400px]" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 512H1440" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M0 640H1440" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M720 0V1024" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
              <circle cx="1100" cy="512" r="600" stroke="black" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="2 4" />
              <circle cx="1100" cy="512" r="400" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
          </svg>
      </div>

      {/* Ambient Cyber Glow - Light Theme (Huge Blue Arc on the Right) */}
      <div className="absolute top-1/2 right-0 w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-[200px] mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/2 z-0" />

      {/* Faint Background Watermark Logo */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] opacity-[0.02] pointer-events-none select-none text-black z-0">
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          {/* SA/Smrkonova style abstract logo shape */}
          <path d="M40,160 L100,40 L160,160 M70,100 L130,100" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col">
          <motion.div
            className="flex flex-col mb-8"
          >
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-[#1a1a1a] leading-[0.9] uppercase">
              NUMBERS
            </h2>
            <h2 
              className="text-6xl md:text-8xl lg:text-[100px] font-light tracking-tighter leading-[0.9] uppercase"
              style={{
                WebkitTextStroke: "2px #1a1a1a",
                color: "transparent"
              }}
            >
              DON'T LIE
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2"
          >
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-[#007aff]">
              Real impact.
            </p>
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-[#007aff]">
              Measured results.
            </p>
          </motion.div>
        </div>

        {/* Right Content - Cards Stack */}
        <div className="flex flex-col gap-6 md:gap-8">
          <StatCard 
            icon={FolderOpen} 
            value={50} 
            suffix="+" 
            label="Projects" 
            delay={0.1}
            glowColor="rgba(0, 195, 255, 0.3)"
            borderGlowColor="rgba(0, 195, 255, 0.6)"
            accentColor="#007aff" 
          />
          <StatCard 
            icon={User} 
            value={30} 
            suffix="K+" 
            label="Leads" 
            delay={0.2}
            glowColor="rgba(138, 43, 226, 0.3)"
            borderGlowColor="rgba(138, 43, 226, 0.6)"
            accentColor="#5E35B1" 
          />
          <StatCard 
            icon={PieChart} 
            value={94} 
            suffix="%" 
            label="Retention" 
            delay={0.3}
            glowColor="rgba(255, 140, 0, 0.3)"
            borderGlowColor="rgba(255, 140, 0, 0.6)"
            accentColor="#ff9500" 
          />
          <StatCard 
            icon={Star} 
            value={4.8} 
            suffix="★" 
            label="Rating" 
            delay={0.4}
            glowColor="rgba(0, 230, 118, 0.3)"
            borderGlowColor="rgba(0, 230, 118, 0.6)"
            accentColor="#34c759" 
          />
        </div>

      </div>
    </section>
  );
}
