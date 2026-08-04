import React, { useState, useRef, useEffect } from 'react';
import { soundEngine } from '../audio/soundEngine';
import confetti from 'canvas-confetti';
import { Terminal, CheckCircle2, RefreshCw, Radio, Zap } from 'lucide-react';

interface CommandOutput {
  id: string;
  type: 'input' | 'system' | 'error' | 'success';
  text: string;
}

export const Contact: React.FC = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });
  const [terminalLogs, setTerminalLogs] = useState<CommandOutput[]>([
    { id: '1', type: 'system', text: 'J.A.R.V.I.S. PROTOCOL v4.8 INITIALIZED // WELCOME HOME, SIR.' },
    { id: '2', type: 'system', text: 'Type "jarvis" or fill directive payload fields below to transmit.' },
  ]);
  const [cliInput, setCliInput] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSent, setTransmissionSent] = useState(false);

  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cliInput.trim()) return;

    soundEngine.playClick();
    const cmd = cliInput.trim().toLowerCase();
    const newLogs: CommandOutput[] = [
      ...terminalLogs,
      { id: Date.now().toString(), type: 'input', text: `J.A.R.V.I.S.> ${cliInput}` },
    ];

    if (cmd === 'jarvis' || cmd === 'help') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'AVAILABLE STARK DIRECTIVES: jarvis, armor, status, contact, skills, clear, matrix, send',
      });
    } else if (cmd === 'armor' || cmd === 'status') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: 'MARK LXXXV STATUS: 100% | ARC COIL: 10.2 GW | REPULSORS: READY FOR DEPLOYMENT',
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'DIRECT LINK: alex.chen.architect@stark-tech.io | DISCORD: STARK_JARVIS_0X',
      });
    } else if (cmd === 'skills') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'system',
        text: 'STARK STACK: Three.js, React 19, WebGL GLSL, Rust/WASM Avionics, TypeScript, TailwindCSS',
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setCliInput('');
      return;
    } else if (cmd === 'matrix') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: 'ARC REACTOR OVERDRIVE ENGAGED // MARK LXXXV POWER MAXIMUM',
      });
    } else if (cmd.startsWith('send')) {
      triggerTransmission();
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `J.A.R.V.I.S.: "I'm afraid I didn't catch that directive, sir: '${cliInput}'. Type 'help' for protocols."`,
      });
    }

    setTerminalLogs(newLogs);
    setCliInput('');
  };

  const triggerTransmission = () => {
    soundEngine.playWarp();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSent(true);

      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#00f3ff', '#ff1a1a', '#ff9900'],
      });

      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'success',
          text: '>>> TRANSMISSION DISPATCHED TO STARK TOWER COMMAND CORE.',
        },
      ]);
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.message) return;
    triggerTransmission();
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">
          <Terminal className="h-4 w-4" />
          <span>J.A.R.V.I.S. VOICE LINK // STARK COMMAND TERMINAL</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white text-glow-gold">
          INITIATE CONTACT
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 via-cyan-400 to-red-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* J.A.R.V.I.S. Terminal Window */}
      <div className="glass-panel corner-brackets relative rounded-xl border-amber-400 p-4 sm:p-6 shadow-[0_0_45px_rgba(255,215,0,0.3)]">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-500/30 font-mono text-xs text-amber-400">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500 inline-block" />
            <span className="h-3 w-3 rounded-full bg-cyan-400 inline-block" />
            <span className="ml-2">jarvis@stark-tower: ~</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>ARC COIL: 10.2 GW // SECURE</span>
          </div>
        </div>

        {/* Terminal Output Log Feed */}
        <div className="h-48 overflow-y-auto mb-6 p-3 rounded bg-slate-950 font-mono text-xs space-y-1.5 border border-slate-800">
          {terminalLogs.map((log) => (
            <div
              key={log.id}
              className={
                log.type === 'input'
                  ? 'text-white font-bold'
                  : log.type === 'error'
                  ? 'text-red-400'
                  : log.type === 'success'
                  ? 'text-amber-300 font-bold'
                  : 'text-cyan-400/90'
              }
            >
              {log.text}
            </div>
          ))}
          <div ref={logsEndRef} />
        </div>

        {/* CLI Command Line Input */}
        <form onSubmit={handleCliSubmit} className="mb-8 flex items-center gap-2">
          <span className="font-mono text-xs text-amber-400 font-bold">J.A.R.V.I.S.&gt;</span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => {
              setCliInput(e.target.value);
              soundEngine.playTyping();
            }}
            placeholder="Type directive (e.g. jarvis, armor, status)..."
            className="flex-1 bg-transparent font-mono text-xs text-amber-200 placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="interactive rounded bg-amber-950 px-3 py-1 font-mono text-xs text-amber-300 border border-amber-500/40 hover:bg-amber-500/20"
          >
            EXECUTE
          </button>
        </form>

        {/* Transmission Form */}
        {!transmissionSent ? (
          <form onSubmit={handleFormSubmit} className="space-y-4 pt-4 border-t border-amber-500/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  PILOT_CALLSIGN [NAME]
                </label>
                <input
                  type="text"
                  required
                  value={inputs.name}
                  onChange={(e) => {
                    setInputs({ ...inputs, name: e.target.value });
                    soundEngine.playTyping();
                  }}
                  placeholder="Enter your name / callsign..."
                  className="w-full rounded border border-amber-500/30 bg-slate-950 p-2.5 font-mono text-xs text-amber-200 placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1">
                  COMMUNICATION_LINK [EMAIL]
                </label>
                <input
                  type="email"
                  required
                  value={inputs.email}
                  onChange={(e) => {
                    setInputs({ ...inputs, email: e.target.value });
                    soundEngine.playTyping();
                  }}
                  placeholder="agent@domain.com..."
                  className="w-full rounded border border-amber-500/30 bg-slate-950 p-2.5 font-mono text-xs text-amber-200 placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-400 mb-1">
                DIRECTIVE_PAYLOAD [MESSAGE]
              </label>
              <textarea
                rows={4}
                required
                value={inputs.message}
                onChange={(e) => {
                  setInputs({ ...inputs, message: e.target.value });
                  soundEngine.playTyping();
                }}
                placeholder="Type your message payload or project specs for Tony Stark..."
                className="w-full rounded border border-amber-500/30 bg-slate-950 p-2.5 font-mono text-xs text-amber-200 placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isTransmitting}
              onMouseEnter={() => soundEngine.playHover()}
              className="interactive w-full glass-panel flex items-center justify-center gap-3 rounded-lg border-amber-400 py-3.5 font-mono text-sm font-bold text-white transition-all hover:bg-amber-500/25 hover:shadow-[0_0_35px_#ffd700] disabled:opacity-50"
            >
              {isTransmitting ? (
                <>
                  <RefreshCw className="h-4 w-4 text-amber-400 animate-spin" />
                  <span>CHARGING ARC REACTOR & TRANSMITTING PAYLOAD...</span>
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>DISPATCH TRANSMISSION TO STARK TOWER</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center bg-amber-950/40 border border-amber-500/60 rounded-xl space-y-4">
            <CheckCircle2 className="h-12 w-12 text-amber-400 mx-auto animate-bounce" />
            <h3 className="font-orbitron text-2xl font-bold text-white">
              TRANSMISSION RECEIVED BY J.A.R.V.I.S.
            </h3>
            <p className="font-rajdhani text-slate-300 max-w-md mx-auto">
              Your message payload has been securely routed to Tony Stark's personal terminal. J.A.R.V.I.S. will transmit a response within 24 standard hours.
            </p>
            <button
              onClick={() => {
                setTransmissionSent(false);
                setInputs({ name: '', email: '', message: '' });
                soundEngine.playClick();
              }}
              className="interactive rounded border border-amber-400 bg-amber-500/20 px-4 py-2 font-mono text-xs font-bold text-amber-300 hover:bg-amber-500/40"
            >
              SEND ANOTHER DIRECTIVE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
