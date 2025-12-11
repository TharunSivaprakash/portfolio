import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef } from 'react'

const AnimatedSphere = ()=>{
  const ref = useRef()
  useFrame((state)=>{
    const t = state.clock.getElapsedTime()
    if(ref.current){
      ref.current.distort = 0.3 + Math.sin(t) * 0.2
      ref.current.rotation.x = t * 0.07
      ref.current.rotation.z = t * 0.03
    }
  })
  return (
    <Sphere args={[1, 100, 200]} scale={2} ref={ref}>
      <MeshDistortMaterial color="#151515" distort={0.5} speed={2} roughness={0.4} metalness={0.8} />
    </Sphere>
  )
}

export default function BackgroundSphere(){
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 opacity-80">
      <Canvas camera={{ position: [0,0,5] }} gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <directionalLight position={[-5,-5,-5]} intensity={0.5} color="#444" />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
