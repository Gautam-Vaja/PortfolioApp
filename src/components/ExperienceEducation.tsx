import React from 'react';
import {
  GraduationCap,
  Calendar,
  School,
  Award,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_DATA } from '../data/portfolio-data';

export default function ExperienceEducation() {
  const mca = EDUCATION_DATA[0];
  const bca = EDUCATION_DATA[1];
  const hsc = EDUCATION_DATA[2];
  const ssc = EDUCATION_DATA[3];

  return (
    <section
      id="education"
      className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-right"
    >
      {/* Anchor alias so #experience links still scroll here smoothly */}
      <span id="experience" className="absolute -top-16 opacity-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                ACADEMIC QUALIFICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              EDUCATION JOURNEY.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Formal academic foundation in Computer Applications, core software paradigms, and enterprise system architectures.
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A1A]/30 bg-[#FF7A1A]/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-[#FF9030]">
              <Award className="h-3.5 w-3.5" />
              <span>BCA 8.33 CGPA</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono text-slate-300">
              <BookOpen className="h-3.5 w-3.5 text-[#FF7A1A]" />
              <span>MCA at GTU</span>
            </div>
          </div>
        </div>

        {/* 2x2 Balanced Education Grid */}
        <div className="space-y-6">
          {/* Top Row: Higher Education Degrees (MCA & BCA) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 1. Master of Computer Applications (MCA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-[#FF7A1A]" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {mca.degree}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                      {mca.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono text-slate-300">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {mca.period}
                    </span>
                    <span className="rounded-full border border-[#FF7A1A]/30 bg-[#FF7A1A]/15 px-3 py-1 text-[11px] font-mono text-[#FF9030]">
                      {mca.status}
                    </span>
                  </div>
                </div>

                {mca.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {mca.description}
                  </p>
                )}
              </div>

              {mca.keyAreas && (
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Key Coursework & Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mca.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-md border border-white/5 bg-[#0e1320] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* 2. Bachelor of Computer Applications (BCA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-[#FF7A1A]" />
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {bca.degree}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
                      {bca.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono text-slate-300">
                      <Calendar className="h-3 w-3 text-slate-400" />
                      {bca.period}
                    </span>
                    {bca.grade && (
                      <span className="rounded-full border border-[#FF7A1A]/40 bg-[#FF7A1A]/20 px-3 py-1 text-[11px] font-mono font-bold text-[#FF9030]">
                        {bca.grade}
                      </span>
                    )}
                  </div>
                </div>

                {bca.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {bca.description}
                  </p>
                )}
              </div>

              {bca.keyAreas && (
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Core Computer Science Disciplines:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {bca.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-md border border-white/5 bg-[#0e1320] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Bottom Row: Pre-University & Secondary Schooling (12th & 10th GSEB) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 3. Higher Secondary Certificate (12th, GSEB) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-panel rounded-2xl p-6 space-y-4 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF9030]">
                      {hsc.period}
                    </span>
                    <h4 className="text-base font-bold text-white leading-snug mt-1">
                      {hsc.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {hsc.institution}
                    </p>
                  </div>

                  {hsc.grade && (
                    <span className="shrink-0 rounded-full border border-[#FF7A1A]/30 bg-[#FF7A1A]/15 px-3 py-1 text-xs font-mono font-bold text-[#FF9030]">
                      Score: {hsc.grade}
                    </span>
                  )}
                </div>

                {hsc.description && (
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {hsc.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center gap-2 text-xs text-slate-400 font-mono">
                <School className="h-3.5 w-3.5 text-[#FF7A1A]" />
                <span>Science & Mathematics Stream</span>
              </div>
            </motion.div>

            {/* 4. Secondary School Certificate (10th, GSEB) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel rounded-2xl p-6 space-y-4 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF9030]">
                      {ssc.period}
                    </span>
                    <h4 className="text-base font-bold text-white leading-snug mt-1">
                      {ssc.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {ssc.institution}
                    </p>
                  </div>

                  {ssc.grade && (
                    <span className="shrink-0 rounded-full border border-[#FF7A1A]/30 bg-[#FF7A1A]/15 px-3 py-1 text-xs font-mono font-bold text-[#FF9030]">
                      Score: {ssc.grade}
                    </span>
                  )}
                </div>

                {ssc.description && (
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {ssc.description}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-white/[0.04] flex items-center gap-2 text-xs text-slate-400 font-mono">
                <School className="h-3.5 w-3.5 text-[#FF7A1A]" />
                <span>General Science & Mathematics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
