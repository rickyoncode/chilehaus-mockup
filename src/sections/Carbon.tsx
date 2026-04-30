import Counter from '../components/Counter'
import Reveal from '../components/Reveal'

export default function Carbon() {
  return (
    <section className="relative py-24 md:py-40 border-t border-forest-border overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(26, 61, 38, 0.85) 0%, rgba(20, 49, 31, 0.7) 45%, rgba(12, 31, 19, 1) 85%)',
        }}
        aria-hidden="true"
      />

      {/* Silueta de copas de árboles — naturaleza conceptual al pie */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="#0C1F13" opacity="0.85">
          <path d="M 0 120 L 0 80 Q 30 60 60 75 Q 90 50 120 70 Q 150 55 180 75 Q 210 50 240 70 Q 270 60 300 75 Q 330 45 360 70 Q 390 55 420 75 Q 450 60 480 75 Q 510 50 540 70 Q 570 60 600 75 Q 630 50 660 70 Q 690 55 720 75 Q 750 60 780 75 Q 810 45 840 70 Q 870 55 900 75 Q 930 50 960 70 Q 990 60 1020 75 Q 1050 50 1080 70 Q 1110 55 1140 75 Q 1170 60 1200 75 Q 1230 50 1260 70 Q 1290 55 1320 75 Q 1350 50 1380 70 Q 1410 60 1440 75 L 1440 120 Z" />
        </g>
        <g stroke="#BCA36C" fill="none" strokeWidth="0.6" opacity="0.18" strokeLinecap="round">
          <path d="M 80 80 L 80 50" />
          <path d="M 200 80 L 200 45" />
          <path d="M 340 75 L 340 40" />
          <path d="M 480 80 L 480 50" />
          <path d="M 620 75 L 620 35" />
          <path d="M 760 80 L 760 45" />
          <path d="M 900 75 L 900 35" />
          <path d="M 1040 80 L 1040 50" />
          <path d="M 1180 75 L 1180 40" />
          <path d="M 1320 80 L 1320 45" />
        </g>
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold">
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
            <div className="mt-4 text-lg md:text-xl text-ash font-mono tracking-wide">
              CO₂ capturado en proyectos 2025
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-16 max-w-2xl mx-auto text-ash text-lg leading-relaxed">
            Trabajamos con madera certificada de origen calibrado. En cada
            reporte te decimos exactamente cuánto dióxido de carbono está
            capturando tu proyecto. Construir en madera no es solo una
            decisión estética — es una decisión ambiental.
          </p>
        </Reveal>

        <p className="mt-6 text-xs text-ash-dim italic">
          * Cifra a confirmar con datos reales del cliente.
        </p>
      </div>
    </section>
  )
}
