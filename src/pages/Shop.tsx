export default function Shop() {
  return (
    <div className="min-h-screen bg-carbon text-bone flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="font-display font-semibold tracking-[0.2em] text-lg mb-12">
          CHILE HOUSE
        </div>

        <h1 className="font-display font-medium text-4xl md:text-5xl leading-tight">
          Tienda · <span className="text-cyan-electric">próximamente.</span>
        </h1>

        <p className="mt-8 text-ash text-lg leading-relaxed">
          Estamos preparando una selección de productos en madera optimizada.
          Mientras tanto, conversemos si necesitas algo antes.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="text-ash hover:text-bone transition-colors border-b border-transparent hover:border-cyan-electric pb-1"
          >
            ← Volver
          </a>
          <a
            href="#contacto"
            onClick={() => {
              window.location.hash = ''
            }}
            className="px-8 py-3 bg-cyan-electric text-carbon font-medium hover:bg-cyan-glow transition-all btn-shimmer"
          >
            Conversemos →
          </a>
        </div>
      </div>
    </div>
  )
}
