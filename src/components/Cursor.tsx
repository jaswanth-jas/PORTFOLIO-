import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
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
      {/* Outer Rotating HUD Reticle */}
      <div
        className={`absolute rounded-full border border-cyan-400/60 transition-transform duration-100 ease-out ${
          isHovered
            ? 'h-12 w-12 border-magenta-500 bg-magenta-500/10 shadow-[0_0_20px_#ff0055]'
            : 'h-8 w-8'
        } ${isMouseDown ? 'scale-75' : 'scale-100'}`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 24 : 16)}px, ${
            pos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      >
        {/* Crosshair lines */}
        <div className="absolute -top-1 left-1/2 h-2 w-[1px] -translate-x-1/2 bg-cyan-400" />
        <div className="absolute -bottom-1 left-1/2 h-2 w-[1px] -translate-x-1/2 bg-cyan-400" />
        <div className="absolute -left-1 top-1/2 h-[1px] w-2 -translate-y-1/2 bg-cyan-400" />
        <div className="absolute -right-1 top-1/2 h-[1px] w-2 -translate-y-1/2 bg-cyan-400" />
      </div>

      {/* Center glowing core dot */}
      <div
        className={`absolute h-2 w-2 rounded-full transition-colors duration-75 ${
          isHovered ? 'bg-magenta-500 shadow-[0_0_10px_#ff0055]' : 'bg-cyan-400 shadow-[0_0_10px_#00f3ff]'
        }`}
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      />

      {/* HUD Coordinates Readout */}
      <div
        className="absolute font-mono text-[9px] tracking-widest text-cyan-400/70"
        style={{
          transform: `translate3d(${pos.x + 14}px, ${pos.y + 14}px, 0)`,
        }}
      >
        [{pos.x.toString().padStart(4, '0')}:{pos.y.toString().padStart(4, '0')}]
      </div>
    </div>
  );
};
