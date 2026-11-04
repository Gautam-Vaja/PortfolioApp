import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CinematicPreloaderProps {
  onComplete: () => void;
}

export default function CinematicPreloader({ onComplete }: CinematicPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING 3D ENGINE');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear realistic loading step
      const step = Math.floor(Math.random() * 8) + 3;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current < 35) {
        setStatusText('INITIALIZING THREE.JS 3D ENGINE');
      } else if (current < 65) {
        setStatusText('COMPILING SHADERS & LIGHT MATRICES');
      } else if (current < 90) {
        setStatusText('CALIBRATING MOTION & SMOOTH SCROLL');
      } else if (current < 100) {
        setStatusText('PREPARING CINEMATIC EXPERIENCE');
      } else {
        setStatusText('WELCOME TO GAUTAM VAJA PORTFOLIO');
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#030B1B] text-[#F4F8FF] select-none overflow-hidden"
        >
          {/* Atmospheric ambient lighting glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00A8FF]/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-[#FF9A45]/10 blur-[100px] pointer-events-none" />

          {/* Central Logo / 3D Isometric Wireframe Icon */}
          <div className="relative mb-8 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-[#35D5FF]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Isometric Hexagon / Cube */}
              <motion.polygon
                points="50,15 85,35 85,75 50,95 15,75 15,35"
                stroke="#35D5FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              {/* Inner isometric Y seams */}
              <motion.line
                x1="50"
                y1="15"
                x2="50"
                y2="55"
                stroke="#00A8FF"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.line
                x1="50"
                y1="55"
                x2="85"
                y2="75"
                stroke="#00A8FF"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.line
                x1="50"
                y1="55"
                x2="15"
                y2="75"
                stroke="#00A8FF"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              {/* Center Glowing Monogram "GV" */}
              <text
                x="50"
                y="58"
                textAnchor="middle"
                fill="#FF9A45"
                fontSize="18"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="900"
                letterSpacing="1"
              >
                GV
              </text>
            </svg>
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-1 mb-8">
            <h1 className="font-display text-2xl font-black uppercase tracking-wider text-[#F4F8FF]">
              GAUTAM VAJA
            </h1>
            <p className="text-xs font-mono tracking-widest text-[#A8B8D0] uppercase">
              PORTFOLIO 2026 • 3D EXPERIENCE
            </p>
          </div>

          {/* Progress Counter & High-tech Bar */}
          <div className="w-64 sm:w-80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#35D5FF] text-[11px] truncate pr-2">{statusText}</span>
              <span className="text-sm font-bold text-[#FF9A45]">{progress.toString().padStart(2, '0')}%</span>
            </div>

            {/* Glowing progress track */}
            <div className="h-1.5 w-full bg-[#07152B] rounded-full overflow-hidden border border-[#35D5FF]/20 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A8FF] via-[#35D5FF] to-[#FF9A45]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>

          {/* Skip CTA */}
          <button
            type="button"
            onClick={() => {
              setIsExiting(true);
              setTimeout(onComplete, 400);
            }}
            className="mt-8 text-[11px] font-mono text-[#A8B8D0]/60 hover:text-[#35D5FF] transition-colors uppercase tracking-widest cursor-pointer"
          >
            Click to Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
