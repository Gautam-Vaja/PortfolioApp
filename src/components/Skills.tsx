import React, { useState } from 'react';
import { ArrowRight, FolderKanban, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolio-data';

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // 10 Featured Primary Skills matching the mockup & prompt
  const featuredSkills = [
    {
      name: 'Flutter',
      subtitle: 'Mobile Apps',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M14.314 0L2.3 12l3.714 3.714L21.743 0h-7.429z" fill="#02569B" />
          <path d="M14.314 12.571L8.6 18.286l3.714 3.714L21.743 12.571h-7.429z" fill="#0175C2" />
          <path d="M8.6 18.286l3.714-3.715 3.714 3.715-3.714 3.714L8.6 18.286z" fill="#29B6F6" />
        </svg>
      ),
    },
    {
      name: 'React Native',
      subtitle: 'Cross-Platform',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
        </svg>
      ),
    },
    {
      name: 'React.js',
      subtitle: 'Frontend Web',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: 'Kotlin',
      subtitle: 'Android Native',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M22 2H2v20h20L12 12l10-10z" fill="url(#kotlin-grad)" />
          <defs>
            <linearGradient id="kotlin-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7F52FF" />
              <stop offset="50%" stopColor="#C711E1" />
              <stop offset="100%" stopColor="#E4485D" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Jetpack Compose',
      subtitle: 'Modern Android',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" stroke="#4285F4" strokeWidth="1.5" fill="#4285F4" fillOpacity="0.1" />
          <path d="M12 6.5l5.5 3.2v6.4L12 19.3l-5.5-3.2V9.7L12 6.5z" fill="#3DDC84" />
          <circle cx="12" cy="13" r="2.5" fill="#073042" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      subtitle: 'Backend Server',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" stroke="#68A063" strokeWidth="1.5" fill="#339933" fillOpacity="0.2" />
          <path d="M12 6.5l5 3v6l-5 3-5-3v-6l5-3z" fill="#68A063" />
        </svg>
      ),
    },
    {
      name: 'Python',
      subtitle: 'Backend & AI',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M11.9 2c-4.3 0-4 1.8-4 1.8l.01 1.9h4.1v.6H5.4S2 5.9 2 10.2c0 4.3 3 4.2 3 4.2h1.8v-2.5s-.1-3 2.9-3h5s2.9-.1 2.9-2.9V4.9S18 2 11.9 2zm-2.2 1.3a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#387EB8" />
          <path d="M12.1 22c4.3 0 4-1.8 4-1.8l-.01-1.9H12v-.6h6.6s3.4.4 3.4-3.9c0-4.3-3-4.2-3-4.2h-1.8v2.5s.1 3-2.9 3h-5s-2.9.1-2.9 2.9v1.1s-.4 2.9 5.7 2.9zm2.2-1.3a.9.9 0 110-1.8.9.9 0 010-1.8z" fill="#FFE052" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      subtitle: 'Firestore & Auth',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M4.6 18.5L6.8 4.7l4.3 8.1L4.6 18.5z" fill="#FFA000" />
          <path d="M19.4 18.5L12 4.7l-4.5 8.5 11.9 5.3z" fill="#F57C00" />
          <path d="M12 21.3l7.4-4.2-2.8-13.6L12 21.3z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: 'SQLite',
      subtitle: 'Local Database',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-sky-400" fill="none">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#003B57" stroke="#00A8E8" strokeWidth="1.4" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#00A8E8" strokeWidth="1.4" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#00A8E8" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      name: 'Java',
      subtitle: 'OOP & DSA',
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M8.5 19.5c3.2.4 7-.3 8.3-1.6.4-.4.8-1.1.2-1.4-.6-.4-2.5-.2-3.8-.1-2.4.2-5.4.7-4.7 3.1z" fill="#EA2D2E" />
          <path d="M9 16c2.4.3 5.4-.2 6.5-1.2.4-.4.6-.9.2-1.1-.5-.3-2-.2-3-.1-1.9.2-4.3.5-3.7 2.4z" fill="#007396" />
          <path d="M12.5 10c.8 1.1-.3 2.1-.3 2.1s2.2-1.1 1.2-2.7c-1-1.5-1.8-2.3 2.5-4.4-4.5 1-4.2 3.9-3.4 5z" fill="#EA2D2E" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-24 border-t border-[#35D5FF]/10 relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4 text-left"
          >
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                SKILLS & TECHNOLOGIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              TOOLS OF MY TRADE.
            </h2>

            <p className="text-xs sm:text-sm text-[#A8B8D0] leading-relaxed font-normal">
              A diverse set of technologies that I work with across mobile engineering, backend cloud services, and local databases.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="inline-flex items-center gap-2 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-6 py-2.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60"
              >
                <span>{showAllSkills ? 'Hide Breakdown' : 'View All Skills'}</span>
                {showAllSkills ? (
                  <ChevronUp className="h-3.5 w-3.5 text-[#35D5FF]" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5 text-[#35D5FF]" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: 10 Squircles in Horizontal Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass-panel flex flex-col items-center justify-center rounded-2xl p-4 text-center cursor-default transition-all border border-[#35D5FF]/10 hover:border-[#00A8FF]/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-[#F4F8FF]">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-[#A8B8D0] font-mono mt-0.5">
                    {skill.subtitle}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expandable Detailed Breakdown strictly from CV */}
        <AnimatePresence>
          {showAllSkills && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 overflow-hidden pt-6 border-t border-[#35D5FF]/10"
            >
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#35D5FF] mb-6">
                Full Technical Breakdown from CV (7 Domains)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="glass-panel rounded-2xl p-5">
                    <h4 className="text-sm font-bold text-[#F4F8FF] mb-3 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] font-mono text-[#A8B8D0] bg-[#07152B] px-2 py-0.5 rounded-full border border-[#35D5FF]/15">
                        {cat.skills.length} skills
                      </span>
                    </h4>
                    <div className="space-y-2">
                      {cat.skills.map((s) => (
                        <div key={s.name} className="flex items-center justify-between text-xs py-1 border-b border-[#35D5FF]/5 last:border-none">
                          <span className="text-[#A8B8D0]">{s.name}</span>
                          <span className="text-[10px] text-[#35D5FF] font-mono">{s.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}