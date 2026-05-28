'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const links = [
  {
    label: 'Email',
    href: 'mailto:thelmavpm@gmail.com',
    display: 'thelmavpm@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/thelmapm',
    display: 'linkedin.com/in/thelmapm',
    external: true,
  },
  {
    label: 'Portfolio',
    href: 'https://thelmapm.myportfolio.com',
    display: 'thelmapm.myportfolio.com',
    external: true,
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-32 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-5 leading-[1.05] text-neutral-900">
            Let&apos;s build something<br className="hidden md:block" /> worth using.
          </h2>

          <p className="text-base md:text-lg text-neutral-500 mb-16 max-w-md mx-auto">
            Open to full-time roles, freelance projects, and AI product teams.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center gap-1.5"
              >
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  {link.label}
                </span>
                <span className="text-neutral-900 font-medium text-sm md:text-base group-hover:text-blue-600 transition-colors duration-200 border-b border-neutral-200 group-hover:border-blue-600 pb-0.5 transition-colors">
                  {link.display}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
