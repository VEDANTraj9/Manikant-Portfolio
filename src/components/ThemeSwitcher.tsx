"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, Sparkles } from "lucide-react";
import { useTheme, ThemeId } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  compact?: boolean;
}

export default function ThemeSwitcher({ compact = false }: ThemeSwitcherProps) {
  const { theme, setTheme, currentTheme, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId: ThemeId) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change UI Color Theme"
        className={cn(
          "flex items-center gap-2 rounded-xl transition-all duration-200 cursor-pointer select-none border backdrop-blur-xl group",
          isOpen
            ? "bg-white/10 border-white/25 shadow-[0_0_20px_var(--theme-glow)]"
            : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-white/20",
          compact ? "p-2 text-xs" : "px-3 py-2 text-xs font-semibold text-slate-200"
        )}
      >
        {/* Animated glowing theme color indicator */}
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ backgroundColor: currentTheme.primaryHex }}
          />
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5 shadow-sm"
            style={{
              backgroundColor: currentTheme.primaryHex,
              boxShadow: `0 0 10px ${currentTheme.primaryHex}`,
            }}
          />
        </span>

        <Palette className="w-3.5 h-3.5 text-slate-300 group-hover:rotate-12 transition-transform duration-200" />

        {!compact && (
          <span className="hidden sm:inline font-medium text-slate-200">
            {currentTheme.name}
          </span>
        )}

        <Sparkles className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-amber-300 transition-all" />
      </button>

      {/* Floating Glassmorphic Dropdown Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2.5 w-64 sm:w-72 rounded-2xl p-2.5 z-50 glass-dropdown border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_var(--theme-glow)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-2.5 py-1.5 mb-1.5 border-b border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Select Portfolio Theme
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Live 3D & Color Sync
              </span>
            </div>

            {/* Themes list */}
            <div className="space-y-1">
              {allThemes.map((item) => {
                const isActive = theme === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTheme(item.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-2 rounded-xl text-left transition-all duration-200 cursor-pointer group relative overflow-hidden",
                      isActive
                        ? "bg-white/[0.12] border border-white/20 shadow-inner"
                        : "hover:bg-white/[0.06] border border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color Preview Swatch */}
                      <div
                        className={cn(
                          "w-7 h-7 rounded-lg p-[1.5px] bg-gradient-to-tr shadow-md flex items-center justify-center shrink-0",
                          item.previewGradient,
                          isActive && "ring-2 ring-white/50"
                        )}
                      >
                        <div className="w-full h-full rounded-[6px] bg-[#070b14]/70 flex items-center justify-center">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: item.primaryHex }}
                          />
                        </div>
                      </div>

                      {/* Theme Name & Tagline */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white group-hover:text-slate-100">
                            {item.name}
                          </span>
                          {isActive && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-mono">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Active Checkmark */}
                    {isActive ? (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shadow-md shrink-0"
                        style={{ backgroundColor: item.primaryHex }}
                      >
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
