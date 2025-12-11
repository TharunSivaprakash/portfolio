import PageTransition from '../components/ui/PageTransition'
import LiquidImage from '../components/3d/LiquidImage'

const projects = [
  { id: 1, title: 'Nebula', src: 'https://picsum.photos/seed/88/800/1000' },
  { id: 2, title: 'Cyber Punk', src: 'https://picsum.photos/seed/25/800/1000' },
  { id: 3, title: 'Minimalist', src: 'https://picsum.photos/seed/32/800/1000' }
]

export default function Work(){
  return (
    <PageTransition>
      <div className="pt-32 px-8 pb-20 min-h-screen">
        <h2 className="font-display text-6xl mb-16">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(p=> (
            <div key={p.id} className="group">
              <LiquidImage src={p.src} />
              <div className="mt-4 flex justify-between items-center border-t border-gray-800 pt-4">
                <h3 className="text-xl font-sans">{p.title}</h3>
                <span className="opacity-50">2024</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
