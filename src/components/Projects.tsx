import React from 'react';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  // Mapping the 6 exact cards matching the user's uploaded reference image & CV
  const projectCardData: Record<
    string,
    { image: string; title: string; subtitle: string; tech: string }
  > = {
    pilonmagic: {
      image: '/assets/theme/card_visual_pilonmagic.png',
      title: 'PilonMagic',
      subtitle: 'GPS & Asset Management',
      tech: 'Flutter • Dart',
    },
    'ai-assistant': {
      image: '/assets/theme/card_visual_ai.png',
      title: 'AI Personal Assistant',
      subtitle: 'Gemini Powered Chat',
      tech: 'Flutter • Gemini AI',
    },
    'weather-app': {
      image: '/assets/theme/card_visual_weather.png',
      title: 'Weather Application',
      subtitle: 'Real-time Weather',
      tech: 'Flutter • OpenWeather',
    },
    'mini-social': {
      image: '/assets/theme/card_visual_social.png',
      title: 'Mini Social Media',
      subtitle: 'Connect & Share',
      tech: 'Flutter • Firebase',
    },
    'expense-tracker': {
      image: '/assets/theme/card_visual_expense.png',
      title: 'Expense Tracker',
      subtitle: 'Manage Your Expenses',
      tech: 'Flutter • Dart',
    },
    'smart-attendance': {
      image: '/assets/theme/card_visual_attendance.png',
      title: 'Smart Attendance',
      subtitle: 'Track Attendance Easily',
      tech: 'Flutter • SQLite',
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-white/[0.06] relative overflow-hidden glow-seq-right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#FF7A1A]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF7A1A]">
                FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display">
              THINGS I&apos;VE BUILT.
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              A curated collection of mobile applications demonstrating Flutter architecture, Gemini AI, Firebase, and offline SQLite data layers.
            </p>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#FF7A1A]" />
              {PROJECTS.length} Shipped Projects
            </span>
          </div>
        </div>

        {/* 2 Rows x 3 Columns Grid of the 6 Landscape Cards matching the user's reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => {
            const cardInfo = projectCardData[project.id] || {
              image: '/assets/theme/card_visual_pilonmagic.png',
              title: project.title,
              subtitle: project.subtitle,
              tech: project.technologies.slice(0, 2).join(' • '),
            };

            const techParts = cardInfo.tech.split('•').map((t) => t.trim());

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectProject(project)}
                className="glass-panel group relative flex items-center overflow-hidden rounded-2xl cursor-pointer select-none border border-white/[0.08] hover:border-[#FF7A1A]/40 transition-all duration-300"
              >
                {/* Left side: Project Graphic Banner */}
                <div className="w-[145px] sm:w-[150px] h-[105px] shrink-0 overflow-hidden relative bg-[#070a12]">
                  <img
                    src={cardInfo.image}
                    alt={`${cardInfo.title} mockup`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle right gradient blend into the card body */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-transparent to-[#0c1018]/90" />
                </div>

                {/* Right side: Project Details & Arrow */}
                <div className="flex flex-1 flex-col justify-between py-3.5 pr-4 pl-3.5 h-[105px]">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white transition-colors group-hover:text-[#FF9030] leading-snug line-clamp-1">
                      {cardInfo.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400 line-clamp-1 font-normal">
                      {cardInfo.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-1">
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {techParts[0]}
                      {techParts[1] && (
                        <>
                          <span className="text-[#FF7A1A] mx-1.5 font-bold">•</span>
                          {techParts[1]}
                        </>
                      )}
                    </span>

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-[#FF7A1A] group-hover:text-black shrink-0">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}