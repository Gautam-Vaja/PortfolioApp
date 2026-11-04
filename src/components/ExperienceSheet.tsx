import React, { useEffect, useRef } from 'react';

export default function ExperienceSheet() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('#exp .rv');

    if (calm) {
      elements.forEach((e) => e.classList.add('in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add('in');
              observer.unobserve(x.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      elements.forEach((e) => observer.observe(e));
    }

    // Scroll-driven horizontal drift
    const handleScroll = () => {
      if (calm || window.innerWidth <= 820) return;
      const H = window.innerHeight;
      const driftEls = document.querySelectorAll<HTMLElement>('#exp [data-dr]');
      driftEls.forEach((e) => {
        const r = e.getBoundingClientRect();
        const dr = Number(e.dataset.dr) || 1;
        const xOffset = (H / 2 - (r.top + r.height / 2)) * 0.1 * dr;
        e.style.transform = `translateX(${xOffset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="sheet dk" id="exp" ref={containerRef} style={{ zIndex: 5 }}>
      <div className="w">
        <div className="hd2">
          <h2 className="big rv">Experience</h2>
          <span className="emo" aria-hidden="true">
            💼
          </span>
        </div>

        {/* 1. Derived Web Technologies Internship */}
        <div className="bub" style={{ marginTop: '50px' }}>
          <div className="bx f" data-dr="1">
            <h3>Flutter Developer Intern</h3>
            <div className="o">Derived Web Technologies Pvt. Ltd.</div>
            <div className="d">3-month internship · Jul 2026 – Oct 2026</div>
            <ul>
              <li>
                Engineered and optimized modular, cross-platform UI components using
                Flutter and Dart, ensuring seamless responsiveness across diverse mobile screen
                resolutions.
              </li>
              <li>
                Integrated complex RESTful APIs via Dio and HTTP libraries with secure JSON
                serialization, improving asynchronous data handling and screen load speed.
              </li>
              <li>
                Implemented local data caching and persistence using SQLite and Firebase
                Firestore to provide uninterrupted offline application functionality.
              </li>
              <li>
                Leveraged Git and GitHub for feature-branch workflows, collaborative PR reviews,
                bug fixes, and performance profiling with Flutter DevTools.
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Live Project: PilonMagic */}
        <div className="bub">
          <div className="bx f" data-dr="-1">
            <h3>Live Project: PilonMagic</h3>
            <div className="o">GPS Tracking App</div>
            <div className="d">Sep 2026 – Oct 2026</div>
            <ul>
              <li>
                Built asset search, QR/VIN lookup and profile features by integrating REST
                APIs with Flutter, Dart and GetX state management.
              </li>
              <li>
                Implemented ownership report PDF export and English/French localization for the
                production app.
              </li>
              <li>
                Delivered Android bug fixes and updates, collaborating through GitLab version
                control.
              </li>
            </ul>
          </div>
        </div>

        {/* Education Subheading */}
        <div className="sub rv">Education</div>

        {/* MCA & BCA */}
        <div className="bub">
          <div className="bx" data-dr="1">
            <div className="d">2026 – Present</div>
            <h3 style={{ fontSize: '26px' }}>Master of Computer Applications (MCA)</h3>
            <div className="o">
              Narandas Jethalal Sonecha Management &amp; Technical Institute, GTU
            </div>
          </div>

          <div className="bx" data-dr="-1">
            <div className="d">2023 – 2026</div>
            <h3 style={{ fontSize: '26px' }}>Bachelor of Computer Applications (BCA)</h3>
            <div className="o">
              Shri K.M. &amp; Smt. K.K. Savjani BBA/BCA College, BKNMU
            </div>
            <p style={{ margin: '8px 0 0' }}>CGPA 8.33 / 10</p>
          </div>
        </div>

        {/* 12th & 10th */}
        <div className="bub">
          <div className="bx" data-dr="-1">
            <div className="d">2023</div>
            <h3 style={{ fontSize: '26px' }}>Higher Secondary Certificate (12th, GSEB)</h3>
            <div className="o">Sunrise School, Veraval</div>
            <p style={{ margin: '8px 0 0' }}>75%</p>
          </div>

          <div className="bx" data-dr="1">
            <div className="d">2021</div>
            <h3 style={{ fontSize: '26px' }}>Secondary School Certificate (10th, GSEB)</h3>
            <div className="o">Sunrise School, Veraval</div>
            <p style={{ margin: '8px 0 0' }}>82%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
