import { motion } from 'framer-motion'

export default function PageTransition({ children }){
  return (
    <>
      {children}
      <motion.div className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
      />
      <motion.div className="fixed top-0 left-0 w-full h-screen bg-black z-[9998] origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22,1,0.36,1] }}
      />
    </>
  )
}
