"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  pulseSpeed: number;
}

interface LightningBolt {
  segments: { x1: number; y1: number; x2: number; y2: number }[];
  alpha: number;
  color: string;
  width: number;
  decay: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export default function ElectricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovered: false,
    };

    // Color Palettes (Electric Cyan, Thunder Violet, Neon Blue, Pure White)
    const electricColors = [
      "rgba(0, 240, 255, ", // Electric Cyan
      "rgba(139, 92, 246, ", // Thunder Violet
      "rgba(59, 130, 246, ", // Neon Blue
      "rgba(192, 132, 252, ", // Purple Flare
      "rgba(255, 255, 255, ", // Lightning White
    ];

    // High DPI Canvas Scaling
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // 1. Initialize Floating Plasma Ions / Ambient Electric Dust
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseColor = electricColors[Math.floor(Math.random() * (electricColors.length - 1))];
      const maxAlpha = 0.2 + Math.random() * 0.55;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: 1 + Math.random() * 2.2,
        color: baseColor,
        alpha: Math.random() * maxAlpha,
        maxAlpha,
        pulseSpeed: 0.008 + Math.random() * 0.015,
      });
    }

    // 2. Active Lightning Bolts Array
    const lightningBolts: LightningBolt[] = [];

    // 3. Electric Sparks (Crackles) Array
    const sparks: Spark[] = [];

    // Procedural Lightning Bolt Generation (Recursive Midpoint Displacement)
    const createLightningSegments = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      displace: number,
      depth: number
    ): { x1: number; y1: number; x2: number; y2: number }[] => {
      if (depth === 0) {
        return [{ x1, y1, x2, y2 }];
      }

      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displace;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displace;

      const segments1 = createLightningSegments(x1, y1, midX, midY, displace / 1.8, depth - 1);
      const segments2 = createLightningSegments(midX, midY, x2, y2, displace / 1.8, depth - 1);

      // Chance to branch out a small sub-arc
      let branches: { x1: number; y1: number; x2: number; y2: number }[] = [];
      if (depth === 2 && Math.random() < 0.45) {
        const branchEndX = midX + (Math.random() - 0.5) * displace * 2;
        const branchEndY = midY + Math.random() * displace * 1.5;
        branches = createLightningSegments(midX, midY, branchEndX, branchEndY, displace / 2, depth - 1);
      }

      return [...segments1, ...segments2, ...branches];
    };

    // Trigger Random Atmospheric Lightning Arc
    const triggerAtmosphericLightning = (targetX?: number, targetY?: number) => {
      const startX = targetX !== undefined ? targetX + (Math.random() - 0.5) * 160 : Math.random() * width;
      const startY = targetY !== undefined ? Math.max(0, targetY - (80 + Math.random() * 120)) : Math.random() * (height * 0.4);

      const endX = targetX !== undefined ? targetX : startX + (Math.random() - 0.5) * 300;
      const endY = targetY !== undefined ? targetY : startY + 120 + Math.random() * 240;

      const segments = createLightningSegments(startX, startY, endX, endY, 65, 4);

      // Create spark burst at lightning termination point
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3.5;
        sparks.push({
          x: endX,
          y: endY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 15 + Math.random() * 20,
          color: electricColors[Math.floor(Math.random() * electricColors.length)],
          size: 1 + Math.random() * 2,
        });
      }

      lightningBolts.push({
        segments,
        alpha: 0.9,
        color: Math.random() > 0.35 ? "#00F0FF" : "#A855F7",
        width: 1.5 + Math.random() * 1.5,
        decay: 0.045 + Math.random() * 0.04,
      });
    };

    // Mouse events
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;

      // Small chance to crackle a spark when moving rapidly
      if (Math.random() < 0.12) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
          life: 0,
          maxLife: 18,
          color: Math.random() > 0.5 ? "rgba(0, 240, 255, " : "rgba(168, 85, 247, ",
          size: 1 + Math.random() * 2,
        });
      }
    };

    const onMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onClick = (e: MouseEvent) => {
      // Direct high-voltage strike on user click!
      triggerAtmosphericLightning(e.clientX, e.clientY);
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 25,
          color: "rgba(0, 240, 255, ",
          size: 1.5 + Math.random() * 2.5,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    // Lightning strike timer logic
    let lastLightningTime = performance.now();
    let nextLightningInterval = 2500 + Math.random() * 4000;

    // --- Main 60 FPS Render Loop ---
    const render = (currentTime: number) => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Check for periodic lightning discharge
      if (currentTime - lastLightningTime > nextLightningInterval) {
        lastLightningTime = currentTime;
        nextLightningInterval = 3000 + Math.random() * 5000;
        triggerAtmosphericLightning();
      }

      // 1. Draw and Update Particles (Plasma Ions)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Subtle attraction to mouse if within 140px
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 10) {
            p.x += (dx / dist) * 0.6;
            p.y += (dy / dist) * 0.6;
          }
        }

        // Boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse alpha
        p.alpha += p.pulseSpeed;
        if (p.alpha > p.maxAlpha || p.alpha < 0.08) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
        ctx.shadowColor = p.color.includes("0, 240, 255") ? "#00F0FF" : "#A855F7";
        ctx.shadowBlur = 8;
        ctx.fill();

        // Draw faint electric connection line between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.15 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      // Reset shadow blur
      ctx.shadowBlur = 0;

      // 2. Draw and Decay Lightning Bolts
      for (let b = lightningBolts.length - 1; b >= 0; b--) {
        const bolt = lightningBolts[b];
        bolt.alpha -= bolt.decay;

        if (bolt.alpha <= 0) {
          lightningBolts.splice(b, 1);
          continue;
        }

        // Outer Glow Layer
        ctx.beginPath();
        for (let s = 0; s < bolt.segments.length; s++) {
          const seg = bolt.segments[s];
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        }
        ctx.strokeStyle = bolt.color;
        ctx.lineWidth = bolt.width * 3.5;
        ctx.shadowColor = bolt.color;
        ctx.shadowBlur = 18;
        ctx.globalAlpha = bolt.alpha * 0.45;
        ctx.stroke();

        // Inner Core High-Voltage White Layer
        ctx.beginPath();
        for (let s = 0; s < bolt.segments.length; s++) {
          const seg = bolt.segments[s];
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        }
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = bolt.width;
        ctx.shadowColor = "#FFFFFF";
        ctx.shadowBlur = 8;
        ctx.globalAlpha = bolt.alpha;
        ctx.stroke();
      }

      // 3. Draw and Update Electric Sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.95;
        spark.vy *= 0.95;
        spark.life++;

        if (spark.life >= spark.maxLife) {
          sparks.splice(s, 1);
          continue;
        }

        const sparkAlpha = (1 - spark.life / spark.maxLife);
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = `${spark.color}${sparkAlpha})`;
        ctx.shadowColor = "#00F0FF";
        ctx.shadowBlur = 10;
        ctx.globalAlpha = sparkAlpha;
        ctx.fill();
      }

      // Reset global alpha & shadows
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 select-none opacity-85"
      aria-hidden="true"
    />
  );
}
