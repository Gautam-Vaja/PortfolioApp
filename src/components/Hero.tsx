import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Mouse } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio-data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 glow-seq-right"
    >
      <div className="mx-auto max-w-7xl w-full py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Bio, Buttons, Social Links */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill matching mockup: ● Available for opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0e131e]/80 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A] shadow-[0_0_10px_#FF7A1A] animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Main Headline matching mockup */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.02] break-words"
            >
              I&apos;M GAUTAM VAJA
            </motion.h1>

            {/* Subtitles row matching mockup */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300"
            >
              <span>SOFTWARE DEVELOPER</span>
              <span className="text-[#FF7A1A] font-bold">|</span>
              <span>FLUTTER DEVELOPER</span>
              <span className="text-[#FF7A1A] font-bold">|</span>
              <span>MOBILE APPLICATION ENGINEER</span>
            </motion.div>

            {/* Tagline text matching mockup */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed font-normal"
            >
              Transforming ideas into beautiful, functional, and intelligent digital experiences.
            </motion.p>

            {/* Action Buttons matching mockup */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap items-center gap-4 pt-2"
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

            {/* Circular Social Icons matching mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-3"
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

          {/* Right Column: Master 3D Cubes Visual matching mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg select-none">
              {/* Warm Backlight Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#FF7A1A]/25 blur-3xl pointer-events-none" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <img
                  src="/assets/theme/hero_3d_cubes.png"
                  alt="3D Floating Illuminated Geometric Cubes"
                  className="w-full h-auto object-contain blend-graphic-3d drop-shadow-[0_20px_35px_rgba(255,107,0,0.35)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Far Right: Vertical Scroll Down Indicator matching mockup */}
      <div className="hidden xl:flex flex-col items-center gap-2 absolute right-8 bottom-12 z-20 text-slate-400 select-none">
        <span className="text-[10px] font-mono tracking-widest uppercase [writing-mode:vertical-rl] text-slate-400">
          Scroll Down
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-[#FF7A1A]"
          />
        </div>
      </div>
    </section>
  );
}
