"use client";

import { projectsData } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetails({ slug }) {
  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-[#ffffff] text-[#212121]">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="underline hover:opacity-70">Return Home</Link>
      </div>
    );
  }

  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="relative min-h-screen flex flex-col bg-[#ffffff] overflow-hidden selection:bg-[#212121]/20">
      {/* Page Entry Transition */}
      <motion.div 
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[60] origin-top"
        style={{ backgroundColor: project.bgColor }}
      />

      {/* Hero Section */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        <Link href="/" className="absolute top-10 left-6 md:top-12 md:left-12 z-20 flex items-center gap-2 text-white hover:opacity-70 transition-opacity">
          <ArrowLeft size={24} />
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold">Back</span>
        </Link>

        {/* Giant Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-0">
          <motion.h1
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-center text-[18vw] font-bold text-white opacity-[0.05] leading-none m-0 p-0 tracking-tight whitespace-nowrap select-none"
          >
            {project.bgText}
          </motion.h1>
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.2 }}
          className="relative z-10 w-full max-w-4xl px-8 flex justify-center items-center h-[50vh] md:h-[60vh] mt-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="object-contain w-full h-full" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-[#ffffff] text-[#212121] py-24 md:py-32 px-8 md:px-24 lg:px-48 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* Logo & Meta */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 flex flex-col gap-10 w-full md:w-1/3"
          >
            {project.logo && (
              <div className="w-48 h-auto flex items-center justify-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.logo} alt={`${project.title} Logo`} className="w-full h-full object-contain filter invert" />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] text-black/40 font-bold uppercase">Role</span>
              <span className="font-medium text-lg">Digital Experience</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] text-black/40 font-bold uppercase">Year</span>
              <span className="font-medium text-lg">2026</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-grow flex flex-col gap-8 md:gap-12"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter uppercase leading-[0.9]">
              {project.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-black/70">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section 
        className="relative w-full min-h-[50vh] flex flex-col items-center justify-center overflow-hidden cursor-pointer group"
        style={{ backgroundColor: nextProject.bgColor }}
      >
        <Link href={`/projects/${nextProject.slug}`} className="absolute inset-0 z-10" />
        
        <span className="relative z-10 text-white/60 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-4 md:mb-8 group-hover:-translate-y-2 transition-transform duration-500">
          Next Project
        </span>
        
        <h2 className="relative z-10 text-5xl md:text-8xl lg:text-[10vw] font-black text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700 ease-out text-center">
          {nextProject.title}
        </h2>

        {/* Hover image preview overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 flex items-center justify-center">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={nextProject.image} alt="" className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000" />
        </div>
      </section>
    </main>
  );
}
