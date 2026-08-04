import React, { useState } from 'react';
import { Volume2, VolumeX, Eye, EyeOff, Cpu, Menu, X } from 'lucide-react';
import { soundEngine } from '../audio/soundEngine';

interface NavbarProps {
  crtEnabled: boolean;
  setCrtEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ crtEnabled, setCrtEnabled }) => {
  const [isMuted, setIsMuted] = useState(soundEngine.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEngine.setMuted(next);
    soundEngine.playClick();
  };

  const toggleCrt = () => {
    setCrtEnabled((prev) => !prev);
    soundEngine.playClick();
  };

  const navLinks = [
    { name: '// 01.ARC_CORE', href: '#hero' },
    { name: '// 02.MARK_PROJECTS', href: '#projects' },
    { name: '// 03.SUIT_SYSTEMS', href: '#skills' },
    { name: '// 04.FLIGHT_LOG', href: '#experience' },
    { name: '// 05.JARVIS_LINK', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-40 w-[94%] max-w-7xl -translate-x-1/2">
      <div className="glass-panel corner-brackets flex items-center justify-between rounded-lg px-4 py-2.5 shadow-2xl transition-all duration-300 border-amber-500/40">
        {/* Stark Industries Brand Logo */}
        <a
          href="#hero"
          onClick={() => soundEngine.playClick()}
          onMouseEnter={() => soundEngine.playHover()}
          className="interactive flex items-center gap-3 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded border border-amber-400/80 bg-amber-500/10 shadow-[0_0_15px_#ffd700] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_#00f3ff]">
            <Cpu className="h-5 w-5 text-amber-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div>
            <div className="font-orbitron text-sm font-black tracking-widest text-white group-hover:text-amber-400 transition-colors">
              STARK <span className="text-amber-400">//</span> J.A.R.V.I.S.
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-amber-400/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              STATUS: ARC_REACTOR_ONLINE
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundEngine.playHover()}
              onClick={() => soundEngine.playClick()}
              className="interactive rounded px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-slate-300 transition-all hover:bg-amber-500/15 hover:text-amber-300 hover:shadow-[0_0_12px_rgba(255,215,0,0.4)]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleCrt}
            onMouseEnter={() => soundEngine.playHover()}
            className="interactive flex h-8 w-8 items-center justify-center rounded border border-amber-500/40 bg-slate-900/60 text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-500/20"
            title={crtEnabled ? 'Disable HUD Overlay' : 'Enable HUD Overlay'}
          >
            {crtEnabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-slate-500" />}
          </button>

          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundEngine.playHover()}
            className="interactive flex h-8 w-8 items-center justify-center rounded border border-amber-500/40 bg-slate-900/60 text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-500/20"
            title={isMuted ? 'Unmute Suit Audio' : 'Mute Suit Audio'}
          >
            {isMuted ? <VolumeX className="h-4 w-4 text-slate-500" /> : <Volume2 className="h-4 w-4 text-amber-400" />}
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              soundEngine.playClick();
            }}
            className="interactive flex h-8 w-8 items-center justify-center rounded border border-amber-500/40 bg-slate-900/60 text-amber-400 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-2 glass-panel rounded-lg p-4 md:hidden flex flex-col gap-2 border-amber-500/40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
                soundEngine.playClick();
              }}
              className="interactive rounded px-3 py-2 font-mono text-sm tracking-wider text-amber-300 hover:bg-amber-500/20"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
