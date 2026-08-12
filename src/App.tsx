import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { WellbeingWidget } from './components/WellbeingWidget';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen w-full bg-[#050811] text-slate-100 selection:bg-sky-500 selection:text-white overflow-x-hidden">
          
          {/* Figma Glassmorphism & Nixtio Ambient Mesh Orbs */}
          <div className="glass-mesh-bg">
            <div className="glass-orb orb-1" />
            <div className="glass-orb orb-2" />
            <div className="glass-orb orb-3" />
          </div>

          {/* Floating Apple Dock Navigation */}
          <Navbar />

          {/* Main Core Sections */}
          <main className="relative z-10">
            <Hero />
            <Projects />
            <Skills />
            <WellbeingWidget />
            <Experience />
            <Contact />
          </main>

          {/* Apple Style Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
