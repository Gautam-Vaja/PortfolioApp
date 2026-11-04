import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/ui/CustomCursor';
import { Project } from './types/portfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen ambient-glow-page text-[#F4F8FF] selection:bg-[#00A8FF] selection:text-[#030B1B] transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw]">
      {/* Desktop Ambient Glow Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Content Flow */}
      <main className="overflow-x-hidden w-full max-w-[100vw]">
        {/* 1. Full-Screen Cinematic 3D Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Section with 3D Geometric Scene */}
        <About />

        {/* 3. Skills Section with 3D Tilt Cards */}
        <Skills />

        {/* 4. Featured Projects Gallery */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Experience & Education Timeline */}
        <ExperienceEducation />

        {/* 6. Contact Section with 3D Torus Scene & Functional Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

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
