import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';
import { scrollToTarget } from '../hooks/useSmoothScroll';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export default function Navbar({ darkMode, onToggleTheme, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToTarget(`#${id}`);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030B1B]/90 backdrop-blur-md border-b border-[#35D5FF]/10 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand wordmark matching mockup: GAUTAM. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          data-cursor="pointer"
          className="group flex items-center text-lg sm:text-xl font-black tracking-widest text-[#F4F8FF] transition-opacity hover:opacity-90 cursor-pointer"
        >
          <span className="font-display">GAUTAM</span>
          <span className="text-[#FF9A45] text-xl font-black">.</span>
        </a>

        {/* Center Nav Links matching mockup */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#A8B8D0]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                data-cursor="pointer"
                className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-[#F4F8FF] font-semibold' : 'text-[#A8B8D0] hover:text-[#35D5FF]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#00A8FF] shadow-[0_0_10px_#35D5FF]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side: GitHub, Resume button & Theme toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={PERSONAL_INFO.portfolioRepo || PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository: Gautam-Vaja/PortfolioApp"
            title="GitHub: Gautam-Vaja/PortfolioApp"
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-3 py-1.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60 hover:text-[#35D5FF]"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              data-cursor="pointer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#35D5FF]/20 bg-[#0B1B32]/70 px-3.5 py-1.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:bg-[#00A8FF]/15 hover:border-[#35D5FF]/60 cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5 text-[#35D5FF]" />
              <span>Resume</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-[#A8B8D0] hidden sm:block" />
            <button
              type="button"
              onClick={onToggleTheme}
              data-cursor="pointer"
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="relative flex h-6 w-12 items-center rounded-full bg-[#07152B] p-0.5 border border-[#35D5FF]/20 shadow-inner transition-colors hover:border-[#00A8FF]/50 cursor-pointer"
            >
              <div
                className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-gradient-to-r from-[#00A8FF] to-[#087BFF] shadow-md transition-transform duration-200 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {darkMode ? (
                  <Moon className="h-2.5 w-2.5 text-white" />
                ) : (
                  <Sun className="h-2.5 w-2.5 text-black" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#35D5FF]/20 text-[#A8B8D0] md:hidden hover:text-[#F4F8FF] hover:border-[#35D5FF]/60"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#35D5FF]/10 bg-[#07152B] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00A8FF]/20 text-[#35D5FF]'
                    : 'text-[#A8B8D0] hover:bg-[#0B1B32] hover:text-[#F4F8FF]'
                }`}
              >
                {link.label}
              </a>
            ))}

            {onOpenResume && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#00A8FF]/15 py-2.5 text-xs font-semibold text-[#35D5FF] border border-[#00A8FF]/30"
              >
                <FileText className="h-4 w-4" />
                <span>Open Resume (CV)</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}