'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: '10+', label: 'Years of Experience' },
  { number: '3', label: 'Multinational Companies' },
  { number: '4', label: 'Industries Designed For' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Portrait placeholder */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 flex items-end">
            {/* Stylized initials as placeholder */}
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              <span className="font-display font-bold text-[8rem] leading-none text-neutral-800 select-none">
                TP
              </span>
            </div>
            <div className="relative z-10 p-6 w-full bg-neutral-900/80 backdrop-blur-sm">
              <p className="text-white font-display font-semibold text-sm">Thelma Prado</p>
              <p className="text-neutral-400 text-xs mt-0.5">Senior UX/UI Designer</p>
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-8 text-neutral-900">
              Designing at the edge of what digital can become.
            </h2>

            <div className="space-y-5 text-neutral-600 leading-relaxed text-[15px]">
              <p>
                I&apos;m Thelma Prado, a Senior UX/UI Designer with over 10 years crafting
                user-centered products for companies like Accenture and Publicis. I work at the
                intersection of research, interaction design, and design systems — from early
                wireframes to high-fidelity prototypes and developer handoff.
              </p>
              <p>
                I&apos;m currently focused on AI-driven product experiences — designing interfaces
                that make intelligent systems feel intuitive, trustworthy, and genuinely useful for
                real people.
              </p>
              <p>
                My best work happens when the problem is complex and the solution needs to feel
                effortless.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-neutral-100">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="font-display font-bold text-3xl text-neutral-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium tracking-wider uppercase leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
