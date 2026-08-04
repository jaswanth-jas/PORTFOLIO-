import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Iron Man HUD Reticle Ring */}
      <div
        className={`absolute rounded-full border transition-transform duration-100 ease-out ${
          isHovered
            ? 'h-14 w-14 border-red-500 bg-red-500/10 shadow-[0_0_25px_#ff1a1a]'
            : 'h-9 w-9 border-amber-400/80 shadow-[0_0_15px_#ffd700]'
        } ${isMouseDown ? 'scale-75' : 'scale-100'}`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 28 : 18)}px, ${
            pos.y - (isHovered ? 28 : 18)
          }px, 0)`,
        }}
      >
        {/* Stark Crosshair brackets */}
        <div className="absolute -top-1.5 left-1/2 h-2.5 w-[1.5px] -translate-x-1/2 bg-amber-400" />
        <div className="absolute -bottom-1.5 left-1/2 h-2.5 w-[1.5px] -translate-x-1/2 bg-amber-400" />
        <div className="absolute -left-1.5 top-1/2 h-[1.5px] w-2.5 -translate-y-1/2 bg-amber-400" />
        <div className="absolute -right-1.5 top-1/2 h-[1.5px] w-2.5 -translate-y-1/2 bg-amber-400" />
      </div>

      {/* Arc Core Dot */}
      <div
        className={`absolute h-2 w-2 rounded-full transition-colors duration-75 ${
          isHovered ? 'bg-red-500 shadow-[0_0_10px_#ff1a1a]' : 'bg-cyan-400 shadow-[0_0_12px_#00f3ff]'
        }`}
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      />

      {/* JARVIS Telemetry Readout */}
      <div
        className="absolute font-mono text-[9px] tracking-widest text-amber-400/80"
        style={{
          transform: `translate3d(${pos.x + 16}px, ${pos.y + 16}px, 0)`,
        }}
      >
        [MACH 3.2 // {pos.x}:{pos.y}]
      </div>
    </div>
  );
};
