import React, { useEffect, useRef } from 'react';

export default function ExperienceSheet() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('#exp .rv');

    let observer: IntersectionObserver | null = null;

    if (calm) {
      elements.forEach((e) => e.classList.add('in'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((x) => {
            if (x.isIntersecting) {
              x.target.classList.add('in');
              observer?.unobserve(x.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((e) => observer?.observe(e));
    }

    // Scroll-driven horizontal drift
    const handleScroll = () => {
      if (calm) return;
      const H = window.innerHeight;
      const isMobile = window.innerWidth <= 820;
      const driftEls = document.querySelectorAll<HTMLElement>('#exp [data-dr]');
      driftEls.forEach((e) => {
        const r = e.getBoundingClientRect();
        const dr = Number(e.dataset.dr) || 1;
        const factor = isMobile ? 0.035 : 0.08;
        const xOffset = (H / 2 - (r.top + r.height / 2)) * factor * dr;
        e.style.transform = `translate3d(${xOffset}px, 0, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
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
          <div className="bx full" data-dr="1">
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
          <div className="bx full" data-dr="-1">
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

        {/* Education Subsection */}
        <div className="sub rv">Education</div>

        <div className="bub">
          {/* MCA */}
          <div className="bx" data-dr="1">
            <h3>Master of Computer Applications (MCA)</h3>
            <div className="o">Gujarat Technological University</div>
            <div className="d">Currently Pursuing · 2024 – Present</div>
            <ul>
              <li>
                Specializing in advanced software engineering, cloud computing, and mobile application architectures.
              </li>
              <li>
                Deepening knowledge of scalable systems, distributed databases, and high-performance cross-platform development.
              </li>
            </ul>
          </div>

          {/* BCA */}
          <div className="bx" data-dr="-1">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <div className="o">Bhakta Kavi Narsinh Mehta University</div>
            <div className="d">Graduated 2024 · 8.33 / 10 CGPA</div>
            <ul>
              <li>
                Graduated with First Class with Distinction (8.33 / 10 CGPA) from V.M. Savjani College.
              </li>
              <li>
                Core coursework: Data Structures, OOP (Java & C++), DBMS & SQL, Computer Networks, and Software Testing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
