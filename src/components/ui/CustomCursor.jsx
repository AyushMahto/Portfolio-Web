import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let dotX = 0, dotY = 0, ringX = 0, ringY = 0
    const mouse = { x: 0, y: 0 }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      dotX += (mouse.x - dotX) * 0.5
      dotY += (mouse.y - dotY) * 0.5
      ringX += (mouse.x - ringX) * 0.15
      ringY += (mouse.y - ringY) * 0.15
      if (dotRef.current) dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onOver = (e) => setHovering(!!e.target.closest('a, button, [role="button"], input, textarea'))
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hidden lg:block">
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          background: hovering ? 'rgba(124,92,252,0.12)' : 'transparent',
          borderColor: hovering ? '#22D3EE' : 'rgba(124,92,252,0.6)',
        }}
      />
    </div>
  )
}
