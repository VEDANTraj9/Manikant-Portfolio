"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ElectricCursor() {
  const { currentTheme } = useTheme();
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
              ? "w-7 h-7 bg-white"
              : isPointer
              ? "w-4.5 h-4.5"
              : "w-2.5 h-2.5"
          }`}
          style={{
            backgroundColor: isClicking ? "#ffffff" : isPointer ? currentTheme.secondaryHex : currentTheme.primaryHex,
            boxShadow: isClicking
              ? `0 0 20px ${currentTheme.secondaryHex}, 0 0 35px ${currentTheme.accentHex}`
              : `0 0 12px ${currentTheme.primaryHex}`,
          }}
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
          className={`rounded-full transition-all duration-300 flex items-center justify-center ${
            isPointer ? "w-14 h-14 scale-110" : "w-9 h-9"
          }`}
          style={{
            border: `1px solid ${currentTheme.primaryHex}44`,
            boxShadow: isPointer
              ? `0 0 22px ${currentTheme.glowRgba}`
              : `0 0 10px ${currentTheme.glowRgba}`,
            backgroundColor: `${currentTheme.primaryHex}10`,
          }}
        >
          {/* Subtle Electric Plasma Ring Glow */}
          <div
            className="w-full h-full rounded-full animate-spin-slow opacity-60"
            style={{
              background: `radial-gradient(circle, ${currentTheme.secondaryHex}22 0%, transparent 70%)`,
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
