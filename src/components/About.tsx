import React from 'react';
import {
  Smartphone,
  Globe,
  Cpu,
  Code2,
  Rocket,
  Compass,
  ArrowRight,
  FolderKanban,
} from 'lucide-react';
import { motion } from 'motion/react';
import About3DScene from './3d/About3DScene';
import TiltCard from './ui/TiltCard';

export default function About() {
  const interests = [
    { label: 'Mobile Development', icon: Smartphone },
    { label: 'Open Source', icon: Code2 },
    { label: 'Web Technologies', icon: Globe },
    { label: 'Problem Solving', icon: Rocket },
    { label: 'AI & Machine Learning', icon: Cpu },
    { label: 'Tech Innovation', icon: Compass },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Warm Orange Horizon Glow */}
      <div className="horizon-beam top-[45%]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Column 1: Real-time 3D Interactive Geometric Composition (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md h-[340px] sm:h-[380px] rounded-3xl border border-[#FF6B00]/25 bg-[#07152B]/60 p-2 backdrop-blur-xl shadow-[0_0_35px_rgba(255,107,0,0.18)]">
              <About3DScene />
              <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                <span className="text-[10px] font-mono text-[#FF9A45] tracking-wider uppercase opacity-80">
                  Interactive 3D Geometry • Drag to Rotate
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative, Bio & Interests (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#FF9A45]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              BEYOND THE CODE.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#A8B8D0] font-normal">
              I&apos;m Gautam Vaja, a passionate software developer who enjoys building modern mobile applications and digital experiences. I focus on writing clean code, creating intuitive interfaces, and solving real-world problems through technology.
            </p>

            <div className="pt-1">
              <a
                href="#experience"
                className="btn-outline-dark inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold"
              >
                <span>Know More</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#FF9A45]" />
              </a>
            </div>

            {/* MY INTERESTS Section */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2 text-[#FF9A45]">
                <FolderKanban className="h-4 w-4 text-[#FF6B00]" />
                <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#F4F8FF]">
                  MY INTERESTS
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-xl">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <TiltCard
                      key={item.label}
                      maxTilt={8}
                      className="glass-panel rounded-2xl p-3 sm:p-4 flex items-center gap-3 text-left border border-white/10 hover:border-[#FF6B00]/40 transition-all"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/25 shadow-[0_0_12px_rgba(255,107,0,0.2)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F4F8FF]">
                        {item.label}
                      </span>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
