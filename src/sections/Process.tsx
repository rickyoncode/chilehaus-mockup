import Reveal from '../components/Reveal'

const STEPS = [
  {
    title: 'Planimetría de arquitectura',
    text: 'Recibimos el diseño del arquitecto.',
    tag: 'Revit 2025',
  },
  {
    title: 'Plano de manufactura',
    text: 'Adaptamos cada pieza al cálculo estructural y a nuestra maquinaria. Aquí se resuelve todo el detalle — incluso más que en la máquina.',
    tag: 'BIM · Uso 2',
  },
  {
    title: 'Diseño de manufactura y ensamblaje',
    text: 'El corazón digital del proyecto. Cada pieza integrada a la arquitectura.',
    tag: 'DfMA',
  },
  {
    title: 'Manufactura CNC',
    text: 'La máquina recibe los datos y produce. Sin desechos, sin sobre-stock.',
    tag: 'SEMA Soft',
  },
  {
    title: 'Ensamblaje',
    text: 'Entregamos las piezas listas para el montaje en obra.',
    tag: 'BIM · Uso 16',
  },
]

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-24 md:py-32 border-t border-forest-border bg-forest-soft"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight max-w-3xl">
            Del plano al ensamblaje,{' '}
            <em className="not-italic text-gold-bright">sin improvisar.</em>
          </h2>
          <p className="mt-4 text-ash max-w-2xl">
            Estandarización digital con metodología BIM y manufactura digital
            en madera. Cada pieza es trazable.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-5 gap-8 md:gap-4 relative">
          {/* Conector orgánico — rama tenue que une los nodos en desktop */}
          <svg
            className="hidden md:block absolute left-[6%] right-[6%] top-5 w-[88%] pointer-events-none"
            viewBox="0 0 1000 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 12 Q 125 4 250 12 T 500 12 T 750 12 T 1000 12"
              fill="none"
              stroke="#BCA36C"
              strokeWidth="1"
              opacity="0.6"
              strokeLinecap="round"
            />
          </svg>

          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="flex md:flex-col gap-5 md:gap-0">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-forest border border-gold flex items-center justify-center font-display font-medium text-gold">
                    {i + 1}
                  </div>
                </div>

                <div className="md:mt-6 flex-1">
                  <h3 className="font-display font-medium text-xl leading-snug text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ash leading-relaxed">
                    {step.text}
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-ash-dim">
                    {step.tag}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
