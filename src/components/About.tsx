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
} from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="about" className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Column 1: Floating 3D Cube Graphic matching mockup (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[240px] select-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#FF7A1A]/20 blur-2xl pointer-events-none" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <img
                  src="/assets/theme/about_3d_cube.png"
                  alt="3D Floating Illuminated Cube"
                  className="w-full h-auto object-contain blend-graphic-3d drop-shadow-[0_15px_30px_rgba(255,107,0,0.3)]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Narrative & Bio matching mockup (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-5 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A] shadow-[0_0_8px_#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              BEYOND THE CODE.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
              I&apos;m Gautam Vaja, a passionate software developer who enjoys building modern mobile applications and digital experiences. I focus on writing clean code, creating intuitive interfaces, and solving real-world problems through technology.
            </p>

            <div className="pt-2">
              <a
                href="#education"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF7A1A]/40"
              >
                <span>Know More</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#FF9030]" />
              </a>
            </div>
          </motion.div>

          {/* Column 3: MY INTERESTS Card matching mockup (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-[#FF7A1A]">
                <FolderKanban className="h-4 w-4" />
                <h3 className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                  MY INTERESTS
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {interests.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#FF7A1A] bg-[#FF7A1A]/10 border border-[#FF7A1A]/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-300 leading-tight">
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
