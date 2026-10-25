"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";
import { Sparkles, Move3d } from "lucide-react";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { currentTheme } = useTheme();
  const themeRef = useRef(currentTheme);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    themeRef.current = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 340;
    let height = container.clientHeight || 340;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(themeRef.current.primaryHex, 3.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(themeRef.current.secondaryHex, 2.5, 50);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // 5. 3D Object Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Geometry 1: Outer Holographic Geodesic Sphere / Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(themeRef.current.primaryHex),
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // Geometry 2: Inner Quantum Energy Polyhedron
    const innerGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(themeRef.current.secondaryHex),
      roughness: 0.1,
      metalness: 0.9,
      emissive: new THREE.Color(themeRef.current.secondaryHex),
      emissiveIntensity: 0.4,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Geometry 3: Inner Wireframe Accent Cage
    const innerWireGeo = new THREE.OctahedronGeometry(1.15, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerWireMesh = new THREE.Mesh(innerWireGeo, innerWireMat);
    mainGroup.add(innerWireMesh);

    // Geometry 4: Orbiting Gyroscope Rings
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: new THREE.Color(themeRef.current.primaryHex),
      roughness: 0.3,
      metalness: 0.8,
      emissive: new THREE.Color(themeRef.current.primaryHex),
      emissiveIntensity: 0.2,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: new THREE.Color(themeRef.current.accentHex),
      roughness: 0.3,
      metalness: 0.8,
      emissive: new THREE.Color(themeRef.current.accentHex),
      emissiveIntensity: 0.2,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    mainGroup.add(ringMesh2);

    // Geometry 5: Orbiting 3D Particle Constellation
    const particleCount = 140;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: new THREE.Color(themeRef.current.primaryHex),
      transparent: true,
      opacity: 0.8,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particlePoints);

    // Mouse Interaction Coordinates & Inertia
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - (rect.left + rect.width / 2);
      const clientY = e.clientY - (rect.top + rect.height / 2);

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        dragVelocityX = deltaX * 0.008;
        dragVelocityY = deltaY * 0.008;
        mainGroup.rotation.y += dragVelocityX;
        mainGroup.rotation.x += dragVelocityY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      } else {
        mouse.targetX = (clientX / rect.width) * 1.2;
        mouse.targetY = -(clientY / height) * 1.2;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support for mobile devices
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        setIsInteracting(true);
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        dragVelocityX = deltaX * 0.008;
        dragVelocityY = deltaY * 0.008;
        mainGroup.rotation.y += dragVelocityX;
        mainGroup.rotation.x += dragVelocityY;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 340;
      height = container.clientHeight || 340;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Animation Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth theme color interpolation
      const targetPrimary = new THREE.Color(themeRef.current.primaryHex);
      const targetSecondary = new THREE.Color(themeRef.current.secondaryHex);

      outerMat.color.lerp(targetPrimary, 0.08);
      pointLight.color.lerp(targetPrimary, 0.08);
      ringMat1.color.lerp(targetPrimary, 0.08);
      particleMat.color.lerp(targetPrimary, 0.08);

      innerMat.color.lerp(targetSecondary, 0.08);
      innerMat.emissive.lerp(targetSecondary, 0.08);
      pointLight2.color.lerp(targetSecondary, 0.08);

      // Continuous ambient rotation
      if (!isDragging) {
        // Drag inertia decay
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        mainGroup.rotation.y += dragVelocityX;
        mainGroup.rotation.x += dragVelocityY;

        // Base idle continuous rotation
        mainGroup.rotation.y += 0.004;
        mainGroup.rotation.x += 0.002;

        // Mouse tilt interpolation
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
        mainGroup.rotation.x += (mouse.y * 0.5 - mainGroup.rotation.x) * 0.04;
        mainGroup.rotation.y += (mouse.x * 0.5 - mainGroup.rotation.y) * 0.04;
      }

      // Counter-rotating rings & pulsation
      ringMesh1.rotation.z = elapsedTime * 0.4;
      ringMesh2.rotation.z = -elapsedTime * 0.35;
      particlePoints.rotation.y = -elapsedTime * 0.08;

      // Subtle breath scale pulse on inner quantum core
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerMesh.scale.set(pulseScale, pulseScale, pulseScale);
      innerWireMesh.rotation.y = elapsedTime * 0.6;
      innerWireMesh.rotation.x = elapsedTime * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);

      // Dispose Geometries and Materials
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      innerWireGeo.dispose();
      innerWireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center select-none group">
      {/* Interactive 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] cursor-grab active:cursor-grabbing relative flex items-center justify-center filter drop-shadow-[0_0_35px_var(--theme-glow)]"
      />

      {/* Interactive Prompt Hint Badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border transition-all duration-300 mt-[-10px] ${
          isInteracting
            ? "bg-white/15 border-white/30 text-white shadow-[0_0_15px_var(--theme-glow)] scale-105"
            : "bg-white/[0.04] border-white/10 text-slate-400 group-hover:border-white/20 group-hover:text-slate-200"
        }`}
      >
        <Move3d className="w-3.5 h-3.5 text-[var(--theme-primary)] animate-pulse" />
        <span>{isInteracting ? "Interactive 3D Motion" : "Drag or hover to rotate in 3D"}</span>
      </div>
    </div>
  );
}
