import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

import Navigation from './components/ui/Navigation'
import CustomCursor from './components/ui/CustomCursor'
import BackgroundSphere from './components/3d/BackgroundSphere'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'

export default function App(){
  const location = useLocation()

  useEffect(()=>{
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t)=> Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return ()=> lenis.destroy()
  },[])

  return (
    <>
      <div className="noise-bg"></div>
      <CustomCursor />
      <Navigation />
      <BackgroundSphere />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
