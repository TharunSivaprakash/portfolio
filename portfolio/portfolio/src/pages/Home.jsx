import PageTransition from '../components/ui/PageTransition'

export default function Home(){
  return (
    <PageTransition>
      <section className="h-screen w-full flex flex-col justify-center items-center relative z-10">
        <h1 className="font-display text-[12vw] leading-[0.9] font-bold text-white mix-blend-difference text-center">
          CREATIVE
          <br />
          <span className="text-stroke font-outline-2 opacity-70">DEVELOPER</span>
        </h1>
      </section>
    </PageTransition>
  )
}
