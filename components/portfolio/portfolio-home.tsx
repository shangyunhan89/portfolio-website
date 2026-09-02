'use client';

import { useCallback, useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import {
  captainStats,
  journey,
  navigation,
  projects,
  skills,
  type Project,
} from '@/lib/portfolio-data';

function PixelButton({ href, children, variant = 'primary', reduceMotion = false }: { href: string; children: React.ReactNode; variant?: 'primary' | 'light'; reduceMotion?: boolean }) {
  return (
    <motion.a whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { y: 1 }} className={`pixel-button ${variant}`} href={href}>
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

function Navigation({ reduceMotion }: { reduceMotion: boolean }) {
  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    const section = document.querySelector(href);
    if (!section) return;
    event.preventDefault();
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  };

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="SYH.tide home" onClick={(event) => handleSectionClick(event, '#home')}><span className="brand-mark">⚓</span><span>SYH.tide</span></a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => <a key={item.label} href={item.href} onClick={(event) => handleSectionClick(event, item.href)}><span aria-hidden="true">{item.icon}</span>{item.label}</a>)}
      </nav>
      <a className="available-pill" href="#contact" onClick={(event) => handleSectionClick(event, '#contact')}><i /> Available for quests</a>
    </header>
  );
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="hero" id="home">
      <motion.img
        className="hero-scene"
        src="/images/captain-hero.png"
        alt="Pixel-art mint-haired captain sailing a small boat toward a lighthouse"
        animate={reduceMotion ? { scale: 1.012 } : { y: [-2, 2, -2], scale: 1.012 }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-shade" />
      <div className="hero-atmosphere" aria-hidden="true">
        <motion.span className="floating-cloud cloud-one" animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -2, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}><Cloud /></motion.span>
        <motion.span className="floating-cloud cloud-two" animate={reduceMotion ? undefined : { x: [0, -10, 0], y: [0, 2, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}><Cloud /></motion.span>
        {[0, 1, 2, 3].map((sparkle) => (
          <motion.span
            className={`hero-sparkle sparkle-${sparkle + 1}`}
            key={sparkle}
            animate={reduceMotion ? undefined : { opacity: [0.25, 0.8, 0.25], scale: [0.96, 1.06, 0.96] }}
            transition={{ duration: 3.6 + sparkle * 0.55, delay: sparkle * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          >✦</motion.span>
        ))}
      </div>
      <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <span className="speech-chip">AHOY! <b>✦</b></span>
        <p className="kicker">CREATIVE CAPTAIN · DIGITAL EXPLORER</p>
        <h1>I design delightful<br />things for the<br /><em>digital sea.</em></h1>
        <p className="hero-note">Part product designer, part creative coder — always charting a course toward useful, playful experiences.</p>
        <div className="hero-actions"><PixelButton href="#projects" reduceMotion={reduceMotion}>Explore my work</PixelButton><PixelButton href="#contact" variant="light" reduceMotion={reduceMotion}>Send a signal</PixelButton></div>
      </motion.div>
      <div className="coordinate-chip">LAT 36.8° N · LONG 174.7° E</div>
    </section>
  );
}

function CaptainStatus() {
  return (
    <article className="pixel-panel status-panel">
      <SectionTitle eyebrow="PROFILE" title="Captain Status" />
      <div className="status-grid">
        <div className="avatar-card"><img src="/images/captain-hero.png" alt="SYH, the mint-haired captain" /><span>LV. 08</span></div>
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
      <p className="big-copy">Hi, I’m <strong>Yunhan Shang</strong> — a multidisciplinary designer inspired by everyday life, human experiences, and the possibilities hidden in ordinary things.</p>
      <p>I enjoy turning observations into thoughtful design explorations across experiences, systems, and emerging technologies.</p>
      <p>I also love traveling and discovering new cultures and perspectives — for me, design is much like a journey: a way to stay curious, explore the unknown, and imagine new possibilities.</p>
    </article>
  );
}

function ProjectCard({ project, reduceMotion }: { project: Project; reduceMotion: boolean }) {
  return (
    <motion.article className={`project-card ${project.accent}`} initial="rest" whileHover={reduceMotion ? 'rest' : 'hover'} animate="rest" variants={{ rest: { y: 0 }, hover: { y: -5 } }} transition={{ duration: 0.22, ease: 'easeOut' }}>
      <motion.div className="project-number" variants={{ rest: { x: 0 }, hover: { x: 3 } }} transition={{ duration: 0.22 }}>{project.number}</motion.div>
      <div className="project-image"><motion.img src={project.image} alt="" variants={{ rest: { scale: 1 }, hover: { scale: 1.025 } }} transition={{ duration: 0.35, ease: 'easeOut' }} /></div>
      <div className="project-body">
        <span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        <button type="button" aria-label={`View ${project.title} case study`}>View case study <span>›</span></button>
      </div>
    </motion.article>
  );
}

function Projects({ reduceMotion }: { reduceMotion: boolean }) {
  return <section className="section-block" id="projects"><SectionTitle eyebrow="SELECTED TREASURES" title="Featured Projects" action="03 discoveries" /><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} reduceMotion={reduceMotion} />)}</div></section>;
}

function Skills() {
  return (
    <section className="pixel-panel skills-panel" id="skills">
      <SectionTitle
        eyebrow="SHIP'S INVENTORY"
        title="Skills & Tools"
      />

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img
              className="skill-icon"
              src={skill.icon}
              alt={skill.name}
            />
            <b>{skill.name}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function makeJourneyDasharray(visibleLength: number, totalLength: number) {
  const hiddenLength = Math.max(totalLength * 2, 1);
  if (visibleLength <= 0) return `0 ${hiddenLength}`;

  const dash = 7;
  const gap = 7;
  const endpointDash = 2.5;
  const segments: number[] = [];
  let consumed = 0;

  while (consumed + dash + gap + endpointDash < visibleLength) {
    segments.push(dash, gap);
    consumed += dash + gap;
  }

  const remaining = visibleLength - consumed;
  if (remaining <= dash) {
    segments.push(remaining, hiddenLength);
  } else {
    const finalDash = Math.min(endpointDash, remaining - dash);
    segments.push(dash, Math.max(0, remaining - dash - finalDash), finalDash, hiddenLength);
  }

  return segments.map((segment) => segment.toFixed(3)).join(' ');
}

function Journey({ reduceMotion }: { reduceMotion: boolean }) {
  const routePathRef = useRef<SVGPathElement>(null);
  const progress = useMotionValue(reduceMotion ? 1 : 0);
  const routeDasharray = useMotionValue('0 1000');
  const boatX = useMotionValue(-1);
  const boatY = useMotionValue(1);
  const boatOpacity = useMotionValue(1);

  const updateJourneyFromProgress = useCallback((latestProgress: number) => {
    const routePath = routePathRef.current;
    if (!routePath) return;

    const totalLength = routePath.getTotalLength();
    const clampedProgress = Math.max(0, Math.min(1, latestProgress));
    const visibleLength = totalLength * clampedProgress;
    const point = routePath.getPointAtLength(visibleLength);

    routeDasharray.set(makeJourneyDasharray(visibleLength, totalLength));
    boatX.set(point.x - 7);
    boatY.set(point.y - 19);
  }, [boatX, boatY, routeDasharray]);

  useMotionValueEvent(progress, 'change', updateJourneyFromProgress);

  useEffect(() => {
    let cancelled = false;
    let sailAnimation: ReturnType<typeof animate> | undefined;
    let fadeAnimation: ReturnType<typeof animate> | undefined;
    const wait = (milliseconds: number) => new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

    const runJourney = async () => {
      if (reduceMotion) {
        progress.set(1);
        boatOpacity.set(1);
        updateJourneyFromProgress(1);
        return;
      }

      while (!cancelled) {
        progress.set(0);
        boatOpacity.set(1);
        updateJourneyFromProgress(0);

        sailAnimation = animate(progress, 1, { duration: 10, ease: 'linear' });
        await sailAnimation;
        if (cancelled) return;

        await wait(650);
        if (cancelled) return;

        fadeAnimation = animate(boatOpacity, 0.45, { duration: 0.35, ease: 'easeOut' });
        await fadeAnimation;
        if (cancelled) return;

        await wait(250);
      }
    };

    void runJourney();

    return () => {
      cancelled = true;
      sailAnimation?.stop();
      fadeAnimation?.stop();
    };
  }, [boatOpacity, progress, reduceMotion, updateJourneyFromProgress]);

  return (
    <section className="pixel-panel journey-panel" id="journey">
      <SectionTitle eyebrow="ROUTE SO FAR" title="Journey Log" action="Adventure continues" />
      <div className="journey-line">
        <svg className="journey-route" viewBox="0 0 100 22" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            id="journey-route"
            ref={routePathRef}
            d="M3 12 C10 4 19 5 26 12 S42 19 49 12 S65 4 72 12 S88 19 97 11"
            style={{ strokeDasharray: routeDasharray }}
          />
          <motion.g style={{ opacity: boatOpacity }}>
            <motion.g
              animate={reduceMotion ? undefined : { y: [-2, 2, -2] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.image
                className="journey-boat-image"
                href="/images/journey-boat.png"
                x={boatX}
                y={boatY}
                width="14"
                height="14"
                preserveAspectRatio="xMidYMid meet"
              />
            </motion.g>
          </motion.g>
        </svg>
        {journey.map((stop) => <div className="journey-stop" key={stop.year}><img
  className="journey-icon"
  src={stop.icon}
  alt=""
/><b>{stop.year}</b><strong>{stop.title}</strong><small>{stop.note}</small></div>)}
      </div>
    </section>
  );
}

function Contact({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="contact" id="contact">
      <div><span className="section-eyebrow light">OPEN CHANNEL</span><h2>Ready for a new adventure?</h2><p>I’m always happy to hear about thoughtful products, curious collaborations, or new adventures we might set sail on together.</p></div>
      <div className="contact-actions"><PixelButton href="shangyunhan89@gmail.com" reduceMotion={reduceMotion}>Send a message</PixelButton><a href="#home">Back to top ↑</a></div>
      <div className="footer-row"><span>© 2026 SYH.tide</span><span>MADE WITH ♡ + REACT</span><span>CALM SEAS · FULL HEART</span></div>
    </section>
  );
}

export function PortfolioHome() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  return <main><div className="game-shell"><Navigation reduceMotion={reduceMotion} /><Hero reduceMotion={reduceMotion} /><section className="intro-grid"><CaptainStatus /><About /></section><Projects reduceMotion={reduceMotion} /><section className="lower-grid"><Skills /><Journey reduceMotion={reduceMotion} /></section><Contact reduceMotion={reduceMotion} /></div></main>;
}
