import { useEffect, useState } from 'react'
import useTypingEffect from '../../hooks/useTypingEffect'
import './Hero.css'

const skills = [
  { name: 'Java · DSA', level: 'Solid', width: 80, bar: 'bar-c' },
  { name: 'Java · OOPS', level: 'Solid', width: 75, bar: 'bar-c' },
  { name: 'MySql', level: 'Intermediate', width: 70, bar: 'bar-c' },
  { name: 'Python · Computer Vision', level: 'Beginner -> Intermediate', width: 75, bar: 'bar-c' },
  { name: 'NVIDIA DeepStream · Edge AI', level: 'Growing', width: 50, bar: 'bar-a' },
  { name: 'RAG · GenAI', level: 'Learning', width: 35, bar: 'bar-r' },
  { name: 'Spring Boot', level: 'Basics', width: 40, bar: 'bar-c' },
  { name: 'AWS', level: 'Learner', width: 20, bar: 'bar-c' },
]

const phrases = [
  'Building systems, not just projects ✦',
  'Java (DSA + OOP) | SQL | Problem Solver',
  'AI Pipelines | Computer Vision | DeepStream',
  'RAG from scratch | No shortcuts.',
  'Hardware + Software | Always learning.',
]

export default function Hero() {
  const typedText = useTypingEffect(phrases)
  const [loadBars, setLoadBars] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadBars(true)
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero">

      {/* Coding Theme Decor */}
      <div className="code-decor code-decor-left">
        <pre>{`class System {\n  run() {\n    build();\n  }\n}`}</pre>
      </div>
      <div className="code-decor code-decor-right">
        <pre>{`while (alive) {\n  learn();\n}`}</pre>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="hero-inner">

          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-pulse" />
              ECE · Bannari Amman Institute of Technology
            </div>

            <h1 className="hero-h1">
              Hi, I'm<br />
              <span className="name">Rithin R S</span><br />
              <span className="serif">— system builder.</span>
            </h1>

            <div className="hero-typing-wrap">
              <span className="hero-typer">{typedText}</span>
            </div>

            <p className="hero-desc">
              I build systems, not just projects — focusing on
              understanding how things work internally, from real-time
              AI pipelines to building RAG systems from scratch.
            </p>

            <p className="hero-desc" style={{ marginTop: 10, fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: 500, letterSpacing: '0.04em' }}>
              Focus: AI Systems · Computer Vision · Java (DSA) · SQL
            </p>

            <div className="hero-btns">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://rithinragunathan.github.io/Portfolio/" target="_blank" rel="noreferrer" className="btn-outline">
                Portfolio
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Contact</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="stat-card">
              <div className="sc-header">
                <span className="sc-title">Skill Overview</span>
                <span className="sc-live"><span className="live-dot" /> Active Learner</span>
              </div>

              {skills.map((sk, i) => (
                <div className="sc-skill" key={i}>
                  <div className="sc-skill-row">
                    <span className="sc-skill-name">{sk.name}</span>
                    <span className="sc-skill-lvl">{sk.level}</span>
                  </div>
                  <div className="sc-bar-bg">
                    <div
                      className={`sc-bar ${sk.bar}`}
                      style={{ width: loadBars ? sk.width + '%' : '0%' }}
                    />
                  </div>
                </div>
              ))}

              <div className="sc-divider" />
              <div className="sc-foot">
                <strong>2 complete projects</strong> · <strong>1 in progress</strong> · <strong>1 hobby build</strong><br />
                Building systems from fundamentals, always.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
