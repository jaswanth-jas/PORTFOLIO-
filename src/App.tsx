import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [crtEnabled, setCrtEnabled] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen w-full bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
          {/* CRT Scanline Overlay */}
          {crtEnabled && (
            <div className="crt-overlay fixed inset-0 z-40 pointer-events-none" />
          )}

          {/* Sci-Fi HUD Reticle Cursor */}
          <Cursor />

          {/* Sci-Fi Floating Glassmorphic Navbar */}
          <Navbar crtEnabled={crtEnabled} setCrtEnabled={setCrtEnabled} />

          {/* Core Sections */}
          <main className="relative z-10">
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>

          {/* Telemetry Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
