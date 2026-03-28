import './Skills.css'

const skillCards = [
  {
    icon: '💻', title: 'Programming',
    tags: [
      { name: 'Java (DSA, OOP)', hi: true },
      { name: 'Python', hi: true },
      { name: 'C++' },
      { name: 'JavaScript' },
    ],
  },
  {
    icon: '👁️', title: 'Computer Vision & AI',
    tags: [
      { name: 'OpenCV', hi: true },
      { name: 'YOLO (v8 / v11)', hi: true },
      { name: 'Object Detection', hi: true },
      { name: 'Object Tracking', hi: true },
      { name: 'Image Processing' },
      { name: 'Feature Extraction' },
    ],
  },
  {
    icon: '🗄️', title: 'Databases',
    tags: [
      { name: 'MySQL', hi: true },
      { name: 'SQL', hi: true },
      { name: 'Joins' },
      { name: 'Constraints' },
      { name: 'Query Optimization' },
    ],
  },
  {
    icon: '📹', title: 'Edge AI & Pipelines',
    tags: [
      { name: 'NVIDIA DeepStream', hi: true },
      { name: 'nvdsanalytics', hi: true },
      { name: 'PeopleNet' },
      { name: 'ROI / Line Crossing' },
      { name: 'Real-Time Systems' },
    ],
  },
  {
    icon: '🧰', title: 'Tools & Systems',
    tags: [
      { name: 'Git & GitHub', hi: true },
      { name: 'NumPy · Pandas', hi: true },
      { name: 'Linux' },
      { name: 'NVIDIA DeepStream' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="sec-divider" />
      <div className="container">
        <p className="sec-tag sr">Skills</p>
        <h2 className="skills-h sr d1">What I <span>work with</span><br />and know well.</h2>

        <div className="skills-grid">
          {skillCards.map((card, i) => (
            <div className={`sk-card sr d${i + 1}`} key={i}>
              <div className="sk-head">
                <span className="sk-icon">{card.icon}</span>
                <span className="sk-title">{card.title}</span>
              </div>
              <div className="sk-tags">
                {card.tags.map((t, j) => (
                  <span className={`tag${t.hi ? ' hi' : ''}`} key={j}>{t.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
