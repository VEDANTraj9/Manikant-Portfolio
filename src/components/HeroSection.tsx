"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FolderGit2,
  Send,
  Zap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";
import Tilt3DCard from "@/components/Tilt3DCard";
import Hero3DCanvas from "@/components/Hero3DCanvas";

const TECH_PILLS = [
  { name: "React.js", color: "#00F5FF" },
  { name: "Next.js 16", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#22C55E" },
  { name: "Express.js", color: "#94A3B8" },
  { name: "Java Spring Boot", color: "#60A5FA" },
  { name: "Python FastAPI", color: "#00F5FF" },
  { name: "PostgreSQL & Prisma", color: "#38BDF8" },
  { name: "MySQL & ACID", color: "#F59E0B" },
  { name: "Socket.IO Real-Time", color: "#A855F7" },
  { name: "Redis Caching", color: "#EF4444" },
  { name: "Razorpay Payments", color: "#3B82F6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
];

export default function HeroSection() {
  const [thunderFlicker, setThunderFlicker] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerThunderSurge = () => {
    setThunderFlicker(true);
    setTimeout(() => setThunderFlicker(false), 600);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background High-Voltage Plasma Glows (Theme-aware) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none -z-10 opacity-20"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-secondary)" }}
      />

      {/* Subtle Electric Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-electric-grid opacity-60 pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {/* Main Grid: Headline Left + 3D Canvas & Profile Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines, Bio, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-white/15 shadow-md mb-6 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10B981]" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {PERSONAL_INFO.status}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-xs font-bold theme-gradient-text flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" /> Full-Stack System Architect
              </span>
            </motion.div>

            {/* Location & Role Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-white bg-white/[0.06] px-3 py-1 rounded-full border border-white/15 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Full Stack Engineer @ <strong className="text-white">Appspine Technologies</strong></span>
              </div>
            </motion.div>

            {/* Hero Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] transition-all duration-300 ${
                thunderFlicker ? "drop-shadow-[0_0_35px_var(--theme-glow-strong)]" : ""
              }`}
            >
              <span>Hi, I&apos;m </span>
              <span className="thunder-title-gradient">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg sm:text-xl font-bold flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            >
              <span className="text-white">{PERSONAL_INFO.title}</span>
              <span className="text-[var(--theme-primary)] font-mono">•</span>
              <span className="text-slate-300">Appspine Technologies</span>
              <span className="text-[var(--theme-primary)] font-mono">•</span>
              <span className="theme-gradient-text">Real-Time Architect</span>
            </motion.p>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white electric-btn cursor-pointer active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.resumeDownloadUrl}
                download="Manikant_Kumar.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/[0.05] border border-white/15 hover:border-white/30 hover:bg-white/[0.1] shadow-md transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Let&apos;s Connect</span>
              </button>
            </motion.div>

            {/* Floating Interactive Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 w-full"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                {TECH_PILLS.map((tech) => (
                  <motion.span
                    key={tech.name}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-black/40 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200 cursor-default flex items-center gap-1.5 select-none"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: tech.color,
                        boxShadow: `0 0 6px ${tech.color}`,
                      }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Holographic Canvas + Profile Halo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Interactive Three.js 3D Holographic Quantum Core */}
            <div className="relative">
              <Hero3DCanvas />

              {/* Centered Profile Avatar Badge Floating with 3D Depth */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer pointer-events-auto"
                onClick={triggerThunderSurge}
                title="Click to trigger high-voltage surge!"
              >
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2.5px] shadow-[0_0_30px_var(--theme-glow)] transition-all group-hover:scale-105"
                  style={{ background: "var(--theme-btn-gradient)" }}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070b14] border-2 border-[#070b14]">
                    <Image
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      fill
                      priority
                      className="object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Sparkle badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#080c16] border border-white/20 flex items-center justify-center shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Production Stats 3D Tilt Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => (
            <Tilt3DCard
              key={stat.label}
              maxTilt={14}
              scaleOnHover={1.03}
              className="glass-card border-beam-card p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group border border-white/10"
            >
              {/* Electric Neon Top Beam */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 group-hover:h-[2.5px] transition-all"
                style={{ background: "var(--theme-btn-gradient)" }}
              />

              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_var(--theme-glow)] transition-all">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-bold text-[var(--theme-primary)] flex items-center gap-1">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] text-slate-400 leading-snug">
                {stat.subtext}
              </span>
            </Tilt3DCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
