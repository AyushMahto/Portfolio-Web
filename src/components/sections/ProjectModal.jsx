import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card !bg-surface-card dark:!bg-ink-900 !p-0"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center"
            >
              <X size={16} />
            </button>

            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-500 dark:text-cyan-300">{t}</span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm leading-relaxed text-ink-700/70 dark:text-surface-light/60 whitespace-pre-line mb-6">
                {project.description}
              </p>

              <div className="space-y-2 mb-8">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass text-sm font-medium hover:shadow-glow transition-shadow">
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white text-sm font-medium shadow-glow">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
