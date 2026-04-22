import CircuitLines from '../components/CircuitLines'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <CircuitLines />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-12">
        <div className="max-w-4xl">
          <h1
            className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight anim-fade-up opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            Digitalización y manufactura{' '}
            <span className="text-cyan-electric">avanzada en madera.</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-ash max-w-2xl anim-fade-up opacity-0"
            style={{ animationDelay: '0.9s' }}
          >
            Optimización y automatización de procesos constructivos, tipo
            boutique industrializada.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-6 anim-fade-up opacity-0"
            style={{ animationDelay: '1.2s' }}
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-cyan-electric text-carbon font-medium hover:bg-cyan-glow transition-all btn-glow"
            >
              Conversemos →
            </a>
            <a
              href="#proceso"
              className="text-ash hover:text-bone transition-colors border-b border-transparent hover:border-cyan-electric pb-1"
            >
              Ver proceso
            </a>
          </div>
        </div>
      </div>

      <a
        href="#manifiesto"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ash-dim hover:text-cyan-electric transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
