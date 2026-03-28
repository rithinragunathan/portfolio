import { useState, useEffect, useCallback } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#learning', label: 'Learning' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12)
    const sections = document.querySelectorAll('section[id]')
    let cur = ''
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) cur = s.id
    })
    setActiveSection(cur)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <span className="nav-logo-dot" />
        Rithin<span style={{ color: 'var(--cyan)' }}>.</span>
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={activeSection === l.href.slice(1) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Say Hello →</a>
      <div className="nav-toggle" onClick={() => setMenuOpen(o => !o)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}
