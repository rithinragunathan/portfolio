import './Projects.css'

const GitHubIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const projects = [
  {
    num: 'PROJECT 01',
    title: 'Real-Time People Tracking & Analytics Pipeline',
    desc: 'Production-grade DeepStream pipeline on NVIDIA GPU — built the full system from inference to tracking to analytics output.',
    points: [
      'Built complete DeepStream pipeline (inference → tracking → analytics)',
      'Polygonal ROI + line-crossing detection for entry/exit counting',
      'Integrated nvdsanalytics for real-time event counting at scale',
      'Studied GStreamer internals — element linking, probes, memory management',
    ],
    chips: ['DeepStream SDK', 'Python', 'OpenCV', 'YOLO', 'NVIDIA GPU', 'GStreamer'],
    status: 'done',
    github: 'https://github.com/mithunbs05/security-dashboard',
  },
  {
    num: 'PROJECT 02',
    title: 'Custom RAG Pipeline (From Scratch)',
    desc: "Building Retrieval-Augmented Generation from fundamentals — no LangChain, no shortcuts. Understanding every layer before abstracting it.",
    points: [
      'Designed document chunking strategies (size, overlap, semantic boundaries)',
      'Implemented embedding generation and vector similarity search',
      'Built custom retrieval logic without relying on any frameworks',
    ],
    chips: ['Python', 'Embeddings', 'Vector Search', 'NLP'],
    status: 'wip',
    github: null,
  },
  {
    num: 'PROJECT 03',
    title: 'Line Follower Robot',
    desc: 'Hardware + software integration project — built an autonomous robot that follows a line path using IR sensors and real-time control logic.',
    points: [
      'IR sensor-based navigation with real-time path detection',
      'Control logic for continuous movement correction and steering',
      'Full hardware-software integration — circuit design to code',
    ],
    chips: ['Embedded Systems', 'IR Sensors', 'Control Logic', 'Hardware'],
    status: 'done',
    github: 'https://github.com/TEAM-VOYAGER/PID-FASTEST-LINE-FOLLOWER-',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-divider" />
      <div className="container">
        <p className="sec-tag sr">Projects</p>
        <h2 className="proj-h sr d1">Things I've <span>built</span><br />from scratch.</h2>

        <div className="proj-list">
          {projects.map((proj, i) => (
            <div className={`proj-card sr d${i + 1}`} key={i}>
              <div>
                <div className="proj-num">{proj.num}</div>
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <ul className="proj-pts">
                  {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
                <div className="proj-chips">
                  {proj.chips.map((c, j) => <span className="chip" key={j}>{c}</span>)}
                </div>
              </div>
              <div>
                <span className={`proj-status ${proj.status === 'done' ? 'ps-done' : 'ps-wip'}`}>
                  {proj.status === 'done' ? 'Complete' : 'In Progress'}
                </span>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="proj-action">
                    <GitHubIcon /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
