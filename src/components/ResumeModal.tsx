import React, { useEffect, useState } from 'react';
import { X, Printer, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted && !isOpen) return null;

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
        className={`fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal Dialog */}
      <div
        className={`relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#35D5FF]/20 bg-[#0B1B32] text-[#F4F8FF] shadow-2xl transition-all duration-200 transform ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-[#35D5FF]/10 bg-[#07152B] px-6 py-3.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A8B8D0]">
              Curriculum Vitae
            </span>
            <span className="text-xs text-slate-500">·</span>
            <span className="text-xs font-mono text-[#35D5FF]">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#35D5FF]/30 bg-[#07152B] px-3.5 py-1.5 text-xs font-medium text-[#F4F8FF] transition-colors hover:border-[#00A8FF] hover:text-[#35D5FF] cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#35D5FF]/20 text-[#A8B8D0] hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans print:p-0">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="border-b border-[#35D5FF]/15 pb-5">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-[#35D5FF]">
                {PERSONAL_INFO.titles.join(' | ')}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#A8B8D0]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#00A8FF]" />
                  {PERSONAL_INFO.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-[#00A8FF]" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>·</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1 hover:underline text-[#F4F8FF]"
                >
                  <Mail className="h-3 w-3 text-[#00A8FF]" />
                  {PERSONAL_INFO.email}
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#35D5FF]"
                >
                  github.com/{PERSONAL_INFO.githubUser}
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                Summary
              </h2>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#A8B8D0]">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF] mb-3">
                Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-[#00A8FF]/30 pl-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <span className="text-xs font-mono text-[#A8B8D0]">{exp.duration}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#35D5FF]">
                      {exp.company} {exp.location ? `· ${exp.location}` : ''}
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-[#A8B8D0]">
                      {exp.achievements.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="text-[#35D5FF] mt-1 shrink-0">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF] mb-3">
                Selected Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="rounded-xl border border-[#35D5FF]/10 bg-[#07152B]/60 p-3">
                    <h3 className="text-xs font-bold text-white">{proj.title}</h3>
                    <p className="mt-1 text-[11px] text-[#A8B8D0] line-clamp-2">
                      {proj.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="rounded bg-black/40 px-1.5 py-0.5 text-[9px] font-mono text-[#35D5FF]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF] mb-3">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="rounded-xl border border-[#35D5FF]/10 bg-[#07152B]/40 p-3">
                    <div className="text-xs font-bold text-white">{cat.title}</div>
                    <div className="mt-1 text-[11px] text-[#A8B8D0]">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF] mb-3">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{edu.degree}</div>
                      <div className="text-[11px] text-[#A8B8D0]">
                        {edu.institution} {edu.grade ? `(${edu.grade})` : ''}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-[#35D5FF] mt-0.5 sm:mt-0">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
