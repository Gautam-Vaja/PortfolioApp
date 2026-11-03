import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section
      id="experience"
      className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-right"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                EXPERIENCE & EDUCATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              ACADEMIC & PROFESSIONAL JOURNEY.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Production mobile engineering experience at Derived Web Technologies alongside formal academic qualifications in Computer Applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#FF5500] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Work Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${
                activeTab === 'all' ? 'lg:col-span-7' : 'lg:col-span-12'
              } space-y-6`}
            >
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="h-4 w-4 text-[#FF7A1A]" />
                <span>Work Experience & Live Projects</span>
              </div>

              {EXPERIENCE_DATA.map((exp, index) => (
                <div
                  key={index}
                  className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all"
                >
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#FF7A1A]" />
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-[#FF9030]">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/20 px-3 py-1 text-[11px] text-[#FF9030]">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="h-3 w-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Key Contributions & Impact
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-[#FF7A1A] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Project Sub-Card */}
                  {exp.projectTitle && (
                    <div className="rounded-xl border border-white/[0.08] bg-[#0c101a] p-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
                          <h5 className="text-xs sm:text-sm font-bold text-white">
                            {exp.projectTitle}
                          </h5>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {exp.projectPeriod}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.projectAchievements?.map((pAch, j) => (
                          <li key={j} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#FF7A1A] font-bold">›</span>
                            <span>{pAch}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/[0.04]">
                        {['Flutter', 'Dart', 'GetX', 'REST APIs', 'PDF Export', 'GitLab'].map(
                          (tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${
                activeTab === 'all' ? 'lg:col-span-5' : 'lg:col-span-12'
              } space-y-6`}
            >
              <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="h-4 w-4 text-[#FF7A1A]" />
                <span>Academic Qualifications</span>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl p-5 space-y-3 border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF9030]">
                          {edu.period}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug mt-0.5">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {edu.institution}
                        </p>
                      </div>

                      {edu.grade && (
                        <span className="shrink-0 rounded-full border border-[#FF7A1A]/30 bg-[#FF7A1A]/15 px-2.5 py-1 text-[11px] font-mono font-bold text-[#FF9030]">
                          {edu.grade}
                        </span>
                      )}
                      {edu.status && !edu.grade && (
                        <span className="shrink-0 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-slate-300">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    {edu.description && (
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {edu.keyAreas && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {edu.keyAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-md border border-white/5 bg-[#0e1320] px-2 py-0.5 text-[10px] text-slate-400"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
