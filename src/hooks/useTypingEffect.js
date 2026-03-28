import { useState, useEffect, useRef, useCallback } from 'react'

export default function useTypingEffect(phrases) {
  const [text, setText] = useState('')
  const phrasesRef = useRef(phrases)
  phrasesRef.current = phrases

  const tick = useCallback(() => {
    let pi = 0, ci = 0, del = false
    let timer

    function step() {
      const p = phrasesRef.current[pi]
      if (del) {
        ci--
        setText(p.slice(0, ci))
      } else {
        ci++
        setText(p.slice(0, ci))
      }

      if (!del && ci === p.length) {
        del = true
        timer = setTimeout(step, 1800)
        return
      }
      if (del && ci === 0) {
        del = false
        pi = (pi + 1) % phrasesRef.current.length
      }
      timer = setTimeout(step, del ? 35 : 58)
    }

    step()
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cleanup = tick()
    return cleanup
  }, [tick])

  return text
}
