"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/types/portfolio";
import { PROJECTS } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

type CategoryFilter = "All" | "Full Stack" | "Frontend & UI" | "AI & Cloud";

// 3D Tilt Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 group relative glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_15px_40px_rgba(0,240,255,0.15),0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300"
    >
      {/* Animated Electric Border Beam on Hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-300 pointer-events-none -z-10" />

      {/* Media Preview Block with Zoom & Electric Overlay */}
      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform group-hover:scale-108 transition-transform duration-600 ease-out"
          />

          {/* High-Voltage Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

          {/* Category Tag with Cyan Glow */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#070b14]/80 backdrop-blur-md border border-cyan-400/30 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            <Layers className="w-3 h-3 text-cyan-400" />
            <span>{project.category}</span>
          </div>

          {/* Electric Live Bolt Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#070b14]/80 backdrop-blur-md border border-purple-500/40 text-purple-300">
            <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400 animate-pulse" />
            <span>PROD</span>
          </div>

          {/* Production Metric Tag */}
          {project.metrics && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#070b14]/85 backdrop-blur-md border border-cyan-400/20 text-emerald-300">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Card Body Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Chips with Neon Pill Styling */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-white/[0.04] border border-cyan-400/20 text-slate-300 group-hover:border-cyan-400/40 group-hover:text-cyan-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action Links with Slide-up hover shine */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-auto relative z-10 bg-[#070b14]/60">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/25 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-200"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 hover:text-white transition-all duration-200"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = ["All", "Full Stack", "Frontend & UI", "AI & Cloud"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background High-Voltage Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-400/30 text-xs font-bold text-cyan-300 mb-3 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>High-Voltage Production Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            Engineered For Scale &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
              Real-Time Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            A showcase of live production platforms, transactional engines, and AI integrations engineered with sub-150ms latency.
          </motion.p>
        </div>

        {/* Category Filter Pills with Neon Glow Active State */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                selectedCategory === cat
                  ? "text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 shadow-[0_0_15px_rgba(0,240,255,0.35)] border border-cyan-300/40"
                  : "text-slate-400 hover:text-slate-200 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Tilt Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
