import PageTransition from '../components/ui/PageTransition'

export default function About(){
  return (
    <PageTransition>
      <div className="h-screen flex items-center justify-center px-10">
        <p className="text-3xl md:text-5xl max-w-4xl leading-relaxed font-light text-gray-200">
          I combine <span className="text-accent">code</span> and <span className="text-accent">motion</span> to create digital experiences that leave a lasting impression. Available for freelance.
        </p>
      </div>
    </PageTransition>
  )
}
