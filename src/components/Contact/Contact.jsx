import { useState, useRef } from 'react'
import './Contact.css'

const contactLinks = [
  { icon: '💼', label: 'LinkedIn', value: 'rithinragunathan', href: 'https://www.linkedin.com/in/rithinragunathan', external: true },
  { icon: '⌨️', label: 'GitHub', value: 'rithinragunathan', href: 'https://github.com/rithinragunathan', external: true },
  { icon: '🌐', label: 'Portfolio', value: 'rithinragunathan.github.io/Portfolio', href: 'https://rithinragunathan.github.io/Portfolio/', external: true },
  { icon: '✉️', label: 'Email', value: 'rithinragunathan@gmail.com', href: 'mailto:rithinragunathan@gmail.com', external: false },
]

export default function Contact() {
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(formRef.current)
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const res = await fetch('https://formsubmit.co/ajax/rithinragunathan@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        alert('Message sent successfully!')
        formRef.current.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Failed to send. Check your connection.')
    }
    setSending(false)
  }

  return (
    <section id="contact">
      <div className="sec-divider" />
      <div className="container">
        <div className="contact-grid">

          <div className="contact-left sr">
            <p className="sec-tag">Contact</p>
            <h2 className="contact-h">Let's build<br />something <em>meaningful.</em></h2>
            <p className="contact-sub">
              Open to collaborations, discussions, and learning together. I'm always interested in real problems worth solving.
            </p>
          </div>

          <div className="contact-links sr d2">
            {contactLinks.map((cl, i) => (
              <a
                href={cl.href}
                target={cl.external ? '_blank' : undefined}
                rel={cl.external ? 'noreferrer' : undefined}
                className="cl"
                key={i}
              >
                <div className="cl-l">
                  <span className="cl-icon">{cl.icon}</span>
                  <div className="cl-meta">
                    <div className="cl-lbl">{cl.label}</div>
                    <div className="cl-val">{cl.value}</div>
                  </div>
                </div>
                <span className="cl-arr">→</span>
              </a>
            ))}
          </div>

          <form className="contact-form sr d3" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" className="cf-input" name="name" placeholder="Your Name" required />
            <input type="email" className="cf-input" name="email" placeholder="Your Email" required />
            <textarea className="cf-textarea" name="message" placeholder="Your Message..." required />
            <button type="submit" className="cf-send" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message →'}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
