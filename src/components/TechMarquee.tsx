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

const TECH_THEME: Record<string, { bg: string; border: string }> = {
  Flutter: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(41, 182, 246, 0.22), #0d0e14 75%)',
    border: 'rgba(41, 182, 246, 0.3)',
  },
  Dart: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(1, 117, 194, 0.22), #0d0e14 75%)',
    border: 'rgba(1, 117, 194, 0.3)',
  },
  Firebase: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(255, 160, 0, 0.22), #0d0e14 75%)',
    border: 'rgba(255, 160, 0, 0.3)',
  },
  SQLite: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(15, 128, 204, 0.22), #0d0e14 75%)',
    border: 'rgba(15, 128, 204, 0.3)',
  },
  GetX: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(124, 77, 255, 0.22), #0d0e14 75%)',
    border: 'rgba(124, 77, 255, 0.3)',
  },
  'REST API': {
    bg: 'radial-gradient(circle at 50% 30%, rgba(38, 198, 218, 0.22), #0d0e14 75%)',
    border: 'rgba(38, 198, 218, 0.3)',
  },
  Dio: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(30, 136, 229, 0.22), #0d0e14 75%)',
    border: 'rgba(30, 136, 229, 0.3)',
  },
  Git: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(244, 81, 30, 0.22), #0d0e14 75%)',
    border: 'rgba(244, 81, 30, 0.3)',
  },
  GitHub: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.22), #0d0e14 75%)',
    border: 'rgba(139, 92, 246, 0.3)',
  },
  GitLab: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(252, 109, 38, 0.22), #0d0e14 75%)',
    border: 'rgba(252, 109, 38, 0.3)',
  },
  Postman: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(255, 108, 55, 0.22), #0d0e14 75%)',
    border: 'rgba(255, 108, 55, 0.3)',
  },
  Java: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(231, 111, 0, 0.22), #0d0e14 75%)',
    border: 'rgba(231, 111, 0, 0.3)',
  },
  Python: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(55, 118, 171, 0.22), #0d0e14 75%)',
    border: 'rgba(55, 118, 171, 0.3)',
  },
  Swift: {
    bg: 'radial-gradient(circle at 50% 30%, rgba(240, 81, 56, 0.22), #0d0e14 75%)',
    border: 'rgba(240, 81, 56, 0.3)',
  },
};

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
        y="31"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="#fff"
        textAnchor="middle"
      >
        DIO
      </text>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#f4511e"
        d="m44.7 21.6-18.3-18.3c-1.2-1.2-3.1-1.2-4.2 0l-4.1 4.1 5.3 5.3c1.3-.4 2.8-.2 3.8.9 1 1 1.3 2.5.8 3.8l5.1 5.1c1.3-.4 2.8-.2 3.8.9 1.5 1.5 1.5 3.9 0 5.4s-3.9 1.5-5.4 0c-1.1-1.1-1.4-2.7-.8-4.1l-4.7-4.7v10.9c.4.3.7.6.9 1 1.5 1.5 1.5 3.9 0 5.4s-3.9 1.5-5.4 0c-1.5-1.5-1.5-3.9 0-5.4.4-.4.8-.7 1.3-.9v-11c-.5-.2-.9-.5-1.3-.9-1.1-1.1-1.4-2.7-.8-4.1L12.3 9.4 3.3 18.4c-1.2 1.2-1.2 3.1 0 4.2l18.3 18.3c1.2 1.2 3.1 1.2 4.2 0l18.9-18.9c1.2-1.2 1.2-3.1 0-4.4z"
      />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#fff"
        d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.34 13.68 18.99 1 .18 1.36-.43 1.36-.96 0-.48-.02-2.07-.03-3.75-5.56 1.21-6.74-2.38-6.74-2.38-.91-2.31-2.22-2.92-2.22-2.92-1.82-1.24.14-1.22.14-1.22 2.01.14 3.07 2.06 3.07 2.06 1.78 3.05 4.68 2.17 5.82 1.66.18-1.29.7-2.17 1.27-2.67-4.44-.51-9.11-2.22-9.11-9.88 0-2.18.78-3.97 2.06-5.36-.21-.51-.89-2.54.2-5.29 0 0 1.68-.54 5.5 2.05A19.14 19.14 0 0 1 24 16.71c1.7.01 3.42.23 5.02.68 3.82-2.59 5.5-2.05 5.5-2.05 1.09 2.75.41 4.78.2 5.29 1.28 1.39 2.06 3.18 2.06 5.36 0 7.68-4.68 9.36-9.13 9.86.72.62 1.36 1.84 1.36 3.71 0 2.68-.02 4.84-.02 5.5 0 .54.36 1.16 1.37.96C38.28 40.33 44 32.83 44 24c0-11.05-8.95-20-20-20z"
      />
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

  const offset1Ref = useRef<number>(0);
  const offset2Ref = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    let animId: number;

    const render = () => {
      const r1 = r1Ref.current;
      const r2 = r2Ref.current;

      if (r1 && r2) {
        // Measure the width of one complete set of 14 items
        // Each row has 4 duplicated sets, so singleSetWidth = scrollWidth / 4
        const singleSetWidth1 = r1.scrollWidth > 0 ? r1.scrollWidth / 4 : 3200;
        const singleSetWidth2 = r2.scrollWidth > 0 ? r2.scrollWidth / 4 : 3200;

        // Calculate scroll velocity
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
        lastScrollYRef.current = currentScrollY;

        const dynamicSpeed = 0.75 + Math.min(scrollDelta * 0.15, 6.0);

        // Advance offsets
        offset1Ref.current = (offset1Ref.current + dynamicSpeed) % singleSetWidth1;
        offset2Ref.current = (offset2Ref.current + dynamicSpeed * 0.9) % singleSetWidth2;

        // Row 1 moves left continuously:
        const x1 = -offset1Ref.current;

        // Row 2 is staggered by half a card width (~120px) and moves right continuously with NO gaps:
        // By translating from -singleSetWidth + offset2 - 120, Row 2 is completely gapless on both sides
        const staggerOffset = 125;
        const x2 = -singleSetWidth2 + offset2Ref.current - staggerOffset;

        r1.style.transform = `translate3d(${x1}px, 0, 0)`;
        r2.style.transform = `translate3d(${x2}px, 0, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, []);

  const reversedList = [...TECH_LIST].reverse();

  // Repeat each list 4 times so there are plenty of cards on both sides of any screen resolution
  const r1List = [...TECH_LIST, ...TECH_LIST, ...TECH_LIST, ...TECH_LIST];
  const r2List = [...reversedList, ...reversedList, ...reversedList, ...reversedList];

  return (
    <div className="gal" id="gal" ref={galRef} aria-hidden="true">
      {/* Row 1 (Moving Left) */}
      <div className="rw" id="r1" ref={r1Ref}>
        {r1List.map((tech, idx) => {
          const theme = TECH_THEME[tech] || {
            bg: '#0d0e14',
            border: 'rgba(255, 255, 255, 0.16)',
          };

          return (
            <div
              key={`r1-${tech}-${idx}`}
              className="tl"
              style={{
                background: theme.bg,
                borderColor: theme.border,
              }}
            >
              {ICONS[tech] || null}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>

      {/* Row 2 (Moving Right, Staggered Brick Layout) */}
      <div className="rw" id="r2" ref={r2Ref}>
        {r2List.map((tech, idx) => {
          const theme = TECH_THEME[tech] || {
            bg: '#0d0e14',
            border: 'rgba(255, 255, 255, 0.16)',
          };

          return (
            <div
              key={`r2-${tech}-${idx}`}
              className="tl"
              style={{
                background: theme.bg,
                borderColor: theme.border,
              }}
            >
              {ICONS[tech] || null}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
