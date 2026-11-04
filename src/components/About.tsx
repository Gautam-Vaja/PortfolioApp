import React from 'react';
import {
  Smartphone,
  Globe,
  Cpu,
  Code2,
  Lightbulb,
  Compass,
  ArrowRight,
  FolderKanban,
} from 'lucide-react';
import { motion } from 'motion/react';
import About3DScene from './3d/About3DScene';
import TiltCard from './ui/TiltCard';

export default function About() {
  const interests = [
    { label: 'Mobile Development', icon: Smartphone, desc: 'Flutter, Dart, iOS & Android' },
    { label: 'Web Technologies', icon: Globe, desc: 'Modern React, TypeScript, APIs' },
    { label: 'AI & Machine Learning', icon: Cpu, desc: 'Gemini API, LLMs, Intelligent UX' },
    { label: 'Open Source', icon: Code2, desc: 'Community Tools & Architecture' },
    { label: 'Problem Solving', icon: Lightbulb, desc: 'Algorithms & Data Structures' },
    { label: 'Technology Innovation', icon: Compass, desc: 'Next-Gen Cross-Platform Stacks' },
  ];

  return (
    <section id="about" className="py-24 border-t border-[#00A8FF]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Column 1: Real-time 3D Interactive Geometric Composition (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-3xl border border-[#00A8FF]/20 bg-[#07152B]/60 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(0,168,255,0.15)]">
              <About3DScene />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="text-[10px] font-mono text-[#35D5FF] tracking-wider uppercase opacity-75">
                  Interactive 3D Geometry • Drag to Rotate
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative, Bio & Interests (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00A8FF] shadow-[0_0_8px_#00A8FF]" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#35D5FF]">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F4F8FF] font-display">
              BEYOND THE CODE.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#A8B8D0] font-normal">
              I&apos;m Gautam Vaja, a passionate software developer who enjoys building modern mobile applications and digital experiences. I focus on writing clean code, creating intuitive interfaces, and solving real-world problems through technology.
            </p>

            {/* MY INTERESTS Section */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2 text-[#35D5FF]">
                <FolderKanban className="h-4 w-4 text-[#00A8FF]" />
                <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#F4F8FF]">
                  MY INTERESTS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <TiltCard
                      key={item.label}
                      maxTilt={10}
                      className="glass-panel rounded-2xl p-4 flex flex-col justify-between text-left border border-[#00A8FF]/15"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#00A8FF] bg-[#00A8FF]/10 border border-[#00A8FF]/20 mb-3 shadow-[0_0_10px_rgba(0,168,255,0.2)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#F4F8FF]">
                          {item.label}
                        </h4>
                        <p className="text-[11px] text-[#A8B8D0] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="btn-outline-blue inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#35D5FF]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
