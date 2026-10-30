import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from '@react-three/drei'
import type { Mesh } from 'three'

function Orb() {
  const orb = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (orb.current) {
      orb.current.rotation.y += delta * 0.16
      orb.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12
    }
  })
  return (
    <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={orb} args={[1.25, 64, 64]} scale={1.05}>
        <MeshDistortMaterial color="#8b7cff" roughness={0.18} metalness={0.55} distort={0.34} speed={1.5} />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="scene-wrap" aria-label="Decorative interactive 3D orb">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.3} />
          <pointLight position={[3, 3, 4]} intensity={35} color="#b5aaff" />
          <pointLight position={[-4, -2, 1]} intensity={18} color="#4cc9f0" />
          <Orb />
          <Stars radius={40} depth={20} count={650} factor={2} saturation={0} fade speed={0.35} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
        </Suspense>
      </Canvas>
      <div className="scene-glow" />
    </div>
  )
}
