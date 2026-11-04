import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Smartphone, Layers, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';
import ProjectMockupVisual from './ProjectMockupVisual';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#030B1B]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#00A8FF]/20 bg-[#07152B] shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-[#F4F8FF]">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-[#00A8FF]/15 px-6 py-4 bg-[#030B1B]">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#35D5FF]">
                {project.badge}
              </span>
              <h2 id="modal-project-title" className="text-lg font-bold text-[#F4F8FF] sm:text-xl font-display">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#00A8FF]/20 text-[#A8B8D0] hover:text-[#FFFFFF] hover:border-[#35D5FF]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 text-left">
            {/* Left Column: Visual Mockup Sandbox */}
            <div className="lg:col-span-5">
              <div className="sticky top-0 space-y-4">
                <div className="overflow-hidden rounded-xl border border-[#00A8FF]/15 bg-[#030B1B] p-3 shadow-lg">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-[#A8B8D0]">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Smartphone className="h-3.5 w-3.5 text-[#00A8FF]" />
                      Interactive Device Simulation
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <ProjectMockupVisual visualType={project.visualType} />
                </div>
              </div>
            </div>

            {/* Right Column: Project Technical Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#35D5FF]">
                  Project Overview
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[#A8B8D0]">
                  {project.longDescription}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#F4F8FF]">
                  <Layers className="h-4 w-4 text-[#00A8FF]" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#35D5FF]">
                    Architectural Highlights
                  </h3>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A8B8D0]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A8FF] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#F4F8FF]">
                  <Terminal className="h-4 w-4 text-[#00A8FF]" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#35D5FF]">
                    Technologies Applied
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#00A8FF]/20 bg-[#0B1B32] px-3 py-1 font-mono text-xs text-[#35D5FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#00A8FF]/15">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-blue inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demoUrl && project.demoUrl.startsWith('http') && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-blue inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
