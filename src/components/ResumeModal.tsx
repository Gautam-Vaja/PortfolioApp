import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1018] text-slate-100 shadow-2xl">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#090d14] px-6 py-3.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500">·</span>
            <span className="text-xs font-mono text-[#FF9030]">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-[#FF7A1A] hover:text-[#FF9030]"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans print:p-0">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="border-b border-white/[0.08] pb-5">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-[#FF9030]">
                {PERSONAL_INFO.titles.join(' | ')}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#FF7A1A]" />
                  {PERSONAL_INFO.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-[#FF7A1A]" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>·</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1 hover:underline text-slate-200"
                >
                  <Mail className="h-3 w-3 text-[#FF7A1A]" />
                  {PERSONAL_INFO.email}
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-slate-200"
                >
                  <Linkedin className="h-3 w-3 text-[#FF7A1A]" />
                  linkedin.com/in/{PERSONAL_INFO.linkedinUser}
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-slate-200"
                >
                  <Github className="h-3 w-3 text-[#FF7A1A]" />
                  github.com/{PERSONAL_INFO.githubUser}
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] font-mono">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                {PERSONAL_INFO.summary}
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] font-mono">
                WORK EXPERIENCE
              </h2>
              <div className="mt-3 space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.company} className="rounded-xl border border-white/[0.08] bg-[#111622] p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {exp.company}
                        </h3>
                        <p className="text-xs font-medium text-[#FF9030]">
                          {exp.role}
                        </p>
                      </div>
                      <span className="mt-1 sm:mt-0 text-[11px] font-mono text-slate-400">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {exp.projectTitle && (
                      <div className="pt-2 border-t border-white/[0.06] space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-white">
                          <span>{exp.projectTitle}</span>
                          <span className="text-[11px] font-mono text-slate-400">{exp.projectPeriod}</span>
                        </div>
                        <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside pl-1">
                          {exp.projectAchievements?.map((ach, j) => (
                            <li key={j} className="leading-relaxed">{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] font-mono">
                TECHNICAL SKILLS
              </h2>
              <div className="mt-3 space-y-2 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-semibold text-slate-300 min-w-[190px]">
                      {cat.title}:
                    </span>
                    <span className="text-slate-400">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] font-mono">
                KEY PROJECTS
              </h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-xl border border-white/[0.08] bg-[#111622] p-3.5 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-[10px] text-[#FF9030]">{project.badge}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono text-slate-500 truncate mr-2">
                        {project.technologies.slice(0, 3).join(', ')}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF9030] hover:underline shrink-0"
                      >
                        GitHub Repo →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF7A1A] font-mono">
                EDUCATION
              </h2>
              <div className="mt-3 space-y-2.5">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl border border-white/[0.08] bg-[#111622] p-3 text-xs"
                  >
                    <div>
                      <h3 className="font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-400">
                        {edu.institution} {edu.grade ? `(${edu.grade})` : ''}
                      </p>
                    </div>
                    <span className="mt-1 sm:mt-0 font-mono text-[#FF9030]">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
