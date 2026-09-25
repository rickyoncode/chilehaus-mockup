import Reveal from '../components/Reveal'

export default function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="py-24 md:py-36 bg-paper text-ink"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
                Manifiesto · Performance
              </p>
              <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight text-forest">
                La madera es una{' '}
                <em className="not-italic text-gold-deep">tecnología natural.</em>
              </h2>

              <p className="text-ink-soft text-lg leading-relaxed">
                Cada vez entrega más respuestas: estructura, sostenibilidad,
                captura de carbono, trazabilidad. Nosotros la trabajamos con la
                misma precisión con la que un ingeniero escribe código — con
                CNC, planos de manufactura y automatización.
              </p>

              <p className="text-ink-soft text-lg leading-relaxed">
                No somos una fábrica masiva. Somos un laboratorio boutique
                donde se optimiza, se automatiza y se cuida el oficio. Por eso
                hablamos de <span className="text-forest font-semibold">Performance</span>.
              </p>

              <p className="text-ink-soft text-lg leading-relaxed">
                Aquí la industrialización es accesible. Y la madera vuelve a
                ser un espacio para crear, equivocarse y rehacer.
              </p>

              <p className="pt-4 text-[11px] tracking-[0.3em] uppercase text-ink-dim border-t border-paper-border mt-6">
                Revit · BIM Collab · SEMA Soft · Estándar BIM Chileno
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <figure className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&auto=format&q=80"
                alt="Construcción en madera maciza, en el bosque"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-forest-deep/80 text-bone text-[10px] tracking-[0.3em] uppercase px-4 py-3">
                Madera maciza, trabajada con precisión
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
