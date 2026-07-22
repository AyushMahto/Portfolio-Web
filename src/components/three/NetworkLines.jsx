import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Connective lines evoking a data / knowledge graph, orbiting slowly
// behind the particle field.
export default function NetworkLines({ nodeCount = 26 }) {
  const groupRef = useRef()

  const nodes = useMemo(() => {
    const pts = []
    for (let i = 0; i < nodeCount; i++) {
      const r = 3.2 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pts.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.7,
        r * Math.cos(phi)
      ))
    }
    return pts
  }, [nodeCount])

  const lineSegments = useMemo(() => {
    const positions = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.2) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    return new Float32Array(positions)
  }, [nodes])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = -t * 0.025
  })

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lineSegments, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#22D3EE" transparent opacity={0.18} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}
