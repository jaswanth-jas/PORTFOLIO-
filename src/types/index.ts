export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  modelShape: 'icosahedron' | 'torusKnot' | 'octahedron' | 'ringCore' | 'cubeCluster';
  accentColor: string;
  liveUrl?: string;
  githubUrl?: string;
  architectureDetails: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | '3D & Graphics' | 'Backend & Cloud' | 'Systems & WASM';
  level: number; // 0 to 100
  experience: string;
  iconName: string;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
  status: 'ACTIVE' | 'ARCHIVED' | 'CLASSIFIED';
}
