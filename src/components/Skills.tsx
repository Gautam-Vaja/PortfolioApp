import React, { useState } from 'react';
import {
  FolderKanban,
  ArrowRight,
  Smartphone,
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TiltCard from './ui/TiltCard';

export default function Skills() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  // 10 Primary Tech Stack Icons matching Image 4
  const featuredTechs = [
    {
      name: 'Flutter',
      color: '#02569B',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M14.314 0L2.3 12 6 15.7 21.714 0h-7.4z" fill="#40D0FD" />
          <path d="M14.314 11.286L8.414 17.186 12.114 20.886 21.714 11.286h-7.4z" fill="#02569B" />
          <path d="M8.414 17.186L12.114 13.486 15.814 17.186 12.114 20.886 8.414 17.186z" fill="#0175C2" />
        </svg>
      ),
    },
    {
      name: 'React Native',
      color: '#61DAFB',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'React.js',
      color: '#00D8FF',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Kotlin',
      color: '#7F52FF',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7">
          <linearGradient id="kg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#E4485D" />
          </linearGradient>
          <path d="M24 24H0V0h24L12 12z" fill="url(#kg)" />
        </svg>
      ),
    },
    {
      name: 'Jetpack Compose',
      color: '#4285F4',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#4285F4" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      color: '#339933',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#68A063">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L4.66 8.54v6.92L12 19.69l7.34-4.23V8.54L12 4.31z" />
          <circle cx="12" cy="12" r="3.5" fill="#83CD29" />
        </svg>
      ),
    },
    {
      name: 'Python',
      color: '#3776AB',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M11.9 1.5c-3.1 0-5.2.4-5.2 2.4v1.8h5.3v.8H4.7c-2 0-3.7 1.4-3.7 3.5 0 2.2 1.4 3.4 3.7 3.4h1.7v-2.2c0-1.8 1.5-3.3 3.3-3.3h5.2c1.4 0 2.6-1.1 2.6-2.5V3.9c0-1.5-1.5-2.4-5.6-2.4zm-1.8 1.2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7z" fill="#3776AB" />
          <path d="M12.1 22.5c3.1 0 5.2-.4 5.2-2.4v-1.8h-5.3v-.8h7.3c2 0 3.7-1.4 3.7-3.5 0-2.2-1.4-3.4-3.7-3.4h-1.7v2.2c0 1.8-1.5 3.3-3.3 3.3H9.1c-1.4 0-2.6 1.1-2.6 2.5v1.5c0 1.5 1.5 2.4 5.6 2.4zm1.8-1.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7 0 .4-.3.7-.7.7z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      color: '#FFCA28',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M4.2 18.2l6.2-11.4c.3-.5 1-.6 1.4-.2l3.4 4.5L4.2 18.2z" fill="#FFA000" />
          <path d="M15.2 11.1L12.5 6c-.3-.5-1-.6-1.4-.2L3 18.4l12.2-7.3z" fill="#F57C00" />
          <path d="M19.8 17.5L16.2 3.6c-.2-.6-.9-.9-1.4-.6-.3.2-.5.5-.5.9L12 18.5l7.8-1z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: 'SQLite',
      color: '#003B57',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#003B57">
          <path d="M12 2C6.48 2 2 4.01 2 6.5v11C2 19.99 6.48 22 12 22s10-2.01 10-4.5v-11C22 4.01 17.52 2 12 2zm0 3c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2zm8 6.5c0 .66-3.59 2-8 2s-8-1.34-8-2v-2.1c2.14 1.19 5.09 1.85 8 1.85s5.86-.66 8-1.85v2.1zm0 5.5c0 .66-3.59 2-8 2s-8-1.34-8-2v-2.1c2.14 1.19 5.09 1.85 8 1.85s5.86-.66 8-1.85v2.1z" fill="#00A8FF" />
        </svg>
      ),
    },
    {
      name: 'Java',
      color: '#EA2D2E',
      svg: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M8.5 17.5c2.5.4 6.5.4 9 0 .4 1.2-1.5 2-4.5 2s-4.9-.8-4.5-2z" fill="#EA2D2E" />
          <path d="M7 14.5c3 .6 8 .6 11 0 .6 1.5-2 2.6-5.5 2.6s-6.1-1.1-5.5-2.6z" fill="#EA2D2E" />
          <path d="M10 9c0 1.5 1 2 2.5 3-1.5 0-3-.5-3-2 0-2 2-3 2.5-4-1 1-2 1.8-2 3z" fill="#5382A1" />
          <path d="M13.5 6c0 1.8 1.2 2.4 3 3.6-1.8 0-3.6-.6-3.6-2.4 0-2.4 2.4-3.6 3-4.8-1.2 1.2-2.4 2.1-2.4 3.6z" fill="#EA2D2E" />
        </svg>
      ),
    },
  ];

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      accent: '#FF6B00',
      skills: ['Flutter', 'Dart', 'React Native', 'Kotlin', 'Jetpack Compose'],
      desc: 'Cross-platform mobile apps with native UI performance, reactive state & smooth animations.',
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      accent: '#35D5FF',
      skills: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      desc: 'Modern web applications with responsive glassmorphism, dynamic data, and rich interactivity.',
    },
    {
      title: 'Backend Development',
      icon: Server,
      accent: '#FF9A45',
      skills: ['Node.js', 'Python', 'Firebase', 'REST APIs', 'Cloud Functions'],
      desc: 'High-throughput client APIs, microservices, cloud functions, and authentication workflows.',
    },
    {
      title: 'Database & Persistence',
      icon: Database,
      accent: '#00A8FF',
      skills: ['SQLite', 'sqflite', 'Firebase Firestore', 'MySQL', 'Local Caching'],
      desc: 'Offline-first persistence, real-time sync, schema normalization, and query optimization.',
    },
    {
      title: 'Programming Languages',
      icon: Code,
      accent: '#FF6B00',
      skills: ['Dart', 'Java', 'Python', 'JavaScript', 'C / C++'],
      desc: 'Strong foundation in OOP paradigms, Data Structures, Algorithms, and clean code principles.',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      accent: '#35D5FF',
      skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Postman'],
      desc: 'Feature branching, CI/CD pipelines, DevTools profiling, emulator testing, and API verification.',
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Warm Orange Horizon Glow */}
      <div className="horizon-beam top-[50%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Layout matching Image 4: Left side header/info, Right side icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Left Column: Heading, Subtitle & View All Skills Button */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#FF6B00]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF9A45]">
                SKILLS & TECHNOLOGIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              TOOLS OF MY TRADE.
            </h2>

            <p className="text-sm text-[#A8B8D0] leading-relaxed font-normal">
              A collection of technologies that I work with.
            </p>

            <div>
              <button
                type="button"
                onClick={() => setShowAllCategories((prev) => !prev)}
                className="btn-outline-dark inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold"
              >
                <span>{showAllCategories ? 'Collapse Skills' : 'View All Skills'}</span>
                <ArrowRight className={`h-3.5 w-3.5 text-[#FF9A45] transition-transform ${showAllCategories ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column: 10 Technology Brand Cards (Matching Image 4) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {featuredTechs.map((tech) => (
                <TiltCard
                  key={tech.name}
                  maxTilt={12}
                  className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 text-center border border-white/10 hover:border-[#FF6B00]/40 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#07152B]/80 p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {tech.svg}
                  </div>
                  <span className="text-xs font-semibold text-[#F4F8FF] group-hover:text-[#FF9A45] transition-colors">
                    {tech.name}
                  </span>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Categorized Expandable Grid */}
        <AnimatePresence>
          {showAllCategories && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-8 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <TiltCard
                      key={cat.title}
                      maxTilt={8}
                      className="glass-panel rounded-2xl p-6 space-y-4 border border-white/10 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 shadow-[0_0_12px_rgba(255,107,0,0.2)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-bold text-[#F4F8FF]">
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#A8B8D0] leading-relaxed">
                        {cat.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/10 bg-[#07152B] px-2.5 py-1 text-[11px] font-medium text-[#F4F8FF]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
