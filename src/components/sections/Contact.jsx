import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import RevealOnScroll from '../ui/RevealOnScroll'
import GlowButton from '../ui/GlowButton'
import { profile } from '../../data/profile'

const socialLinks = [
  { key: 'github', icon: Github, href: profile.socials.github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { key: 'twitter', icon: Twitter, href: profile.socials.twitter, label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    // Wire this up to your backend, Formspree, or EmailJS.
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="container-max grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Contact" title="Let's work together" subtitle="Have a role, project, or just want to talk data? My inbox is open." />

          <RevealOnScroll className="space-y-4">
            <a href={profile.socials.email} className="flex items-center gap-3 text-sm font-medium hover:text-violet-500 dark:hover:text-cyan-300 transition-colors">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center"><Mail size={16} /></span>
              {profile.email}
            </a>
            {profile.phone && (
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center"><Phone size={16} /></span>
                {profile.phone}
              </div>
            )}
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center"><MapPin size={16} /></span>
              {profile.location}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="flex gap-3 mt-8">
            {socialLinks.map(({ key, icon: Icon, href, label }) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 rounded-full glass flex items-center justify-center hover:shadow-glow hover:text-violet-500 dark:hover:text-cyan-300 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15} className="lg:col-span-3">
          <GlassCard>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:border-violet-500 outline-none text-sm transition-colors"
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:border-violet-500 outline-none text-sm transition-colors"
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:border-violet-500 outline-none text-sm transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1.5">{errors.message}</p>}
              </div>

              <GlowButton type="submit" icon={status === 'sent' ? CheckCircle2 : Send} disabled={status === 'sending'} className="w-full sm:w-auto justify-center">
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Send Message'}
              </GlowButton>

              {status === 'sent' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-500">
                  Thanks for reaching out — I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  )
}
