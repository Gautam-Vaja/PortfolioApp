import React from 'react';
import { ArrowUp } from 'lucide-react';

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
    <footer className="border-t border-[#35D5FF]/10 bg-[#030B1B]/95 backdrop-blur-md py-8 text-xs transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand Left matching mockup */}
          <div>
            <div className="flex items-center text-sm font-extrabold tracking-widest text-[#F4F8FF]">
              <span className="font-display">GAUTAM VAJA</span>
              <span className="text-[#FF9A45] text-base font-black">.</span>
            </div>
            <p className="mt-0.5 text-[11px] text-[#A8B8D0]">
              Flutter Developer & Mobile Application Engineer.
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

          {/* Copyright Right & Circular Back to Top */}
          <div className="flex flex-wrap items-center gap-4 text-[#A8B8D0] text-[11px]">
            <a
              href="https://github.com/Gautam-Vaja/PortfolioApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#35D5FF] transition-colors font-mono"
            >
              GitHub: PortfolioApp
            </a>
            <span className="text-white/20">•</span>
            <span>© 2026 Gautam Vaja. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#35D5FF]/30 bg-[#0B1B32] text-[#A8B8D0] transition-all hover:bg-[#00A8FF] hover:text-black hover:border-[#00A8FF]"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}