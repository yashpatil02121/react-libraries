// src/pages/TextScene.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Text3D } from '@react-three/drei'
import { Suspense } from 'react'

const fontURL = "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"

function ColoredText({ text, color, position }) {
  return (
    <Text3D
      font={fontURL}
      size={1}
      height={0.2}
      curveSegments={32}
      bevelEnabled
      bevelThickness={0.03}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={8}
      position={position}
    >
      {text}
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} />
    </Text3D>
  )
}

export default function PWP() {
  return (
    <div className="w-screen h-screen bg-[#0a0a23]">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={2000} factor={4} fade />

        <Suspense fallback={null}>
          {/* Position each word with manual spacing */}
          <ColoredText text="Programming" color="#c084fc" position={[-8.5, 0, 0]} />
          <ColoredText text="with" color="#3b82f6" position={[0.2, 0, 0]} />
          <ColoredText text="Patil" color="#a855f7" position={[3.4, 0, 0]} />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  )
}
