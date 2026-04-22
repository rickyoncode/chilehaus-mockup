import Counter from '../components/Counter'
import Reveal from '../components/Reveal'

export default function Carbon() {
  return (
    <section className="relative py-24 md:py-40 border-t border-carbon-border overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(26, 58, 42, 0.5) 0%, rgba(0, 136, 176, 0.2) 40%, rgba(10, 10, 10, 1) 80%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
            Cada proyecto{' '}
            <span className="text-cyan-electric">captura carbono.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 md:mt-20">
            <div className="font-display font-bold text-6xl md:text-[120px] leading-none text-bone">
              +<Counter to={10000} />{' '}
              <span className="text-cyan-electric">kg</span>
            </div>
            <div className="mt-4 text-lg md:text-xl text-ash font-mono tracking-wide">
              CO₂ capturado en proyectos 2025
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-16 max-w-2xl mx-auto text-ash text-lg leading-relaxed">
            Trabajamos con madera certificada. En cada reporte te decimos
            exactamente cuánto dióxido de carbono estás capturando con tu
            proyecto. Construir en madera no es solo una decisión estética —
            es una decisión ambiental.
          </p>
        </Reveal>

        <p className="mt-6 text-xs text-ash-dim italic">
          * Cifra a confirmar con datos reales del cliente.
        </p>
      </div>
    </section>
  )
}
