import React, { useEffect, useRef } from 'react';
import { scrollToTarget } from '../hooks/useSmoothScroll';

export default function RefHero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (h1Ref.current) {
        h1Ref.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = ['Hi,', 'I’M', 'Gautam'];
  let charIndex = 0;

  return (
    <>
      <header className="hero" id="top">
        <div className="w">
          <h1 ref={h1Ref} className="hero-h1" id="h1">
            {words.map((word, wIdx) => (
              <span key={wIdx} className="wd">
                {Array.from(word).map((char, cIdx) => {
                  const delay = `${(charIndex++) * 55}ms`;
                  return (
                    <span
                      key={cIdx}
                      className="ch"
                      style={{ animationDelay: delay }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <div className="hrow">
            <p>
              Flutter Developer passionate about crafting fast, polished and
              memorable mobile apps
            </p>
            <a
              className="pill"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('#contact');
              }}
            >
              Contact me
            </a>
          </div>

          {/* 3D Smartphone Canvas Placeholder */}
          <div className="art" data-3d="phone" />
        </div>
      </header>

      {/* Tech Logos Row in Anton font */}
      <div className="logos" aria-hidden="true">
        <span>Flutter</span>
        <span>Dart</span>
        <span>Firebase</span>
        <span>SQLite</span>
        <span>GetX</span>
        <span>REST APIs</span>
      </div>
    </>
  );
}
