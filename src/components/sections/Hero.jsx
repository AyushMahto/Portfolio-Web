import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import HeroCanvas from '../three/HeroCanvas'
import GlowButton from '../ui/GlowButton'
import { profile } from '../../data/profile'

function TypingWord({ words, speed = 90, pause = 1400 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <HeroCanvas />
      <div className="absolute inset-0 -z-20 bg-aurora dark:opacity-70 opacity-40" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-grid opacity-40 dark:opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="container-max px-6 sm:px-10 lg:px-24 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest mb-8"
        >
          <Sparkles size={13} className="text-amber-400" />
          Open to internships & full-time roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          Hi, I'm {profile.name.split(' ')[0]} —<br />
          I turn data into <TypingWord words={profile.taglineWords} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 text-base sm:text-lg text-ink-700/70 dark:text-surface-light/60 max-w-xl leading-relaxed"
        >
          {profile.title} based in {profile.location}. I build dashboards, pipelines and
          reports that help teams make faster, better decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <GlowButton href="#projects" icon={ArrowDown} onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </GlowButton>
          <GlowButton href={profile.resumeUrl} download variant="ghost" icon={Download}>
            Download Resume
          </GlowButton>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-violet-500 dark:text-cyan-300"
      >
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}
