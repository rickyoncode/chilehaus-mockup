import Reveal from '../components/Reveal'

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="py-24 md:py-32 border-t border-forest-border bg-forest-deep/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
                La madera es una{' '}
                <em className="not-italic text-gold-bright">tecnología natural.</em>
              </h2>

              <p className="text-ash text-lg leading-relaxed">
                Cada vez entrega más respuestas: estructura, sostenibilidad,
                captura de carbono, trazabilidad. Nosotros la trabajamos con la
                misma precisión con la que un ingeniero escribe código — con
                CNC, planos de manufactura y automatización.
              </p>

              <p className="text-ash text-lg leading-relaxed">
                No somos una fábrica masiva. Somos un laboratorio boutique
                donde se optimiza, se automatiza y se cuida el oficio. Por eso
                hablamos de <span className="text-gold font-medium">Performance</span>.
              </p>

              <p className="text-ash text-lg leading-relaxed">
                Aquí la industrialización es accesible. Y la madera vuelve a
                ser un espacio para crear, equivocarse y rehacer.
              </p>

              <p className="pt-2 text-xs tracking-[0.25em] uppercase text-ash-dim">
                Revit · BIM Collab · SEMA Soft · Estándar BIM Chileno
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <radialGradient id="tree-glow" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#BCA36C" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#14311F" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="400" fill="url(#tree-glow)" />

                {/* Anillos de crecimiento — protagonistas, ligeramente irregulares */}
                <g stroke="#D8BD83" fill="none" opacity="0.7">
                  <circle cx="200" cy="200" r="22" strokeWidth="1.1" />
                  <circle cx="201" cy="201" r="42" strokeWidth="1" />
                  <circle cx="199" cy="199" r="68" strokeWidth="0.9" />
                  <circle cx="200" cy="200" r="98" strokeWidth="0.85" />
                  <circle cx="201" cy="200" r="132" strokeWidth="0.75" />
                  <circle cx="199" cy="201" r="170" strokeWidth="0.65" />
                </g>

                {/* Ramificaciones orgánicas en lugar de circuitos rectos */}
                <g stroke="#BCA36C" fill="none" strokeWidth="1.3" opacity="0.6" strokeLinecap="round">
                  <path d="M 200 200 Q 230 140 260 80 T 290 30" />
                  <path d="M 260 80 Q 280 70 300 60" />
                  <path d="M 200 200 Q 280 230 350 220 T 395 230" />
                  <path d="M 200 200 Q 170 280 130 340 T 110 380" />
                  <path d="M 130 340 Q 110 350 90 360" />
                  <path d="M 200 200 Q 130 180 70 200 T 25 230" />
                </g>

                {/* Yemas / brotes */}
                <g fill="#D8BD83">
                  <circle cx="290" cy="30" r="3" />
                  <circle cx="300" cy="60" r="2.5" />
                  <circle cx="395" cy="230" r="3" />
                  <circle cx="110" cy="380" r="3" />
                  <circle cx="90" cy="360" r="2.5" />
                  <circle cx="25" cy="230" r="3" />
                </g>

                {/* Centro: nudo del tronco */}
                <circle cx="200" cy="200" r="5" fill="#8E7A4D" />
                <circle cx="200" cy="200" r="9" fill="none" stroke="#D8BD83" strokeWidth="0.8" opacity="0.6">
                  <animate attributeName="r" values="9;14;9" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.15;0.6" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
