import React from 'react';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../types/portfolio';
import TiltCard from './ui/TiltCard';
import { AnimatedLetters } from './ui/AnimatedText';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const projectCardData: Record<
    string,
    { image: string; title: string; subtitle: string; tech: string }
  > = {
    pilonmagic: {
      image: '/assets/theme/project_pilonmagic.png',
      title: 'PilonMagic',
      subtitle: 'GPS & Asset Management',
      tech: 'Flutter • Dart',
    },
    'ai-assistant': {
      image: '/assets/theme/project_ai_assistant.png',
      title: 'AI Personal Assistant',
      subtitle: 'Gemini Powered Chat',
      tech: 'Flutter • Dart',
    },
    'weather-app': {
      image: '/assets/theme/project_weather.png',
      title: 'Weather Application',
      subtitle: 'Real-time Weather',
      tech: 'Flutter • Dart',
    },
    'mini-social': {
      image: '/assets/theme/project_mini_social.png',
      title: 'Mini Social Media',
      subtitle: 'Connect & Share',
      tech: 'React Native • Firebase',
    },
    'expense-tracker': {
      image: '/assets/theme/project_expense.png',
      title: 'Expense Tracker',
      subtitle: 'Manage Your Expenses',
      tech: 'Flutter • Dart',
    },
    'smart-attendance': {
      image: '/assets/theme/project_attendance.png',
      title: 'Smart Attendance',
      subtitle: 'Track Attendance Easily',
      tech: 'React Native • SQLite',
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-24 border-t border-[#35D5FF]/10 relative overflow-hidden glow-seq-right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-2">
              <FolderKanban className="h-4 w-4 text-[#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              <AnimatedLetters text="THINGS I'VE BUILT." stagger={0.03} />
            </h2>

            <p className="text-xs sm:text-sm text-[#A8B8D0] leading-relaxed font-normal">
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>

          <div>
            <a
              href="https://github.com/Gautam-Vaja/PortfolioApp"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-5 py-2 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#35D5FF]" />
            </a>
          </div>
        </div>

        {/* 2 Rows x 3 Columns Grid of the 6 Landscape Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, index) => {
            const cardInfo = projectCardData[project.id] || {
              image: '/assets/theme/project_pilonmagic.png',
              title: project.title,
              subtitle: project.subtitle,
              tech: project.technologies.slice(0, 2).join(' • '),
            };

            const techParts = cardInfo.tech.split('•').map((t) => t.trim());

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  onClick={() => onSelectProject(project)}
                  tiltMaxAngle={9}
                  scale={1.025}
                  className="glass-panel group relative flex items-center overflow-hidden rounded-2xl border border-[#35D5FF]/12 hover:border-[#00A8FF]/60 transition-colors duration-300 shadow-xl"
                >
                  {/* Left side: Project Graphic Banner */}
                  <div className="w-[145px] sm:w-[150px] h-[105px] shrink-0 overflow-hidden relative bg-[#07152B]">
                    <img
                      src={cardInfo.image}
                      alt={`${cardInfo.title} preview`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    {/* Subtle right gradient blend into the card body */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-transparent to-[#0B1B32]/90" />
                  </div>

                  {/* Right side: Project Details & Arrow */}
                  <div className="flex flex-1 flex-col justify-between py-3.5 pr-4 pl-3.5 h-[105px]">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#F4F8FF] transition-colors group-hover:text-[#35D5FF] leading-snug line-clamp-1">
                        {cardInfo.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#A8B8D0] line-clamp-1 font-normal">
                        {cardInfo.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-1">
                      <span className="text-[11px] sm:text-xs text-[#A8B8D0] font-medium">
                        {techParts[0]}
                        {techParts[1] && (
                          <>
                            <span className="text-[#00A8FF] mx-1.5 font-bold">•</span>
                            {techParts[1]}
                          </>
                        )}
                      </span>

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-all group-hover:bg-[#00A8FF] group-hover:text-black shrink-0 shadow-sm">
                        <ArrowRight className="h-3 w-3" />
                      </div>
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