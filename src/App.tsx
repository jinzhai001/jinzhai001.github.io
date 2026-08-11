import { useEffect, useState } from 'react'
import { projects, site, thoughts, type Project } from './config/site'

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>

function ProjectVisual({ project, detail = false }: { project: Project; detail?: boolean }) {
  return (
    <div className={`project-visual visual-${project.accent} ${detail ? 'visual-detail' : ''}`} aria-hidden="true">
      {project.slug === 'taskradar' && <><span className="scan-line" /><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="signal signal-one" /><span className="signal signal-two" /><b>●</b></>}
      {project.slug === 'cvget' && <><span className="data-card card-one"><i /> <i /> <i /></span><span className="data-card card-two"><i /> <i /></span><span className="data-dot dot-one" /><span className="data-dot dot-two" /><span className="data-dot dot-three" /></>}
      {project.slug === 'forgotten-drink' && <><span className="moon" /><span className="liquid liquid-one" /><span className="liquid liquid-two" /><span className="memory-text">REMEMBER<br />/ RELEASE</span></>}
    </div>
  )
}

function Home() {
  const [activeProject, setActiveProject] = useState(projects[0].slug)
  const active = projects.find((project) => project.slug === activeProject) ?? projects[0]

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Aban — home">A<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#thoughts">Thoughts</a>
      </nav>
      <a className="header-contact" href="#contact">Let’s talk <Arrow /></a>
    </header>

    <main id="main">
      <section id="top" className="hero section-pad">
        <div className="hero-meta reveal">Based in {site.location}<span /> Building in public, selectively</div>
        <h1 className="hero-title"><span>I make room for</span><em>intelligence</em><span>in products & play.</span></h1>
        <div className="hero-bottom">
          <p>I explore AI-native products, agents and interactive experiences—where useful systems meet human curiosity.</p>
          <a className="circle-link" href="#work"><span>Selected<br />work</span><Arrow /></a>
        </div>
        <div className="hero-gesture" aria-hidden="true"><span>✳</span><i /></div>
      </section>

      <section id="about" className="about section-pad section-rule">
        <p className="section-label">( About )</p>
        <div className="about-copy">
          <h2>Studying at Zhejiang University. Following the moment technology starts to feel <em>alive.</em></h2>
          <div>
            <p>I’m Aban, an undergraduate drawn to the product questions around AI agents, Game AI and human–AI interaction.</p>
            <p>Right now I’m learning by making: small tools, private systems, and playable ideas.</p>
          </div>
        </div>
        <div className="interest-row" aria-label="Areas of exploration"><span>AI Product</span><span>AI Agent</span><span>Game AI</span><span>Human–AI Interaction</span><span>AI Native</span></div>
      </section>

      <section id="work" className="work section-pad section-rule">
        <div className="section-heading"><p className="section-label">( Selected work )</p><p>Three explorations in turning intelligence into a better experience.</p></div>
        <div className="work-grid">
          <div className="project-list" aria-label="Selected projects">
            {projects.map((project) => <button key={project.slug} aria-pressed={activeProject === project.slug} className={activeProject === project.slug ? 'is-active' : ''} onMouseEnter={() => setActiveProject(project.slug)} onFocus={() => setActiveProject(project.slug)} onClick={() => setActiveProject(project.slug)}>
              <span>{project.number}</span><strong>{project.title}</strong><small>{project.eyebrow}</small><Arrow />
            </button>)}
          </div>
          <div className="project-preview" aria-live="polite">
            <ProjectVisual key={active.slug} project={active} />
            <p className="eyebrow">{active.eyebrow}</p>
            <h3>{active.summary}</h3>
            <a className="text-link" href={`#/projects/${active.slug}`}>Read the project <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="exploration section-pad section-rule">
        <div className="section-heading"><p className="section-label">( In exploration )</p><p>Not a timeline. More a constellation of things I’m thinking through.</p></div>
        <div className="exploration-grid">
          <div className="school-block"><span>Currently at</span><h2>Zhejiang<br />University</h2><p>Undergraduate · Hangzhou</p></div>
          <div className="exploration-list"><span>01</span><p>Designing <em>AI products</em> that earn attention by being genuinely useful.</p><span>02</span><p>Exploring <em>agents</em> as collaborative interfaces, not magic buttons.</p><span>03</span><p>Looking at <em>Game AI</em> as a new language for interaction and emotion.</p><span>04</span><p>Learning from recruiting and <em>AI talent</em> workflows.</p></div>
        </div>
      </section>

      <section id="thoughts" className="thoughts section-pad section-rule">
        <div className="section-heading"><p className="section-label">( Writing / thoughts )</p><p>Notes in progress on agents, games and AI-native product craft.</p></div>
        <div className="thought-list">
          {thoughts.map((thought) => <article key={thought.title}><span>{thought.tag}</span><h3>{thought.title}</h3><p>{thought.date}</p><span className="article-arrow"><Arrow /></span></article>)}
        </div>
      </section>
    </main>
    <Footer />
  </>
}

function ProjectPage({ project }: { project: Project }) {
  useEffect(() => { window.scrollTo(0, 0) }, [project.slug])
  return <>
    <header className="site-header detail-header"><a className="brand" href="#top" aria-label="Aban — home">A<span>.</span></a><a className="back-link" href="#work">← Back to selected work</a></header>
    <main className={`project-page project-${project.accent}`}>
      <section className="project-hero section-pad">
        <p className="section-label">( {project.number} / {project.eyebrow} )</p>
        <h1>{project.title}</h1>
        <p className="project-lead">{project.summary}</p>
        <ProjectVisual project={project} detail />
      </section>
      <section className="project-content section-pad">
        <div><p className="section-label">( The idea )</p><h2>{project.outcome}</h2></div>
        <p className="project-description">{project.description}</p>
      </section>
      <section className="project-spec section-pad section-rule">
        <div><p className="section-label">( What it explores )</p><ul>{project.focus.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="section-label">( Built with )</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
      </section>
      <div className="next-project section-pad"><a href={`#/projects/${projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length].slug}`}>Next exploration <Arrow /></a></div>
    </main>
    <Footer />
  </>
}

function Footer() {
  return <footer id="contact" className="footer section-pad">
    <p className="section-label">( Contact )</p>
    <h2>Have an interesting<br />problem in mind?</h2>
    <a className="footer-email" href={`mailto:${site.email}`}>{site.email} <Arrow /></a>
    <div className="footer-meta"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.school}</span><div><a href={site.github} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div>
  </footer>
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => { const update = () => setHash(window.location.hash); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  const slug = hash.match(/^#\/projects\/([\w-]+)/)?.[1]
  const project = projects.find((item) => item.slug === slug)
  return project ? <ProjectPage project={project} /> : <Home />
}
