import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// GSAP-powered scroll-pinned parallax banner. Layers move at different
// speeds as the section is pinned, giving a premium "scrollytelling" feel.
export default function ParallaxBanner() {
  const sectionRef = useRef(null)
  const layerRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      layerRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.to(el, {
          yPercent: (i + 1) * -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      gsap.fromTo(
        '.parallax-headline',
        { backgroundPositionX: '0%' },
        {
          backgroundPositionX: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden">
      <div ref={(el) => (layerRefs.current[0] = el)} className="absolute -z-10 top-10 left-[8%] w-56 h-56 rounded-full bg-violet-500/20 blur-3xl" />
      <div ref={(el) => (layerRefs.current[1] = el)} className="absolute -z-10 bottom-0 right-[10%] w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div ref={(el) => (layerRefs.current[2] = el)} className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-3xl" />

      <div className="container-max px-6 sm:px-10 lg:px-24 text-center">
        <p
          className="parallax-headline inline-block text-3xl md:text-5xl font-display font-bold leading-tight bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
        >
          Good data tells a story. Great analysis makes it actionable.
        </p>
      </div>
    </section>
  )
}
