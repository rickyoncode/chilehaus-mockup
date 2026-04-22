import Reveal from '../components/Reveal'

const STEPS = [
  {
    title: 'Planimetría de arquitectura',
    text: 'Recibimos el diseño del arquitecto.',
  },
  {
    title: 'Plano de manufactura',
    text: 'Adaptamos cada pieza al cálculo estructural y a nuestra maquinaria. Aquí se resuelve todo el detalle — incluso más que en la máquina.',
  },
  {
    title: 'Diseño de manufactura y ensamblaje',
    text: 'El corazón digital del proyecto. Cada pieza integrada a la arquitectura.',
  },
  {
    title: 'Manufactura CNC',
    text: 'La máquina recibe los datos y produce. Sin desechos, sin sobre-stock.',
  },
  {
    title: 'Ensamblaje',
    text: 'Entregamos las piezas listas para el montaje en obra.',
  },
]

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-24 md:py-32 border-t border-carbon-border bg-carbon-soft"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight max-w-3xl">
            Del plano al ensamblaje,{' '}
            <span className="text-cyan-electric">sin improvisar.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-5 gap-8 md:gap-4 relative">
          {/* Línea conectora horizontal (desktop) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan-electric/20 via-cyan-electric to-cyan-electric/20" />

          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="flex md:flex-col gap-5 md:gap-0">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-carbon border-2 border-cyan-electric flex items-center justify-center font-display font-medium text-cyan-electric">
                    {i + 1}
                  </div>
                </div>

                <div className="md:mt-6 flex-1">
                  <h3 className="font-display font-medium text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ash leading-relaxed">
                    {step.text}
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
