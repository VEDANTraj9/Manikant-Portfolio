"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function ElectricCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const trailingConfig = { damping: 20, stiffness: 180, mass: 0.8 };
  const trailingX = useSpring(cursorX, trailingConfig);
  const trailingY = useSpring(cursorY, trailingConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive =
          target.closest("button, a, input, textarea, select, [role='button']") !==
          null;
        setIsPointer(interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Electric Center Ion */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? "w-8 h-8 bg-white shadow-[0_0_18px_#38bdf8,0_0_30px_#6366f1]"
              : isPointer
              ? "w-5 h-5 bg-sky-300 shadow-[0_0_12px_#38bdf8]"
              : "w-2.5 h-2.5 bg-blue-400 shadow-[0_0_10px_#3b82f6]"
          }`}
        />
      </motion.div>

      {/* Outer Orbiting Electric Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={`rounded-full border border-blue-400/25 transition-all duration-300 flex items-center justify-center ${
            isPointer
              ? "w-14 h-14 bg-blue-500/10 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-110"
              : "w-9 h-9 bg-indigo-500/5 shadow-[0_0_12px_rgba(99,102,241,0.15)]"
          }`}
        >
          {/* Subtle Electric Plasma Ring Glow */}
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-400/15 via-transparent to-indigo-500/15 animate-spin-slow" />
        </div>
      </motion.div>
    </>
  );
}
