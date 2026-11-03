import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Check, Smartphone } from 'lucide-react';
import { Project } from '../types/portfolio';
import ProjectMockupVisual from './ProjectMockupVisual';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1018] shadow-2xl text-slate-100">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-[#090d14]">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 rounded-full bg-[#FF8C38] shadow-sm shadow-[#FF8C38]" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFA048]">
                {project.badge}
              </span>
              <h2 id="modal-project-title" className="text-lg font-bold text-white sm:text-xl">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Visual Mockup Sandbox */}
            <div className="lg:col-span-5">
              <div className="sticky top-0 space-y-4">
                <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#08090D] p-3 shadow-lg">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Smartphone className="h-3.5 w-3.5 text-[#FF8C38]" />
                      Interactive Sandbox
                    </span>
                    <span className="text-[10px] text-emerald-400">Live Preview</span>
                  </div>
                  <ProjectMockupVisual type={project.visualType} />
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 py-2.5 px-4 text-xs font-semibold text-white transition-colors hover:border-[#FF8C38] hover:text-[#FFA048]"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Deep Architectural Breakdown */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#FF8C38]">
                  Project Overview
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies & Architecture
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-[#121824] px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features & Engineering Highlights */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Features & Implementation
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF8C38]/15 text-[#FF8C38]">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#090d14] px-6 py-4">
          <span className="text-xs text-slate-400 font-mono">
            Category: {project.category.toUpperCase()}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-700 px-5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-800"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
