import React, { useEffect, useRef } from 'react';

const TECH_LIST = [
  'Flutter',
  'Dart',
  'Firebase',
  'SQLite',
  'GetX',
  'REST API',
  'Dio',
  'Git',
  'GitHub',
  'GitLab',
  'Postman',
  'Java',
  'Python',
  'Swift',
];

const ICONS: Record<string, React.ReactNode> = {
  Flutter: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#54c5f8" d="M27 4h12L17 26l-6-6z" />
      <path fill="#54c5f8" d="M27 21h12L28 32l-6-6z" />
      <path fill="#01579b" d="M17 31l5-5 6 6-5 5z" />
      <path fill="#0277bd" d="M23 37l5-5h11L28 43H17z" />
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#0175c2" d="M24 4 44 24 24 44 4 24z" />
      <path fill="#40c4ff" d="M24 4 44 24H24z" />
      <path fill="#01579b" d="M4 24 24 44V24z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#ffa000" d="M9 36 14 6l8 14z" />
      <path fill="#ffca28" d="M9 36 22 20l7 13z" />
      <path fill="#f57c00" d="M9 36l16 8 14-8-5-23-9 17z" />
    </svg>
  ),
  SQLite: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="12" rx="15" ry="6" fill="#0f80cc" />
      <path
        fill="#0b5f99"
        d="M9 12v10c0 3.3 6.7 6 15 6s15-2.7 15-6V12c0 3.3-6.7 6-15 6S9 15.3 9 12z"
      />
      <path
        fill="#0f80cc"
        d="M9 24v10c0 3.3 6.7 6 15 6s15-2.7 15-6V24c0 3.3-6.7 6-15 6S9 27.3 9 24z"
      />
    </svg>
  ),
  GetX: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="5" width="38" height="38" rx="10" fill="#7c4dff" />
      <text
        x="24"
        y="31"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="19"
        fill="#fff"
        textAnchor="middle"
      >
        GX
      </text>
    </svg>
  ),
  'REST API': (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="5"
        y="9"
        width="38"
        height="30"
        rx="8"
        fill="none"
        stroke="#26c6da"
        strokeWidth="3"
      />
      <text
        x="24"
        y="29.5"
        fontFamily="Arial,sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#26c6da"
        textAnchor="middle"
      >
        &#123; API &#125;
      </text>
    </svg>
  ),
  Dio: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="5" width="38" height="38" rx="10" fill="#1e88e5" />
      <text
        x="24"
        y="30"
        fontFamily="Arial,sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#fff"
        textAnchor="middle"
      >
        dio
      </text>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="9"
        y="9"
        width="30"
        height="30"
        rx="5"
        transform="rotate(45 24 24)"
        fill="#f05033"
      />
      <path
        d="M22 14v20M22 24l9-3"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
      />
      <g fill="#fff">
        <circle cx="22" cy="14" r="3.5" />
        <circle cx="22" cy="34" r="3.5" />
        <circle cx="31" cy="21" r="3.5" />
      </g>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <g transform="scale(2)">
        <path
          fill="#f5f6fa"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </g>
    </svg>
  ),
  GitLab: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#e24329"
        d="M24 43 4 28.5l4-12L12 6l6 12h12l6-12 4 10.5 4 12z"
      />
      <path fill="#fc6d26" d="M24 43 4 28.5 10 22h28l6 6.500z" />
      <path fill="#fca326" d="M4 28.500l4-12 2 5.500zM44 28.500l-4-12-2 5.500z" />
    </svg>
  ),
  Postman: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="19" fill="#ff6c37" />
      <path
        d="M15 33 31 17"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M27 14l7 7-9 1z" fill="#fff" />
      <circle cx="16" cy="32" r="3" fill="#fff" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#e76f00"
        d="M26 5c3 4-6 6-4 11 1 3 5 3 3 7 4-3 3-7 0-9-2-3 1-6 1-9z"
      />
      <path fill="#5382a1" d="M10 28h25c0 7-5 12-12.5 12S10 35 10 28z" />
      <path
        d="M35 30c5-1 6 4 0 6"
        stroke="#5382a1"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M12 43h22"
        stroke="#e76f00"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#3776ab"
        d="M24 4c-9 0-8.5 4-8.5 4v4.5h9V14H11.5S5 13 5 24c0 10 5.5 9.5 5.5 9.5H14v-4.5s-.5-5.5 5.5-5.5h9s5.5.2 5.5-5.3V9.5S35 4 24 4z"
      />
      <circle cx="19" cy="9.5" r="1.8" fill="#fff" />
      <path
        fill="#ffd43b"
        d="M24 44c9 0 8.5-4 8.5-4v-4.5h-9V34h13S43 35 43 24c0-10-5.5-9.5-5.5-9.5H34v4.5s.5 5.5-5.5 5.5h-9s-5.5-.2-5.5 5.3v9.7S13 44 24 44z"
      />
      <circle cx="29" cy="38.5" r="1.8" fill="#fff" />
    </svg>
  ),
  Swift: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="11" fill="#f05138" />
      <path
        fill="#fff"
        d="M35 33c-5.5 3-13 3-18-1.5 3 1 5.5.8 7.5-.3-5-3.5-8.5-8.5-10-13 4 3.5 9 7 13 8.5-4-4-7-8-8-11 5 5 12 9.5 16.5 13 1.5-2 1-5-1-8 4 3.5 5 8 0 12.3z"
      />
    </svg>
  ),
};

export default function TechMarquee() {
  const galRef = useRef<HTMLDivElement>(null);
  const r1Ref = useRef<HTMLDivElement>(null);
  const r2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const gal = galRef.current;
      const r1 = r1Ref.current;
      const r2 = r2Ref.current;
      if (!gal || !r1 || !r2) return;

      const H = window.innerHeight;
      const g = H - gal.getBoundingClientRect().top;
      r1.style.transform = `translateX(${-g * 0.45}px)`;
      r2.style.transform = `translateX(${g * 0.45 - 900}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reversedList = [...TECH_LIST].reverse();

  return (
    <div className="gal" id="gal" ref={galRef} aria-hidden="true">
      {/* Row 1 */}
      <div className="rw" id="r1" ref={r1Ref}>
        {TECH_LIST.concat(TECH_LIST).map((tech, idx) => (
          <div key={`r1-${tech}-${idx}`} className="tl">
            {ICONS[tech] || null}
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Row 2 (Reversed) */}
      <div className="rw" id="r2" ref={r2Ref}>
        {reversedList.concat(reversedList).map((tech, idx) => (
          <div key={`r2-${tech}-${idx}`} className="tl">
            {ICONS[tech] || null}
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
