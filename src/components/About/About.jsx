import './About.css'

const pillars = [
  { icon: '🔬', text: 'Understand systems deeply before reaching for abstractions' },
  { icon: '🔨', text: 'Build from scratch first — then leverage frameworks' },
  { icon: '🐛', text: 'Debug thoroughly — internal clarity over speed' },
  { icon: '📈', text: 'Consistent, depth-first learning — every single day' },
]

export default function About() {
  return (
    <section id="about">
      <div className="sec-divider" />
      <div className="container">
        <div className="about-grid">

          <div className="about-identity sr">
            <div className="about-avatar">👨‍💻</div>
            <h2 className="about-name">Rithin R S</h2>
            <div className="about-role">Computer Vision · AI Systems · Java (DSA)</div>
            <blockquote className="about-quote">
              "I don't want to just use tools — I want to understand how they work at every level, so I can build better ones."
            </blockquote>
          </div>

          <div className="about-detail">
            <div className="about-block sr d1">
              <div className="ab-label">What I'm building</div>
              <div className="ab-text">
                Production-grade AI systems — from DeepStream pipelines with real-time people tracking and analytics,
                to building RAG from scratch without high-level frameworks. Also built a Line Follower Robot combining
                hardware and software.
              </div>
            </div>
            <div className="about-block sr d2">
              <div className="ab-label">What I'm learning</div>
              <div className="ab-text">
                Transformers and RAG from scratch, React + Spring Boot for full-stack, DeepStream internals, and AWS
                for deployment. Fundamentals always come before frameworks.
              </div>
            </div>
            <div className="about-block sr d3">
              <div className="ab-label">My approach</div>
              <div className="pillars">
                {pillars.map((p, i) => (
                  <div className="pill-item" key={i}>
                    <span className="pill-icon">{p.icon}</span>
                    <span className="pill-text">{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
