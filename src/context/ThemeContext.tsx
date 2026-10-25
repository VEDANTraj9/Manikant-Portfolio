"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeId = "cyberpunk" | "emerald" | "violet" | "amber" | "blue";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  primaryHex: string;
  secondaryHex: string;
  accentHex: string;
  previewGradient: string;
  glowRgba: string;
  canvasColors: string[];
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  cyberpunk: {
    id: "cyberpunk",
    name: "Cyberpunk Neon",
    tagline: "Vibrant Neon Cyan & Hot Magenta",
    primaryHex: "#00f5ff",
    secondaryHex: "#ff007a",
    accentHex: "#8b5cf6",
    previewGradient: "from-[#00f5ff] via-[#ff007a] to-[#8b5cf6]",
    glowRgba: "rgba(0, 245, 255, 0.5)",
    canvasColors: [
      "rgba(0, 245, 255, ",
      "rgba(255, 0, 122, ",
      "rgba(139, 92, 246, ",
      "rgba(244, 63, 94, ",
      "rgba(255, 255, 255, ",
    ],
  },
  emerald: {
    id: "emerald",
    name: "Matrix Emerald",
    tagline: "Cyber Mint & Obsidian Jade",
    primaryHex: "#00ff9f",
    secondaryHex: "#00d9f5",
    accentHex: "#10b981",
    previewGradient: "from-[#00ff9f] via-[#00d9f5] to-[#10b981]",
    glowRgba: "rgba(0, 255, 159, 0.5)",
    canvasColors: [
      "rgba(0, 255, 159, ",
      "rgba(0, 217, 245, ",
      "rgba(16, 185, 129, ",
      "rgba(132, 204, 22, ",
      "rgba(255, 255, 255, ",
    ],
  },
  violet: {
    id: "violet",
    name: "Nebula Violet",
    tagline: "Deep Cosmic Amethyst & Rose",
    primaryHex: "#a855f7",
    secondaryHex: "#ec4899",
    accentHex: "#f43f5e",
    previewGradient: "from-[#a855f7] via-[#ec4899] to-[#f43f5e]",
    glowRgba: "rgba(168, 85, 247, 0.5)",
    canvasColors: [
      "rgba(168, 85, 247, ",
      "rgba(236, 72, 153, ",
      "rgba(244, 63, 94, ",
      "rgba(217, 70, 239, ",
      "rgba(255, 255, 255, ",
    ],
  },
  amber: {
    id: "amber",
    name: "Obsidian Sunset",
    tagline: "Molten Amber Gold & Crimson",
    primaryHex: "#f59e0b",
    secondaryHex: "#fbbf24",
    accentHex: "#ef4444",
    previewGradient: "from-[#f59e0b] via-[#fbbf24] to-[#ef4444]",
    glowRgba: "rgba(245, 158, 11, 0.5)",
    canvasColors: [
      "rgba(245, 158, 11, ",
      "rgba(251, 191, 36, ",
      "rgba(239, 68, 68, ",
      "rgba(255, 255, 255, ",
    ],
  },
  blue: {
    id: "blue",
    name: "Electric Sapphire",
    tagline: "High-Voltage Blue & Ice Cyan",
    primaryHex: "#3b82f6",
    secondaryHex: "#38bdf8",
    accentHex: "#6366f1",
    previewGradient: "from-blue-500 via-sky-400 to-indigo-500",
    glowRgba: "rgba(59, 130, 246, 0.4)",
    canvasColors: [
      "rgba(59, 130, 246, ",
      "rgba(99, 102, 241, ",
      "rgba(56, 189, 248, ",
      "rgba(255, 255, 255, ",
    ],
  },
};

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentTheme: ThemeConfig;
  allThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set DEFAULT to "cyberpunk" (no boring blue)
  const [theme, setThemeState] = useState<ThemeId>("cyberpunk");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme") as ThemeId;
      // If user had previous "blue" saved or no theme, default to the awesome "cyberpunk" theme
      if (saved && THEMES[saved] && saved !== "blue") {
        setThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        setThemeState("cyberpunk");
        document.documentElement.setAttribute("data-theme", "cyberpunk");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "cyberpunk");
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch {
      // Ignore if localStorage unavailable
    }
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const currentTheme = THEMES[theme] || THEMES.cyberpunk;
  const allThemes = Object.values(THEMES);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentTheme,
        allThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
