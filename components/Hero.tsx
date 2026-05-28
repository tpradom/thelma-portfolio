'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Headline */}
        <h1 className="font-display font-bold text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.88] tracking-tight mb-10">
          <span className="block text-neutral-900">Always</span>
          <span className="block italic text-blue-600">evolving.</span>
          <span className="block text-neutral-900">Always designing.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-neutral-500 font-medium mb-10 max-w-lg">
          Senior UX/UI Designer · 10+ years · Open to AI-driven product teams
        </p>

        {/* CTA */}
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 bg-neutral-900 text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-neutral-700 transition-colors duration-200"
        >
          View Work
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 7.5h10M8 3l4.5 4.5L8 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-6 flex items-center gap-2 text-neutral-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="w-6 h-px bg-neutral-300" />
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
