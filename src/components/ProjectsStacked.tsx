import React, { useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolio-data';

interface ProjectsStackedProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsStacked({ onSelectProject }: ProjectsStackedProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>('.rv');

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
      { threshold: 0.1 }
    );

    elements.forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 'pilonmagic',
      name: 'PilonMagic (GPS Tracking App)',
      subtitle: 'Flutter · Dart · GetX · REST APIs · i18n · GitLab',
      desc1: 'Live GPS asset tracking mobile application featuring QR/VIN lookup, GetX state management, and real-time mapping.',
      desc2: 'Built during internship at Derived Web Technologies with ownership report PDF exports, English/French localization, and production bug fixes.',
      repo: 'https://github.com/Gautam-Vaja/PilonMagic',
      accent: '#ff7a1a',
      screens: [
        // Screen 1: Map Tracking
        <div key="pm1" className="u">
          <div className="nb" />
          <div className="t">Live Tracking</div>
          <div className="sb">GPS Active</div>
          <div className="im" />
          <div className="c ln">
            <span>Asset #4829</span>
            <em>12 km/h</em>
          </div>
          <div className="c ln">
            <span>Battery</span>
            <em>94%</em>
          </div>
          <div className="btn">View Route</div>
        </div>,
        // Screen 2: QR & VIN Scanner
        <div key="pm2" className="u">
          <div className="nb" />
          <div className="t">Asset Scanner</div>
          <div className="sb">QR & VIN</div>
          <div className="sq" style={{ margin: '0 auto', width: '70%' }} />
          <div className="c ln">
            <span>VIN: 1HGCR2F8</span>
            <em>Verified</em>
          </div>
          <div className="btn">Inspect Specs</div>
        </div>,
        // Screen 3: PDF Export & Reports
        <div key="pm3" className="u">
          <div className="nb" />
          <div className="t">Reports</div>
          <div className="sb">Bilingual EN/FR</div>
          <div className="c ln">
            <span>Ownership PDF</span>
            <em>Export</em>
          </div>
          <div className="c ln">
            <span>Trip Log (Oct)</span>
            <em>1,420 km</em>
          </div>
          <div className="c ln">
            <span>Status</span>
            <em>Compliant</em>
          </div>
          <div className="btn">Download PDF</div>
        </div>,
      ],
    },
    {
      id: 'ai-assistant',
      name: 'Chat App (AI Assistant)',
      subtitle: 'Flutter · Google Gemini API · SQLite · GoRouter',
      desc1: 'An intelligent cross-platform AI chat assistant integrated with the Google Gemini API for real-time generative responses.',
      desc2: 'Built an offline-first persistence engine with SQLite, dynamic dark/light theme switching, and smooth navigation via GoRouter.',
      repo: 'https://github.com/Gautam-Vaja/Chat_App',
      accent: '#7c8cff',
      screens: [
        // Screen 1: Chat interface
        <div key="s1" className="u">
          <div className="nb" />
          <div className="t">AI Assistant</div>
          <div className="sb">Gemini</div>
          <div className="bb me">Explain Flutter widgets</div>
          <div className="bb ai">Everything in Flutter is a widget, composed in a tree.</div>
          <div className="bb me">Show me an example</div>
          <div className="bb ai">Sure. A Column holds a Text and a button…</div>
          <div className="ib">Ask Gemini…</div>
        </div>,
        // Screen 2: History
        <div key="s2" className="u">
          <div className="nb" />
          <div className="t">History</div>
          <div className="sb">Saved offline</div>
          <div className="c ln">
            <span>Flutter state ideas</span>
            <em>Today</em>
          </div>
          <div className="c ln">
            <span>Dart null safety</span>
            <em>Yesterday</em>
          </div>
          <div className="c ln">
            <span>REST API tips</span>
            <em>Mon</em>
          </div>
          <div className="c ln">
            <span>SQLite queries</span>
            <em>Sun</em>
          </div>
          <div className="c ln">
            <span>Firebase setup</span>
            <em>Sat</em>
          </div>
          <div className="c ln">
            <span>GoRouter routes</span>
            <em>Fri</em>
          </div>
        </div>,
        // Screen 3: Settings
        <div key="s3" className="u">
          <div className="nb" />
          <div className="t">Settings</div>
          <div className="c ln">
            <span>Dark mode</span>
            <span className="tg" />
          </div>
          <div className="c ln">
            <span>Offline history</span>
            <span className="tg" />
          </div>
          <div className="c ln">
            <span>Model</span>
            <em>Gemini</em>
          </div>
          <div className="c ln">
            <span>Language</span>
            <em>English</em>
          </div>
          <div className="c ln">
            <span>Clear chats</span>
            <em>›</em>
          </div>
        </div>,
      ],
    },
    {
      id: 'weather-app',
      name: 'Weather App',
      subtitle: 'Flutter · Dart · OpenWeather API · Geolocation',
      desc1: 'A real-time weather monitoring application using GPS positioning and interactive map coordinates.',
      desc2: 'Parses detailed REST API payloads to display temperature, air quality, humidity, wind velocity, UV index, and 7-day extended forecasts.',
      repo: 'https://github.com/Gautam-Vaja/Weather_App',
      accent: '#29b6f6',
      screens: [
        // Screen 1: Current location
        <div key="w1" className="u">
          <div className="nb" />
          <div className="t">Current location</div>
          <div className="sb">Clear sky</div>
          <div className="k">31°</div>
          <div className="g2">
            <div className="c">
              <em>Humidity</em>
              <div className="n">48%</div>
            </div>
            <div className="c">
              <em>Wind</em>
              <div className="n">12 km/h</div>
            </div>
            <div className="c">
              <em>UV index</em>
              <div className="n">7</div>
            </div>
            <div className="c">
              <em>Air quality</em>
              <div className="n">92</div>
            </div>
          </div>
        </div>,
        // Screen 2: Atmospheric details
        <div key="w2" className="u">
          <div className="nb" />
          <div className="t">Details</div>
          <div className="sb">Today</div>
          <div className="c">
            <div className="ln">
              <span>Air quality</span>
              <em>92</em>
            </div>
            <div className="pb">
              <i style={{ width: '70%' }} />
            </div>
          </div>
          <div className="c">
            <div className="ln">
              <span>UV index</span>
              <em>7</em>
            </div>
            <div className="pb">
              <i style={{ width: '64%' }} />
            </div>
          </div>
          <div className="c">
            <div className="ln">
              <span>Humidity</span>
              <em>48%</em>
            </div>
            <div className="pb">
              <i style={{ width: '48%' }} />
            </div>
          </div>
          <div className="c">
            <div className="ln">
              <span>Wind</span>
              <em>12 km/h</em>
            </div>
            <div className="pb">
              <i style={{ width: '30%' }} />
            </div>
          </div>
          <div className="c">
            <div className="ln">
              <span>Visibility</span>
              <em>9 km</em>
            </div>
            <div className="pb">
              <i style={{ width: '80%' }} />
            </div>
          </div>
        </div>,
        // Screen 3: 7-day forecast
        <div key="w3" className="u">
          <div className="nb" />
          <div className="t">7-day forecast</div>
          {[
            ['Mon', '32°', '90%'],
            ['Tue', '31°', '82%'],
            ['Wed', '29°', '70%'],
            ['Thu', '30°', '76%'],
            ['Fri', '33°', '96%'],
            ['Sat', '32°', '90%'],
            ['Sun', '28°', '62%'],
          ].map(([day, temp, width], idx) => (
            <div key={idx} className="c ln">
              <span>{day}</span>
              <div className="pb">
                <i style={{ width }} />
              </div>
              <em>{temp}</em>
            </div>
          ))}
        </div>,
      ],
    },
    {
      id: 'mini-social',
      name: 'Mini Social Media Application',
      subtitle: 'Flutter · Firebase Auth · Firestore · Cloud Storage',
      desc1: 'A full-featured social platform featuring authentication, real-time feed synchronization and user profile management.',
      desc2: 'Supports image uploads, dynamic follower systems, likes, and comment threads.',
      repo: 'https://github.com/Gautam-Vaja/Mini_Social_Media_Application',
      accent: '#ff4fa0',
      screens: [
        // Screen 1: Feed
        <div key="ms1" className="u">
          <div className="nb" />
          <div className="t">Feed</div>
          <div className="c">
            <div className="rw2">
              <span className="av" />
              @gautam
            </div>
            <div className="im" />
            <div className="ln">
              <span>♥ 128</span>
              <em>23 comments</em>
            </div>
          </div>
          <div className="c">
            <div className="rw2">
              <span className="av" />
              @sam
            </div>
            <div className="im" />
            <div className="ln">
              <span>♥ 84</span>
              <em>9 comments</em>
            </div>
          </div>
        </div>,
        // Screen 2: Profile
        <div key="ms2" className="u">
          <div className="nb" />
          <div style={{ textAlign: 'center' }}>
            <span className="av lg" />
          </div>
          <div className="t" style={{ textAlign: 'center' }}>
            Gautam Vaja
          </div>
          <div className="g3">
            <div className="c">
              <div className="n">12</div>
              <em>Posts</em>
            </div>
            <div className="c">
              <div className="n">340</div>
              <em>Followers</em>
            </div>
            <div className="c">
              <div className="n">180</div>
              <em>Following</em>
            </div>
          </div>
          <div className="btn">Follow</div>
          <div className="g3">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="sq" />
            ))}
          </div>
        </div>,
        // Screen 3: Comments
        <div key="ms3" className="u">
          <div className="nb" />
          <div className="t">Comments</div>
          <div className="sb">23</div>
          <div className="rw2">
            <span className="av" />
            <div className="c" style={{ flex: 1 }}>
              <b>@sam</b>
              <br />
              Nice work on this!
            </div>
          </div>
          <div className="rw2">
            <span className="av" />
            <div className="c" style={{ flex: 1 }}>
              <b>@riya</b>
              <br />
              Love the UI
            </div>
          </div>
          <div className="rw2">
            <span className="av" />
            <div className="c" style={{ flex: 1 }}>
              <b>@dev</b>
              <br />
              How did you build the feed?
            </div>
          </div>
          <div className="ib">Add a comment…</div>
        </div>,
      ],
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker App',
      subtitle: 'Flutter · Dart · Local Storage · UI Charts',
      desc1: 'A personal finance tracker allowing users to log, categorize, and filter transactions.',
      desc2: 'Integrated financial analytics widgets to help users visualize spending habits and budget allocations.',
      repo: 'https://github.com/Gautam-Vaja/Expenses_Tracker_App',
      accent: '#2ecc8f',
      screens: [
        // Screen 1: Dashboard spending
        <div key="et1" className="u">
          <div className="nb" />
          <div className="t">This month</div>
          <div className="sb">Spending</div>
          <div className="dn" />
          <div className="n" style={{ textAlign: 'center' }}>
            ₹18,450
          </div>
          <div className="c ln">
            <span>Food</span>
            <em>₹6,200</em>
          </div>
          <div className="c ln">
            <span>Travel</span>
            <em>₹4,800</em>
          </div>
          <div className="c ln">
            <span>Bills</span>
            <em>₹7,450</em>
          </div>
        </div>,
        // Screen 2: Add expense
        <div key="et2" className="u">
          <div className="nb" />
          <div className="t">Add expense</div>
          <div className="c">
            <em>Amount</em>
            <div className="n">₹ 450</div>
          </div>
          <div className="chips">
            <span className="on">Food</span>
            <span>Travel</span>
            <span>Bills</span>
          </div>
          <div className="c ln">
            <span>Date</span>
            <em>Today</em>
          </div>
          <div className="c ln">
            <span>Note</span>
            <em>Lunch</em>
          </div>
          <div className="btn">Save</div>
        </div>,
        // Screen 3: Transactions list
        <div key="et3" className="u">
          <div className="nb" />
          <div className="t">Transactions</div>
          <div className="chips">
            <span className="on">All</span>
            <span>Food</span>
            <span>Bills</span>
          </div>
          <div className="c ln">
            <span>Lunch</span>
            <em>−₹450</em>
          </div>
          <div className="c ln">
            <span>Auto fare</span>
            <em>−₹120</em>
          </div>
          <div className="c ln">
            <span>Electricity</span>
            <em>−₹2,300</em>
          </div>
          <div className="c ln">
            <span>Snacks</span>
            <em>−₹180</em>
          </div>
          <div className="c ln">
            <span>Mobile recharge</span>
            <em>−₹299</em>
          </div>
        </div>,
      ],
    },
    {
      id: 'smart-attendance',
      name: 'Smart Attendance App',
      subtitle: 'React Native · SQLite · Geofencing · Biometrics',
      desc1: 'A modern mobile attendance verification solution with biometric authentication and local SQL storage.',
      desc2: 'Designed with offline-first event synchronization and exportable weekly CSV summaries for educational and office workflows.',
      repo: 'https://github.com/Gautam-Vaja/PortfolioApp',
      accent: '#f59e0b',
      screens: [
        // Screen 1: Check In
        <div key="sa1" className="u">
          <div className="nb" />
          <div className="t">Attendance</div>
          <div className="sb">Campus Check-In</div>
          <div className="k">09:15</div>
          <div className="c ln">
            <span>Status</span>
            <em style={{ color: '#2ecc8f' }}>Present</em>
          </div>
          <div className="btn">Tap to Check-Out</div>
        </div>,
        // Screen 2: Monthly Summary
        <div key="sa2" className="u">
          <div className="nb" />
          <div className="t">Monthly Stats</div>
          <div className="sb">November 2026</div>
          <div className="c ln">
            <span>Total Days</span>
            <em>24</em>
          </div>
          <div className="c ln">
            <span>Attended</span>
            <em>23</em>
          </div>
          <div className="c ln">
            <span>Rate</span>
            <em>95.8%</em>
          </div>
          <div className="btn">Export CSV</div>
        </div>,
        // Screen 3: Security & Logs
        <div key="sa3" className="u">
          <div className="nb" />
          <div className="t">Audit Logs</div>
          <div className="c ln">
            <span>Biometric</span>
            <em>Verified</em>
          </div>
          <div className="c ln">
            <span>Geofence</span>
            <em>Within Zone</em>
          </div>
          <div className="c ln">
            <span>Device ID</span>
            <em>#DEV-9201</em>
          </div>
        </div>,
      ],
    },
  ];

  return (
    <section ref={containerRef} className="sheet dk" id="projects" style={{ zIndex: 4 }}>
      <div className="w">
        <h2 className="big rv" style={{ marginBottom: '50px' }}>
          Projects
        </h2>

        {/* CSS Sticky Stacking Card Deck */}
        <div className="stk" id="pj">
          {projectsData.map((project, i) => {
            const matchedProject =
              PROJECTS.find((p) => p.id === project.id) || PROJECTS[0];

            return (
              <article
                key={project.id}
                className="pj"
                style={
                  {
                    '--i': i,
                    cursor: 'pointer',
                  } as React.CSSProperties
                }
                onClick={() => onSelectProject(matchedProject)}
              >
                {/* Project Header Row */}
                <div className="ph">
                  <div>
                    <span className="n">0{i + 1}</span>
                    <span>
                      <small>Project</small>
                      <strong>{project.name}</strong>
                    </span>
                  </div>
                  <a
                    className="out"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                </div>

                {/* Simulated 3-Phone Mobile Frames Grid */}
                <div
                  className="mk"
                  style={{ '--a': project.accent } as React.CSSProperties}
                >
                  {project.screens.map((screen, sIdx) => (
                    <div key={sIdx} className="f">
                      {screen}
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="pd">
                  <p>
                    <b>{project.desc1}</b> {project.desc2}
                  </p>
                  <p>
                    {project.subtitle}
                    <br />
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.repo.replace('https://', '')}
                    </a>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
