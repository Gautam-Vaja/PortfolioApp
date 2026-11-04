import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Award,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import TiltCard from './ui/TiltCard';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';

export default function ExperienceEducation() {
  const exp = EXPERIENCE_DATA[0];
  const mca = EDUCATION_DATA[0];
  const bca = EDUCATION_DATA[1];

  const experiencePoints = [
    'Mobile application development across cross-platform Android and iOS targets.',
    'Engineered reactive features utilizing Flutter and modern Dart OOP architecture.',
    'Integrated complex RESTful APIs with secure JSON serialization and HTTP logging.',
    'Pixel-perfect responsive UI implementation adapted to diverse form factors.',
    'Firebase Firestore cloud synchronization and authentication flows.',
    'Delivered production-ready client deliverables and real-world application features.',
  ];

  return (
    <section id="experience" className="py-24 border-t border-[#00A8FF]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                CAREER & ACADEMICS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              MY JOURNEY SO FAR.
            </h2>

            <p className="text-sm sm:text-base text-[#A8B8D0] leading-relaxed font-normal">
              Production mobile engineering internship alongside formal graduate qualifications in Computer Applications.
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/30 bg-[#07152B]/80 px-4 py-1.5 text-xs font-mono text-[#35D5FF] shadow-[0_0_12px_rgba(0,168,255,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-[#00A8FF]" />
              Engineering Milestones
            </span>
          </div>
        </div>

        {/* 2-Column Balanced Grid: Experience on Left, Education on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Work Experience (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-[#F4F8FF] font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="h-4 w-4 text-[#00A8FF]" />
              <span>Professional Experience</span>
            </div>

            <TiltCard maxTilt={8} className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 border border-[#00A8FF]/20">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#00A8FF]/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#00A8FF]" />
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F8FF] font-display">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#35D5FF]">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-[#A8B8D0] font-mono space-y-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/25 px-3 py-1 text-[11px] text-[#35D5FF]">
                    <Calendar className="h-3 w-3" />
                    {exp.duration}
                  </span>
                  <span className="text-[11px] text-[#A8B8D0]">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#35D5FF]">
                  Key Responsibilities & Impact
                </h4>
                <ul className="space-y-2.5 text-xs text-[#A8B8D0]">
                  {experiencePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-[#00A8FF] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#00A8FF]/10 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#00A8FF]/15 bg-[#07152B] px-2.5 py-1 text-[11px] font-medium text-[#F4F8FF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Academic Qualifications (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2 text-[#F4F8FF] font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="h-4 w-4 text-[#00A8FF]" />
              <span>Academic Qualifications</span>
            </div>

            <div className="space-y-4">
              {/* MCA Card */}
              <TiltCard maxTilt={8} className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4 border border-[#00A8FF]/20">
                <div className="flex items-start justify-between gap-3 border-b border-[#00A8FF]/10 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                      2026 – Present
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F4F8FF] font-display mt-0.5">
                      {mca.degree}
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      {mca.institution}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#00A8FF]/25 bg-[#00A8FF]/10 px-3 py-1 text-[10px] font-mono text-[#35D5FF]">
                    Currently Pursuing
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Advanced graduate coursework in software engineering, cloud architectures, and enterprise systems.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mca.keyAreas?.map((area) => (
                    <span key={area} className="rounded-md border border-[#00A8FF]/15 bg-[#07152B] px-2 py-0.5 text-[10px] text-[#A8B8D0]">
                      {area}
                    </span>
                  ))}
                </div>
              </TiltCard>

              {/* BCA Card */}
              <TiltCard maxTilt={8} className="glass-panel rounded-2xl p-5 sm:p-6 space-y-4 border border-[#00A8FF]/20">
                <div className="flex items-start justify-between gap-3 border-b border-[#00A8FF]/10 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                      2023 – 2026
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F4F8FF] font-display mt-0.5">
                      {bca.degree}
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      {bca.institution}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#00A8FF]/40 bg-[#00A8FF]/20 px-3 py-1 text-xs font-mono font-bold text-[#35D5FF] shadow-[0_0_10px_rgba(0,168,255,0.3)]">
                    8.33 CGPA
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Core computer science degree with academic excellence in software paradigms, database management, and mobile engineering.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {bca.keyAreas?.map((area) => (
                    <span key={area} className="rounded-md border border-[#00A8FF]/15 bg-[#07152B] px-2 py-0.5 text-[10px] text-[#A8B8D0]">
                      {area}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
