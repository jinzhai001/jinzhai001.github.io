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
        <div className="hero-meta">Based in {site.location}<span /> Product-minded by default</div>
        <div className="hero-signal-map" aria-hidden="true">
          <span>Signal</span><i /><span>Context</span><i /><span>Choice</span>
        </div>
        <h1 className="hero-title"><span>I make AI</span><em>worth choosing.</em></h1>
        <div className="hero-bottom">
          <p>I turn messy signals into useful, human-centered product decisions—from AI agents to interactive worlds.</p>
          <a className="circle-link" href="#work"><span>Selected<br />work</span><Arrow /></a>
        </div>
        <div className="hero-anchor" aria-hidden="true"><b>01</b><span>Input → intent → action</span></div>
      </section>

      <section id="about" className="about section-pad section-rule">
        <p className="section-label">( About )</p>
        <div className="about-copy">
          <h2>A product lens for the moments when intelligence becomes <em>interaction.</em></h2>
          <div>
            <p>I’m Aban, an undergraduate at Zhejiang University exploring AI product, agents, Game AI and human–AI interaction.</p>
            <p>I make systems that clarify messy inputs—and interactive ideas that people can feel.</p>
          </div>
        </div>
        <div className="interest-row" aria-label="Areas of exploration"><span>AI Product</span><span>AI Agent</span><span>Game AI</span><span>Human–AI Interaction</span><span>AI Native</span></div>
      </section>

      <section id="work" className="work section-pad section-rule">
        <div className="section-heading"><p className="section-label">( Selected work )</p><p>Three product explorations. Each begins with a constraint, then turns it into an experience.</p></div>
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
            <p className="project-role"><span>My work</span>{active.role}</p>
            <a className="text-link" href={`#/projects/${active.slug}`}>Read the project <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="exploration section-pad section-rule">
        <div className="section-heading"><p className="section-label">( Practice )</p><p>Not a résumé timeline. A set of product questions I keep returning to.</p></div>
        <div className="exploration-grid">
          <div className="school-block"><span>Currently at</span><h2>Zhejiang<br />University</h2><p>Undergraduate · Hangzhou</p></div>
          <div className="exploration-list"><span>01</span><p>Designing <em>AI products</em> that explain themselves through their behaviour.</p><span>02</span><p>Exploring <em>agents</em> as collaborative interfaces, not magic buttons.</p><span>03</span><p>Using <em>Game AI</em> to ask how systems can carry emotion, agency and consequence.</p></div>
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
        <div><p className="section-label">( My contribution )</p><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><p className="section-label">( Product system )</p><ul>{project.focus.map((item) => <li key={item}>{item}</li>)}</ul><p className="section-label stack-label">( Built with )</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
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
