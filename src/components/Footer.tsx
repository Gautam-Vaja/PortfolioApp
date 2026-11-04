import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#00A8FF]/15 bg-[#030B1B]/90 backdrop-blur-md py-10 text-xs transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand Left */}
          <div className="text-left">
            <div className="flex items-center text-sm font-extrabold tracking-widest text-[#F4F8FF]">
              <span className="font-display">GAUTAM VAJA</span>
              <span className="text-[#00A8FF] text-base font-black ml-0.5">.</span>
            </div>
            <p className="mt-1 text-[11px] text-[#A8B8D0]">
              Software Developer | Flutter Developer | Mobile Application Engineer
            </p>
          </div>

          {/* Nav Links Center */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#A8B8D0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#35D5FF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4 text-[#A8B8D0]">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#00A8FF]/20 text-[#A8B8D0] hover:text-[#FFFFFF] hover:border-[#35D5FF] transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#00A8FF]/20 text-[#A8B8D0] hover:text-[#FFFFFF] hover:border-[#35D5FF] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#00A8FF]/20 text-[#A8B8D0] hover:text-[#FFFFFF] hover:border-[#35D5FF] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>

            <span className="text-[11px]">© 2026 Gautam Vaja</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00A8FF]/30 bg-[#07152B] text-[#35D5FF] transition-all hover:bg-[#00A8FF] hover:text-[#030B1B] hover:shadow-[0_0_12px_rgba(0,168,255,0.4)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
