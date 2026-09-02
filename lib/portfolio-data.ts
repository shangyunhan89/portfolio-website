export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  accent: string;
};

export const navigation = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◉' },
  { label: 'Projects', href: '#projects', icon: '▣' },
  { label: 'Skills', href: '#skills', icon: '✦' },
  { label: 'Journey', href: '#journey', icon: '↝' },
  { label: 'Contact', href: '#contact', icon: '✉' },
];

export const captainStats = [
  { label: 'Curiosity', value: 92, icon: '♥', color: '#f06f8c' },
  { label: 'Creativity', value: 86, icon: '★', color: '#786ed4' },
  { label: 'Courage', value: 80, icon: '⚓', color: '#44b9ae' },
  { label: 'Energy', value: 84, icon: 'ϟ', color: '#f2aa55' },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'DriftMart',
    category: '3D Modelling · VR Interaction',
    description: 'An immersive VR supermarket where users explore cultures, discover everyday local life, and unwind at their own pace.',
    image: '/images/tidekeeper.png',
    tags: ['UNITY', 'BLENDER', 'UI/UX'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Willow Loop',
    category: 'Community Service · Sustainable Design',
    description: 'A willow catkin collecting device that captures airborne fluff in public spaces and reuses it to absorb oil pollution, creating a circular solution for cleaner communities.',
    image: '/images/shoreline-archive.png',
    tags: ['RHINO', 'SERVICE DESIGN', 'MATERIALS'],
    accent: 'lilac',
  },
  {
    number: '03',
    title: 'AI Fabric Lab',
    category: 'AI Textile · Generative Interaction',
    description: 'An AI-powered platform that generates interactive textile patterns from text or images, supporting real-time adjustment and multi-modal input.',
    image: '/images/deep-dive-lab.png',
    tags: ['STABLE DIFFUSION', 'LoRA', 'CONTROLNET'],
    accent: 'mint',
  },
];

export const driftMartProjectLog = {
  number: '01',
  title: 'DriftMart',
  subtitle: '3D Modelling · VR Interaction · UI/UX Design',
  tags: ['UNITY', 'BLENDER', 'UI/UX', 'VR'],
  overview: 'DriftMart is an immersive VR supermarket experience that combines cultural exploration with a calm, low-pressure shopping environment. Users can discover everyday products, local habits, and stories from different places while browsing at their own pace.',
  images: {
    hero: { path: '/images/driftmart/hero.png', label: 'Project hero image' },
    discover: [
      { path: '/images/driftmart/discover-01.png', label: 'Research and context' },
      { path: '/images/driftmart/discover-02.png', label: 'Early discovery map' },
      { path: '/images/driftmart/discover-03.png', label: 'Concept exploration' },
    ],
    design: [
      { path: '/images/driftmart/design-01.png', label: 'Environment design' },
      { path: '/images/driftmart/design-02.png', label: 'Supermarket modelling' },
      { path: '/images/driftmart/design-03.png', label: 'UI and interaction visuals' },
    ],
    experience: [
      { path: '/images/driftmart/experience-01.png', label: 'VR scene' },
      { path: '/images/driftmart/experience-02.png', label: 'Interaction screenshot' },
      { path: '/images/driftmart/experience-03.png', label: 'Character and NPC interaction' },
    ],
    outcome: { path: '/images/driftmart/outcome.png', label: 'Final project image' },
  },
  outcome: 'DriftMart brings cultural discovery and calm interaction into a playful VR environment designed for unhurried exploration.',
};

export const skills = [
  { name: 'UNITY', icon: '/icons/unity.png' },
  { name: 'BLENDER', icon: '/icons/blender.png' },
  { name: 'RHINO', icon: '/icons/rhino.png' },
  { name: 'FIGMA', icon: '/icons/figma.png' },
  { name: 'CLO', icon: '/icons/CLO.png' },
  { name: 'PYTHON', icon: '/icons/python.png' },
  { name: 'SPSS', icon: '/icons/SPSS.png' },
  { name: 'CODEX', icon: '/icons/codex.png' },
];

export const journey = [
  { year: '2021', note: 'Set sail on a creative path', icon: '/icons/1.png' },
  { year: '2023', note: 'Built projects & design skills', icon: '/icons/2.png' },
  { year: '2024', note: 'Explore service & sustainability', icon: '/icons/3.png' },
  { year: '2025', note: 'Create with AI & interaction', icon: '/icons/4.png' },
];
