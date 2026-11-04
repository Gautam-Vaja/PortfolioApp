import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import Hero3DScene from './3d/Hero3DScene';
import { PERSONAL_INFO } from '../data/portfolio-data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0"
    >
      <div className="mx-auto max-w-7xl w-full z-10 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Designation, Description, CTA Buttons, Social Links */}
          <div className="lg:col-span-6 text-left space-y-6 lg:space-y-7 z-10">
            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/30 bg-[#07152B]/80 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-[#35D5FF] backdrop-blur-md shadow-[0_0_15px_rgba(0,168,255,0.2)]"
            >
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_10px_#00A8FF] animate-pulse" />
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Main Heading: Large typography with white-to-electric-blue gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] break-words text-gradient-hero"
            >
              I&apos;M GAUTAM VAJA
            </motion.h1>

            {/* Professional Designation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A8B8D0]"
            >
              <span className="text-[#F4F8FF]">SOFTWARE DEVELOPER</span>
              <span className="text-[#00A8FF] font-bold">|</span>
              <span className="text-[#35D5FF]">FLUTTER DEVELOPER</span>
              <span className="text-[#00A8FF] font-bold">|</span>
              <span className="text-[#A8B8D0]">MOBILE APPLICATION ENGINEER</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-base sm:text-lg text-[#A8B8D0] leading-relaxed font-normal"
            >
              Transforming ideas into beautiful, functional, and intelligent digital experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary-blue inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.button
                type="button"
                onClick={onOpenResume}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-outline-blue inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4 text-[#35D5FF]" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00A8FF]/20 bg-[#0B1B32]/80 text-[#A8B8D0] transition-colors hover:border-[#35D5FF] hover:text-[#FFFFFF] hover:shadow-[0_0_14px_rgba(0,168,255,0.4)]"
              >
                <Github className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00A8FF]/20 bg-[#0B1B32]/80 text-[#A8B8D0] transition-colors hover:border-[#35D5FF] hover:text-[#FFFFFF] hover:shadow-[0_0_14px_rgba(0,168,255,0.4)]"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#00A8FF]/20 bg-[#0B1B32]/80 text-[#A8B8D0] transition-colors hover:border-[#35D5FF] hover:text-[#FFFFFF] hover:shadow-[0_0_14px_rgba(0,168,255,0.4)]"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Real-time Three.js 3D Cinematic Scene */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[480px] lg:h-[600px] flex items-center justify-center">
            <Hero3DScene />
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="hidden xl:flex flex-col items-center gap-2.5 absolute right-8 bottom-10 z-20 select-none text-[#A8B8D0]">
        <span className="text-[10px] font-mono tracking-widest uppercase [writing-mode:vertical-rl]">
          SCROLL DOWN
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[#00A8FF]/30 p-1 bg-[#07152B]/60 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]"
          />
        </div>
      </div>
    </section>
  );
}
