import React, { useEffect, useRef, useState } from 'react';

export default function AboutPinned() {
  const pinRef = useRef<HTMLDivElement>(null);
  const hfRef = useRef<HTMLElement>(null);
  const sttRef = useRef<HTMLDivElement>(null);
  const txRef = useRef<HTMLDivElement>(null);
  const [statsOn, setStatsOn] = useState(false);

  const paragraphs = [
    {
      className: 'l',
      text: 'Flutter Developer and BCA graduate with hands-on experience building responsive, cross-platform mobile applications from concept to deployment.',
    },
    {
      className: '',
      text: 'Internship experience at Derived Web Technologies Pvt. Ltd. building production features with RESTful APIs, Firebase and SQLite, alongside four independent projects spanning AI integration, real-time data and full-stack app architecture.',
    },
    {
      className: '',
      text: 'Foundational knowledge of iOS development, including running and testing Flutter apps on the iOS Simulator using Xcode and adapting UI with Cupertino widgets. Strong foundation in OOP, data structures and clean, maintainable code, with a track record of shipping polished, production-ready mobile products end to end.',
    },
  ];

  useEffect(() => {
    const pin = pinRef.current;
    const hf = hfRef.current;
    const tx = txRef.current;
    if (!pin || !hf || !tx) return;

    const words = Array.from(tx.querySelectorAll<HTMLElement>('i'));
    const fls = Array.from(pin.querySelectorAll<HTMLElement>('.fl'));

    const cl = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = () => window.innerWidth <= 820;

    const handleScroll = () => {
      const H = window.innerHeight;
      let p = 1;

      if (!calm) {
        const r = pin.getBoundingClientRect();
        p = cl(-r.top / Math.max(1, r.height - H));
      }

      // Clip path reveal on stroked heading
      hf.style.clipPath = `inset(0 ${100 - cl(p * 3.2) * 100}% 0 0)`;

      // Reading progress illumination
      const prog = cl((p - 0.1) / 0.55) * words.length;
      words.forEach((w, i) => {
        w.style.opacity = `${0.18 + 0.82 * cl(prog - i)}`;
      });

      // Stats appearance toggle
      setStatsOn(p > 0.82);

      // Parallax on floating 3D anchors (scaled gracefully for mobile)
      fls.forEach((e) => {
        if (calm) return;
        const par = Number(e.dataset.par) || 1;
        const factor = isMobile() ? 28 : 60;
        const yFactor = isMobile() ? 50 : 120;
        e.style.transform = `translate(${(p - 0.5) * factor * par}px, ${(0.5 - p) * yFactor}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sheet dk" id="about" style={{ zIndex: 2 }}>
      <div className="pin" id="pin" ref={pinRef}>
        <div className="st">
          {/* Giant Stroked Heading with Filled Overlay */}
          <div className="hd" id="hd">
            About me
            <b id="hf" ref={hfRef} aria-hidden="true">
              About me
            </b>
          </div>

          {/* Reading text with animated words */}
          <div className="txt" id="tx" ref={txRef}>
            {paragraphs.map((p, pIdx) => {
              const words = p.text.split(' ');
              return (
                <p key={pIdx} className={p.className}>
                  {words.map((w, wIdx) => (
                    <i key={wIdx}>{w} </i>
                  ))}
                </p>
              );
            })}
          </div>

          {/* Stats Pills appearing at >82% scroll */}
          <div
            className={`stats ${statsOn ? 'on' : ''}`}
            id="stt"
            ref={sttRef}
          >
            <div>
              <b>3 months</b>
              <span>Flutter internship</span>
            </div>
            <div>
              <b>4</b>
              <span>independent apps</span>
            </div>
            <div>
              <b>8.33 / 10</b>
              <span>BCA CGPA</span>
            </div>
            <div>
              <b>EN + FR</b>
              <span>localized live app</span>
            </div>
          </div>

          {/* Floating 3D Geometric Anchors */}
          <div
            className="fl"
            data-3d="knot"
            data-par="-1"
            style={{ left: '5vw', top: '14vh' }}
          />
          <div
            className="fl"
            data-3d="cube"
            data-par="1"
            style={{ right: '5vw', top: '12vh' }}
          />
          <div
            className="fl"
            data-3d="flower"
            data-par="1"
            style={{ left: '6vw', bottom: '10vh' }}
          />
          <div
            className="fl"
            data-3d="ring"
            data-par="-1"
            style={{ right: '6vw', bottom: '12vh' }}
          />
        </div>
      </div>
    </section>
  );
}
