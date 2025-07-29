import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

export function BrainModel() {
  const groupRef = useRef<THREE.Group>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main brain structure - simplified torus */}
      <Torus
        ref={torusRef}
        args={[1.2, 0.4, 16, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.6}
          wireframe
        />
      </Torus>

      {/* Central core */}
      <Sphere args={[0.3, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Floating neural nodes - simplified */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 1.8
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius * 0.5
        const z = Math.sin(angle) * 0.3
        
        return (
          <Sphere
            key={i}
            args={[0.08, 12, 12]}
            position={[x, y, z]}
          >
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#d946ef" : "#eab308"}
              emissive={i % 2 === 0 ? "#d946ef" : "#eab308"}
              emissiveIntensity={0.4}
            />
          </Sphere>
        )
      })}
    </group>
  )
} 