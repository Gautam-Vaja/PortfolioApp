import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio-data';
import ThreeHeroScene from './3d/ThreeHeroScene';
import { AnimatedLetters, AnimatedWords } from './ui/AnimatedText';
import { scrollToTarget } from '../hooks/useSmoothScroll';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget('#projects');
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 glow-seq-right"
    >
      <div className="mx-auto max-w-7xl w-full py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Bio, Buttons, Social Links */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill: ● Available for opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FF9A45]/30 bg-[#07152B]/80 px-4 py-1.5 text-xs font-medium text-[#A8B8D0] backdrop-blur-md shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF9A45] shadow-[0_0_10px_#FF9A45] animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Main Headline with Letter-by-Letter Reveal */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F4F8FF] leading-[1.02] break-words">
              <AnimatedLetters
                text="I'M GAUTAM VAJA"
                delay={0.2}
                stagger={0.035}
                letterClassName="hover:text-[#35D5FF] transition-colors duration-200"
              />
            </h1>

            {/* Subtitles row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A8B8D0]"
            >
              <span>SOFTWARE DEVELOPER</span>
              <span className="text-[#00A8FF] font-bold">|</span>
              <span>FLUTTER DEVELOPER</span>
              <span className="text-[#35D5FF] font-bold">|</span>
              <span>MOBILE APPLICATION ENGINEER</span>
            </motion.div>

            {/* Tagline text */}
            <div className="max-w-xl text-sm sm:text-base text-[#A8B8D0] leading-relaxed font-normal">
              <AnimatedWords
                text="Transforming ideas into beautiful, functional, and intelligent digital experiences."
                delay={0.5}
                stagger={0.04}
              />
            </div>

            {/* Action Buttons matching design reference */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Warm Orange Accent Button matching mockup */}
              <motion.button
                type="button"
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(255, 122, 26, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                data-cursor="pointer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FF9A45] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF7A1A]/30 transition-all hover:brightness-110 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              {/* Secondary Glassmorphic Button */}
              <motion.button
                type="button"
                onClick={onOpenResume}
                whileHover={{ scale: 1.04, borderColor: 'rgba(53, 213, 255, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                data-cursor="pointer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-7 py-3 text-xs sm:text-sm font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#0B1B32] cursor-pointer"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4 text-[#35D5FF]" />
              </motion.button>
            </motion.div>

            {/* Circular Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 pt-3"
            >
              <motion.a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                data-cursor="pointer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B]/70 text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Github className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                data-cursor="pointer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B]/70 text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send email"
                data-cursor="pointer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#35D5FF]/20 bg-[#07152B]/70 text-[#A8B8D0] transition-colors hover:border-[#00A8FF] hover:text-white hover:bg-[#00A8FF]/15"
              >
                <Mail className="h-4 w-4" />
              </motion.a>

              {PERSONAL_INFO.portfolioRepo && (
                <motion.a
                  href={PERSONAL_INFO.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  whileHover={{ y: -2, borderColor: 'rgba(53, 213, 255, 0.6)' }}
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#35D5FF]/20 bg-[#07152B]/70 px-3 py-1.5 text-[11px] font-mono text-[#A8B8D0] hover:text-[#35D5FF] transition-all ml-1"
                >
                  <span className="text-[#FF9A45]">★</span>
                  <span>PortfolioApp</span>
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Real 3D Cubes Visual Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg select-none">
              <ThreeHeroScene />
            </div>
          </div>
        </div>
      </div>

      {/* Far Right: Vertical Scroll Down Indicator */}
      <div
        onClick={handleScrollToProjects}
        className="hidden xl:flex flex-col items-center gap-2 absolute right-8 bottom-12 z-20 text-[#A8B8D0] select-none cursor-pointer group hover:text-[#35D5FF] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase [writing-mode:vertical-rl] text-[#A8B8D0] group-hover:text-[#35D5FF] transition-colors">
          Scroll Down
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#35D5FF]/30 p-1 group-hover:border-[#00A8FF] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-[#FF9A45]"
          />
        </div>
      </div>
    </section>
  );
}
