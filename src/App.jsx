import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A responsive personal website to present profile, skills, and professional links.',
      stack: 'React, Vite, CSS',
    },
    {
      title: 'Task Management App',
      description:
        'A productivity-focused app for planning daily work with clean and intuitive workflows.',
      stack: 'JavaScript, REST API, UI Design',
    },
    {
      title: 'Business Dashboard',
      description:
        'A dashboard concept for visualizing KPIs and making fast, data-informed decisions.',
      stack: 'Frontend Engineering, Data Visualization',
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className={`portfolio ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <section className="hero">
        <div className="top-row">
          <p className="eyebrow">Personal Portfolio</p>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <h1>Saif Ahmed</h1>
        <p className="intro">
          Building meaningful digital experiences with a focus on clean design,
          practical problem solving, and continuous growth.
        </p>
        <div className="cta-group">
          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/in/saifahmed46/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/saifahmed46/details/experience/"
            target="_blank"
            rel="noreferrer"
          >
            Experience
          </a>
          <a className="btn btn-secondary" href="/saif-ahmed-resume.txt" download>
            Download Resume
          </a>
        </div>
      </section>

      <section className="section">
        <h2>About</h2>
        <p>
          I am Saif Ahmed, a dedicated professional passionate about technology
          and creating impactful solutions. My portfolio highlights my mindset:
          learn fast, collaborate effectively, and deliver quality outcomes.
        </p>
      </section>

      <section className="section cards">
        <article className="card">
          <h3>Core Strengths</h3>
          <ul>
            <li>Problem solving with a user-first mindset</li>
            <li>Strong communication and team collaboration</li>
            <li>Adaptability across tools, projects, and workflows</li>
          </ul>
        </article>
        <article className="card">
          <h3>Professional Focus</h3>
          <ul>
            <li>Delivering reliable and scalable solutions</li>
            <li>Maintaining clean standards and documentation</li>
            <li>Continuous improvement through learning and feedback</li>
          </ul>
        </article>
      </section>

      <section className="section">
        <h2>Project Showcase</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h2>Let&apos;s Connect</h2>
        <p>
          For opportunities, collaborations, or networking, connect with me on
          LinkedIn.
        </p>
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/saifahmed46/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn
        </a>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
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
    </main>
  )
}

export default App
