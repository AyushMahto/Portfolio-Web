import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '../../data/profile'

const socialIcons = [
  { key: 'github', icon: Github, href: profile.socials.github },
  { key: 'linkedin', icon: Linkedin, href: profile.socials.linkedin },
  { key: 'twitter', icon: Twitter, href: profile.socials.twitter },
  { key: 'email', icon: Mail, href: profile.socials.email },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 dark:border-white/5 section-pad !py-16">
      <div className="container-max flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <div className="font-display font-bold text-2xl mb-2">
            {profile.name}<span className="text-gradient">.</span>
          </div>
          <p className="text-sm text-ink-700/60 dark:text-surface-light/50 max-w-xs">
            {profile.title} — building clarity out of data, one dashboard at a time.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-700/50 dark:text-surface-light/40">Elsewhere</span>
          <div className="flex gap-3">
            {socialIcons.map(({ key, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:shadow-glow hover:text-violet-500 dark:hover:text-cyan-300 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="group flex items-center gap-2 text-sm font-medium text-ink-700 dark:text-surface-light/70 hover:text-violet-500 dark:hover:text-cyan-300"
        >
          Back to top
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="container-max mt-12 pt-6 border-t border-white/10 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-700/50 dark:text-surface-light/40">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React, Tailwind, Three.js &amp; Framer Motion.</span>
      </div>
    </footer>
  )
}
