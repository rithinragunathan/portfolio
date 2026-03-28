import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, stars = []
    let frame = 0
    let animId

    // For the gravitational lens effect
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      mouseX = targetX = W / 2;
      mouseY = targetY = H / 2;
    }

    function initStars() {
      stars = []
      const count = Math.floor((W * H) / 3500) // Denser for better lensing visibility
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.3 + 0.2,
          speed: Math.random() * 0.4 + 0.05,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: Math.random() > 0.92
            ? 'rgba(56,189,248,'
            : Math.random() > 0.88
              ? 'rgba(251,191,36,'
              : 'rgba(224,232,255,',
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      frame++

      // Smooth follow for the lens center
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      const bhRadius = 40;
      const lensStrength = 5000;

      for (const s of stars) {
        // Slow downward drift
        s.y += s.speed * 0.3;
        if (s.y > H) s.y = 0;
        if (s.x > W) s.x = 0;
        if (s.x < 0) s.x = W;

        let dx = s.x - mouseX;
        let dy = s.y - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = s.x;
        let drawY = s.y;
        let drawR = s.r;

        // Apply gravitational lensing mathematically
        if (dist > 0) {
          if (dist < bhRadius) {
            // Light doesn't escape the event horizon
            continue;
          }

          // Push stars outward proportionally to how close they are
          let displace = lensStrength / dist;
          drawX += (dx / dist) * displace;
          drawY += (dy / dist) * displace;

          // Tangential stretching simulation
          if (dist < bhRadius * 3) {
            drawR = s.r * (1 + (bhRadius * 3 - dist) / 50);
          }
        }

        const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(frame * s.speed * 0.04 + s.twinkleOffset))
        ctx.beginPath()
        ctx.arc(drawX, drawY, drawR, 0, Math.PI * 2)
        ctx.fillStyle = s.color + twinkle + ')'
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    resize()
    initStars()
    draw()

    const handleResize = () => { resize(); initStars() }
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas id="starfield" ref={canvasRef} />
}
