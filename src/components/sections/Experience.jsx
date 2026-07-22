import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Experience" title="Where I've worked" subtitle="An interactive timeline of internships, freelance work, and hands-on analytics projects." />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <RevealOnScroll key={item.role + item.org} delay={i * 0.1} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="absolute -left-8 md:-left-10 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 shadow-glow flex items-center justify-center"
                >
                  <Briefcase size={11} className="text-white" />
                </motion.span>

                <GlassCard>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-lg">{item.role}</h3>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 dark:text-cyan-300">{item.period}</span>
                  </div>
                  <div className="text-sm text-ink-700/60 dark:text-surface-light/50 mb-4">{item.org} · {item.location}</div>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-ink-700/75 dark:text-surface-light/65 flex gap-2">
                        <span className="text-violet-500 dark:text-cyan-300 mt-1">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
