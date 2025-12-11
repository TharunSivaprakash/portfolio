import { useEffect, useRef } from 'react'

export default function CustomCursor(){
  const cursorRef = useRef(null)
  useEffect(()=>{
    const move = (e)=>{
      if(cursorRef.current){
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }
    window.addEventListener('mousemove', move)
    return ()=> window.removeEventListener('mousemove', move)
  },[])

  return (
    <div ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform"
    />
  )
}
