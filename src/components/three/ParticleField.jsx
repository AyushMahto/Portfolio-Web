import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTheme } from '../../context/ThemeContext'

// A field of glowing points drifting slowly, with a soft parallax tied to
// pointer position. Represents "data points" resolving into structure —
// a nod to the data-analyst subject of this portfolio.
export default function ParticleField({ count = 900 }) {
  const pointsRef = useRef()
  const { theme } = useTheme()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.035
    pointsRef.current.rotation.x = Math.sin(t * 0.08) * 0.08
    const targetX = state.pointer.x * 0.3
    const targetY = state.pointer.y * 0.2
    pointsRef.current.rotation.y += targetX * 0.02
    pointsRef.current.rotation.x += targetY * 0.02
  })

  const color = theme === 'dark' ? '#9B7FFF' : '#6440E8'

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.045}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  )
}
