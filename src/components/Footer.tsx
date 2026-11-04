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
    <footer className="border-t border-white/10 bg-[#030B1B]/95 backdrop-blur-md py-10 text-xs transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand Left matching Image 4 */}
          <div className="text-left">
            <div className="flex items-center text-sm font-extrabold tracking-widest text-[#F4F8FF]">
              <span className="font-display">GAUTAM VAJA</span>
              <span className="text-[#FF6B00] text-base font-black ml-0.5">.</span>
            </div>
            <p className="mt-1 text-[11px] text-[#A8B8D0]">
              Software Developer.
            </p>
          </div>

          {/* Nav Links Center matching Image 4 */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#A8B8D0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#FF9A45]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links, Copyright & Back to Top matching Image 4 */}
          <div className="flex items-center gap-4 text-[#A8B8D0]">
            <span className="text-[11px]">© 2025 Gautam Vaja. All rights reserved.</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#07152B] text-[#F4F8FF] transition-all hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-[#030B1B] hover:shadow-[0_0_12px_rgba(255,107,0,0.4)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
