import Reveal from '../components/Reveal'

const SERVICES = [
  {
    title: 'Digitalización',
    text: 'Transformamos planos de arquitectura en planos de manufactura. Resolvemos todo el detalle antes de que la máquina corte.',
    tag: 'Revit · BIM Collab',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="8" y="10" width="32" height="22" rx="1" />
        <path d="M8 18h32M14 14h2M18 14h2M22 14h2" strokeLinecap="round" />
        <path d="M12 38h24M16 32v6M32 32v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Manufactura avanzada',
    text: 'Producción CNC en madera con estándar industrializado y acabado boutique. Cada pieza, trazable.',
    tag: 'SEMA Soft · CNC',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="6" y="16" width="36" height="24" rx="1" />
        <path d="M6 22h36M14 10v6M34 10v6" strokeLinecap="round" />
        <circle cx="24" cy="30" r="4" />
        <path d="M24 26v-4M20 30h-3M28 30h3M24 34v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Ejecución (opcional)',
    text: 'Cuando el proyecto lo requiere, vamos a obra. No es nuestro corazón, pero sabemos hacerlo.',
    tag: 'DfMA · Montaje',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M8 42l8-20 8 14 4-8 12 14" strokeLinejoin="round" />
        <path d="M8 42h32" strokeLinecap="round" />
        <circle cx="36" cy="10" r="4" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 md:py-36 bg-paper-soft text-ink border-t border-paper-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Servicios
          </p>
          <h2 className="mt-3 font-display font-medium text-4xl md:text-5xl leading-tight text-forest">
            Lo que hacemos.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="h-full p-8 bg-paper border border-paper-border hover:border-gold-deep transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="w-14 h-14 text-gold-deep">{s.icon}</div>
                <h3 className="mt-6 font-display font-medium text-2xl text-forest">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{s.text}</p>
                <p className="mt-6 text-[10px] tracking-[0.25em] uppercase text-gold-deep font-medium">
                  {s.tag}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
