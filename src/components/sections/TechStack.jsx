import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/skills'

export default function TechStack() {
  const loopedStack = [...techStack, ...techStack]

  return (
    <section id="tech-stack" className="relative section-pad !py-20">
      <div className="container-max">
        <SectionHeading eyebrow="Tech Stack" title="Tools I reach for" align="center" />
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-light dark:from-ink-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-light dark:from-ink-950 to-transparent z-10" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-4 w-max"
        >
          {loopedStack.map((tech, i) => (
            <span
              key={tech + i}
              className="glass px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
