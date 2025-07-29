import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BrainModel } from '../BrainModel'
import { NeuralNetwork } from '../NeuralNetwork'

export function Background3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight 
          position={[10, 10, 10]} 
          intensity={1.2} 
        />
        <pointLight 
          position={[-10, -10, -10]} 
          intensity={0.6} 
        />
        
        <Suspense fallback={null}>
          <BrainModel />
          <NeuralNetwork />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
} 