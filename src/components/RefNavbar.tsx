import React, { useEffect, useState } from 'react';
import { scrollToTarget } from '../hooks/useSmoothScroll';

interface RefNavbarProps {
  onOpenResume?: () => void;
}

export default function RefNavbar({ onOpenResume }: RefNavbarProps) {
  const [navVisible, setNavVisible] = useState(true);
  const [floatingPillVisible, setFloatingPillVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const sy = window.scrollY;
      const H = window.innerHeight;
      const up = sy < lastScrollY || sy < H * 0.3;
      const past = sy > H * 0.7;
      lastScrollY = sy;

      setNavVisible(up);
      setFloatingPillVisible(past && !up);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToTarget(id);
  };

  return (
    <>
      {/* Top Main Navigation with mix-blend-mode: difference */}
      <nav
        id="nv"
        className="ref-nav"
        style={{
          opacity: navVisible ? 1 : 0,
          pointerEvents: navVisible ? 'auto' : 'none',
        }}
      >
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
          About
        </a>
        <a className="x" href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>
          Skills
        </a>
        <a className="x" href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
          Projects
        </a>
        <a className="x" href="#exp" onClick={(e) => handleLinkClick(e, '#exp')}>
          Experience
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
          Contact
        </a>
        {onOpenResume && (
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-block border-0 bg-transparent text-white uppercase font-extrabold text-[12px] tracking-[.14em] cursor-pointer hover:opacity-60 transition-opacity"
          >
            Resume (CV)
          </button>
        )}
      </nav>

      {/* Floating Center Contact Pill */}
      <a
        className="pill"
        id="fp"
        href="#contact"
        onClick={(e) => handleLinkClick(e, '#contact')}
        style={{
          opacity: floatingPillVisible ? 1 : 0,
          pointerEvents: floatingPillVisible ? 'auto' : 'none',
        }}
      >
        Contact me
      </a>
    </>
  );
}
