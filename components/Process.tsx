'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Research & Discovery',
    description:
      'Understanding the problem space through user interviews, competitive analysis, and stakeholder alignment.',
  },
  {
    number: '02',
    title: 'Information Architecture',
    description:
      'Mapping user flows, defining navigation patterns, and structuring content for clarity and purpose.',
  },
  {
    number: '03',
    title: 'Interaction Design',
    description:
      'Building from wireframes to high-fidelity prototypes, iterating with teams until the experience is right.',
  },
  {
    number: '04',
    title: 'Handoff & Iteration',
    description:
      'Delivering annotated specs and a shared component library, staying close through implementation.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-28 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-16">
            How I Work
          </h2>

          {/* Steps — horizontal on desktop, vertical on mobile */}
          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-[1.1rem] left-[calc(25%+1rem)] right-[calc(25%+1rem)] h-px bg-neutral-200" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col gap-4"
              >
                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute top-7 left-[0.85rem] w-px h-[calc(100%+2.5rem)] bg-neutral-200" />
                )}

                {/* Number badge */}
                <div className="relative z-10 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold">{step.number}</span>
                </div>

                <div className="pl-1 md:pl-0">
                  <h3 className="font-display font-bold text-base text-neutral-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
