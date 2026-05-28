export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-sm text-neutral-900">TP</span>
        <span className="text-xs text-neutral-400">
          © {year} Thelma Prado. All rights reserved.
        </span>
        <span className="text-xs text-neutral-400">Senior UX/UI Designer</span>
      </div>
    </footer>
  )
}
