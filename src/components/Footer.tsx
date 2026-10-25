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
    <footer className="relative border-t border-white/10 bg-[#070b14] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Dynamic Top Glow Line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] opacity-75 shadow-md"
        style={{
          background: "linear-gradient(to right, transparent, var(--theme-primary), transparent)",
          boxShadow: "0 0 15px var(--theme-glow)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />

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
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--theme-primary)] hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Resume (PDF)
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
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
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200"
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
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with</span>
            <span className="text-white font-semibold">Next.js 16</span>,
            <span className="text-white font-semibold">Tailwind CSS</span> &
            <span className="text-white font-semibold">Framer Motion</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
