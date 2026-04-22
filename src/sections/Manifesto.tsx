import Reveal from '../components/Reveal'

export default function Manifesto() {
  return (
    <section id="manifiesto" className="py-24 md:py-32 border-t border-carbon-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
                La madera es una{' '}
                <span className="text-cyan-electric">tecnología natural.</span>
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
                hablamos de <span className="text-bone font-medium">Performance</span>.
              </p>

              <p className="text-ash text-lg leading-relaxed">
                Aquí la industrialización es accesible. Y la madera vuelve a
                ser un espacio para crear, equivocarse y rehacer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <radialGradient id="tree-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#A07040" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="400" height="400" fill="url(#tree-glow)" />

                {/* Anillos */}
                <g stroke="#D4A06A" fill="none" opacity="0.6">
                  <circle cx="200" cy="200" r="30" strokeWidth="1" />
                  <circle cx="200" cy="200" r="60" strokeWidth="1" />
                  <circle cx="200" cy="200" r="95" strokeWidth="0.8" />
                  <circle cx="200" cy="200" r="135" strokeWidth="0.8" />
                  <circle cx="200" cy="200" r="175" strokeWidth="0.6" />
                </g>

                {/* Circuitos superpuestos */}
                <g stroke="#00E5FF" fill="none" strokeWidth="1.2">
                  <path d="M 200 65 L 200 35 L 260 35 L 260 10" />
                  <path d="M 335 200 L 365 200 L 365 140" />
                  <path d="M 200 335 L 200 365 L 140 365" />
                  <path d="M 65 200 L 35 200 L 35 260" />
                </g>

                {/* Nodos */}
                <g fill="#00E5FF">
                  <circle cx="260" cy="35" r="4" />
                  <circle cx="365" cy="140" r="4" />
                  <circle cx="140" cy="365" r="4" />
                  <circle cx="35" cy="260" r="4" />
                  <circle cx="200" cy="200" r="3" />
                </g>

                {/* Pulso central */}
                <circle cx="200" cy="200" r="8" fill="#00E5FF" opacity="0.3">
                  <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
