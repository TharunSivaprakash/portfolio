import useSound from 'use-sound'
import { Link } from 'react-router-dom'

export default function Navigation(){
  const [playClick] = useSound('/click.mp3', { volume: 0.5 })
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 mix-blend-difference text-white">
      <h1 className="font-display font-bold text-xl tracking-tighter">JOHN DOE.</h1>
      <div className="flex gap-8 font-body text-xs uppercase tracking-widest">
        <Link to='/' onClick={()=>playClick()} className="hover:opacity-50">Home</Link>
        <Link to='/work' onClick={()=>playClick()} className="hover:opacity-50">Work</Link>
        <Link to='/about' onClick={()=>playClick()} className="hover:opacity-50">About</Link>
      </div>
    </nav>
  )
}
