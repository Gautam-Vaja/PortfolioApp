import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';

export default function ExperienceEducation() {
  const exp = EXPERIENCE_DATA[0];
  const mca = EDUCATION_DATA[0];
  const bca = EDUCATION_DATA[1];

  return (
    <section
      id="experience"
      className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-right"
    >
      <span id="education" className="absolute -top-16 opacity-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Action Button matching mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                CAREER & ACADEMICS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-display">
              MY JOURNEY SO FAR.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Professional experience and educational background.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF7A1A]/40"
              >
                <span>Get In Touch</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#FF9030]" />
              </a>
            </div>
          </motion.div>

          {/* Center Column: Master Mockup Timeline flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 text-left">
              {/* 1. Work Experience Node matching mockup */}
              <div className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#121824] border border-[#FF7A1A] shadow-[0_0_12px_rgba(255,122,26,0.35)] text-[#FF7A1A]">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="glass-panel rounded-2xl p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-[#FF7A1A]" />
                      {exp.company}
                    </h3>
                    <span className="text-[11px] font-mono text-[#FF9030] bg-[#FF7A1A]/10 border border-[#FF7A1A]/20 px-2.5 py-0.5 rounded-full inline-block w-fit">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#FF9030]">
                    {exp.role}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF7A1A] font-bold">●</span>
                      <span>Developed mobile application features with responsive Flutter UI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF7A1A] font-bold">●</span>
                      <span>Worked with Dart, GetX, and RESTful API integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FF7A1A] font-bold">●</span>
                      <span>Integrated SQLite local persistence and Firebase cloud services</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. Education Node matching mockup */}
              <div className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#121824] border border-[#FF7A1A] shadow-[0_0_12px_rgba(255,122,26,0.35)] text-[#FF7A1A]">
                  <GraduationCap className="h-4 w-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* BCA */}
                  <div className="glass-panel rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">BCA</h4>
                      <span className="text-[10px] font-mono text-[#FF9030] bg-[#FF7A1A]/15 px-2 py-0.5 rounded-full">
                        8.33 CGPA
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {bca.institution}
                    </p>
                    <span className="text-[10px] font-mono text-slate-500 block">
                      {bca.period}
                    </span>
                  </div>

                  {/* MCA */}
                  <div className="glass-panel rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">MCA</h4>
                      <span className="text-[10px] font-mono text-slate-300 border border-white/10 px-2 py-0.5 rounded-full">
                        Currently Pursuing
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
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

          {/* Right Column: 3D Cubes Visual matching mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[220px] select-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#FF7A1A]/20 blur-2xl pointer-events-none" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <img
                  src="/assets/theme/journey_3d_cubes.png"
                  alt="3D Floating Illuminated Cubes"
                  className="w-full h-auto object-contain blend-graphic-3d drop-shadow-[0_15px_30px_rgba(255,107,0,0.3)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
