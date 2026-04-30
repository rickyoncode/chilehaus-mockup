import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight - 80)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#proceso', label: 'Proceso' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#servicios', label: 'Servicios' },
  ]

  // Sobre el hero: oscuro/transparente. Sobre el papel: claro con borde.
  const onPaper = past
  const headerClass = onPaper
    ? 'bg-paper/92 backdrop-blur-md border-b border-paper-border text-ink'
    : 'bg-transparent text-bone'
  const linkClass = onPaper
    ? 'text-ink-soft hover:text-gold-deep'
    : 'text-bone/80 hover:text-gold'
  const ctaClass = onPaper
    ? 'border-gold-deep text-gold-deep hover:bg-gold-deep hover:text-paper'
    : 'border-gold text-gold hover:bg-gold hover:text-forest-deep'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <LogoMark className={`w-9 h-9 ${onPaper ? 'text-gold-deep' : 'text-gold'}`} />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display font-semibold tracking-[0.18em] text-lg ${
                onPaper ? 'text-gold-deep' : 'text-gold'
              }`}
            >
              CHILEHAUS
            </span>
            <span
              className={`hidden sm:inline mt-1 text-[9px] tracking-[0.3em] uppercase ${
                onPaper ? 'text-ink-dim' : 'text-ash-dim'
              }`}
            >
              Arquitectura · Madera
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${linkClass}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`text-sm px-5 py-2 border transition-all btn-shimmer ${ctaClass}`}
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
            className={`block w-6 h-px transition-all ${
              onPaper ? 'bg-ink' : 'bg-bone'
            } ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all ${
              onPaper ? 'bg-ink' : 'bg-bone'
            } ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px transition-all ${
              onPaper ? 'bg-ink' : 'bg-bone'
            } ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden border-t ${
            onPaper ? 'bg-paper-soft border-paper-border' : 'bg-forest-soft border-forest-border'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm py-2 ${linkClass}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className={`text-sm px-5 py-3 border text-center ${ctaClass}`}
            >
              Conversemos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
