import React from 'react';

export default function FooterSheet() {
  return (
    <footer className="sheet dk ft" style={{ zIndex: 7 }}>
      <div className="w">
        {/* Colossal Name in Anton */}
        <div className="nm">Gautam Vaja</div>

        {/* Bauhaus Geometric SVG Iconography Bar */}
        <svg viewBox="0 0 900 90" aria-hidden="true">
          <circle cx="45" cy="45" r="40" fill="#eceef7" />
          <rect x="110" y="5" width="80" height="80" rx="22" fill="#c6f23a" />
          <path d="M220 85a40 40 0 0 1 80 0z" fill="#8b5cff" />
          <path d="M330 85 370 5 410 85z" fill="#ff9a3d" />
          <circle
            cx="480"
            cy="45"
            r="40"
            fill="none"
            stroke="#ff2fc0"
            strokeWidth="22"
          />
          <path d="M540 85V5a80 80 0 0 1 80 80z" fill="#eceef7" />
          <rect x="650" y="32" width="80" height="26" rx="13" fill="#8b5cff" />
          <rect x="677" y="5" width="26" height="80" rx="13" fill="#8b5cff" />
          <path d="M780 45 820 5 860 45 820 85z" fill="#ff2fc0" />
        </svg>

        {/* Links and Contact Details Columns */}
        <div className="cols">
          <div>
            <small>Social</small>
            <a
              href="https://linkedin.com/in/gautam-vaja"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Gautam-Vaja"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Gautam-Vaja/PortfolioApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              PortfolioApp Repo
            </a>
          </div>

          <div>
            <small>Contact</small>
            <a href="mailto:gautamvaja403@gmail.com">gautamvaja403@gmail.com</a>
            <a href="tel:+918320000411">+91 8320000411</a>
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>

        <p style={{ color: '#9ea3bd', fontSize: '13px', margin: '30px 0 0' }}>
          © 2026 Gautam Vaja · Flutter Developer · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
