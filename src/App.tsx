import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import ResumeModal from './components/ResumeModal';
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
    <div className="min-h-screen ambient-glow-page text-slate-100 selection:bg-[#FF7A1A] selection:text-white transition-colors duration-200 overflow-x-hidden w-full max-w-[100vw]">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Flow with Alternating Glow Sequence */}
      <main className="overflow-x-hidden w-full max-w-[100vw]">
        {/* 1. Hero Section (Glow Right) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Section (Glow Left) */}
        <About />

        {/* 3. Experience & Education Section (Glow Right) */}
        <ExperienceEducation />

        {/* 4. Skills Section (Glow Left) */}
        <Skills />

        {/* 5. Featured Projects Section (Glow Right) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Contact Section (Glow Left) */}
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