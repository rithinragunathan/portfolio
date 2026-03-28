import './Learning.css'

const timelineItems = [
  { title: 'Transformers from Scratch', desc: 'Attention, encoder/decoder, positional encoding — understanding every component before using libraries.', badge: 'active', label: 'In Progress', active: true },
  { title: 'RAG from Scratch', desc: 'Document chunking, embedding generation, vector similarity search — no LangChain shortcuts.', badge: 'active', label: 'In Progress', active: true },
  { title: 'DeepStream Pipeline Internals', desc: 'GStreamer, element linking, probes, memory management — pipeline-level mastery.', badge: 'active', label: 'Active', active: true },
  { title: 'React + Spring Boot', desc: 'Component-based UI, REST API design and backend architecture.', badge: 'next', label: '↑ Next', active: false },
  { title: 'Full-Stack AI Application on AWS', desc: 'Build and deploy a complete product — React + Spring Boot + AI model — local to production.', badge: 'goal', label: 'Goal', active: false },
]

const learnCards = [
  { icon: '🧬', title: 'Transformers & Attention', sub: 'Architecture-first — code before frameworks' },
  { icon: '🔍', title: 'RAG Systems', sub: 'From chunk to retrieval — built from scratch in Python' },
  { icon: '📹', title: 'DeepStream Internals', sub: 'GStreamer, probes, memory — pipeline-level mastery' },
  { icon: '⚛️', title: 'React', sub: 'Components, hooks, state — modern frontend fundamentals' },
  { icon: '☕', title: 'Spring Boot', sub: 'REST APIs, service architecture, backend design' },
  { icon: '☁️', title: 'AWS & Docker', sub: 'EC2, S3, containers — moving from local to production' },
]

export default function Learning() {
  return (
    <section id="learning">
      <div className="sec-divider" />
      <div className="container">
        <div className="learn-layout">

          <div className="learn-left">
            <p className="sec-tag sr">Learning Journey</p>
            <h2 className="learn-h sr d1">Always <span>learning</span>.<br />Always building deeper.</h2>
            <p className="learn-sub sr d2">
              I treat learning as a continuous system — not a checklist. Every topic gets studied from its fundamentals before I apply it in code.
            </p>

            <div className="tl sr d3">
              {timelineItems.map((item, i) => (
                <div className={`tl-item${item.active ? ' active' : ''}`} key={i}>
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                    <span className={`tl-badge tb-${item.badge}`}>
                      {item.badge === 'active' && <span className="tb-dot" />}
                      {' '}{item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="learn-cards sr d2">
            {learnCards.map((card, i) => (
              <div className="lc" key={i}>
                <span className="lc-icon">{card.icon}</span>
                <div>
                  <div className="lc-title">{card.title}</div>
                  <div className="lc-sub">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
