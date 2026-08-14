import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { soundEngine } from '../audio/soundEngine';
import { 
  Atom, 
  Code2, 
  Sparkles, 
  Copy, 
  Check, 
  Heart, 
  Sliders, 
  Cpu, 
  Zap, 
  RotateCcw,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';

export const ReactPlayground: React.FC = () => {
  // Sandbox State
  const [activeTab, setActiveTab] = useState<'sandbox' | 'hooks' | 'ecosystem'>('sandbox');
  const [cardTitle, setCardTitle] = useState('React 19 Interactive Glass Widget');
  const [glowColor, setGlowColor] = useState('#61dafb');
  const [blurAmount, setBlurAmount] = useState(16);
  const [selectedFontClass, setSelectedFontClass] = useState('font-jakarta');

  const fontOptions = [
    { id: 'font-cinzel', name: 'Cinzel — Roman Grand & High-End', category: 'Unique Serifs' },
    { id: 'font-playfair', name: 'Playfair Display — High Contrast Classy', category: 'Unique Serifs' },
    { id: 'font-dm-serif', name: 'DM Serif Display — Modern Classic', category: 'Unique Serifs' },
    { id: 'font-syne', name: 'Syne — Artistic & Extremely Unique', category: 'Creative & Display Fonts' },
    { id: 'font-clash', name: 'Clash Display — Bold & Punchy', category: 'Creative & Display Fonts' },
    { id: 'font-cabinet', name: 'Cabinet Grotesk — Vintage 1970s Sharp', category: 'Creative & Display Fonts' },
    { id: 'font-jakarta', name: 'Plus Jakarta Sans — Friendly Geometric', category: 'Clean Modern Sans-Serifs' },
    { id: 'font-space', name: 'Space Grotesk — Quirky & Futuristic', category: 'Clean Modern Sans-Serifs' },
    { id: 'font-inter', name: 'Inter — Clean & Highly Readable', category: 'Clean Modern Sans-Serifs' },
  ];

  // Dynamic Global Page Font Synchronization
  useEffect(() => {
    fontOptions.forEach((font) => {
      document.body.classList.remove(font.id);
    });
    if (selectedFontClass) {
      document.body.classList.add(selectedFontClass);
    }
  }, [selectedFontClass]);
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pulseSpeed, setPulseSpeed] = useState(2);

  // Hooks Visualizer State
  const [count, setCount] = useState(0);
  const [renderLogs, setRenderLogs] = useState<string[]>([
    'System: Component Mounted (useEffect [])',
    'State Initialized: count = 0'
  ]);
  const [filterQuery, setFilterQuery] = useState('');

  // Sample items for useMemo demo
  const sampleItems = [
    'React 19 Concurrent Renderer',
    'Virtual DOM Diffing Engine',
    'Custom React Hooks System',
    'React Three Fiber 3D Canvas',
    'Framer Motion Gesture Engine',
    'Tailwind CSS v4 JIT Engine',
    'Vite HMR Fast Refresh Module'
  ];

  const filteredItems = useMemo(() => {
    return sampleItems.filter((item) =>
      item.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [filterQuery]);

  const handleLike = () => {
    soundEngine.playClick();
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
    } else {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleCountIncrement = () => {
    soundEngine.playSuccess();
    const newCount = count + 1;
    setCount(newCount);
    setRenderLogs((prev) => [
      `[state update] setCount(${newCount}) -> Re-rendered at ${new Date().toLocaleTimeString()}`,
      ...prev.slice(0, 4)
    ]);
  };

  const handleResetHooks = () => {
    soundEngine.playClick();
    setCount(0);
    setRenderLogs(['State Reset: count = 0']);
  };

  const colorOptions = [
    { name: 'React Cyan', hex: '#61dafb', bg: 'bg-[#61dafb]' },
    { name: 'Neon Purple', hex: '#a855f7', bg: 'bg-purple-500' },
    { name: 'Emerald Cyber', hex: '#10b981', bg: 'bg-emerald-500' },
    { name: 'Solar Amber', hex: '#f59e0b', bg: 'bg-amber-500' },
  ];

  const generatedCodeSnippet = `// Live Generated React 19 Component
import React, { useState } from 'react';

export const InteractiveGlassCard = () => {
  const [likes, setLikes] = useState(${likeCount});
  
  return (
    <div 
      className="p-6 rounded-3xl text-white transition-all duration-500"
      style={{
        backdropFilter: 'blur(${blurAmount}px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 0 30px ${glowColor}33'
      }}
    >
      <h3 className="text-xl font-bold mb-2">${cardTitle}</h3>
      <p className="text-sm text-slate-300 mb-4">
        Built with React 19, Framer Motion & Tailwind CSS.
      </p>
      <button 
        onClick={() => setLikes(prev => prev + 1)}
        className="px-4 py-2 rounded-full text-xs font-semibold"
        style={{ backgroundColor: '${glowColor}' }}
      >
        ❤️ Likes: {likes}
      </button>
    </div>
  );
};`;

  const copyCode = () => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(generatedCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="react-hub" className="relative min-h-screen w-full py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: glowColor }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Tagline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 apple-pill px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-300 mb-4 font-orbitron shadow-xl"
          >
            <Atom className="h-4 w-4 animate-spin text-[#61dafb]" style={{ animationDuration: '6s' }} />
            <span>REACT JS INNOVATION HUB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-syne mb-4 drop-shadow-xl"
          >
            Interactive <span className="react-cyan-text drop-shadow-[0_4px_25px_rgba(97,218,251,0.5)]">React JS</span> Playground
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-jakarta leading-relaxed"
          >
            Experience React 19 state dynamics, component customization, and live code generation with custom glassmorphism.
          </motion.p>
        </div>

        {/* Tab Selector Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full apple-glass border border-white/10 shadow-2xl">
            <button
              onClick={() => { soundEngine.playClick(); setActiveTab('sandbox'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'sandbox'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Live Component Sandbox</span>
            </button>

            <button
              onClick={() => { soundEngine.playClick(); setActiveTab('hooks'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'hooks'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>React Hooks Visualizer</span>
            </button>

            <button
              onClick={() => { soundEngine.playClick(); setActiveTab('ecosystem'); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'ecosystem'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>React Stack Ecosystem</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Component Sandbox */}
        {activeTab === 'sandbox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 apple-glass p-6 rounded-3xl border border-white/10 space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Sliders className="h-5 w-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white font-web3">State Controls</h3>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Card Component Title
                </label>
                <input
                  type="text"
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                  className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              {/* Typography Style Selector */}
              <div>
                <label className="block text-xs font-extrabold text-sky-300 mb-2 uppercase tracking-wider font-orbitron flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                  <span>Typography Collection (9 Fonts)</span>
                </label>
                <select
                  value={selectedFontClass}
                  onChange={(e) => {
                    soundEngine.playClick();
                    setSelectedFontClass(e.target.value);
                  }}
                  className="w-full bg-slate-900 border border-sky-500/30 rounded-xl px-4 py-2.5 text-xs text-white font-bold focus:outline-none focus:border-sky-400 transition-colors cursor-pointer"
                >
                  {fontOptions.map((font) => (
                    <option key={font.id} value={font.id}>
                      [{font.category.split(' ')[0]}] {font.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Accent Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  React Neon Accent
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.hex}
                      onClick={() => {
                        soundEngine.playClick();
                        setGlowColor(opt.hex);
                      }}
                      className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-bold transition-all ${
                        glowColor === opt.hex
                          ? 'border-white bg-white/20 shadow-lg'
                          : 'border-white/10 bg-slate-900/50 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${opt.bg} mr-1.5`} />
                      <span className="text-[10px] text-white hidden sm:inline">{opt.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Backdrop Blur Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Glass Backdrop Blur
                  </label>
                  <span className="text-xs font-bold text-sky-400 font-mono">{blurAmount}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>

              {/* Pulse Speed Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Glow Animation Speed
                  </label>
                  <span className="text-xs font-bold text-sky-400 font-mono">{pulseSpeed}s</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={pulseSpeed}
                  onChange={(e) => setPulseSpeed(Number(e.target.value))}
                  className="w-full accent-sky-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>
            </motion.div>

            {/* Right Live View & Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Interactive Live Glass Card Output */}
              <div 
                className="relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.65)',
                  backdropFilter: `blur(${blurAmount}px)`,
                  WebkitBackdropFilter: `blur(${blurAmount}px)`,
                  borderColor: `${glowColor}55`,
                  boxShadow: `0 0 40px ${glowColor}25, inset 0 0 20px ${glowColor}15`
                }}
              >
                {/* Floating Glow Indicator */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-60 animate-pulse"
                  style={{ backgroundColor: glowColor, animationDuration: `${pulseSpeed}s` }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white bg-white/10 backdrop-blur-md border border-white/15">
                      <Atom className="h-3.5 w-3.5 animate-spin text-[#61dafb]" style={{ animationDuration: '4s' }} />
                      LIVE REACT STATE
                    </span>
                    <span className="text-xs text-slate-400 font-mono">React 19 Fiber</span>
                  </div>

                  <h4 className={`text-2xl sm:text-3xl font-extrabold text-white tracking-tight ${selectedFontClass} transition-all duration-300`}>
                    {cardTitle}
                  </h4>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed claude-serif">
                    This component renders live in real-time. Any changes made to the state sliders update the virtual DOM instantly without full page re-renders.
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={handleLike}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white transition-all shadow-lg hover:scale-105 active:scale-95 claude-sans"
                      style={{
                        backgroundColor: glowColor,
                        boxShadow: `0 8px 20px ${glowColor}44`
                      }}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-white' : ''}`} />
                      <span>{likeCount} React Appreciations</span>
                    </button>

                    <div className="text-xs text-slate-300 claude-mono">
                      State updates: <span className="text-white font-bold">{likeCount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Viewer with Anthropic Mono */}
              <div className="apple-glass rounded-3xl border border-white/15 p-5 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-300 claude-mono">
                    <Code2 className="h-4 w-4 text-sky-400" />
                    <span>GeneratedTSXSnippet.tsx</span>
                  </div>

                  <button
                    onClick={copyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/15 transition-all claude-sans"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-slate-400" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-xs font-mono text-slate-200 overflow-x-auto p-4 bg-slate-950/90 rounded-xl leading-relaxed border border-white/10 claude-mono">
                  <code>{generatedCodeSnippet}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        )}

        {/* Tab 2: React Hooks Visualizer */}
        {activeTab === 'hooks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Hook 1: useState & useEffect */}
            <div className="apple-glass rounded-3xl border border-white/10 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Activity className="h-5 w-5 text-sky-400" />
                  <h3 className="text-lg font-bold text-white font-web3">useState & useEffect Tracer</h3>
                </div>
                <span className="text-xs font-mono text-sky-300 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                  State: {count}
                </span>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Clicking increment updates state using <code className="text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded">useState</code>, triggering a re-render tracked by <code className="text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded">useEffect</code>.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCountIncrement}
                  className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-sky-500/20 hover:scale-105 transition-all"
                >
                  <Zap className="h-4 w-4" />
                  <span>Trigger useState (+1)</span>
                </button>

                <button
                  onClick={handleResetHooks}
                  className="px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white font-semibold text-xs transition-all"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              {/* Console Logs */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 border-b border-white/10 pb-2">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Render Cycle Tracer Log</span>
                </div>
                <div className="space-y-1 font-mono text-[11px]">
                  {renderLogs.map((log, i) => (
                    <div key={i} className="text-slate-300 flex items-center gap-2">
                      <span className="text-sky-400">›</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hook 2: useMemo Expensive Computation */}
            <div className="apple-glass rounded-3xl border border-white/10 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white font-web3">useMemo Filter Engine</h3>
                </div>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  {filteredItems.length} items
                </span>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">
                Filter query triggers memoized computation with <code className="text-purple-300 bg-slate-900 px-1.5 py-0.5 rounded">useMemo</code> to prevent expensive re-calculation on unrelated render ticks.
              </p>

              <input
                type="text"
                placeholder="Search React technology modules..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400 transition-colors"
              />

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {filteredItems.map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                      <span>{item}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">Memoized</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: React Stack Ecosystem */}
        {activeTab === 'ecosystem' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'React 19 Core',
                badge: 'VIRTUAL DOM',
                desc: 'Concurrent rendering, Server Components, and optimized state reconciliation.',
                color: '#61dafb',
                icon: Atom
              },
              {
                title: 'React Three Fiber',
                badge: '3D SPATIAL WEB',
                desc: 'Declarative WebGL canvas engine bringing interactive 3D objects to life.',
                color: '#a855f7',
                icon: Cpu
              },
              {
                title: 'Framer Motion',
                badge: 'PHYSICS ANIMATIONS',
                desc: 'Spring physics, layout animations, and fluid gesture handling.',
                color: '#f43f5e',
                icon: Sparkles
              },
              {
                title: 'Tailwind CSS v4',
                badge: 'DESIGN SYSTEM',
                desc: 'Ultra-fast utility engine powering Apple-inspired frosted glassmorphic UI.',
                color: '#38bdf8',
                icon: Sliders
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="apple-glass apple-glass-hover rounded-3xl p-6 border border-white/10 space-y-4 text-left"
              >
                <div className="flex items-center justify-between">
                  <div 
                    className="p-3 rounded-2xl bg-white/5 border border-white/10"
                    style={{ color: card.color }}
                  >
                    <card.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {card.badge}
                  </span>
                </div>

                <h4 className="text-lg font-extrabold text-white font-web3">{card.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};
