import { Trophy } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { achievements } from '../../data/experience'

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Achievements" title="Highlights along the way" />
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <RevealOnScroll key={a.title} delay={i * 0.08}>
              <GlassCard className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-violet-500 flex items-center justify-center shadow-glow">
                  <Trophy size={19} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{a.title}</h3>
                  <p className="text-sm mt-1.5 text-ink-700/65 dark:text-surface-light/55 leading-relaxed">{a.detail}</p>
                  <span className="inline-block mt-3 font-mono text-xs text-violet-500 dark:text-cyan-300">{a.year}</span>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
