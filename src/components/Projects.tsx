import React from 'react';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../types/portfolio';
import TiltCard from './ui/TiltCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  // Visual asset mapping for the 6 projects matching Image 4
  const projectDetails: Record<
    string,
    { title: string; subtitle: string; tags: string; image: string }
  > = {
    pilonmagic: {
      title: 'PilonMagic',
      subtitle: 'GPS & Asset Management',
      tags: 'Flutter • Dart',
      image: '/assets/theme/card_visual_pilonmagic.png',
    },
    'ai-assistant': {
      title: 'AI Personal Assistant',
      subtitle: 'Gemini Powered Chat',
      tags: 'Flutter • Dart',
      image: '/assets/theme/card_visual_ai.png',
    },
    'weather-app': {
      title: 'Weather Application',
      subtitle: 'Real-time Weather',
      tags: 'Flutter • Dart',
      image: '/assets/theme/card_visual_weather.png',
    },
    'mini-social': {
      title: 'Mini Social Media',
      subtitle: 'Connect & Share',
      tags: 'React Native • Firebase',
      image: '/assets/theme/card_visual_social.png',
    },
    'expense-tracker': {
      title: 'Expense Tracker',
      subtitle: 'Manage Your Expenses',
      tags: 'Flutter • Dart',
      image: '/assets/theme/card_visual_expense.png',
    },
    'smart-attendance': {
      title: 'Smart Attendance',
      subtitle: 'Track Attendance Easily',
      tags: 'React Native • SQLite',
      image: '/assets/theme/card_visual_attendance.png',
    },
  };

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Warm Orange Horizon Beam */}
      <div className="horizon-beam top-[40%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Left Column Heading, Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#FF6B00]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF9A45]">
                FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              THINGS I&apos;VE BUILT.
            </h2>

            <p className="text-sm sm:text-base text-[#A8B8D0] leading-relaxed font-normal">
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <a
              href="#contact"
              className="btn-outline-dark inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#FF9A45]" />
            </a>
          </div>
        </div>

        {/* 6 Projects in a 2x3 Grid Matching Reference Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => {
            const info = projectDetails[project.id] || {
              title: project.title,
              subtitle: project.summary,
              tags: project.technologies.slice(0, 2).join(' • '),
              image: '/assets/theme/card_visual_pilonmagic.png',
            };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <TiltCard
                  maxTilt={10}
                  className="glass-panel h-full rounded-2xl flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-[#FF6B00]/50 transition-all cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  {/* Thumbnail Banner */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#07152B]">
                    <img
                      src={info.image}
                      alt={info.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1B32] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Card Content Footer matching Image 4 */}
                  <div className="p-5 flex items-center justify-between gap-4 text-left">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F4F8FF] group-hover:text-[#FF9A45] transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-xs text-[#A8B8D0] mt-0.5 font-normal">
                        {info.subtitle}
                      </p>
                      <div className="mt-2">
                        <span className="text-[11px] font-mono text-[#35D5FF] tracking-wide">
                          {info.tags}
                        </span>
                      </div>
                    </div>

                    {/* Circular Action Arrow Button */}
                    <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#07152B] border border-white/15 text-[#F4F8FF] group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all shadow-[0_0_12px_rgba(0,0,0,0.4)]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
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
