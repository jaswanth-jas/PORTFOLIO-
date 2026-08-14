import React, { useState } from 'react';
import { soundEngine } from '../audio/soundEngine';
import { Volume2, VolumeX, Atom } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const isMuted = soundEngine.toggleMute();
    setMuted(isMuted);
  };

  const handleNavClick = () => {
    soundEngine.playClick();
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
      <div className="apple-dock px-5 sm:px-7 py-3 flex items-center gap-4 sm:gap-6 max-w-4xl lg:max-w-5xl w-full justify-between shadow-2xl backdrop-blur-3xl border border-white/20">
        
        {/* Profile Avatar + Brand Name */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="flex items-center gap-3 text-white font-bold text-base tracking-tight hover:opacity-90 transition-opacity shrink-0 group"
        >
          <div className="relative">
            <img
              src="/jaswanth-profile.jpg"
              alt="Jaswanth A"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-sky-400/80 shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
          </div>
          <span className="font-extrabold whitespace-nowrap text-sm sm:text-base">
            Jaswanth<span className="text-sky-400">.dev</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 sm:gap-6 text-xs font-bold text-slate-200 whitespace-nowrap">
          <a href="#hero" onClick={handleNavClick} className="hover:text-white transition-colors">About</a>
          <a href="#react-hub" onClick={handleNavClick} className="inline-flex items-center gap-1.5 hover:text-[#61dafb] transition-colors text-[#61dafb] font-extrabold">
            <Atom className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="whitespace-nowrap">React Hub</span>
          </a>
          <a href="#projects" onClick={handleNavClick} className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" onClick={handleNavClick} className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" onClick={handleNavClick} className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Audio Mute & GitHub Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={toggleSound}
            title={muted ? 'Unmute Audio' : 'Mute Audio'}
            className="h-9 w-9 rounded-full apple-glass flex items-center justify-center text-slate-200 hover:text-white transition-colors cursor-pointer border border-white/15"
          >
            {muted ? <VolumeX className="h-4 w-4 text-rose-400" /> : <Volume2 className="h-4 w-4 text-sky-400" />}
          </button>

          <a
            href="https://github.com/jaswanth-jas"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/15 shrink-0"
            title="GitHub Profile"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
