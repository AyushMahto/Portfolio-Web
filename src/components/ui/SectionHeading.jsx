import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-20 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-violet-500 dark:text-cyan-400 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-700/70 dark:text-surface-light/60 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
