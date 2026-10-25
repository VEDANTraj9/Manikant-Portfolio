"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  MessageCircle,
  FileText,
  Download,
  Eye,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import Tilt3DCard from "@/components/Tilt3DCard";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error("Please fill in your Name, Email, and Message.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Simulated ignition surge
      await new Promise((resolve) => setTimeout(resolve, 600));

      const formattedMessage = [
        `⚡ *High-Voltage Portfolio Inquiry for Manikant Kumar*`,
        `👤 *Name:* ${formData.name}`,
        `📧 *Email:* ${formData.email}`,
        formData.phone ? `📱 *Phone:* ${formData.phone}` : null,
        formData.subject ? `📌 *Subject:* ${formData.subject}` : null,
        `\n💬 *Message:*\n${formData.message}`,
      ]
        .filter(Boolean)
        .join("\n");

      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again or reach out directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[170px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none -z-10 opacity-15"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/15 text-xs font-bold text-white mb-3 shadow-md"
          >
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Direct Electric Channel</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black text-white tracking-tight"
          >
            Let&apos;s Build Something{" "}
            <span className="theme-gradient-text">
              High-Voltage
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            Available for full-stack engineering roles, production consultations, and high-performance Web architecture contracts. Reach out via WhatsApp or the direct form below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct High-Voltage Contact Cards with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Quick Connect Card */}
            <Tilt3DCard
              maxTilt={10}
              className="glass-card border-beam-card rounded-2xl p-6 border border-white/15 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      <span>WhatsApp Direct</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </h3>
                    <p className="text-xs text-slate-400">Instant notification & response</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Manikant, I reviewed your portfolio and would love to connect!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 transition-colors"
                  title="Open WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Connect directly with Manikant on WhatsApp for immediate technical discussions or interview coordination.
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                <span className="font-mono text-emerald-300 font-semibold">{PERSONAL_INFO.phone}</span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "whatsapp")}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedField === "whatsapp" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedField === "whatsapp" ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </Tilt3DCard>

            {/* Email Contact Card */}
            <Tilt3DCard
              maxTilt={10}
              className="glass-card border-beam-card rounded-2xl p-6 border border-white/15 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/15 text-[var(--theme-primary)] shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Direct Email</h3>
                    <p className="text-xs text-slate-400">For job offers & RFPs</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-200 truncate max-w-[200px]">{PERSONAL_INFO.email}</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[var(--theme-primary)] hover:text-white flex items-center gap-1 font-semibold"
                >
                  Compose <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Tilt3DCard>

            {/* Resume Download Card */}
            <Tilt3DCard
              maxTilt={10}
              className="glass-card rounded-2xl p-6 border border-white/15 relative bg-black/40 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/15 text-[var(--theme-secondary)]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Official Resume (PDF)</h3>
                    <p className="text-xs text-slate-400">Updated: 2026 Edition</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/25 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-300" />
                    <span>View</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.resumeDownloadUrl}
                    download="Manikant_Kumar.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white theme-btn transition-all shadow-md cursor-pointer active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </Tilt3DCard>

            {/* Location & Timezone Info */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[var(--theme-primary)] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-[var(--theme-secondary)] shrink-0" />
                <span>Available for Indian Standard Time (IST) & Global Remote</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate Joining / Fast Consultation Response</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Voltage Contact Form with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Tilt3DCard
              maxTilt={6}
              scaleOnHover={1.01}
              className="glass-card border-beam-card rounded-3xl p-6 sm:p-8 border border-white/15 relative shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill the fields below to initiate instant end-to-end communication via WhatsApp dispatch.
              </p>

              {/* Status Alerts */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-center gap-2.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>WhatsApp message formatted and opened in your browser window!</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name / Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hiring Manager / Client"
                      required
                      className="glass-input w-full px-4 py-3 rounded-xl text-xs sm:text-sm placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@company.com"
                      required
                      className="glass-input w-full px-4 py-3 rounded-xl text-xs sm:text-sm placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9905959438"
                      className="glass-input w-full px-4 py-3 rounded-xl text-xs sm:text-sm placeholder:text-slate-500"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Inquiry / Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="glass-input w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-[#0c1220] text-slate-200"
                    >
                      <option value="">Select an inquiry type...</option>
                      <option value="Full-Time Full Stack Developer Role">Full-Time Full Stack Developer Role</option>
                      <option value="Freelance / Contract Project">Freelance / Contract Project</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                      <option value="General Discussion / Networking">General Discussion / Networking</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role requirements, or collaboration idea..."
                    required
                    className="glass-input w-full px-4 py-3 rounded-xl text-xs sm:text-sm placeholder:text-slate-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white theme-btn disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.99] transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Opening WhatsApp Transmission...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Message via WhatsApp (Instant)</span>
                    </>
                  )}
                </button>
              </form>
            </Tilt3DCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
