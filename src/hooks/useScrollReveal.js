import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        e.target.querySelectorAll('.sc-bar[data-w]').forEach(b => {
          setTimeout(() => { b.style.width = b.dataset.w + '%' }, 120)
        })
        io.unobserve(e.target)
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.sr').forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])
}
