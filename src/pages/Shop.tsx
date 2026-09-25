import LogoMark from '../components/LogoMark'

export default function Shop() {
  return (
    <div className="min-h-screen bg-paper text-ink flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-flex flex-col items-center mb-12">
          <LogoMark className="h-10 w-auto" variant="dark" tagline />
        </div>

        <h1 className="font-display font-medium text-4xl md:text-5xl leading-tight text-forest">
          Tienda · <em className="not-italic text-gold-deep">próximamente.</em>
        </h1>

        <p className="mt-8 text-ink-soft text-lg leading-relaxed">
          Estamos preparando una selección de productos en madera optimizada.
          Mientras tanto, conversemos si necesitas algo antes.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="text-ink-soft hover:text-forest transition-colors border-b border-transparent hover:border-gold-deep pb-1"
          >
            ← Volver
          </a>
          <a
            href="#contacto"
            onClick={() => {
              window.location.hash = ''
            }}
            className="px-8 py-3 bg-forest text-bone font-medium hover:bg-forest-deep transition-colors"
          >
            Conversemos →
          </a>
        </div>
      </div>
    </div>
  )
}
