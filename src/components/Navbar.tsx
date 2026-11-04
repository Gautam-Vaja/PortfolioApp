import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume?: () => void;
}

export default function Navbar({ darkMode, onToggleTheme, onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 240;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#030B1B]/90 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo: GAUTAM. matching Image 4 */}
        <a
          href="#home"
          className="group flex items-center text-lg sm:text-xl font-black tracking-widest text-[#F4F8FF] transition-opacity hover:opacity-90 font-display"
        >
          <span>GAUTAM</span>
          <span className="text-[#FF6B00] text-xl font-black drop-shadow-[0_0_8px_#FF6B00]">.</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#A8B8D0]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive ? 'text-[#F4F8FF] font-semibold' : 'text-[#A8B8D0] hover:text-[#FF9A45]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9A45] shadow-[0_0_8px_#FF6B00]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side: Resume button & Theme toggle matching Image 4 */}
        <div className="flex items-center gap-3">
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0B1B32]/70 px-4 py-1.5 text-xs font-semibold text-[#F4F8FF] backdrop-blur-md transition-all hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 hover:shadow-[0_0_12px_rgba(255,107,0,0.25)]"
            >
              <FileText className="h-3.5 w-3.5 text-[#FF9A45]" />
              <span>Resume</span>
            </button>
          )}

          {/* Theme toggle switch matching Image 4 */}
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-[#FF9A45] hidden sm:block" />
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              className="relative flex h-6 w-12 items-center rounded-full bg-[#07152B] p-0.5 border border-white/20 shadow-inner transition-colors hover:border-[#FF6B00]"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00] transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {darkMode ? (
                  <Moon className="h-3 w-3 text-white" />
                ) : (
                  <Sun className="h-3 w-3 text-white" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#07152B] text-[#F4F8FF]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#030B1B]/95 backdrop-blur-xl px-4 py-5 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#A8B8D0] hover:bg-white/5 hover:text-[#FF9A45] transition-colors"
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
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] px-4 py-2.5 text-xs font-bold text-white shadow-lg mt-2"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
