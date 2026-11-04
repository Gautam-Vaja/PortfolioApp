import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'drag' | 'card'>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Inspect target to determine cursor state
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, [role="button"], [data-cursor]');
      const dragArea = target.closest('[data-cursor-drag], canvas');
      const cardArea = target.closest('[data-cursor-card]');

      if (dragArea) {
        setCursorState('drag');
        setCursorLabel('DRAG');
      } else if (cardArea) {
        setCursorState('card');
        setCursorLabel('VIEW');
      } else if (interactive) {
        setCursorState('hover');
        setCursorLabel('');
      } else {
        setCursorState('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for outer ring
    const render = () => {
      const ease = 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const getSizeClasses = () => {
    switch (cursorState) {
      case 'drag':
        return 'w-16 h-16 -ml-8 -mt-8 border-[#35D5FF] bg-[#00A8FF]/15 backdrop-blur-sm';
      case 'card':
        return 'w-16 h-16 -ml-8 -mt-8 border-[#FF9A45] bg-[#FF9A45]/15 backdrop-blur-sm';
      case 'hover':
        return 'w-12 h-12 -ml-6 -mt-6 border-[#35D5FF] bg-[#00A8FF]/20 scale-110';
      default:
        return 'w-8 h-8 -ml-4 -mt-4 border-[#35D5FF]/50 bg-transparent';
    }
  };

  return (
    <aside aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Smooth Lerp Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full border border-solid transition-all duration-150 ease-out flex items-center justify-center shadow-[0_0_15px_rgba(0,168,255,0.3)] ${getSizeClasses()}`}
      >
        {cursorLabel && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#F4F8FF] uppercase">
            {cursorLabel}
          </span>
        )}
      </div>

      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full transition-opacity duration-150 ${
          cursorState === 'hover' || cursorState === 'drag' || cursorState === 'card'
            ? 'opacity-0'
            : 'bg-[#35D5FF] shadow-[0_0_8px_#35D5FF] opacity-100'
        }`}
      />
    </aside>
  );
}
