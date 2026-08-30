"use client";

import React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon } from "@/components/Icons";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/portfolioData";
import BrandLogo from "@/components/BrandLogo";

const SOCIAL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  MessageCircle: WhatsAppIcon,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-400/20 bg-[#05080f] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background High-Voltage Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00F0FF]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Brand & Quick Navigation */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <BrandLogo size="md" showText={true} />
            <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-sm">
              Architecting state-of-the-art web products, high-concurrency transactional architectures, and sub-150ms real-time platforms.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-400">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICON_MAP[link.icon] || ExternalLink;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-cyan-400/20 text-slate-400 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. High-Voltage Theme built with</span>
            <span className="text-cyan-400 font-semibold">Next.js 14+</span>,
            <span className="text-blue-400 font-semibold">Tailwind CSS</span> &
            <span className="text-purple-400 font-semibold">Framer Motion</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass border border-cyan-400/30 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
