import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative w-14 h-8 rounded-full glass flex items-center px-1 transition-colors"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center shadow-glow"
        style={{ marginLeft: isDark ? '22px' : '0px' }}
      >
        {isDark ? <Moon size={13} className="text-white" /> : <Sun size={13} className="text-white" />}
      </motion.div>
    </button>
  )
}
