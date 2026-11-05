import React, { useEffect, useState } from 'react';
import { X, Github, Smartphone, Check } from 'lucide-react';
import { Project } from '../types/portfolio';
import ProjectMockupVisual from './ProjectMockupVisual';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (project) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(timer);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!mounted && !project) return null;

  const currentProject = project;

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
        className={`fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-200 ${
          project ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal Dialog */}
      <div
        className={`relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#35D5FF]/20 bg-[#0B1B32] shadow-2xl text-[#F4F8FF] transition-all duration-200 transform ${
          project ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-[#35D5FF]/10 px-6 py-4 bg-[#07152B]">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 rounded-full bg-[#00A8FF] shadow-sm shadow-[#00A8FF]" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#35D5FF]">
                {currentProject?.badge}
              </span>
              <h2 id="modal-project-title" className="text-lg font-bold text-white sm:text-xl">
                {currentProject?.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#35D5FF]/20 text-[#A8B8D0] hover:text-white hover:border-[#35D5FF] cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Mockup Preview Graphic */}
          <div className="relative overflow-hidden rounded-2xl border border-[#35D5FF]/20 bg-[#07152B] p-6 flex items-center justify-center min-h-[220px]">
            <div className="w-full max-w-lg">
              <ProjectMockupVisual
                type={currentProject?.visualType || 'pilonmagic'}
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-left">
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                  Project Overview
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A8B8D0]">
                  {currentProject?.longDescription || currentProject?.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#35D5FF]">
                  Key Features & Highlights
                </h3>
                <ul className="mt-2 space-y-2">
                  {currentProject?.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A8B8D0]">
                      <Check className="h-4 w-4 text-[#35D5FF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="space-y-5 rounded-xl border border-[#35D5FF]/10 bg-[#07152B]/60 p-5 text-left h-fit">
              <div>
                <div className="text-xs font-mono text-[#A8B8D0] uppercase">Category</div>
                <div className="mt-1 text-sm font-semibold capitalize text-white">
                  {currentProject?.category.replace('-', ' ')}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-[#A8B8D0] uppercase">Technologies Used</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {currentProject?.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#35D5FF]/20 bg-[#0B1B32] px-2 py-1 text-xs font-mono text-[#35D5FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={currentProject?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A8FF] px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#00A8FF]/20 hover:bg-[#35D5FF] transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>View Source on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
