'use client'

import { useState, useEffect } from 'react'

const navLinks = ['Work', 'About', 'Process', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-display font-bold text-xl tracking-tight text-neutral-900 hover:text-blue-600 transition-colors"
        >
          TP
        </a>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <span className="bg-neutral-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
            Available May 2026
          </span>
        </div>
      </div>
    </nav>
  )
}
