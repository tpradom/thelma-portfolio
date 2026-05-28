# Thelma Prado — Portfolio

Personal portfolio website for Thelma Prado, Senior UX/UI Designer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations
- **next/font** — Inter (body) + Plus Jakarta Sans (display)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

```bash
# Production build
npm run build
npm start

# Deploy to Vercel (zero config)
# Push to GitHub → import at vercel.com/new
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Home page — composes all sections
│   └── globals.css      # Tailwind directives + global styles
├── components/
│   ├── Nav.tsx          # Fixed nav with scroll-aware border
│   ├── Hero.tsx         # Full-viewport hero with headline
│   ├── About.tsx        # Two-column bio + stats
│   ├── Work.tsx         # Case study card grid
│   ├── Process.tsx      # 4-step process (horizontal/vertical)
│   ├── Contact.tsx      # Centered contact links
│   └── Footer.tsx       # Simple footer
└── public/              # Add portrait image here as portrait.jpg
```

## Adding a Real Portrait

Replace the "TP" placeholder in `components/About.tsx` with:

```tsx
import Image from 'next/image'

<Image
  src="/portrait.jpg"
  alt="Thelma Prado"
  fill
  className="object-cover"
  priority
/>
```

Then drop `portrait.jpg` into the `public/` folder.
