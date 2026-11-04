import React from 'react';
import { ExternalLink, Github, ArrowRight, FolderKanban, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../types/portfolio';
import TiltCard from './ui/TiltCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  // Visual asset mapping for the 6 projects
  const projectVisuals: Record<string, { image: string; tag: string }> = {
    pilonmagic: {
      image: '/assets/theme/card_visual_pilonmagic.png',
      tag: 'Flutter • Dart • GetX',
    },
    'ai-assistant': {
      image: '/assets/theme/card_visual_ai.png',
      tag: 'Flutter • Gemini API • SQLite',
    },
    'weather-app': {
      image: '/assets/theme/card_visual_weather.png',
      tag: 'Flutter • OpenWeather • REST API',
    },
    'mini-social': {
      image: '/assets/theme/card_visual_social.png',
      tag: 'React Native • Firebase • Cloud Storage',
    },
    'expense-tracker': {
      image: '/assets/theme/card_visual_expense.png',
      tag: 'Flutter • Dart • Analytics',
    },
    'smart-attendance': {
      image: '/assets/theme/card_visual_attendance.png',
      tag: 'React Native • SQLite • Offline-First',
    },
  };

  return (
    <section id="projects" className="py-24 border-t border-[#00A8FF]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              THINGS I&apos;VE BUILT.
            </h2>

            <p className="text-sm sm:text-base text-[#A8B8D0] leading-relaxed font-normal">
              A curated collection of mobile applications and intelligent software solutions demonstrating real-world architecture, cloud integrations, and offline persistence.
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/30 bg-[#07152B]/80 px-4 py-1.5 text-xs font-mono text-[#35D5FF] shadow-[0_0_12px_rgba(0,168,255,0.15)]">
              <Sparkles className="h-3.5 w-3.5 text-[#00A8FF]" />
              {PROJECTS.length} Production Ready Builds
            </span>
          </div>
        </div>

        {/* 6 Projects in a 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => {
            const visual = projectVisuals[project.id] || {
              image: '/assets/theme/card_visual_pilonmagic.png',
              tag: project.technologies.slice(0, 2).join(' • '),
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
                  maxTilt={12}
                  className="glass-panel h-full rounded-2xl flex flex-col justify-between overflow-hidden group border border-[#00A8FF]/15 hover:border-[#00A8FF]/50"
                  onClick={() => onSelectProject(project)}
                >
                  {/* Thumbnail Banner with subtle zoom & blue overlay */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#07152B]">
                    <img
                      src={visual.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1B32] via-transparent to-transparent opacity-90" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full border border-[#00A8FF]/30 bg-[#07152B]/85 px-3 py-1 text-[10px] font-mono font-semibold text-[#35D5FF] backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-mono text-[#00A8FF] font-medium tracking-wide">
                        {visual.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-1 flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[#F4F8FF] group-hover:text-[#35D5FF] transition-colors font-display">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#A8B8D0] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#00A8FF]/15 bg-[#07152B]/80 px-2 py-0.5 text-[10px] font-medium text-[#A8B8D0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions Row */}
                    <div className="pt-4 border-t border-[#00A8FF]/10 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8FF] group-hover:text-[#35D5FF] transition-colors"
                      >
                        <span>Project Overview</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`GitHub source for ${project.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00A8FF]/20 bg-[#07152B] text-[#A8B8D0] hover:text-[#FFFFFF] hover:border-[#35D5FF] transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
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
