'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    name: 'N3 Procurement App',
    company: 'Accenture',
    category: 'Enterprise UX',
    tags: ['UX Research', 'Interaction Design', 'Design System'],
    description:
      'End-to-end redesign of an enterprise procurement platform serving 12,000+ daily users across 6 business units.',
    bg: 'bg-neutral-100',
    accent: 'text-blue-600',
  },
  {
    name: 'Best Buy Campaign Banners',
    company: 'Publicis',
    category: 'Digital Advertising',
    tags: ['Visual Design', 'Motion', 'Campaign'],
    description:
      'High-impact digital advertising suite for seasonal retail campaigns across web, display, and social.',
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    name: 'BetAnything Design System',
    company: 'Brand Builders',
    category: 'Design System',
    tags: ['Design System', 'Component Library', 'Figma'],
    description:
      'Scalable design system with 200+ components for a live sports betting platform — tokens, docs, and full Figma library.',
    bg: 'bg-neutral-900',
    accent: 'text-emerald-400',
    dark: true,
  },
]

export default function Work() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="py-28 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
              Selected Work
            </h2>
            <span className="text-sm text-neutral-400 font-medium hidden md:block">
              2019 – 2024
            </span>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group rounded-2xl overflow-hidden cursor-pointer${i === 2 ? ' md:col-span-2' : ''}`}
              >
                {/* Image area */}
                <div
                  className={`${project.bg} ${i === 2 ? 'aspect-[16/7]' : 'aspect-[4/3]'} flex items-center justify-center relative overflow-hidden`}
                >
                  <span
                    className={`font-display font-bold text-5xl tracking-tight select-none ${
                      project.dark ? 'text-neutral-700' : 'text-neutral-300'
                    }`}
                  >
                    {project.company}
                  </span>
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Card info */}
                <div className="pt-5 pb-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {project.company}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${project.accent}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
