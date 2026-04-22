import Reveal from '../components/Reveal'

const PROJECTS = [
  {
    title: 'Vivienda del Lago',
    type: 'Segunda vivienda · 120m²',
    carbon: '10 t CO₂',
    img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format',
  },
  {
    title: 'Refugio Andino',
    type: 'Segunda vivienda · 80m²',
    carbon: '7 t CO₂',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format',
  },
  {
    title: 'Casa Bosque',
    type: 'Primera vivienda · 200m²',
    carbon: '15 t CO₂',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format',
  },
  {
    title: 'Pabellón Valdivia',
    type: 'Comercial · 150m²',
    carbon: '12 t CO₂',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format',
  },
  {
    title: 'Cabaña Costera',
    type: 'Segunda vivienda · 60m²',
    carbon: '5 t CO₂',
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format',
  },
  {
    title: 'Residencia Norte',
    type: 'Ampliación · 90m²',
    carbon: '8 t CO₂',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32 border-t border-carbon-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight">
            Proyectos recientes.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group relative overflow-hidden border border-carbon-border hover:border-cyan-electric transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-carbon-soft">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-medium text-lg">{p.title}</h3>
                  <p className="text-sm text-ash mt-1">{p.type}</p>
                  <p className="text-xs text-cyan-electric mt-3 font-mono tracking-wide">
                    {p.carbon} capturadas
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-ash-dim text-center">
          * Imágenes de referencia — los renders finales serán provistos por Chile House.
        </p>
      </div>
    </section>
  )
}
