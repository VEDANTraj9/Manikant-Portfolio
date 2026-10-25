"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ElectricCanvas from "@/components/ElectricCanvas";
import ElectricCursor from "@/components/ElectricCursor";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--background)] text-[#f3f4f6] flex flex-col selection:bg-[var(--theme-selection)] selection:text-white transition-colors duration-400">
        {/* 60 FPS Atmospheric Electric Thunder & Particle Canvas */}
        <ElectricCanvas />

        {/* Interactive Electric Cursor Aura for Desktop */}
        <ElectricCursor />

        {/* Floating Glass Navbar with Live Theme Switcher */}
        <Navbar />

        {/* Main Page Sections */}
        <main className="flex-1 flex flex-col w-full relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
