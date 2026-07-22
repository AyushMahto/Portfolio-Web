import { motion } from 'framer-motion'
import { MapPin, Mail, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import AnimatedCounter from '../ui/AnimatedCounter'
import RevealOnScroll from '../ui/RevealOnScroll'
import { profile, stats } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-max grid lg:grid-cols-5 gap-16 items-center">
        <RevealOnScroll className="lg:col-span-2 relative">
          <div className="relative mx-auto max-w-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-violet-500/30 via-transparent to-cyan-400/30 blur-2xl"
            />
            <GlassCard hover={false} className="relative !p-3 rounded-[2rem]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full aspect-square object-cover rounded-[1.6rem]"
              />
            </GlassCard>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-5 glass-card px-4 py-3 flex items-center gap-2 text-sm font-medium"
            >
              <MapPin size={16} className="text-violet-500 dark:text-cyan-300" />
              {profile.location}
            </motion.div>
          </div>
        </RevealOnScroll>

        <div className="lg:col-span-3">
          <SectionHeading eyebrow="About Me" title="Data-obsessed, decision-focused." />
          <RevealOnScroll delay={0.1}>
            <p className="text-ink-700/75 dark:text-surface-light/65 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {profile.about}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-8 flex flex-wrap gap-4">
            <a href={profile.socials.email} className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full glass hover:shadow-glow transition-shadow">
              <Mail size={15} /> {profile.email}
            </a>
            <span className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full glass">
              <GraduationCap size={15} /> Final-year student
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/10 dark:border-white/5">
            {stats.map((s) => (
              <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
