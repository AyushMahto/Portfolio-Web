import { motion } from 'framer-motion'

export default function GlowButton({ children, href, onClick, variant = 'primary', icon: Icon, className = '', ...props }) {
  const Comp = href ? motion.a : motion.button
  const base = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-shadow duration-300 group overflow-hidden'
  const variants = {
    primary: 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-glow hover:shadow-glow-cyan',
    ghost: 'glass text-ink-900 dark:text-white hover:shadow-glow',
  }
  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Comp>
  )
}
