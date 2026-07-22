import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { skillCategories } from '../../data/skills'

function SkillBar({ name, level, index }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-ink-700/50 dark:text-surface-light/40 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-ink-900/5 dark:bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Skills" title="What I work with" subtitle="A practical toolkit built around the day-to-day of a data analyst — extraction, modeling, visualization, and communicating results." />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <RevealOnScroll key={cat.category} delay={ci * 0.08}>
              <GlassCard>
                <h3 className="font-display font-semibold text-lg mb-6">{cat.category}</h3>
                <div className="space-y-5">
                  {cat.skills.map((s, i) => (
                    <SkillBar key={s.name} {...s} index={i} />
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
