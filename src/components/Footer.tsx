import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#06080d]/90 backdrop-blur-md py-8 text-xs transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand Left matching mockup */}
          <div>
            <div className="flex items-center text-sm font-extrabold tracking-widest text-white">
              <span className="font-display">GAUTAM VAJA</span>
              <span className="text-[#FF7A1A] text-base font-black">.</span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-400">
              Flutter Developer & Mobile Application Engineer.
            </p>
          </div>

          {/* Nav Links Center matching mockup */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#FF9030]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright Right & Circular Back to Top matching mockup */}
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>© 2026 Gautam Vaja. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-300 transition-all hover:bg-[#FF7A1A] hover:text-black hover:border-[#FF7A1A]"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}