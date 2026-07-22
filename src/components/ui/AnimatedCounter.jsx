import { useCountUp } from '../../hooks/useCountUp'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
        {current}{suffix}
      </div>
      <div className="mt-2 text-sm text-ink-700/60 dark:text-surface-light/60">{label}</div>
    </div>
  )
}
