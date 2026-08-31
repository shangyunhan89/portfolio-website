'use client';

import { motion } from 'framer-motion';
import {
  captainStats,
  journey,
  navigation,
  projects,
  skills,
  type Project,
} from '@/lib/portfolio-data';

function PixelButton({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'light' }) {
  return (
    <motion.a whileHover={{ y: -2 }} whileTap={{ y: 1 }} className={`pixel-button ${variant}`} href={href}>
      {children}<span aria-hidden="true">›</span>
    </motion.a>
  );
}

function SectionTitle({ eyebrow, title, action }: { eyebrow: string; title: string; action?: string }) {
  return (
    <div className="section-heading">
      <div><span className="section-eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {action && <span className="section-action">{action} ✦</span>}
    </div>
  );
}

function Navigation() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Mara Tide home"><span className="brand-mark">⚓</span><span>MARA.TIDE</span></a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => <a key={item.label} href={item.href}><span aria-hidden="true">{item.icon}</span>{item.label}</a>)}
      </nav>
      <a className="available-pill" href="#contact"><i /> Available for quests</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/images/captain-hero.png" alt="Pixel-art mint-haired captain sailing a small boat toward a lighthouse" />
      <div className="hero-shade" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="speech-chip">AHOY! <b>✦</b></span>
        <p className="kicker">CREATIVE CAPTAIN · DIGITAL EXPLORER</p>
        <h1>I design delightful things for the <em>digital sea.</em></h1>
        <p className="hero-note">Part product designer, part creative coder — always charting a course toward useful, playful experiences.</p>
        <div className="hero-actions"><PixelButton href="#projects">Explore my work</PixelButton><PixelButton href="#contact" variant="light">Send a signal</PixelButton></div>
      </motion.div>
      <div className="coordinate-chip">LAT 36.8° N · LONG 174.7° E</div>
    </section>
  );
}

function CaptainStatus() {
  return (
    <article className="pixel-panel status-panel">
      <SectionTitle eyebrow="PLAYER PROFILE" title="Captain Status" />
      <div className="status-grid">
        <div className="avatar-card"><img src="/images/captain-hero.png" alt="Mara, the mint-haired captain" /><span>LV. 08</span></div>
        <div className="stats">
          {captainStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-label"><b style={{ color: stat.color }}>{stat.icon}</b><span>{stat.label}</span><small>{stat.value}/100</small></div>
              <div className="stat-track"><i style={{ width: `${stat.value}%`, background: stat.color }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="xp-row"><span>XP</span><div><i /></div><small>2,840 / 3,200</small></div>
    </article>
  );
}

function About() {
  return (
    <article className="pixel-panel about-panel" id="about">
      <SectionTitle eyebrow="CAPTAIN'S LOG" title="About Me" />
      <p className="big-copy">Hi, I’m <strong>Mara</strong> — a multidisciplinary designer and front-end tinkerer with a soft spot for thoughtful details.</p>
      <p>I turn complex ideas into clear, friendly experiences. My favorite projects sit where visual systems, storytelling, and useful technology meet.</p>
      <div className="mini-notes"><span>☼ BASED BY THE SEA</span><span>♡ HUMAN-CENTERED</span><span>✦ FOREVER CURIOUS</span></div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article className={`project-card ${project.accent}`} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <div className="project-number">{project.number}</div>
      <div className="project-image"><img src={project.image} alt="" /></div>
      <div className="project-body">
        <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        <button type="button" aria-label={`View ${project.title} case study`}>View case study <span>›</span></button>
      </div>
    </motion.article>
  );
}

function Projects() {
  return <section className="section-block" id="projects"><SectionTitle eyebrow="SELECTED TREASURES" title="Featured Projects" action="03 discoveries" /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>;
}

function Skills() {
  return <section className="pixel-panel skills-panel" id="skills"><SectionTitle eyebrow="SHIP'S INVENTORY" title="Skills & Tools" /><div className="skill-grid">{skills.map((skill) => <div className="skill-item" key={skill.name}><span>{skill.icon}</span><b>{skill.name}</b></div>)}</div></section>;
}

function Journey() {
  return (
    <section className="pixel-panel journey-panel" id="journey">
      <SectionTitle eyebrow="ROUTE SO FAR" title="Journey Log" action="Adventure continues" />
      <div className="journey-line">
        {journey.map((stop, index) => <div className="journey-stop" key={stop.year}><span className="journey-icon">{stop.icon}</span><b>{stop.year}</b><strong>{stop.title}</strong><small>{stop.note}</small>{index < journey.length - 1 && <i aria-hidden="true" />}</div>)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div><span className="section-eyebrow light">OPEN CHANNEL</span><h2>Ready for a new adventure?</h2><p>I’m always happy to hear about thoughtful products, curious collaborations, or a particularly good ocean fact.</p></div>
      <div className="contact-actions"><PixelButton href="mailto:hello@example.com">Send a message</PixelButton><a href="#home">Back to top ↑</a></div>
      <div className="footer-row"><span>© 2026 MARA TIDE</span><span>MADE WITH ♡ + REACT</span><span>CALM SEAS · FULL HEART</span></div>
    </section>
  );
}

export function PortfolioHome() {
  return <main><div className="game-shell"><Navigation /><Hero /><section className="intro-grid"><CaptainStatus /><About /></section><Projects /><section className="lower-grid"><Skills /><Journey /></section><Contact /></div></main>;
}
