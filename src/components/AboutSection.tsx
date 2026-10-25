"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
  MapPin,
  ChevronRight,
  Code,
  Terminal,
  Download,
  Eye,
  Zap,
} from "lucide-react";
import { SKILL_CATEGORIES, EXPERIENCES, PERSONAL_INFO } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import Tilt3DCard from "@/components/Tilt3DCard";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Code: Code,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
};

export default function AboutSection() {
  const [selectedTimelineType, setSelectedTimelineType] = useState<"All" | "Work" | "Education">("All");

  const filteredExperiences = EXPERIENCES.filter((item) => {
    if (selectedTimelineType === "All") return true;
    return item.type === selectedTimelineType;
  });

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 right-[-100px] w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute bottom-10 left-[-100px] w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/15 text-xs font-bold text-white mb-3 shadow-md"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Profile & Technical Mastery</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            Engineered For{" "}
            <span className="theme-gradient-text">
              High Concurrency & Real-Time Speed
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Explore my core technical stack, production experience building enterprise systems, and academic track record.
          </motion.p>
        </div>

        {/* Bio Highlights Card with User Image & Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card border-beam-card rounded-3xl p-6 sm:p-8 lg:p-10 mb-16 border border-white/15 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 opacity-20"
            style={{ backgroundColor: "var(--theme-primary)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left bio */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/[0.06] border border-white/15 text-[var(--theme-primary)] shadow-md">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {PERSONAL_INFO.name} — {PERSONAL_INFO.title}
                  </h3>
                  <p className="text-xs text-[var(--theme-secondary)] font-mono font-semibold">
                    {PERSONAL_INFO.roleTagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Full Stack Engineer at <strong className="text-white">Appspine Technologies</strong> with 1+ years of software engineering experience specializing in <strong className="text-white">React.js, Next.js 16 (App Router), TypeScript, Node.js, Express.js, Java Spring Boot, Python FastAPI</strong>, and <strong className="text-white">PostgreSQL, MySQL</strong> database architectures. Proven track record in building real-time scalable systems using <strong className="text-white">Socket.IO</strong>, developing resilient <strong className="text-white">SQL transaction billing engines</strong>, integrating <strong className="text-emerald-300">Razorpay payment gateways</strong>, and implementing secure JWT authentication with Redis caching.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Stack Engineer @ Appspine Technologies</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                  <span>Real-Time Socket.IO & Sub-150ms Latency</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100% ACID SQL Billing Engine & Razorpay</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>B.Tech in CSE — 8.10 / 10.0 CGPA</span>
                </div>
              </div>
            </div>

            {/* Right card summary */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 bg-black/40 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-inner">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 shrink-0">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{PERSONAL_INFO.name}</h4>
                  <p className="text-[11px] text-slate-400">Available for Opportunities</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-slate-400">Location</span>
                <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                  Noida, India
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-slate-400">Phone</span>
                <span className="text-xs font-semibold text-slate-200">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs text-slate-400">Email</span>
                <span className="text-xs font-semibold text-slate-200 truncate max-w-[180px]">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Education</span>
                <span className="text-xs font-bold text-emerald-400">
                  B.Tech CSE (8.10 CGPA)
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 hover:text-white transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-300" />
                  <span>View PDF</span>
                </a>
                <a
                  href={PERSONAL_INFO.resumeDownloadUrl}
                  download="Manikant_Kumar.pdf"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white theme-btn transition-all cursor-pointer active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid Section with 3D Tilt Cards */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                High-performance languages, frameworks, databases, and system tooling
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => {
              const Icon = CATEGORY_ICONS[category.iconName] || Code;
              return (
                <Tilt3DCard
                  key={category.title}
                  maxTilt={10}
                  scaleOnHover={1.015}
                  className="glass-card border-beam-card rounded-2xl p-6 border border-white/10 relative group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-[var(--theme-primary)] group-hover:border-[var(--theme-primary)]/50 transition-colors shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{category.title}</h4>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className={cn(skill.highlight ? "text-white font-semibold" : "text-slate-300")}>
                            {skill.name}
                          </span>
                          <span className="text-[var(--theme-secondary)] font-mono text-[11px]">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={cn(
                              "h-full rounded-full",
                              skill.highlight
                                ? "theme-btn"
                                : "bg-white/20"
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>
        </div>

        {/* Experience & Education Timeline */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Experience & Education</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Track record of engineering roles, production deliveries, and degree
              </p>
            </div>

            {/* Timeline Filter */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
              {(["All", "Work", "Education"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedTimelineType(type)}
                  className={cn(
                    "px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                    selectedTimelineType === type
                      ? "theme-btn text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-8">
            {filteredExperiences.map((exp, idx) => {
              const Icon = exp.type === "Work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Icon with Theme Glow */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#080d1a] border border-white/25 text-[var(--theme-primary)] group-hover:scale-115 group-hover:border-[var(--theme-primary)] shadow-md transition-all">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div
                    className={cn(
                      "glass-card border-beam-card rounded-2xl p-5 sm:p-6 border transition-all duration-300",
                      exp.period.includes("Present")
                        ? "border-white/30 bg-black/50 shadow-lg"
                        : "border-white/10 group-hover:border-white/30"
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[var(--theme-secondary)] transition-colors">
                            {exp.role}
                          </h4>
                          {exp.period.includes("Present") && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white border border-white/20 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Currently Working
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--theme-primary)]">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[var(--theme-primary)]" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.03] border border-white/10 text-slate-300 hover:border-white/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
