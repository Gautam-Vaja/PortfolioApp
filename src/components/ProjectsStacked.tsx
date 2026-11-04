import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolio-data';

interface ProjectsStackedProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsStacked({ onSelectProject }: ProjectsStackedProps) {
  useEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('#projects .rv');

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

  const projectsData = [
    {
      id: 'ai-assistant',
      name: 'Chat App (AI Assistant)',
      subtitle: 'Flutter · Google Gemini API · SQLite · GoRouter',
      desc1: 'An intelligent cross-platform AI chat assistant integrated with the Google Gemini API for real-time generative responses.',
      desc2: 'Built an offline-first persistence engine with SQLite, dynamic dark/light theme switching, and smooth navigation via GoRouter.',
      repo: 'https://github.com/Gautam-Vaja/PortfolioApp',
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
      repo: 'https://github.com/Gautam-Vaja/PortfolioApp',
      accent: '#29b6f6',
      screens: [
        // Screen 1: Current weather
        <div key="s1" className="u">
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
        // Screen 2: Details & Gauges
        <div key="s2" className="u">
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
        </div>,
        // Screen 3: 7-day forecast
        <div key="s3" className="u">
          <div className="nb" />
          <div className="t">7-day forecast</div>
          {[
            ['Mon', '32°', 90],
            ['Tue', '31°', 82],
            ['Wed', '29°', 70],
            ['Thu', '30°', 76],
            ['Fri', '33°', 96],
            ['Sat', '32°', 90],
            ['Sun', '28°', 62],
          ].map(([d, v, w]) => (
            <div key={d as string} className="c ln">
              <span>{d}</span>
              <div className="pb">
                <i style={{ width: `${w}%` }} />
              </div>
              <em>{v}</em>
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
      desc2: 'Image uploads, dynamic follower systems, likes, and comment threads.',
      repo: 'https://github.com/Gautam-Vaja/PortfolioApp',
      accent: '#ff4fa0',
      screens: [
        // Screen 1: Feed
        <div key="s1" className="u">
          <div className="nb" />
          <div className="t">Feed</div>
          <div className="c">
            <div className="rw2">
              <span className="av" />
              <span>@gautam</span>
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
              <span>@sam</span>
            </div>
            <div className="ln">
              <span>♥ 84</span>
              <em>9 comments</em>
            </div>
          </div>
        </div>,
        // Screen 2: Profile
        <div key="s2" className="u">
          <div className="nb" />
          <div style={{ textAlign: 'center' }}>
            <span className="av lg" />
          </div>
          <div className="t">Gautam Vaja</div>
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
            <div className="sq" />
            <div className="sq" />
            <div className="sq" />
            <div className="sq" />
            <div className="sq" />
            <div className="sq" />
          </div>
        </div>,
        // Screen 3: Comments
        <div key="s3" className="u">
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
      repo: 'https://github.com/Gautam-Vaja/PortfolioApp',
      accent: '#2ecc8f',
      screens: [
        // Screen 1: Donut breakdown
        <div key="s1" className="u">
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
        <div key="s2" className="u">
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
        // Screen 3: Transactions
        <div key="s3" className="u">
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
  ];

  return (
    <section className="sheet dk" id="projects" style={{ zIndex: 4 }}>
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
