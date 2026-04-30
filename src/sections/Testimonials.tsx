import Reveal from '../components/Reveal'

const LOGOS = [
  'Estudio Araya',
  'Constructora Sur',
  'Patagonia Arq',
  'Bosque Innova',
  'Nativa Hogar',
  'Ingeniería Maule',
]

const QUOTES = [
  {
    quote:
      'CHILEHAUS resolvió el detalle que otros no ven. El ensamblaje llegó a obra sin una sola corrección.',
    name: 'Isidora Muñoz',
    role: 'Arquitecta · Estudio Araya',
  },
  {
    quote:
      'Es la primera vez que trabajamos con un taller que entiende la manufactura como diseño. El resultado se nota.',
    name: 'Tomás Fuentes',
    role: 'Constructor · Proyecto Lago',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-paper text-ink border-t border-paper-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Confianza
          </p>
          <h2 className="mt-3 font-display font-medium text-4xl md:text-5xl leading-tight text-forest">
            Confían en nosotros.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 items-center">
            {LOGOS.map((name, i) => (
              <div
                key={i}
                className="text-ink-dim hover:text-gold-deep transition-colors text-center font-display tracking-wide text-sm md:text-base"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 150}>
              <blockquote className="p-8 md:p-10 border border-paper-border hover:border-gold-deep transition-colors bg-paper-soft shadow-sm">
                <p className="text-forest text-xl leading-relaxed font-display italic">
                  "{q.quote}"
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bark to-gold" />
                  <div>
                    <div className="font-medium text-sm text-forest">{q.name}</div>
                    <div className="text-xs text-ink-dim">{q.role}</div>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-ink-dim text-center">
          * Logos y testimonios son placeholders — contenido real pendiente de CHILEHAUS.
        </p>
      </div>
    </section>
  )
}
