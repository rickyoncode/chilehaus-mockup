import Reveal from '../components/Reveal'

const PROJECTS = [
  {
    title: 'HausModelle',
    type: 'Línea de modelos · 3 viviendas',
    carbon: '≈ 27 t CO₂',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&auto=format',
  },
  {
    title: 'Rupanco 05',
    type: 'Lago Rupanco · 140 m²',
    carbon: '≈ 10 t CO₂',
    img: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&auto=format',
  },
  {
    title: 'MeerHaus',
    type: 'Costa · 160 m²',
    carbon: '≈ 12 t CO₂',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format',
  },
  {
    title: 'WegHaus',
    type: 'Cabaña reducida · 61 m²',
    carbon: '≈ 5 t CO₂',
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&auto=format',
  },
  {
    title: 'NordHaus · Villarrica',
    type: 'Auditoría general · proyecto cliente',
    carbon: '≈ 15 t CO₂',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format',
  },
  {
    title: 'Refugio Bosque',
    type: 'Segunda vivienda · 80 m²',
    carbon: '≈ 7 t CO₂',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&auto=format',
  },
]

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-24 md:py-36 bg-paper text-ink border-t border-paper-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep">
            Proyectos · 2024–2025
          </p>
          <h2 className="mt-3 font-display font-medium text-4xl md:text-5xl leading-tight text-forest">
            Proyectos recientes.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <article className="group relative overflow-hidden border border-paper-border hover:border-gold transition-all duration-300 bg-paper-soft">
                <div className="aspect-[4/3] overflow-hidden bg-paper-warm">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover saturate-[0.7] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-medium text-xl text-forest">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-1">{p.type}</p>
                  <p className="text-xs text-gold-deep mt-3 font-mono tracking-wide font-medium">
                    {p.carbon} capturadas
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-xs text-ink-dim text-center max-w-xl mx-auto">
          * Imágenes de referencia — los renders y fotografías finales serán
          provistos por CHILEHAUS. Cifras de carbono estimadas según el
          estándar de cada modelo, confirmadas en el reporte del proyecto.
        </p>
      </div>
    </section>
  )
}
