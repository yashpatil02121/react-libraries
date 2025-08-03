import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, Suspense } from 'react'

function FuturisticSpaceship() {
  const shipRef = useRef<THREE.Group>(null!)
  const thrusterRefs = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (shipRef.current) {
      shipRef.current.position.y = Math.sin(t * 2) * 0.2
      shipRef.current.rotation.y = Math.sin(t * 0.5) * 0.3
      shipRef.current.rotation.z = Math.cos(t * 0.3) * 0.1
    }

    thrusterRefs.current.forEach((thruster, i) => {
      const pulse = (Math.sin(t * 5 + i) + 1) / 2
      thruster.material.emissiveIntensity = 1 + pulse
    })
  })

  return (
    <group ref={shipRef} position={[0, 0, 0]}>
      {/* Main Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 1.2, 4, 32]} />
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Top Dome */}
      <mesh position={[0, 2.7, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Front Nose */}
      <mesh position={[0, -1.7, 0]}>
        <coneGeometry args={[0.2, 0.6, 32]} />
        <meshStandardMaterial color="#1e3a8a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Side Wings */}
      {[1, -1].map((dir, i) => (
        <mesh key={i} position={[dir * 1.2, 0.4, 0]} rotation={[0, 0, dir * 0.1]}>
          <boxGeometry args={[1.8, 0.1, 0.5]} />
          <meshStandardMaterial color="#1e40af" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Engine Thrusters */}
      {[[-0.7, -1.9], [0.7, -1.9]].map(([x, y], i) => (
        <mesh
          key={i}
          ref={(el) => el && (thrusterRefs.current[i] = el)}
          position={[x, y, 0]}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.5, 32]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={1.5}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Rear Glow */}
      <mesh position={[0, -2.1, 0]}>
        <ringGeometry args={[0.3, 0.5, 32]} />
        <meshStandardMaterial
          color="#93c5fd"
          emissive="#3b82f6"
          emissiveIntensity={2}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

export default function SpaceShipScene() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={3000} factor={5} fade />
        <Suspense fallback={null}>
          <FuturisticSpaceship />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
