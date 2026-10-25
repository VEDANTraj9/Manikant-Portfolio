"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareEnable?: boolean;
  scaleOnHover?: number;
  onClick?: () => void;
}

export default function Tilt3DCard({
  children,
  className,
  maxTilt = 12,
  glareEnable = true,
  scaleOnHover = 1.02,
  onClick,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position normalized (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Glare position percentage (0 to 100)
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // High-performance springs for fluid physical tilt
  const mouseXSpring = useSpring(x, { stiffness: 320, damping: 24, mass: 0.6 });
  const mouseYSpring = useSpring(y, { stiffness: 320, damping: 24, mass: 0.6 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

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
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 350, damping: 25 },
      }}
      className={cn(
        "relative rounded-2xl transition-shadow duration-300",
        className
      )}
    >
      {/* Dynamic Specular Light Glare Overlay */}
      {glareEnable && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Card Content with 3D depth */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
