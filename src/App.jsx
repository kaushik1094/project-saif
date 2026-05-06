import { useEffect, useMemo, useState } from 'react'
import './App.css'

const ROLES = [
  'Program Manager',
  'B2B Order Flow Expert',
  'Lean Six Sigma Practitioner',
  'Cross-functional Leader',
]

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 45 : 90
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? typed.length - 1 : typed.length + 1
      const nextValue = currentRole.slice(0, nextLength)
      setTyped(nextValue)

      if (!isDeleting && nextValue === currentRole) {
        setTimeout(() => setIsDeleting(true), 1400)
      } else if (isDeleting && nextValue === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [typed, isDeleting, roleIndex])

  const experiences = useMemo(
    () => [
      {
        company: 'Dell',
        role: 'IT Program Project Manager',
        period: 'Sep 2019 — Present',
        location: 'Hyderabad, India',
        description:
          'Leading end-to-end program management for enterprise B2B order flow initiatives across North America, EMEA, and APJ. Driving cross-functional delivery with Sales Ops, IT, Finance, and Support to scale order processing, validation, and exception handling.',
      },
      {
        company: 'Nadal Forwarding S.L',
        role: 'Freight Forwarding Coordinator',
        period: 'Jun 2017 — Jul 2018',
        location: 'Barcelona, Spain',
        description:
          'Coordinated air, sea, and land freight operations, managed carrier relationships, customs clearance, and shipping documentation in compliance with international trade regulations.',
      },
      {
        company: 'Bharat Heavy Electricals Limited (BHEL)',
        role: 'Summer Intern',
        period: 'May 2015 — Jul 2015',
        location: 'Hyderabad, India',
        description:
          'Hands-on exposure to one of India\'s largest engineering and manufacturing enterprises during early-career training.',
      },
    ],
    []
  )

  const projects = useMemo(
    () => [
      {
        title: 'B2B Order Flow System',
        category: 'Program @ Dell',
        description:
          'Designed and implemented an enhanced B2B order flow that reduced manual interventions and increased first-pass success rates across global markets.',
        tags: ['Program Mgmt', 'B2B', 'Process Design'],
      },
      {
        title: 'Unified B2B Order Status Dashboard',
        category: 'Program @ Dell',
        description:
          'Rolled out a unified dashboard with drill-down for exception analysis, reducing root-cause identification time by 50% for regional support teams.',
        tags: ['Power BI', 'Analytics', 'Operations'],
      },
      {
        title: 'ColCivil Expansion — Cartagena, Colombia',
        category: 'Master\'s Thesis @ EAE',
        description:
          'Final master\'s thesis: marketing plan for the expansion of a construction company into the private real estate market in Cartagena, Colombia.',
        tags: ['Marketing Strategy', 'Real Estate', 'Research'],
      },
    ],
    []
  )

  const certifications = useMemo(
    () => [
      { name: 'Certified Product Manager (CPM)', issuer: 'Dell Technologies', year: '2022' },
      { name: 'Advanced Google Ads', issuer: 'LinkedIn', year: '2018' },
      { name: 'Inbound Marketing', issuer: 'HubSpot', year: '2018' },
      { name: 'AdWords Fundamentals', issuer: 'Google', year: '2018' },
    ],
    []
  )

  const skills = useMemo(
    () => [
      'Program Management',
      'Project Management',
      'B2B Order Processing',
      'Sales Operations',
      'Power BI',
      'Jira & Confluence',
      'Lean Six Sigma',
      'Process Improvement',
      'Stakeholder Management',
      'Executive Reporting',
      'Cross-functional Leadership',
      'International Trade',
    ],
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  const scrollTo = (id) => (event) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={`app ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <header className="nav">
        <a href="#top" className="brand" onClick={scrollTo('top')}>
          <span className="brand-mark">SA</span>
          <span className="brand-name">Saif Ahmed</span>
        </a>
        <nav className="nav-links">
          <a href="#about" onClick={scrollTo('about')}>About</a>
          <a href="#experience" onClick={scrollTo('experience')}>Experience</a>
          <a href="#projects" onClick={scrollTo('projects')}>Projects</a>
          <a href="#education" onClick={scrollTo('education')}>Education</a>
          <a href="#contact" onClick={scrollTo('contact')}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            {isDarkMode ? '☀' : '☾'}
          </button>
          <a className="btn btn-primary nav-cta" href="#contact" onClick={scrollTo('contact')}>
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main id="top" className="portfolio">
        <section className="hero">
          <p className="eyebrow">Hello! I am Saif Ahmed</p>
          <h1 className="hero-title">
            <span className="line">Program Manager turning</span>
            <span className="line gradient-text">complex problems into clean delivery.</span>
          </h1>
          <p className="hero-sub">
            IT Program Project Manager at Dell — 7+ years building and shipping enterprise
            programs across global markets.
          </p>
          <div className="typing">
            <span className="typing-prefix">I&apos;m a</span>
            <span className="typed">{typed}</span>
            <span className="caret" aria-hidden="true">|</span>
          </div>
          <p className="hero-bio">
            Based in Hyderabad, India. I lead enterprise B2B order flow initiatives across North
            America, EMEA, and APJ — driving scalable improvements in order processing,
            validation, and exception handling through cross-functional delivery.
          </p>
          <div className="cta-group">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/saifahmed46/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
            <a className="btn btn-ghost" href="/saif-ahmed-resume.txt" download>
              Download Resume
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">7+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Global Regions</span>
            </div>
            <div className="stat">
              <span className="stat-num">50%</span>
              <span className="stat-label">RCA Time Reduced</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">
            I deliver programs that
            <span className="gradient-text"> connect strategy to execution.</span>
          </h2>
          <p className="about-copy">
            I am Saif Ahmed — an IT Program Project Manager at Dell with a background spanning
            technology, marketing, and operations. I specialize in driving global B2B order
            flow programs, partnering with Sales Operations, IT, Finance, and Support to deliver
            measurable outcomes. My toolkit includes Lean Six Sigma, agile delivery via
            Jira/Confluence, and Power BI for executive-grade reporting.
          </p>
          <p className="about-copy">
            I hold a Master&apos;s in Marketing Management from EAE Business School (Spain) and a
            B.Tech in Computer Science from JNTU. I&apos;m fluent in English and Hindi, with
            professional Telugu and working Spanish — a combination that has helped me thrive
            on globally distributed teams.
          </p>
        </section>

        <section id="experience" className="section">
          <p className="section-eyebrow">Work Experience</p>
          <h2 className="section-title">
            7+ years across <span className="gradient-text">programs, operations, and trade.</span>
          </h2>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="experience-meta">
                  <span className="experience-role">{item.role}</span>
                </div>
                <h3>{item.company}</h3>
                <p className="experience-period">
                  {item.period} · {item.location}
                </p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-eyebrow">Featured Initiatives</p>
          <h2 className="section-title">Selected programs and projects.</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span className="project-symbol">{project.title.charAt(0)}</span>
                </div>
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-eyebrow">Education & Credentials</p>
          <h2 className="section-title">A blend of engineering and business.</h2>
          <div className="education-grid">
            <article className="experience-card">
              <div className="experience-meta">
                <span className="experience-role">Master&apos;s Degree</span>
              </div>
              <h3>EAE Business School</h3>
              <p className="experience-period">2017 — 2018 · Spain</p>
              <p>
                Marketing &amp; Marketing Management. Major in Marketing and Sales; minors in
                E-Commerce and Revenue Management.
              </p>
            </article>
            <article className="experience-card">
              <div className="experience-meta">
                <span className="experience-role">B.Tech</span>
              </div>
              <h3>JNTU — Mahatma Gandhi Institute of Technology</h3>
              <p className="experience-period">2012 — 2016 · India</p>
              <p>Bachelor of Technology in Computer Science.</p>
            </article>
          </div>

          <h3 className="subsection-title">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div className="cert" key={cert.name}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">
                  {cert.issuer} · {cert.year}
                </span>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Core Skills</h3>
          <div className="skills">
            {skills.map((skill) => (
              <span className="tag" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Have a program to deliver? <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="contact-copy">
            Reach out for collaborations, opportunities, or to swap notes on program delivery
            and B2B operations. I usually reply on LinkedIn the fastest.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="What would you like to discuss?"
                required
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
          {isSubmitted && (
            <p className="success-message">Thanks! Your message has been sent.</p>
          )}
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Saif Ahmed · Hyderabad, India</p>
          <a
            href="https://www.linkedin.com/in/saifahmed46/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </footer>
      </main>
    </div>
  )
}

export default App
