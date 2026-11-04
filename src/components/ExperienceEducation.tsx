import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';
import ThreeExperienceAccents from './3d/ThreeExperienceAccents';
import { AnimatedLetters } from './ui/AnimatedText';
import { scrollToTarget } from '../hooks/useSmoothScroll';

export default function ExperienceEducation() {
  const exp = EXPERIENCE_DATA[0];
  const mca = EDUCATION_DATA[0];
  const bca = EDUCATION_DATA[1];

  return (
    <section
      id="experience"
      className="py-20 lg:py-24 border-t border-[#35D5FF]/10 relative overflow-hidden glow-seq-right"
    >
      <span id="education" className="absolute -top-16 opacity-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Action Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                CAREER & ACADEMICS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              <AnimatedLetters text="MY JOURNEY SO FAR." stagger={0.03} />
            </h2>

            <p className="text-xs sm:text-sm text-[#A8B8D0] leading-relaxed font-normal">
              Professional experience and educational background.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollToTarget('#contact')}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-6 py-2.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60 cursor-pointer"
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#35D5FF]" />
              </button>
            </div>
          </motion.div>

          {/* Center Column: Master Mockup Timeline flow with dynamic SVG connector */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative pl-6 sm:pl-8 space-y-8 text-left">
              {/* Glowing animated vertical spine */}
              <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#00A8FF] via-[#35D5FF] to-[#FF9A45]/40" />

              {/* 1. Work Experience Node */}
              <div className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#07152B] border border-[#00A8FF] shadow-[0_0_12px_rgba(0,168,255,0.4)] text-[#35D5FF]">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="glass-panel rounded-2xl p-5 space-y-3 border border-[#35D5FF]/15 hover:border-[#00A8FF]/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-[#F4F8FF] flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#00A8FF]" />
                      {exp.company}
                    </h3>
                    <span className="text-[11px] font-mono text-[#35D5FF] bg-[#00A8FF]/15 border border-[#00A8FF]/30 px-2.5 py-0.5 rounded-full inline-block w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#35D5FF]">
                    {exp.role}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#A8B8D0]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF9A45] font-bold">●</span>
                      <span>Developed mobile application features with responsive Flutter UI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF9A45] font-bold">●</span>
                      <span>Worked with Dart, GetX, and RESTful API integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF9A45] font-bold">●</span>
                      <span>Integrated SQLite local persistence and Firebase cloud services</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. Education Node */}
              <div className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#07152B] border border-[#00A8FF] shadow-[0_0_12px_rgba(0,168,255,0.4)] text-[#35D5FF]">
                  <GraduationCap className="h-4 w-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* BCA */}
                  <div className="glass-panel rounded-xl p-4 space-y-2 border border-[#35D5FF]/10 hover:border-[#00A8FF]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#F4F8FF]">BCA</h4>
                      <span className="text-[10px] font-mono text-[#35D5FF] bg-[#00A8FF]/15 border border-[#00A8FF]/20 px-2 py-0.5 rounded-full">
                        8.33 CGPA
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A8B8D0] leading-snug">
                      {bca.institution}
                    </p>
                    <span className="text-[10px] font-mono text-slate-500 block">
                      {bca.period}
                    </span>
                  </div>

                  {/* MCA */}
                  <div className="glass-panel rounded-xl p-4 space-y-2 border border-[#35D5FF]/10 hover:border-[#00A8FF]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#F4F8FF]">MCA</h4>
                      <span className="text-[10px] font-mono text-[#F4F8FF] border border-[#35D5FF]/30 bg-[#00A8FF]/10 px-2 py-0.5 rounded-full">
                        Currently Pursuing
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A8B8D0] leading-snug">
                      Narandas Jethalal Sonecha Institute, GTU
                    </p>
                    <span className="text-[10px] font-mono text-slate-500 block">
                      2026 – Present
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real 3D Cubes Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[240px] select-none" data-cursor-drag="true">
              <ThreeExperienceAccents />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
