import React from 'react';
import {
  Smartphone,
  Globe,
  Cpu,
  ArrowRight,
  FolderKanban,
  Code2,
  Lightbulb,
  Compass,
  GraduationCap,
  Laptop,
} from 'lucide-react';
import { motion } from 'motion/react';
import ThreeAboutCube from './3d/ThreeAboutCube';
import { AnimatedLetters } from './ui/AnimatedText';
import { scrollToTarget } from '../hooks/useSmoothScroll';

export default function About() {
  const interests = [
    { label: 'Mobile Development', icon: Smartphone },
    { label: 'Open Source', icon: Code2 },
    { label: 'Web Technologies', icon: Globe },
    { label: 'Problem Solving', icon: Lightbulb },
    { label: 'AI & Machine Learning', icon: Cpu },
    { label: 'Tech Innovation', icon: Compass },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 border-t border-[#35D5FF]/10 relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Column 1: Floating Real 3D Glowing Glass Cube Graphic (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] select-none" data-cursor-drag="true">
              <ThreeAboutCube />
            </div>
          </motion.div>

          {/* Column 2: Narrative, Bio & Quick Highlights (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              <AnimatedLetters text="BEYOND THE CODE." stagger={0.03} />
            </h2>

            <p className="text-xs sm:text-sm leading-relaxed text-[#A8B8D0] font-normal">
              I&apos;m Gautam Vaja, a passionate software developer who enjoys building modern mobile applications and digital experiences. I focus on writing clean code, creating intuitive interfaces, and solving real-world problems through technology.
            </p>

            {/* 3 Quick Facts matching design reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-1 border-y border-[#35D5FF]/10 py-3 text-[#A8B8D0]">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-4 w-4 text-[#00A8FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#F4F8FF] leading-tight">BCA Graduate</div>
                  <div className="text-[10px] text-[#A8B8D0] mt-0.5 leading-snug">Savjani College</div>
                </div>
              </div>

              <div className="flex items-start gap-2 border-t sm:border-t-0 sm:border-l border-[#35D5FF]/10 pt-2 sm:pt-0 sm:pl-3">
                <Laptop className="h-4 w-4 text-[#35D5FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#F4F8FF] leading-tight">Currently Pursuing</div>
                  <div className="text-[10px] text-[#A8B8D0] mt-0.5 leading-snug">MCA (Master&apos;s)</div>
                </div>
              </div>

              <div className="flex items-start gap-2 border-t sm:border-t-0 sm:border-l border-[#35D5FF]/10 pt-2 sm:pt-0 sm:pl-3">
                <Code2 className="h-4 w-4 text-[#FF9A45] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#F4F8FF] leading-tight">Development</div>
                  <div className="text-[10px] text-[#A8B8D0] mt-0.5 leading-snug">Mobile • Web • AI</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToTarget('#experience')}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-6 py-2.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60 cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#35D5FF]" />
              </button>
            </div>
          </motion.div>

          {/* Column 3: MY INTERESTS 2x3 Grid Card matching reference Image 3 (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-2xl p-5 shadow-2xl border border-[#35D5FF]/12">
              <div className="flex items-center gap-2 mb-4 text-[#35D5FF]">
                <FolderKanban className="h-4 w-4 text-[#00A8FF]" />
                <h3 className="text-xs font-bold tracking-wider uppercase text-[#F4F8FF] font-mono">
                  MY INTERESTS
                </h3>
              </div>

              {/* 2-column grid matching reference image 3 */}
              <div className="grid grid-cols-2 gap-2.5">
                {interests.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.04 }}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#07152B]/80 border border-[#35D5FF]/10 hover:border-[#00A8FF]/40 transition-all text-center group cursor-default"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#35D5FF] bg-[#00A8FF]/10 group-hover:bg-[#00A8FF]/25 group-hover:text-white transition-colors mb-1.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#A8B8D0] group-hover:text-[#F4F8FF] leading-snug line-clamp-2">
                        {item.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
