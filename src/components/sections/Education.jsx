import { GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { education } from '../../data/experience'

export default function Education() {
  return (
    <section id="education" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <RevealOnScroll key={e.degree} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mb-5 shadow-glow">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{e.degree}</h3>
                <div className="text-sm text-ink-700/60 dark:text-surface-light/50 mb-3">{e.school} · {e.period}</div>
                <p className="text-sm leading-relaxed text-ink-700/70 dark:text-surface-light/60">{e.detail}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
