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
  { label: 'Courage', value: 78, icon: '⚓', color: '#44b9ae' },
  { label: 'Energy', value: 84, icon: 'ϟ', color: '#f2aa55' },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'Tidekeeper',
    category: 'PRODUCT DESIGN · MOBILE',
    description: 'A pocket-sized sea log that turns shifting plans, weather notes, and daily rituals into one calm route.',
    image: '/images/tidekeeper.png',
    tags: ['RESEARCH', 'UI/UX', 'PROTOTYPE'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Shoreline Archive',
    category: 'BRAND SYSTEM · WEB',
    description: 'A warm digital archive for collecting coastal stories, field notes, and tiny moments worth keeping.',
    image: '/images/shoreline-archive.png',
    tags: ['IDENTITY', 'WEB', 'SYSTEMS'],
    accent: 'lilac',
  },
  {
    number: '03',
    title: 'Deep Dive Lab',
    category: 'CREATIVE CODE · PLAY',
    description: 'An experimental underwater playground where motion, sound, and curious creatures react to every visitor.',
    image: '/images/deep-dive-lab.png',
    tags: ['REACT', 'MOTION', 'WEBGL'],
    accent: 'mint',
  },
];

export const skills = [
  { name: 'Product Design', icon: '◇' },
  { name: 'React', icon: '⚛' },
  { name: 'Figma', icon: '◆' },
  { name: 'Prototyping', icon: '▦' },
  { name: 'Illustration', icon: '✎' },
  { name: 'Creative Code', icon: '</>' },
  { name: 'Design Systems', icon: '▤' },
  { name: 'Framer Motion', icon: '↟' },
];

export const journey = [
  { year: '2021', title: 'Left the harbor', note: 'Started a creative path', icon: '⚓' },
  { year: '2023', title: 'Found my crew', note: 'Built products with kind teams', icon: '♣' },
  { year: '2025', title: 'Crossed new waters', note: 'Explored code and interaction', icon: '☸' },
  { year: 'NOW', title: 'Next horizon', note: 'Open to thoughtful adventures', icon: '◫' },
];
