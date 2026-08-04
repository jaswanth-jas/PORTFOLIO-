import type { Project, Skill, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'ALEX CHEN',
  handle: 'STARK_JARVIS_SYSTEMS',
  title: 'CHIEF STARK INDUSTRIES WEBGL ARCHITECT & J.A.R.V.I.S. ENGINE CREATOR',
  subtext: 'Good day, sir. Operating Mark LXXXV suit avionics, high-yield Arc Reactor WebGL graphics, and real-time J.A.R.V.I.S. HUD command matrices.',
  sector: 'STARK TOWER // MALIBU POINT 10880',
  status: 'J.A.R.V.I.S. ONLINE // ARC REACTOR AT 100% CAPACITY',
  stats: [
    { label: 'MARK SUITS BUILT', value: '85 MODS' },
    { label: 'ARC OUTPUT', value: '10.2 GW' },
    { label: 'JARVIS LATENCY', value: '0.1 ms' },
    { label: 'DEFENSE INTEGRITY', value: '100%' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'mark-50-neural-hud',
    title: 'MARK-50 NEURAL HUD',
    subtitle: 'Nanotech Suit Avionics & Real-Time Arc Reactor Dashboard',
    category: 'Stark Avionics / WebGL',
    description: 'An interactive 3D nanotech HUD interface monitoring flight vectors, suit oxygen levels, and plasma repulsor telemetry in real time.',
    longDescription: 'MARK-50 NEURAL HUD processes 100,000 suit sensor channels using custom WebGL compute shaders and React Three Fiber. It gives Tony Stark real-time flight telemetry, nanotech armor status, and instant repulsor energy distribution.',
    tags: ['Three.js', 'React Three Fiber', 'WebGL Shaders', 'GLSL', 'TypeScript', 'TailwindCSS'],
    metrics: [
      { label: 'REPULSOR FREQ', value: '120 FPS' },
      { label: 'SUIT CHANNELS', value: '100,000+' },
      { label: 'ARC RESPONSE', value: '< 0.1ms' },
    ],
    modelShape: 'icosahedron',
    accentColor: '#ffd700',
    liveUrl: 'https://example.com/mark-50-hud',
    githubUrl: 'https://github.com/example/mark-50-neural-hud',
    architectureDetails: [
      'GPGPU particle simulation of nanotech suit assembly using custom GLSL shaders',
      'InstancedMesh geometry rendering for zero-garbage collection overhead during supersonic flight',
      'Real-time WebSocket telemetry stream for Arc Reactor power distribution',
      'J.A.R.V.I.S. audio feedback synthesizer on suit diagnostic selection'
    ]
  },
  {
    id: 'mark-85-hyper-drive',
    title: 'MARK-85 HYPER-DRIVE',
    subtitle: 'Deep Space Mission Control & Quantum Tunnel HUD',
    category: 'Quantum Flight / Telemetry',
    description: 'A space-flight command interface with WebGPU rendering, tactical radar, and sub-millisecond quantum tunnel navigation.',
    longDescription: 'Designed for Mark LXXXV deep space and time-travel operations, HYPER-DRIVE HUD displays orbital trajectories, quantum GPS coordinates, thermal shielding, and tactical threat sensor grids with Stark gold and arc blue glassmorphic aesthetic.',
    tags: ['React', 'Three.js', 'GSAP', 'WebAudio API', 'TailwindCSS', 'Zustand'],
    metrics: [
      { label: 'DATA REFRESH', value: '120 Hz' },
      { label: 'HUD LAYER COUNT', value: '24 Layers' },
      { label: 'MEMORY FOOTPRINT', value: '12 MB' },
    ],
    modelShape: 'torusKnot',
    accentColor: '#00f3ff',
    liveUrl: 'https://example.com/mark-85-drive',
    githubUrl: 'https://github.com/example/mark-85-hyper-drive',
    architectureDetails: [
      'Procedural JARVIS HUD overlay shader with chromatic aberration sliders',
      'Dual-pass Bloom post-processing pipeline for high-intensity Arc Reactor glows',
      'Reactive Web Audio synthesizer for keypress and warning telemetry alarms',
      'Adaptive mobile viewport downsampling for low-tier GPU devices'
    ]
  },
  {
    id: 'hulkbuster-sim',
    title: 'HULKBUSTER PROTOCOL',
    subtitle: 'Heavy Armor Kinetic Engine & Veronica Satellite Link',
    category: 'Heavy Physics / WebGPU',
    description: 'Kinetic power simulation engine rendering heavy armor mesh physics and orbital satellite drop replacement pods.',
    longDescription: 'HULKBUSTER PROTOCOL simulates Veronica satellite deployment vectors, structural integrity loss, and instant repair pod trajectory calculations with procedural 3D impact physics.',
    tags: ['Three.js', 'Procedural Mesh', 'Physics GPU', 'WebGPU', 'TypeScript'],
    metrics: [
      { label: 'KINETIC FORCE', value: '500 Tons' },
      { label: 'VERONICA PODS', value: '12 Pods' },
      { label: 'DRAWCALLS', value: '2 Draw Calls' },
    ],
    modelShape: 'ringCore',
    accentColor: '#ff1a1a',
    liveUrl: 'https://example.com/hulkbuster',
    githubUrl: 'https://github.com/example/hulkbuster-protocol',
    architectureDetails: [
      'Single draw-call InstancedBufferGeometry architecture for maximum armor density',
      'Volumetric atmospheric fog shaders with dynamic plasma light dispersion',
      'Custom procedural texture synthesis on GPU for metallic armor plates',
      'Interactive flight camera mode with collision detection'
    ]
  },
  {
    id: 'jarvis-core-ai',
    title: 'J.A.R.V.I.S. QUANTUM CORE',
    subtitle: 'Autonomous Holographic AI & Spatial Code Editor',
    category: 'AI Assistant Tools',
    description: 'A revolutionary spatial IDE that transforms codebases into navigable 3D node constellations with live J.A.R.V.I.S. halos.',
    longDescription: 'J.A.R.V.I.S. QUANTUM CORE visualizes abstract syntax trees and suit control code in 3D holographic space. Developers can walk through function call stacks, inspect suit telemetry variables, and trigger hot reload directly in spatial view.',
    tags: ['React', 'Monaco Editor', 'Three.js', 'WebSockets', 'TailwindCSS'],
    metrics: [
      { label: 'AST NODES LOADED', value: '18,000' },
      { label: 'HOT RELOAD SPEED', value: '20 ms' },
      { label: 'USER EFFICIENCY', value: '+450%' },
    ],
    modelShape: 'octahedron',
    accentColor: '#ffd700',
    liveUrl: 'https://example.com/jarvis-core',
    githubUrl: 'https://github.com/example/jarvis-quantum-core',
    architectureDetails: [
      'Force-directed 3D graph layout physics running on Web Workers',
      'Monaco Editor integration wrapped inside WebGL textured floating planes',
      'Real-time collaborative editing using CRDT synchronization protocol',
      'Integrated matrix code terminal with custom JARVIS bash runner'
    ]
  },
  {
    id: 'stark-tower-matrix',
    title: 'STARK TOWER METROPOLIS',
    subtitle: 'Decentralized Holographic Desktop & Defense Grid',
    category: 'Spatial Web OS',
    description: 'A browser-based spatial operating system featuring draggable 3D suit windows, widget orbits, and encrypted neural drive.',
    longDescription: 'STARK TOWER METROPOLIS reorganizes computing interfaces into concentric 3D spatial rings around the user. Supports floating windows, terminal shells, 3D armor file browsers, and Arc Reactor audio visualizers.',
    tags: ['React Three Fiber', 'Zustand', 'TailwindCSS', 'WebAudio', 'IndexedDB'],
    metrics: [
      { label: 'SYSTEM APPS', value: '16 Apps' },
      { label: 'FRAME STABILITY', value: '99.9%' },
      { label: 'BOOT TIME', value: '0.4 Sec' },
    ],
    modelShape: 'cubeCluster',
    accentColor: '#00f3ff',
    liveUrl: 'https://example.com/stark-tower',
    githubUrl: 'https://github.com/example/stark-tower-matrix',
    architectureDetails: [
      'Spatial 3D window manager with physics-based snap-to-grid collision',
      'Local-first encrypted storage using Web Crypto API & IndexedDB',
      'Custom theme engine with Stark gold and arc blue glowing glass shaders',
      'Built-in Arc Reactor audio reactive 3D visualizer canvas'
    ]
  }
];

export const SKILLS: Skill[] = [
  { id: 'threejs', name: 'Three.js / R3F', category: '3D & Graphics', level: 99, experience: '6+ Yrs', iconName: 'Box', orbitRadius: 2.8, orbitSpeed: 0.8, color: '#ffd700' },
  { id: 'webgl', name: 'WebGL & GLSL Shaders', category: '3D & Graphics', level: 96, experience: '5 Yrs', iconName: 'Cpu', orbitRadius: 3.8, orbitSpeed: -0.6, color: '#00f3ff' },
  { id: 'react', name: 'React 19 & Next.js', category: 'Frontend', level: 98, experience: '7 Yrs', iconName: 'Code2', orbitRadius: 4.8, orbitSpeed: 0.5, color: '#ff1a1a' },
  { id: 'typescript', name: 'TypeScript Avionics', category: 'Frontend', level: 96, experience: '6 Yrs', iconName: 'FileCode', orbitRadius: 3.2, orbitSpeed: -0.9, color: '#ffd700' },
  { id: 'gsap', name: 'GSAP Flight Animations', category: 'Frontend', level: 94, experience: '5 Yrs', iconName: 'Zap', orbitRadius: 4.2, orbitSpeed: 0.7, color: '#00f3ff' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 96, experience: '5 Yrs', iconName: 'Layers', orbitRadius: 2.2, orbitSpeed: -1.1, color: '#ffd700' },
  { id: 'webgpu', name: 'WebGPU Next-Gen Arc', category: '3D & Graphics', level: 92, experience: '2 Yrs', iconName: 'Sparkles', orbitRadius: 5.4, orbitSpeed: 0.4, color: '#ff1a1a' },
  { id: 'nodejs', name: 'Node.js & Express', category: 'Backend & Cloud', level: 92, experience: '6 Yrs', iconName: 'Server', orbitRadius: 4.6, orbitSpeed: -0.5, color: '#00f3ff' },
  { id: 'wasm', name: 'Rust & WASM Avionics', category: 'Systems & WASM', level: 88, experience: '3 Yrs', iconName: 'Terminal', orbitRadius: 5.0, orbitSpeed: 0.6, color: '#ffd700' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'CHIEF STARK INDUSTRIES WEBGL ARCHITECT',
    company: 'STARK INDUSTRIES LABS',
    location: 'MALIBU POINT // NEW YORK',
    period: '2024 - PRESENT',
    type: 'FULL-TIME',
    status: 'ACTIVE',
    description: 'Leading a team of 14 suit avionics engineers developing J.A.R.V.I.S. WebGL/WebGPU spatial engines for Mark LXXXV suit telemetry and defense grids.',
    achievements: [
      'Architected 3D Arc Reactor viewport rendering framework reducing suit startup time by 75%',
      'Developed custom GLSL post-processing pipelines for real-time nanotech armor lighting',
      'Pioneered WebGPU rendering backends for high-density plasma repulsor physics simulations'
    ],
    techStack: ['Three.js', 'React Three Fiber', 'WebGPU', 'GLSL', 'Rust', 'TypeScript']
  },
  {
    id: 'exp-2',
    title: 'SENIOR FLIGHT AVIONICS & HUD SPECIALIST',
    company: 'AVENGERS COMPLEX R&D',
    location: 'UPSTATE NEW YORK // REMOTE',
    period: '2021 - 2024',
    type: 'CONTRACT',
    status: 'ARCHIVED',
    description: 'Designed and deployed high-performance 3D WebGL suit dashboards and scifi HUD interfaces for Mark armor suit series.',
    achievements: [
      'Engineered interactive 3D digital twin suit dashboard handling 100,000 telemetry channels',
      'Implemented instanced rendering systems maintaining stable 120 FPS on supersonic flights',
      'Mentored 8 suit interface engineers in modern WebGL math and shader optimizations'
    ],
    techStack: ['Three.js', 'React', 'GSAP', 'TailwindCSS', 'WebAudio API', 'Vite']
  },
  {
    id: 'exp-3',
    title: 'CREATIVE GRAPHICS & HUD DEVELOPER',
    company: 'MALIBU POINT RESEARCH',
    location: 'MALIBU, CA',
    period: '2019 - 2021',
    type: 'FULL-TIME',
    status: 'ARCHIVED',
    description: 'Crafted interactive 3D promotional websites, WebGL canvas experiments, and immersive suit design tools for Tony Stark.',
    achievements: [
      'Won 4 Awwwards Site of the Day accolades for immersive WebGL 3D suit experience design',
      'Created reusable library of shader glass materials and glowing Arc particle systems',
      'Reduced memory leaks by 95% across long-running WebGL canvas suit viewports'
    ],
    techStack: ['JavaScript', 'Three.js', 'CSS3', 'GLSL Shaders', 'HTML5 Canvas']
  }
];
