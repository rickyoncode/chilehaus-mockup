export default function Shop() {
  return (
    <div className="min-h-screen bg-forest text-bone wood-grain flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="font-display font-semibold tracking-[0.18em] text-2xl text-gold mb-2">
          CHILEHAUS
        </div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-ash-dim mb-12">
          Arquitectura e Ingeniería en Madera
        </p>

        <h1 className="font-display font-medium text-4xl md:text-5xl leading-tight">
          Tienda · <em className="not-italic text-gold-bright">próximamente.</em>
        </h1>

        <p className="mt-8 text-ash text-lg leading-relaxed">
          Estamos preparando una selección de productos en madera optimizada.
          Mientras tanto, conversemos si necesitas algo antes.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="text-ash hover:text-bone transition-colors border-b border-transparent hover:border-gold pb-1"
          >
            ← Volver
          </a>
          <a
            href="#contacto"
            onClick={() => {
              window.location.hash = ''
            }}
            className="px-8 py-3 bg-gold text-forest-deep font-medium hover:bg-gold-bright transition-all btn-shimmer"
          >
            Conversemos →
          </a>
        </div>
      </div>
    </div>
  )
}
