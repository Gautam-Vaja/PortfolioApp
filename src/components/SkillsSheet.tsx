import React, { useEffect } from 'react';

const SKILLS_DATA = [
  [
    'Mobile Development',
    'Flutter, Dart, Responsive Layouts, State Management (GetX), Custom Widgets, Material Design',
  ],
  [
    'iOS Development',
    'Swift, Xcode, iOS Simulator, SwiftUI, UIKit',
  ],
  [
    'Programming Languages',
    'Java, Python, C, C++, JavaScript, Swift (fundamentals)',
  ],
  [
    'APIs & Networking',
    'REST APIs, Dio, HTTP Client, JSON Serialization, Postman API Testing',
  ],
  [
    'Databases & Backend',
    'SQLite, sqflite, Firebase (Firestore, Authentication, Cloud Storage), MySQL',
  ],
  [
    'Developer Tools',
    'Git, GitHub, GitLab, Android Studio, Xcode, VS Code, Flutter DevTools',
  ],
  [
    'Core CS Concepts',
    'Object-Oriented Programming (OOP), Data Structures & Algorithms, DBMS, Operating Systems',
  ],
];

export default function SkillsSheet() {
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('#skills .rv');

    if (calm) {
      elements.forEach((e) => e.classList.add('in'));
      return;
    }

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
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sheet lt" id="skills" style={{ zIndex: 3 }}>
      <div className="w">
        <h2 className="big rv">Skills</h2>
        <div id="sk" style={{ marginTop: '50px' }}>
          {SKILLS_DATA.map(([title, desc], idx) => (
            <div key={idx} className="row rv">
              <div className="n">0{idx + 1}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
