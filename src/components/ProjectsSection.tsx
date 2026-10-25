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

// High-Fidelity 3D Tilt Project Card Component with Specular Glare & Depth Layering
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const mouseXSpring = useSpring(x, { stiffness: 320, damping: 24, mass: 0.6 });
  const mouseYSpring = useSpring(y, { stiffness: 320, damping: 24, mass: 0.6 });

  // 3D Rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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

    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 group relative glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      {/* Dynamic Specular Light Glare Layer (Realistic 3D Sheen) */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 80%)`,
        }}
      />

      {/* Animated Electric Border Beam on Hover */}
      <div className="absolute -inset-[1px] rounded-2xl border-beam-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

      {/* Media Preview Block with Zoom & 3D Depth */}
      <div className="relative" style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform group-hover:scale-108 transition-transform duration-600 ease-out"
          />

          {/* High-Voltage Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-[#080c16]/50 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />

          {/* Category Tag with Theme Glow */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#080c16]/85 backdrop-blur-md border border-white/15 text-white shadow-md">
            <Layers className="w-3 h-3 text-[var(--theme-primary)]" />
            <span>{project.category}</span>
          </div>

          {/* Electric Live Bolt Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#080c16]/85 backdrop-blur-md border border-white/15 text-white shadow-sm">
            <Zap className="w-3 h-3 text-amber-300 fill-amber-300 animate-pulse" />
            <span>PROD</span>
          </div>

          {/* Production Metric Tag */}
          {project.metrics && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#080c16]/85 backdrop-blur-md border border-white/10 text-emerald-300">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Card Body Content with 3D Pop-Out */}
        <div className="p-5 sm:p-6" style={{ transform: "translateZ(25px)" }}>
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--theme-secondary)] transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[var(--theme-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Chips with Professional Pill Styling */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-[var(--theme-primary)]/40 group-hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action Links with 3D Depth & Slide-up hover shine */}
      <div
        className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-auto relative z-10 bg-[#080c16]/60"
        style={{ transform: "translateZ(28px)" }}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white theme-btn transition-all duration-200 active:scale-95"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Live Demo</span>
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200 active:scale-95"
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
      {/* Background Lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-10"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/15 text-xs font-bold text-white mb-3 shadow-md"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Featured Production Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            Engineered For Scale &{" "}
            <span className="theme-gradient-text">
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

        {/* Category Filter Pills with Subtle Glow Active State */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                selectedCategory === cat
                  ? "text-white theme-btn border border-white/30"
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
