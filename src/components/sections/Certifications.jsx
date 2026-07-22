import { Award } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import { certifications } from '../../data/experience'

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Certifications" title="Continuous learning" subtitle="Courses and certifications that keep my toolkit current." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <RevealOnScroll key={c.name} delay={i * 0.06}>
              <GlassCard className="h-full flex flex-col">
                <Award size={22} className="text-amber-400 mb-4" />
                <h3 className="font-semibold leading-snug mb-2">{c.name}</h3>
                <div className="mt-auto text-xs text-ink-700/50 dark:text-surface-light/40 font-mono">{c.issuer} · {c.year}</div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
