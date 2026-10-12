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
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";

const TECH_PILLS = [
  { name: "React.js", color: "#00F0FF" },
  { name: "Next.js 16", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#22C55E" },
  { name: "Express.js", color: "#94A3B8" },
  { name: "Java Spring Boot", color: "#60A5FA" },
  { name: "Python FastAPI", color: "#00F0FF" },
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
      {/* Background High-Voltage Plasma Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-sky-600/8 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Electric Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-electric-grid opacity-60 pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge with Pulsing Live Voltage Aura */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-blue-400/25 shadow-[0_0_20px_rgba(59,130,246,0.12)] mb-8 backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10B981]" />
          </span>
          <span className="text-xs font-semibold text-slate-200">
            {PERSONAL_INFO.status}
          </span>
          <span className="w-px h-3 bg-blue-400/30" />
          <span className="text-xs font-bold bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" /> Full-Stack System Architect
          </span>
        </motion.div>

        {/* Profile Avatar with Dual Orbiting Electric Thunder Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 group cursor-pointer"
          onClick={triggerThunderSurge}
        >
          {/* Outer Orbiting Cyan-Purple Electric Plasma Ring */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-sky-400 opacity-75 blur-md animate-spin-slow group-hover:opacity-100 group-hover:blur-lg transition-all" />

          {/* Reverse Orbiting High-Voltage White-Cyan Accent Ring */}
          <div className="absolute -inset-1 rounded-full border border-blue-300/40 opacity-80 animate-pulse pointer-events-none" />

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#080c16] border-2 border-[#080c16]">
              <Image
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                fill
                priority
                className="object-cover object-top hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Lightning bolt indicator badge on photo */}
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#080c16] border border-blue-400 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.6)]">
              <Zap className="w-4 h-4 text-sky-300 fill-sky-300 animate-bounce" />
            </div>
          </div>
        </motion.div>

        {/* Location & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack Engineer @ <strong className="text-white">Appspine Technologies</strong></span>
            </div>
          </div>

          {/* Hero Name with High-Voltage Thunder Flash */}
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.12] transition-all duration-300 ${
              thunderFlicker ? "drop-shadow-[0_0_35px_rgba(59,130,246,0.8)]" : ""
            }`}
          >
            <span>Hi, I&apos;m </span>
            <span className="thunder-title-gradient">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-2xl font-extrabold bg-gradient-to-r from-slate-100 via-sky-200 to-indigo-300 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <span>{PERSONAL_INFO.title}</span>
            <span className="text-blue-400 font-mono text-base">•</span>
            <span className="text-sky-300">Appspine Technologies</span>
            <span className="text-blue-400 font-mono text-base">•</span>
            <span className="text-indigo-300">Real-Time Architect</span>
          </p>
        </motion.div>

        {/* Bio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          {PERSONAL_INFO.subheadline}
        </motion.p>

        {/* Action Buttons: View Projects, Download Resume, Contact with Shockwave Ripples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white electric-btn cursor-pointer active:scale-95"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={PERSONAL_INFO.resumeDownloadUrl}
            download="Manikant_Kumar.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/[0.05] border border-blue-400/25 hover:border-blue-400/60 hover:bg-white/[0.1] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4 text-sky-300" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 glass border border-white/10 hover:border-blue-400/40 hover:text-sky-300 hover:bg-blue-500/5 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4 text-blue-400" />
            <span>Let&apos;s Connect</span>
          </button>
        </motion.div>

        {/* Floating Interactive Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {TECH_PILLS.map((tech) => (
              <motion.span
                key={tech.name}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-[#0c1322]/80 border border-blue-400/15 hover:border-blue-400/50 hover:text-white hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-200 cursor-default flex items-center gap-1.5 select-none"
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

        {/* Real Production Stats Highlights Grid with Flowing Neon Tops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="glass-card border-beam-card p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Electric Neon Top Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 group-hover:opacity-100 group-hover:h-[2.5px] transition-all" />

              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-bold text-blue-400 flex items-center gap-1">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] text-slate-400 leading-snug">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
