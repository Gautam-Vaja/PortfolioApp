import React, { useEffect, useState } from 'react';
import { scrollToTarget } from '../hooks/useSmoothScroll';

interface RefNavbarProps {
  onOpenResume?: () => void;
}

export default function RefNavbar({ onOpenResume }: RefNavbarProps) {
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const sy = window.scrollY;
      const H = window.innerHeight;
      const up = sy < lastScrollY || sy < H * 0.3;
      lastScrollY = sy;

      setNavVisible(up);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToTarget(id);
  };

  return (
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
          className="border-0 bg-transparent text-white uppercase font-extrabold text-[10px] sm:text-[12px] tracking-[.1em] sm:tracking-[.14em] cursor-pointer hover:opacity-60 transition-opacity whitespace-nowrap flex-shrink-0"
        >
          Resume (CV)
        </button>
      )}
    </nav>
  );
}
