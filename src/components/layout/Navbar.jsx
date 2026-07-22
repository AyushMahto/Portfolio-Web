import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import GlowButton from '../ui/GlowButton'
import { profile } from '../../data/profile'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container-max px-6 sm:px-10 lg:px-24">
        <div className={`flex items-center justify-between rounded-2xl px-4 md:px-6 transition-all duration-500 ${scrolled ? 'glass py-2 shadow-card' : 'py-1'}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="font-display font-bold text-lg tracking-tight">
            {profile.name.split(' ')[0]}<span className="text-gradient">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="px-4 py-2 text-sm font-medium text-ink-700 dark:text-surface-light/80 hover:text-violet-500 dark:hover:text-cyan-300 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <GlowButton href={profile.resumeUrl} download className="!px-5 !py-2 text-xs">
              Resume
            </GlowButton>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-6 mt-2 overflow-hidden"
          >
            <div className="glass rounded-2xl p-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left px-3 py-3 rounded-xl text-sm font-medium hover:bg-violet-500/10"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
