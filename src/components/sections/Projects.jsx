import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import ProjectModal from './ProjectModal'
import { projects, projectFilters } from '../../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category.includes(filter))

  return (
    <section id="projects" className="relative section-pad">
      <div className="container-max">
        <SectionHeading eyebrow="Featured Projects" title="Things I've built" subtitle="A mix of internship work, freelance projects, and self-directed analysis — filter by tool." />

        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-glow'
                  : 'glass text-ink-700 dark:text-surface-light/70 hover:shadow-glow'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="!p-0 overflow-hidden h-full flex flex-col group cursor-pointer" onClick={() => setActive(p)}>
                    <div className="relative overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.category.map((c) => (
                          <span key={c} className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-500 dark:text-cyan-300">{c}</span>
                        ))}
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                      <p className="text-sm text-ink-700/65 dark:text-surface-light/55 leading-relaxed mb-5">{p.summary}</p>
                      <div className="mt-auto flex gap-3 pt-2">
                        <a href={p.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-700/70 dark:text-surface-light/60 hover:text-violet-500 dark:hover:text-cyan-300">
                          <Github size={14} /> Code
                        </a>
                        {p.demo && (
                          <a href={p.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-700/70 dark:text-surface-light/60 hover:text-violet-500 dark:hover:text-cyan-300">
                            <ExternalLink size={14} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
