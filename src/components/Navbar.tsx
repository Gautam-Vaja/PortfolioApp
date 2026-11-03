import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';

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
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07090e]/90 backdrop-blur-md border-b border-white/[0.05] transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand wordmark matching mockup: GAUTAM. */}
        <a
          href="#home"
          className="group flex items-center text-lg sm:text-xl font-black tracking-widest text-white transition-opacity hover:opacity-90"
        >
          <span className="font-display">GAUTAM</span>
          <span className="text-[#FF7A1A] text-xl font-black">.</span>
        </a>

        {/* Center Nav Links matching mockup */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#FF7A1A] shadow-[0_0_8px_#FF7A1A]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side: Resume button & Theme toggle */}
        <div className="flex items-center gap-3">
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#FF7A1A]/40"
            >
              <FileText className="h-3.5 w-3.5 text-[#FF9030]" />
              <span>Resume</span>
            </button>
          )}

          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-slate-400 hidden sm:block" />
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="relative flex h-6 w-12 items-center rounded-full bg-[#141a27] p-0.5 border border-white/10 shadow-inner transition-colors hover:border-[#FF7A1A]/40"
            >
              <div
                className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-gradient-to-r from-[#FF9030] to-[#FF5500] shadow-md transition-transform duration-200 ${
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
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden hover:text-white hover:border-[#FF7A1A]/40"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#0a0e17] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#FF7A1A]/15 text-[#FF9030]'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
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
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FF7A1A]/15 py-2.5 text-xs font-semibold text-[#FF9030] border border-[#FF7A1A]/30"
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