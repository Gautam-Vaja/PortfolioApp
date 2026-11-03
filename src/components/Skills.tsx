import React, { useState } from 'react';
import { ArrowRight, FolderKanban, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolio-data';

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  // 10 Featured Primary Skills strictly from Gautam Vaja's CV
  const featuredSkills = [
    {
      name: 'Flutter',
      subtitle: 'Mobile UI & Apps',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M14.314 0L2.3 12l3.714 3.714L21.743 0h-7.429z" fill="#02569B" />
          <path d="M14.314 12.571L8.6 18.286l3.714 3.714L21.743 12.571h-7.429z" fill="#0175C2" />
          <path d="M8.6 18.286l3.714-3.715 3.714 3.715-3.714 3.714L8.6 18.286z" fill="#29B6F6" />
        </svg>
      ),
    },
    {
      name: 'Dart',
      subtitle: 'Core Language',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M4.1 3.5L13.2 2l7.3 7.3-6.6 6.6L4.1 3.5z" fill="#0175C2" />
          <path d="M13.9 15.9l6.6-6.6L12 21.8l-7.9-2.5 9.8-3.4z" fill="#02569B" />
          <path d="M4.1 3.5l9.8 12.4-9.8 3.4V3.5z" fill="#29B6F6" />
        </svg>
      ),
    },
    {
      name: 'Swift & iOS',
      subtitle: 'Apple Ecosystem',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path
            d="M20.5 13.5c-.2-.4-.8-.9-1.5-.7-.7.2-2.3 1.1-3.7.6-1.5-.5-2.8-2.2-2.8-2.2s2.6-1.7 3.5-3.4c.9-1.7.5-3.2.5-3.2s-2.1 1.7-4 2.8c-1.9 1.1-4.2 1.4-4.2 1.4s.8-1.5 1.5-2.5c.7-1 .8-2 .8-2s-1.8 1-3.3 2.5c-1.5 1.5-2.4 3.3-2.4 3.3s-.4-.3-1-.6c-.6-.3-1.4-.4-1.4-.4s.8 1.4 1.8 2.5c1 1.1 2.3 1.9 2.3 1.9s-1.5.3-2.8.2c-1.3-.1-2.4-.6-2.4-.6s.6 1.4 1.8 2.4c1.2 1 2.9 1.5 2.9 1.5s-1.8 1.5-3.7 2c-1.9.5-3.8.3-3.8.3s3.5 2.5 7.9 2.5c4.4 0 7.8-1.8 10-3.9 2.2-2.1 3.2-4.5 3.2-4.5s-.8.6-1.8.8z"
            fill="#F05138"
          />
        </svg>
      ),
    },
    {
      name: 'Xcode',
      subtitle: 'Simulator & Build',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#007ACC" strokeWidth="1.5" fill="#002D5A" opacity="0.3" />
          <path d="M7 16l4-4 6 6-4 1-6-3z" fill="#007ACC" />
          <path d="M15 7l2 2-6 6-2-2 6-6z" fill="#29B6F6" />
          <circle cx="16" cy="8" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'REST APIs & Dio',
      subtitle: 'Networking & HTTP',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#FF7A1A]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" stroke="#FF7A1A" opacity="0.4" />
          <path d="M3.6 9h16.8M3.6 15h16.8" stroke="#FF7A1A" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke="#FF9030" />
        </svg>
      ),
    },
    {
      name: 'GetX',
      subtitle: 'State Management',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#7C3AED" opacity="0.25" stroke="#A78BFA" strokeWidth="1.5" />
          <path d="M8 8l4 4-4 4M13 16h4" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      subtitle: 'Firestore & Auth',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M4.6 18.5L6.8 4.7l4.3 8.1L4.6 18.5z" fill="#FFA000" />
          <path d="M19.4 18.5L12 4.7l-4.5 8.5 11.9 5.3z" fill="#F57C00" />
          <path d="M12 21.3l7.4-4.2-2.8-13.6L12 21.3z" fill="#FFCA28" />
        </svg>
      ),
    },
    {
      name: 'SQLite (sqflite)',
      subtitle: 'Offline Persistence',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-sky-400" fill="none">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#003B57" stroke="#00A8E8" strokeWidth="1.2" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#00A8E8" strokeWidth="1.2" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="#00A8E8" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      name: 'Java',
      subtitle: 'OOP & DSA',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M8.5 19.5c3.2.4 7-.3 8.3-1.6.4-.4.8-1.1.2-1.4-.6-.4-2.5-.2-3.8-.1-2.4.2-5.4.7-4.7 3.1z" fill="#EA2D2E" />
          <path d="M9 16c2.4.3 5.4-.2 6.5-1.2.4-.4.6-.9.2-1.1-.5-.3-2-.2-3-.1-1.9.2-4.3.5-3.7 2.4z" fill="#007396" />
          <path d="M12.5 10c.8 1.1-.3 2.1-.3 2.1s2.2-1.1 1.2-2.7c-1-1.5-1.8-2.3 2.5-4.4-4.5 1-4.2 3.9-3.4 5z" fill="#EA2D2E" />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      subtitle: 'GitLab & Versioning',
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#F05032" strokeWidth="1.5">
          <circle cx="6" cy="6" r="2.5" fill="#F05032" />
          <circle cx="6" cy="18" r="2.5" fill="#F05032" />
          <circle cx="18" cy="9" r="2.5" fill="#F05032" />
          <path d="M6 8.5v7M8 7l7.5 1.5M6 18c4 0 7-3 7-7" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Heading & Info matching mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                SKILLS & TECHNOLOGIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              TOOLS OF MY TRADE.
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              A curated technology stack focused on high-performance mobile application engineering, native iOS toolchains, and clean architectures.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF7A1A]/40"
              >
                <span>{showAllSkills ? 'Hide Breakdown' : 'View All 7 Categories'}</span>
                {showAllSkills ? (
                  <ChevronUp className="h-3.5 w-3.5 text-[#FF9030]" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5 text-[#FF9030]" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: 10 Squircles in Horizontal Grid matching mockup */}
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
                  className="glass-panel flex flex-col items-center justify-center rounded-2xl p-4 text-center cursor-default transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold text-white">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">
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
              className="mt-12 overflow-hidden pt-6 border-t border-white/[0.08]"
            >
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#FF7A1A] mb-6">
                Full Technical Breakdown from CV (7 Domains)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="glass-panel rounded-2xl p-5">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">
                        {cat.skills.length} skills
                      </span>
                    </h4>
                    <div className="space-y-2">
                      {cat.skills.map((s) => (
                        <div key={s.name} className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04] last:border-none">
                          <span className="text-slate-200">{s.name}</span>
                          <span className="text-[10px] text-[#FF9030] font-mono">{s.level}</span>
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