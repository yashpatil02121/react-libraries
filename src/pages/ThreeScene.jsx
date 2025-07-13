// src/pages/ThreeScene.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Environment } from '@react-three/drei'
import { useRef } from 'react'

function Saturn() {
  const planetRef = useRef()
  const ringRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    planetRef.current.rotation.y = t * 0.2
    ringRef.current.rotation.z = Math.PI / 2.5
    ringRef.current.rotation.y = t * 0.1
  })

  return (
    <group>
      {/* Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#c2b280" metalness={0.6} roughness={0.5} />
      </mesh>

      {/* Rings */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.3, 2.2, 64]} />
        <meshStandardMaterial
          color="#a89f91"
          side={2} // DoubleSide
          metalness={0.4}
          roughness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-screen h-screen bg-[#0a0a23]">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 60 }}
        gl={{ antialias: true }}
        style={{ background: '#0a0a23' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Space Effects */}
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={2000} factor={4} fade />

        {/* Saturn */}
        <Saturn />

        <OrbitControls />
      </Canvas>
    </div>
  )
}
