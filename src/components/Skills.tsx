import React from 'react';
import {
  Smartphone,
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  FolderKanban,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import TiltCard from './ui/TiltCard';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      accent: '#00A8FF',
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
      accent: '#087BFF',
      skills: ['Node.js', 'Python', 'Firebase', 'REST APIs', 'Cloud Functions'],
      desc: 'High-throughput client APIs, microservices, cloud functions, and authentication workflows.',
    },
    {
      title: 'Database & Persistence',
      icon: Database,
      accent: '#35D5FF',
      skills: ['SQLite', 'sqflite', 'Firebase Firestore', 'MySQL', 'Local Caching'],
      desc: 'Offline-first persistence, real-time sync, schema normalization, and query optimization.',
    },
    {
      title: 'Programming Languages',
      icon: Code,
      accent: '#00A8FF',
      skills: ['Dart', 'Java', 'Python', 'JavaScript', 'C / C++'],
      desc: 'Strong foundation in OOP paradigms, Data Structures, Algorithms, and clean code principles.',
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      accent: '#087BFF',
      skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Postman'],
      desc: 'Feature branching, CI/CD pipelines, DevTools profiling, emulator testing, and API verification.',
    },
  ];

  return (
    <section id="skills" className="py-24 border-t border-[#00A8FF]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                SKILLS & TECHNOLOGIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              TOOLS OF MY TRADE.
            </h2>

            <p className="text-sm sm:text-base text-[#A8B8D0] leading-relaxed font-normal">
              A curated technology stack focused on high-performance mobile engineering, modern frontends, and robust backend architectures.
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/30 bg-[#07152B]/80 px-4 py-1.5 text-xs font-mono text-[#35D5FF] shadow-[0_0_12px_rgba(0,168,255,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-[#00A8FF]" />
              Interactive 3D Tilt Cards
            </span>
          </div>
        </div>

        {/* 6 Category Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <TiltCard
                  maxTilt={14}
                  className="glass-panel h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left group border border-[#00A8FF]/15 hover:border-[#00A8FF]/50"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07152B] border border-[#00A8FF]/30 text-[#00A8FF] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,168,255,0.4)] transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#35D5FF] bg-[#00A8FF]/10 border border-[#00A8FF]/20 px-2.5 py-0.5 rounded-full">
                        {cat.skills.length} Technologies
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F4F8FF] group-hover:text-[#35D5FF] transition-colors font-display">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#A8B8D0] leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pt-5 border-t border-[#00A8FF]/10 mt-5 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#00A8FF]/20 bg-[#07152B]/90 px-2.5 py-1 text-[11px] font-medium text-[#F4F8FF] transition-colors group-hover:border-[#00A8FF]/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
