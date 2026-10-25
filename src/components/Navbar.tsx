"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  User,
  FolderGit2,
  Mail,
  Download,
  ExternalLink,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PERSONAL_INFO } from "@/data/portfolioData";
import BrandLogo from "@/components/BrandLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#hero", icon: Code2 },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3.5 pb-2 pointer-events-none"
      >
        <nav
          className={cn(
            "pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative",
            isScrolled
              ? "bg-[#070b14]/85 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_20px_var(--theme-glow)]"
              : "bg-[#070b14]/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/40"
          )}
        >
          {/* Subtle Top Electric Glow Line on Navbar */}
          <div className="absolute -top-[1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--theme-primary)] to-transparent pointer-events-none opacity-80" />

          {/* Left: Custom Animated Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <BrandLogo size="md" showText={true} />
          </a>

          {/* Center: Desktop Navigation Links with Magnetic Active Pill */}
          <div
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full p-1.5 backdrop-blur-md relative shadow-inner"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              const isHovered = hoveredNav === item.name;
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {/* Magnetic Active Section Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="electricActivePill"
                      className="absolute inset-0 rounded-full theme-btn border border-white/30"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}

                  {/* Hover Sheen when hovering a non-active item */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="electricHoverPill"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Action: Theme Switcher, Resume Download & "Hire Me" Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Live Theme Switcher */}
            <ThemeSwitcher />

            {/* Resume Button in Navbar */}
            <a
              href={PERSONAL_INFO.resumeDownloadUrl}
              download="Manikant_Kumar.pdf"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 hover:text-white hover:shadow-md transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </a>

            {/* Electric "Hire Me" Button with Shockwave Aura */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="relative group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white electric-btn active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-white fill-white group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu with Dynamic Theme Glow */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#070b14]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 border-b border-white/10"
          >
            {/* Ambient Background Electric Orb */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: "var(--theme-primary)" }} />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-3 relative z-10"
            >
              <div className="flex items-center justify-between px-3 pb-2 border-b border-white/10">
                <BrandLogo size="sm" showText={true} />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Menu
                </span>
              </div>

              {/* Theme Switcher in Mobile Drawer */}
              <div className="px-3 py-2 flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-semibold text-slate-300">Theme Palette</span>
                <ThemeSwitcher />
              </div>

              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.replace("#", "");
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className={cn(
                      "flex items-center justify-between p-3.5 rounded-xl text-sm font-semibold border transition-all",
                      isActive
                        ? "theme-btn border-white/20 shadow-md"
                        : "bg-white/[0.02] text-slate-300 border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-400")} />
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 pt-6 border-t border-white/10 relative z-10"
            >
              <a
                href={PERSONAL_INFO.resumeDownloadUrl}
                download="Manikant_Kumar.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.05] border border-white/10 hover:border-white/30 shadow-md active:scale-95 transition-all"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white electric-btn"
              >
                <Zap className="w-4 h-4 text-white fill-white" />
                <span>Hire Me / Contact</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
