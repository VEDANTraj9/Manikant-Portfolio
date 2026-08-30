"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = "md",
  showText = true,
  className,
}: BrandLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const sizeMap = {
    sm: {
      badge: "w-8 h-8",
      iconSize: "w-5 h-5",
      title: "text-xs",
      subtitle: "text-[9px]",
      boltPath: "M17 5 L10 16 L14.5 16 L12.5 27 L21 14.5 L16.5 14.5 Z",
    },
    md: {
      badge: "w-10 h-10 sm:w-11 sm:h-11",
      iconSize: "w-6 h-6 sm:w-7 sm:h-7",
      title: "text-sm",
      subtitle: "text-[10px]",
      boltPath: "M17 5 L10 16 L14.5 16 L12.5 27 L21 14.5 L16.5 14.5 Z",
    },
    lg: {
      badge: "w-14 h-14",
      iconSize: "w-9 h-9",
      title: "text-lg",
      subtitle: "text-xs",
      boltPath: "M17 5 L10 16 L14.5 16 L12.5 27 L21 14.5 L16.5 14.5 Z",
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={cn("flex items-center gap-3 select-none cursor-pointer group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Geometric Hexagonal/Diamond Badge Container */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "relative flex items-center justify-center rounded-xl p-[1.5px] transition-all duration-300",
          currentSize.badge
        )}
      >
        {/* Animated Rotating Electric Aura Border */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80 blur-[2px] group-hover:opacity-100 group-hover:blur-[6px] transition-all"
        />

        {/* Pulsing Lightning Shockwave Ring */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.25, 1] : [1, 1.1, 1],
            opacity: isHovered ? [0.6, 0.1, 0.6] : [0.3, 0.05, 0.3],
          }}
          transition={{
            duration: isHovered ? 1.2 : 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-2 rounded-2xl bg-cyan-400/20 blur-md pointer-events-none"
        />

        {/* Inner Solid Badge Surface */}
        <div className="relative w-full h-full rounded-[10px] bg-[#070b14]/90 backdrop-blur-xl border border-cyan-400/30 flex items-center justify-center overflow-hidden z-10 shadow-inner">
          {/* Subtle Grid Plasma Sparkle Overlay inside badge */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-600/10 opacity-70 pointer-events-none" />

          {/* SVG Monogram: Code Brackets </> + Center Lightning Bolt ⚡ */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("relative z-20 drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]", currentSize.iconSize)}
          >
            <defs>
              <linearGradient id="logoBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="45%" stopColor="#00F0FF" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>

              <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left Bracket < */}
            <motion.path
              d="M9 11 L4.5 16 L9 21"
              stroke="#00F0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                x: isHovered ? -1.5 : 0,
                opacity: isHovered ? 1 : 0.85,
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Right Bracket > */}
            <motion.path
              d="M23 11 L27.5 16 L23 21"
              stroke="#A855F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                x: isHovered ? 1.5 : 0,
                opacity: isHovered ? 1 : 0.85,
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Central Electric Lightning Bolt ⚡ */}
            <motion.path
              d="M17 5 L9.5 16 L14.5 16 L12.5 27 L22 14.5 L17 14.5 Z"
              fill="url(#logoBoltGrad)"
              stroke="#FFFFFF"
              strokeWidth="0.4"
              filter="url(#logoGlow)"
              animate={{
                scale: isHovered ? [1, 1.15, 0.98, 1.1, 1] : 1,
                filter: isHovered
                  ? "drop-shadow(0 0 12px rgba(0,240,255,1))"
                  : "drop-shadow(0 0 6px rgba(0,240,255,0.7))",
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Electric Corner Glint / Flash */}
          <motion.div
            animate={{
              opacity: [0, 0.8, 0],
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent transform -skew-x-12 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Brand Monogram & Title Text */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5",
                currentSize.title
              )}
            >
              <span>MANIKANT</span>
              <span className="text-cyan-400 font-mono">.DEV</span>
            </span>

            {/* Live Voltage Indicator Pill */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            </span>
          </div>

          <span
            className={cn(
              "text-slate-400 font-mono tracking-wider uppercase font-semibold flex items-center gap-1",
              currentSize.subtitle
            )}
          >
            <span className="text-cyan-400">⚡</span>
            <span>HIGH-VOLTAGE DEV</span>
          </span>
        </div>
      )}
    </div>
  );
}
