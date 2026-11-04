import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import TiltCard from './ui/TiltCard';

export default function ExperienceEducation() {
  const contributions = [
    'Engineered and optimized modular, cross-platform UI components using Flutter & Dart, ensuring seamless responsiveness across diverse mobile screen resolutions.',
    'Integrated complex RESTful APIs via Dio & HTTP libraries with secure JSON serialization, improving asynchronous data handling and screen load speed.',
    'Implemented local data caching and persistence utilizing SQLite & Firebase Firestore to provide uninterrupted offline application functionality.',
    'Leveraged Git & GitHub for feature-branch workflows, collaborative PR reviews, bug fixes, and performance profiling with Flutter DevTools.',
  ];

  const pilonMagicBullets = [
    'Built asset search, QR/VIN lookup and profile features by integrating REST APIs with Flutter, Dart and GetX state management.',
    'Implemented ownership report PDF export and English/French localization for the production app.',
    'Delivered Android bug fixes and updates, collaborating through GitLab version control.',
  ];

  const pilonMagicTags = ['Flutter', 'Dart', 'GetX', 'REST APIs', 'PDF Export', 'GitLab'];

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Warm Orange Horizon Beam */}
      <div className="horizon-beam top-[50%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dual Column Layout matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: WORK EXPERIENCE & LIVE PROJECTS (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#FF9A45] font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Briefcase className="h-4 w-4 text-[#FF6B00]" />
              <span>WORK EXPERIENCE & LIVE PROJECTS</span>
            </div>

            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-6 border border-white/10 hover:border-[#FF6B00]/40 transition-all"
            >
              {/* Header: Company & Role */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 shadow-[0_0_10px_rgba(255,107,0,0.3)]">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F8FF] font-display">
                      Derived Web Technologies Pvt. Ltd.
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium pt-0.5">
                    <span className="text-[#FF9A45] font-semibold text-sm">
                      Flutter Developer Intern
                    </span>
                    <span className="flex items-center gap-1 text-[#A8B8D0]">
                      <MapPin className="h-3.5 w-3.5 text-[#00A8FF]" />
                      Ahmedabad, Gujarat
                    </span>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#07152B] border border-white/15 px-3 py-1 text-[11px] font-mono text-[#FF9A45]">
                    <Calendar className="h-3 w-3 text-[#FF6B00]" />
                    Jul 2024 – Oct 2024 (3-Month Internship)
                  </span>
                </div>
              </div>

              {/* Key Contributions & Impact */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF9A45]">
                  KEY CONTRIBUTIONS & IMPACT
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-[#A8B8D0] leading-relaxed">
                  {contributions.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Live Project - PilonMagic Nested Card */}
              <div className="rounded-xl border border-white/10 bg-[#07152B]/90 p-4 sm:p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
                    <h5 className="text-sm font-bold text-[#F4F8FF]">
                      Live Project – PilonMagic (GPS Tracking App)
                    </h5>
                  </div>
                  <span className="text-[11px] font-mono text-[#A8B8D0]">
                    Sep 2024 – Oct 2024
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-[#A8B8D0] leading-relaxed">
                  {pilonMagicBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {pilonMagicTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-[#030B1B] px-2.5 py-0.5 text-[11px] font-medium text-[#F4F8FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: ACADEMIC QUALIFICATIONS (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#FF9A45] font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <GraduationCap className="h-4 w-4 text-[#FF6B00]" />
              <span>ACADEMIC QUALIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {/* Card 1: MCA */}
              <TiltCard
                maxTilt={6}
                className="glass-panel rounded-2xl p-5 space-y-3 border border-white/10 hover:border-[#FF6B00]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#FF9A45] font-semibold">
                      2024 – Present
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F4F8FF] font-display mt-0.5">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      Narandas Jethalal Sonecha Management & Technical Institute, GTU
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/20 bg-[#07152B] px-3 py-1 text-[10px] font-mono text-[#F4F8FF]">
                    Currently Pursuing
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Advanced graduate coursework in software engineering, cloud computing, advanced algorithms, and enterprise systems.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Advanced Data Structures', 'Cloud Architectures', 'Enterprise Software Design', 'Mobile Engineering'].map((area) => (
                    <span
                      key={area}
                      className="rounded-md border border-white/10 bg-[#07152B] px-2 py-0.5 text-[10px] text-[#A8B8D0]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </TiltCard>

              {/* Card 2: BCA */}
              <TiltCard
                maxTilt={6}
                className="glass-panel rounded-2xl p-5 space-y-3 border border-white/10 hover:border-[#FF6B00]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#FF9A45] font-semibold">
                      2021 – 2024
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#F4F8FF] font-display mt-0.5">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      Shri K.M. & Smt. K.K. Savjani BBA/BCA College, BKNMU
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/15 px-3 py-1 text-xs font-mono font-bold text-[#FF9A45] shadow-[0_0_10px_rgba(255,107,0,0.3)]">
                    CGPA: 8.33 / 10
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Core computer science degree with academic excellence in software paradigms, database management, and mobile engineering.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Object-Oriented Programming (Java/C++)', 'Data Structures & Algorithms', 'DBMS & SQL', 'Mobile & Web Development'].map((area) => (
                    <span
                      key={area}
                      className="rounded-md border border-white/10 bg-[#07152B] px-2 py-0.5 text-[10px] text-[#A8B8D0]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </TiltCard>

              {/* Card 3: 12th GSEB */}
              <TiltCard
                maxTilt={6}
                className="glass-panel rounded-2xl p-4 sm:p-5 space-y-2 border border-white/10 hover:border-[#FF6B00]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#FF9A45] font-semibold">
                      2021
                    </span>
                    <h4 className="text-base font-bold text-[#F4F8FF] font-display mt-0.5">
                      Higher Secondary Certificate (12th, GSEB)
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      Sunrise School, Veraval
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-2.5 py-0.5 text-xs font-mono font-bold text-[#FF9A45]">
                    75%
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Higher secondary education with concentration in Science and Mathematics.
                </p>
              </TiltCard>

              {/* Card 4: 10th GSEB */}
              <TiltCard
                maxTilt={6}
                className="glass-panel rounded-2xl p-4 sm:p-5 space-y-2 border border-white/10 hover:border-[#FF6B00]/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-[#FF9A45] font-semibold">
                      2019
                    </span>
                    <h4 className="text-base font-bold text-[#F4F8FF] font-display mt-0.5">
                      Secondary School Certificate (10th, GSEB)
                    </h4>
                    <p className="text-xs text-[#A8B8D0] mt-0.5">
                      Sunrise School, Veraval
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-2.5 py-0.5 text-xs font-mono font-bold text-[#FF9A45]">
                    82%
                  </span>
                </div>
                <p className="text-xs text-[#A8B8D0] leading-relaxed">
                  Secondary school education with high academic achievement across mathematics and sciences.
                </p>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
