"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const SNOWFLAKES = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  left: `${(i * 13.7) % 100}%`,
  animationDuration: `${6 + (i % 8)}s`,
  animationDelay: `-${(i * 2.3) % 10}s`,
  opacity: 0.3 + ((i % 5) * 0.1),
  size: `${2 + (i % 3)}px`,
}));

export default function Banner() {
  const bannerRef = useRef(null);

  // Mouse tracking for background parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High damping for a slow, smooth movement
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      // Gentle displacement
      mouseX.set(x * 20);
      mouseY.set(y * 15);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Background parallax layers
  const bgX = useTransform(springX, v => v * -1);
  const bgY = useTransform(springY, v => v * -1);

  // Track scroll progress within the banner
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"]
  });

  // Fade out elements as you scroll down (from 1 to 0)
  const fadeOutOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const slideUpY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div
      ref={bannerRef}
      onViewportEnter={() => {
        if (typeof document !== "undefined") {
          document.body.style.backgroundColor = "#ffffff";
        }
      }}
      viewport={{ amount: 0.1 }}
      className="relative w-full h-screen bg-transparent text-[#212121] overflow-hidden font-mono selection:bg-[#212121]/20"
    >
      {/* Noir Noise Overlay */}
      <style>{`
        @keyframes noise-anim {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 15%); }
          80% { transform: translate(5%, 5%); }
          90% { transform: translate(-10%, 10%); }
        }
        .animate-noise {
          animation: noise-anim 0.4s infinite steps(1);
        }
        @keyframes snow-fall {
          0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        .animate-snow {
          animation: snow-fall linear infinite;
        }
      `}</style>
      <motion.div style={{ opacity: fadeOutOpacity }} className="absolute inset-0 z-[100] pointer-events-none overflow-hidden">
        <div
          className="absolute -inset-[150%] animate-noise opacity-[0.07] mix-blend-difference"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Bottom Banner Image - Noir Effect */}
      <motion.div style={{ opacity: fadeOutOpacity }} className="absolute bottom-0 left-0 w-full pointer-events-none z-0  flex items-end justify-center">
        <motion.img
          style={{ x: bgX, y: bgY, scale: 1.05 }}
          src="/images/home/bg.png"
          alt=""
          className="w-full h-auto object-cover origin-bottom "
        />
      </motion.div>

      {/* Interactive Cloud Smoke Layers - Noir Effect */}
      <motion.div style={{ opacity: fadeOutOpacity }} className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-80 grayscale contrast-[1.1]">

        {/* Cloud 1 */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[60%] -translate-y-1/2 left-0 w-[200%] h-[40vh] flex"
        >
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-70 blur-[1px]" />
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-70 blur-[1px]" />
        </motion.div>

        {/* Cloud 2 */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[60%] -translate-y-1/2 left-0 w-[240%] h-[45vh] flex"
        >
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-80 blur-[2px] scale-x-[-1]" />
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-80 blur-[2px] scale-x-[-1]" />
        </motion.div>

        {/* Cloud 3 */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[60%] -translate-y-1/2 left-0 w-[180%] h-[30vh] flex"
        >
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-60" />
          <img src="/images/home/cloud.png" alt="" className="w-1/2 h-full opacity-60" />
        </motion.div>

      </motion.div>

      {/* Snow Falling Animation */}
      <motion.div style={{ opacity: fadeOutOpacity }} className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
        {SNOWFLAKES.map((flake) => (
          <div
            key={flake.id}
            className="absolute -top-10 rounded-full bg-white animate-snow"
            style={{
              left: flake.left,
              width: flake.size,
              height: flake.size,
              opacity: flake.opacity,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        style={{ opacity: fadeOutOpacity, y: slideUpY }}
        className="w-full h-full relative z-20"
      >
        {/* Decorative Corners */}
        {/* Top Left */}
        <div className="absolute top-24 left-12 flex flex-col gap-10 opacity-60 text-xs z-0">
          <div className="w-2 h-2 border border-[#212121]" />
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[14px]">79</span>
            <span className="text-[8px] leading-none pt-0.5">16</span>
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute top-24 right-12 flex flex-col items-end gap-10 opacity-60 text-xs z-0">
          <div className="w-2 h-2 border border-[#212121]" />
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[14px]">19</span>
            <span className="text-[8px] leading-none pt-0.5">95</span>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-24 left-12 flex text-xs opacity-60 z-0">
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[20px] leading-none">32</span>
            <span className="text-[10px] leading-none pt-1">75</span>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-24 right-12 flex text-xs opacity-60 z-0">
          <div className="flex text-[#212121] tracking-widest">
            <span className="text-[20px] leading-none">14</span>
            <span className="text-[10px] leading-none pt-1">36</span>
          </div>
        </div>

        {/* Vertical Side Rulers */}
        {/* Left Ruler */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-40 text-[8px] text-[#212121] z-0">
          <div className="text-[#212121]">┌</div>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={`l-${i}`} className="relative flex items-center justify-center w-4 h-2">
              {i === 2 && <span className="absolute left-6">10</span>}
              {i === 5 && <span className="absolute left-6">78</span>}
              {i === 8 && <span className="absolute left-6">92</span>}
              {i === 11 && <span className="absolute left-6">55</span>}
              {i === 14 && <span className="absolute left-6">94</span>}
              <div className="w-1.5 h-px bg-[#212121]" />
            </div>
          ))}
          <div className="text-[#212121]">└</div>
        </div>

        {/* Right Ruler */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 opacity-40 text-[8px] text-[#212121] z-0">
          <div className="text-[#212121]">┐</div>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={`r-${i}`} className="relative flex items-center justify-center w-4 h-2">
              <div className="w-1.5 h-px bg-[#212121]" />
              {i === 3 && <span className="absolute right-6">23</span>}
              {i === 6 && <span className="absolute right-6">51</span>}
              {i === 9 && <span className="absolute right-6">22</span>}
              {i === 12 && <span className="absolute right-6">59</span>}
              {i === 14 && <span className="absolute right-6">10</span>}
            </div>
          ))}
          <div className="text-[#212121]">┘</div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-good-times font-black text-[#212121] text-center uppercase tracking-wider leading-none">
              THE PEAK
            </h1>

            <h2 className="text-lg md:text-2xl lg:text-3xl font-sans font-light text-[#212121] text-center uppercase tracking-[0.2em] mt-6">
              ISN'T FOUND. IT'S ENGINEERED
            </h2>

            <p className="text-sm md:text-sm font-sans font-medium text-[#212121]/80 text-center leading-relaxed  mt-8">
              We Build Full-Scale Digital Products. Designed.<br />
              Developed. Engineered to Scale Modern
              Businesses.
            </p>
          </motion.div>

          {/* Scroll to discover - Circular Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-[20%] mt-20"
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Center Dot */}
              <div className="w-1.5 h-1.5 bg-[#212121]/80 rounded-full" />

              {/* Circular Text SVG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-80">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="text-[8.5px] tracking-[0.2em] font-semibold uppercase font-sans" fill="#212121">
                    <textPath href="#circlePath" startOffset="0%">
                      START YOUR SYSTEM • START YOUR SYSTEM •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
