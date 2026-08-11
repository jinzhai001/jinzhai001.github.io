import { useEffect, useState } from 'react'
import { projects, site, thoughts, type Project } from './config/site'

const Arrow = () => <span className="arrow" aria-hidden="true">→</span>

function ProjectArtwork({ project }: { project: Project }) {
  if (project.slug === 'taskradar') {
    return <div className="project-art task-art" aria-hidden="true">
      <div className="art-top"><span>TaskRadar</span><span>INBOX / 03</span></div>
      <div className="task-row"><i className="check" /><div><b>Design review</b><small>Tomorrow · 14:00 · ZJU</small></div><em>new</em></div>
      <div className="task-row muted"><i className="check" /><div><b>Submit application</b><small>Friday · 23:59</small></div></div>
      <p>Screenshot → intent</p>
    </div>
  }
  if (project.slug === 'cvget') {
    return <div className="project-art cv-art" aria-hidden="true">
      <div className="art-top"><span>CVGet</span><span>LOCAL / FIRST</span></div>
      <div className="cv-layout"><aside><i /><i /><i className="active" /><i /></aside><div>{['Lin, Wei', 'Chen, Yu', 'Zhang, Qing'].map((name, index) => <p key={name} className={index === 1 ? 'selected' : ''}><b>{name}</b><span>AI Product</span></p>)}</div></div>
      <p>Private candidate intelligence</p>
    </div>
  }
  return <div className="project-art game-art" aria-hidden="true">
    <div className="art-top"><span>遗忘之饮</span><span>CHAPTER 01</span></div>
    <div className="game-copy"><span>What do you keep?</span><b>MEMORY<br />IS A CHOICE</b><div><i>Remember</i><i>Release</i></div></div>
  </div>
}

function ProjectRow({ project }: { project: Project }) {
  return <article className="work-row">
    <ProjectArtwork project={project} />
    <div className="work-copy">
      <div className="work-kicker"><span>{project.number}</span><span>{project.eyebrow}</span></div>
      <h3>{project.title}</h3>
      <p className="work-summary">{project.summary}</p>
      <p className="work-role"><b>My role</b>{project.role}</p>
      <a href={`#/projects/${project.slug}`} className="case-link">View case study <Arrow /></a>
    </div>
  </article>
}

function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Aban home">Aban<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#writing">Notes</a></nav>
      <a className="header-contact" href={`mailto:${site.email}`}>Email <Arrow /></a>
    </header>
    <main id="main">
      <section id="top" className="intro">
        <div className="intro-title"><p>AI Product / Agent / Game AI</p><h1>Aban</h1></div>
        <div className="intro-copy"><p>I build product concepts and prototypes around AI systems, agents and interactive experiences.</p><p>Currently an undergraduate at Zhejiang University, based in {site.location}.</p><div className="intro-links"><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${site.email}`}>Email</a></div></div>
      </section>

      <section id="work" className="section">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Product work,<br />in progress.</h2></div><p>Projects where I define the problem, shape the interaction, and prototype the system behind it.</p></div>
        <div className="work-list">{projects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div>
      </section>

      <section id="about" className="section focus-section">
        <div className="section-head"><div><p className="eyebrow">About / current focus</p><h2>Learning by<br />making.</h2></div><p>I care about systems that are legible, useful and worth returning to—especially when AI is part of the interaction.</p></div>
        <div className="focus-list"><p><span>01</span>AI product design <em>for real decisions</em></p><p><span>02</span>Agent interactions <em>that retain human control</em></p><p><span>03</span>Game AI <em>as a medium for agency and emotion</em></p></div>
      </section>

      <section id="writing" className="section writing-section">
        <div className="section-head"><div><p className="eyebrow">Notes</p><h2>Thinking<br />out loud.</h2></div><p>Short notes on AI products, agents, Game AI and how new systems find their place in people’s lives.</p></div>
        <div className="notes-list">{thoughts.map((thought) => <article key={thought.title}><p>{thought.tag}</p><h3>{thought.title}</h3><span>{thought.date}</span></article>)}</div>
      </section>
    </main>
    <Footer />
  </>
}

function ProjectPage({ project }: { project: Project }) {
  useEffect(() => { window.scrollTo(0, 0) }, [project.slug])
  return <>
    <header className="site-header detail-header"><a className="brand" href="#top" aria-label="Aban home">Aban<span>.</span></a><a className="back-link" href="#work">← All work</a></header>
    <main className="case-page">
      <section className="case-intro"><div className="case-meta"><span>{project.number}</span><span>{project.eyebrow}</span></div><h1>{project.title}</h1><p>{project.summary}</p></section>
      <ProjectArtwork project={project} />
      <section className="case-overview"><div><p className="eyebrow">The product point of view</p><h2>{project.outcome}</h2></div><p>{project.description}</p></section>
      <section className="case-grid"><div><p className="eyebrow">My contribution</p><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">What the system does</p><ul>{project.focus.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Built with</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></section>
      <div className="case-next"><a href={`#/projects/${projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length].slug}`}>Next project <Arrow /></a></div>
    </main>
    <Footer />
  </>
}

function Footer() {
  return <footer className="footer"><div><p className="eyebrow">Contact</p><h2>Let’s make<br />something useful.</h2><a href={`mailto:${site.email}`}>{site.email} <Arrow /></a></div><p>© {new Date().getFullYear()} Aban<br />{site.school}</p></footer>
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => { const update = () => setHash(window.location.hash); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  const slug = hash.match(/^#\/projects\/([\w-]+)/)?.[1]
  const project = projects.find((item) => item.slug === slug)
  return project ? <ProjectPage project={project} /> : <Home />
}
