import Counter from '../components/Counter'
import Reveal from '../components/Reveal'

export default function Carbon() {
  return (
    <section
      id="carbono"
      className="relative py-28 md:py-44 bg-forest-deep text-bone"
    >
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold">
            Madera certificada
          </p>
          <h2 className="mt-4 font-display font-medium text-4xl md:text-5xl leading-tight">
            Cada proyecto{' '}
            <em className="not-italic text-gold-bright">captura carbono.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 md:mt-20">
            <div className="font-display font-bold text-6xl md:text-[120px] leading-none text-bone">
              +<Counter to={10000} />{' '}
              <span className="text-gold">kg</span>
            </div>
            <div className="mt-4 text-lg md:text-xl text-bone/70 font-mono tracking-wide">
              CO₂ capturado en proyectos 2025
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-16 max-w-2xl mx-auto text-bone/80 text-lg leading-relaxed">
            Trabajamos con madera certificada de origen calibrado. En cada
            reporte te decimos exactamente cuánto dióxido de carbono está
            capturando tu proyecto. Construir en madera no es solo una
            decisión estética — es una decisión ambiental.
          </p>
        </Reveal>

        <p className="mt-6 text-xs text-bone/40 italic">
          * Cifra a confirmar con datos reales del cliente.
        </p>
      </div>
    </section>
  )
}
