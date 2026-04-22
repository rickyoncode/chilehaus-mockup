import { useEffect, useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#proceso', label: 'Proceso' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#servicios', label: 'Servicios' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-carbon/80 backdrop-blur-md border-b border-carbon-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="font-display font-semibold tracking-[0.2em] text-lg">
          CHILE HOUSE
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ash hover:text-cyan-electric transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm px-5 py-2 border border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-carbon transition-all btn-shimmer"
          >
            Conversemos
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-bone transition-all ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-bone transition-all ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-bone transition-all ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-carbon-soft border-t border-carbon-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ash hover:text-cyan-electric py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="text-sm px-5 py-3 border border-cyan-electric text-cyan-electric text-center"
            >
              Conversemos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
