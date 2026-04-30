import Reveal from '../components/Reveal'

const SERVICES = [
  {
    title: 'Digitalización',
    text: 'Transformamos planos de arquitectura en planos de manufactura. Resolvemos todo el detalle antes de que la máquina corte.',
    tag: 'Revit · BIM Collab',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
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
      className="py-24 md:py-32 border-t border-forest-border bg-forest-deep/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
            Lo que hacemos.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <article className="h-full p-8 bg-forest-soft border border-forest-border hover:border-gold transition-all duration-300 group">
                <div className="w-14 h-14 text-gold">{s.icon}</div>
                <h3 className="mt-6 font-display font-medium text-2xl text-bone">
                  {s.title}
                </h3>
                <p className="mt-4 text-ash leading-relaxed">{s.text}</p>
                <p className="mt-6 text-[10px] tracking-[0.25em] uppercase text-ash-dim">
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
