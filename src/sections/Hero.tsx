import NaturalMotif from '../components/NaturalMotif'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <NaturalMotif />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-12">
        <div className="max-w-4xl">
          <p
            className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold anim-fade-up opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            Arquitectura e Ingeniería en Madera
          </p>

          <h1
            className="mt-6 font-display font-medium text-5xl md:text-7xl leading-[1.05] tracking-tight anim-fade-up opacity-0"
            style={{ animationDelay: '0.7s' }}
          >
            Digitalización y manufactura{' '}
            <em className="not-italic text-gold-bright">avanzada en madera.</em>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-ash max-w-2xl anim-fade-up opacity-0 leading-relaxed"
            style={{ animationDelay: '1.0s' }}
          >
            Optimización y automatización de procesos constructivos, tipo
            boutique industrializada. Desde Paillaco al sur de Chile.
          </p>

          <div
            className="mt-12 flex flex-wrap items-center gap-6 anim-fade-up opacity-0"
            style={{ animationDelay: '1.3s' }}
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-gold text-forest-deep font-medium hover:bg-gold-bright transition-all btn-glow tracking-wide"
            >
              Conversemos →
            </a>
            <a
              href="#proceso"
              className="text-ash hover:text-bone transition-colors border-b border-transparent hover:border-gold pb-1 tracking-wide"
            >
              Ver proceso
            </a>
          </div>
        </div>
      </div>

      <a
        href="#manifiesto"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ash-dim hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}
