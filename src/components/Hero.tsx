import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio-data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8 glow-seq-right"
    >
      <div className="mx-auto max-w-4xl w-full py-12 sm:py-16 lg:py-20 space-y-6 z-10">
        {/* Status Pill: ● Available for opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0e131e]/80 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF7A1A] shadow-[0_0_8px_#FF7A1A] animate-pulse" />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Main Headline: I'M GAUTAM VAJA */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight break-words"
        >
          I&apos;M GAUTAM VAJA
        </motion.h1>

        {/* Subtitles: SOFTWARE DEVELOPER | FLUTTER DEVELOPER | MOBILE APPLICATION ENGINEER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300"
        >
          <span>SOFTWARE DEVELOPER</span>
          <span className="text-[#FF7A1A] font-bold">|</span>
          <span>FLUTTER DEVELOPER</span>
          <span className="text-[#FF7A1A] font-bold">|</span>
          <span>MOBILE APPLICATION ENGINEER</span>
        </motion.div>

        {/* Supporting Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed font-normal"
        >
          Transforming ideas into beautiful, functional, and intelligent digital experiences.
        </motion.p>

        {/* Action Buttons matching mockup */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(255, 122, 26, 0.45)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF7A1A]/30 transition-all"
          >
            <span>Explore My Work</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.button
            type="button"
            onClick={onOpenResume}
            whileHover={{ scale: 1.04, borderColor: 'rgba(255, 122, 26, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            <span>Download Resume</span>
            <Download className="h-4 w-4 text-[#FF9030]" />
          </motion.button>
        </motion.div>

        {/* Circular Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 pt-3"
        >
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#FF7A1A]/60 hover:text-white hover:bg-[#FF7A1A]/10"
          >
            <Github className="h-4 w-4" />
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#FF7A1A]/60 hover:text-white hover:bg-[#FF7A1A]/10"
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>

          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send email"
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-[#FF7A1A]/60 hover:text-white hover:bg-[#FF7A1A]/10"
          >
            <Mail className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
