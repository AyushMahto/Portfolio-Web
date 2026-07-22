import { motion } from 'framer-motion'
import { FileDown, FileText } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll'
import GlowButton from '../ui/GlowButton'
import { profile } from '../../data/profile'

export default function ResumeSection() {
  return (
    <section id="resume" className="relative section-pad !py-20">
      <div className="container-max">
        <RevealOnScroll>
          <div className="relative glass-card overflow-hidden !p-10 md:!p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-3xl"
            />
            <div className="relative flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-glow shrink-0">
                <FileText size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl mb-1">Want the full picture?</h3>
                <p className="text-sm text-ink-700/65 dark:text-surface-light/55 max-w-md">
                  Download my resume for a detailed breakdown of my experience, skills, and education.
                </p>
              </div>
            </div>
            <GlowButton href={profile.resumeUrl} download icon={FileDown} className="relative shrink-0">
              Download Resume (PDF)
            </GlowButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
