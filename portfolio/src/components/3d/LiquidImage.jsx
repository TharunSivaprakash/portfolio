import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import * as THREE from 'three'
import useSound from 'use-sound'

const Scene = ({ src, hovered }) => {
  const ref = useRef()
  useFrame(()=>{
    if(ref.current){
      ref.current.material.zoom = THREE.MathUtils.lerp(ref.current.material.zoom ?? 1, hovered ? 1.15 : 1, 0.08)
    }
  })
  return <Image ref={ref} url={src} transparent scale={[3,4]} />
}

export default function LiquidImage({ src }){
  const [hovered, setHovered] = useState(false)
  const [play] = useSound('/hover.mp3', { volume: 0.4, interrupt: true })
  return (
    <div className="relative w-full h-[60vh] cursor-pointer" onMouseEnter={()=>{setHovered(true); try{play()}catch(e){}}} onMouseLeave={()=>setHovered(false)}>
      <Canvas>
        <Scene src={src} hovered={hovered} />
      </Canvas>
    </div>
  )
}
