import React, { useState } from 'react';
import ThreeCanvasOverlay from './components/3d/ThreeCanvasOverlay';
import RefNavbar from './components/RefNavbar';
import RefHero from './components/RefHero';
import TechMarquee from './components/TechMarquee';
import AboutPinned from './components/AboutPinned';
import SkillsSheet from './components/SkillsSheet';
import ProjectsStacked from './components/ProjectsStacked';
import ExperienceSheet from './components/ExperienceSheet';
import ContactSheet from './components/ContactSheet';
import FooterSheet from './components/FooterSheet';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/ui/CustomCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Initialize Lenis 60fps smooth momentum scroll
  useSmoothScroll();

  return (
    <div className="relative min-h-screen text-[#f5f6fa] selection:bg-[#ff3d9a] selection:text-white w-full max-w-[100vw]">
      {/* 1. Fullscreen Fixed WebGL 3D Canvas Overlay (Three.js Screen Space) */}
      <ThreeCanvasOverlay />

      {/* 2. Interactive Custom Ring Cursor */}
      <CustomCursor />

      {/* 3. Top Navigation & Floating Contact Pill */}
      <RefNavbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 4. Hero Section with Colossal Staggered Typography & 3D Phone Anchor */}
      <RefHero />

      {/* 5. Dual-Row Tech Conveyor Gallery (14 Technologies) */}
      <TechMarquee />

      {/* 6. Sheet 1: Pinned 280vh About Me with Reading Progress & Parallax 3D */}
      <AboutPinned />

      {/* 7. Sheet 2: Skills Light Sheet with 7 Numbered Editorial Rows */}
      <SkillsSheet />

      {/* 8. Sheet 3: Projects Stacking Deck with 3 Simulated Mobile Screens per App */}
      <ProjectsStacked onSelectProject={(project) => setSelectedProject(project)} />

      {/* 9. Sheet 4: Experience & Education with Scroll-Drifting Horizontal Cards */}
      <ExperienceSheet />

      {/* 10. Sheet 5: Contact Light Sheet with Underline Form & 3D Anchors */}
      <ContactSheet />

      {/* 11. Sheet 6: Colossal Footer with Bauhaus SVG Iconography */}
      <FooterSheet />

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
