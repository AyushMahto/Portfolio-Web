import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlowButton from '../components/ui/GlowButton'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-light dark:bg-ink-950 px-6">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-40 dark:opacity-70" />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-9xl font-display font-bold text-gradient"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-ink-700/70 dark:text-surface-light/60"
        >
          This page doesn't exist — maybe it got lost in a bad JOIN.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8"
        >
          <Link to="/">
            <GlowButton icon={Home}>Back to Home</GlowButton>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
