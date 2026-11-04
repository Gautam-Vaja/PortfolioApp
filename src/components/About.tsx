import React from 'react';
import {
  Smartphone,
  Globe,
  Cpu,
  Layers,
  ArrowRight,
  FolderKanban,
  Apple,
  Database,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const interests = [
    { label: 'Mobile Apps (Flutter)', icon: Smartphone },
    { label: 'iOS & Simulator (Swift)', icon: Apple },
    { label: 'REST APIs & Dio', icon: Globe },
    { label: 'SQLite & Firebase', icon: Database },
    { label: 'Clean OOP & GetX', icon: Layers },
    { label: 'Gemini AI Integration', icon: Cpu },
  ];

  const highlights = [
    { label: 'Internship', value: 'Derived Web Tech' },
    { label: 'BCA Grade', value: '8.33 CGPA' },
    { label: 'Education', value: 'MCA (GTU)' },
    { label: 'Projects', value: '6+ Mobile Apps' },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Column 1: Narrative & Highlights (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              BEYOND THE CODE.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal max-w-2xl">
              I&apos;m Gautam Vaja, a Flutter Developer and BCA graduate (8.33 CGPA) currently pursuing MCA at Gujarat Technological University (GTU). With hands-on internship experience at Derived Web Technologies Pvt. Ltd., I engineer responsive, cross-platform mobile applications from concept to deployment.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal max-w-2xl">
              I specialize in Flutter, Dart, RESTful APIs, SQLite offline persistence, and Firebase backend services. I also have foundational knowledge of iOS development using Xcode, Simulator, and Cupertino widgets, backed by strong OOP and data structures fundamentals.
            </p>

            {/* Quick Metrics from CV */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.08] bg-[#0c101a] p-3 text-left"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF9030] block">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#education"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF7A1A]/40"
              >
                <span>View Academic Journey</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#FF9030]" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: MY INTERESTS Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-5 text-[#FF7A1A]">
                <FolderKanban className="h-4 w-4" />
                <h3 className="text-xs font-bold tracking-wider uppercase text-white font-mono">
                  MY INTERESTS & FOCUS
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {interests.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.04 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="flex flex-col items-start rounded-xl border border-white/[0.06] bg-[#0d121c]/90 p-3.5 text-left transition-colors hover:border-[#FF7A1A]/40 hover:bg-[#121927]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[#FF7A1A] mb-2.5 bg-[#FF7A1A]/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-200 leading-tight">
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