import LogoMark from '../components/LogoMark'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-forest-deep text-bone py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 md:gap-16">
          <div>
            <LogoMark className="h-9 w-auto" variant="light" tagline />
            <p className="mt-8 text-bone/70 text-sm max-w-md leading-relaxed">
              Digitalización y manufactura avanzada en madera, tipo boutique
              industrializada. Desde Paillaco al sur de Chile.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-bone/80">
              <li>
                <a
                  href="mailto:info@chilehaus.cl"
                  className="hover:text-gold transition-colors"
                >
                  info@chilehaus.cl
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56954085135"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold transition-colors"
                >
                  +56 9 5408 5135
                </a>
              </li>
              <li className="text-bone/50 text-xs pt-1">
                Carlos Acharan 835<br />
                Paillaco · Los Ríos
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              Síguenos
            </div>
            <ul className="space-y-2 text-sm text-bone/80">
              <li>
                <a
                  href="https://instagram.com/chile.haus"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold transition-colors"
                >
                  Instagram · @chile.haus
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/narradordelbosque"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold transition-colors"
                >
                  @narrador del bosque
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-forest-border flex flex-wrap items-center justify-between gap-4 text-xs text-bone/40">
          <span>
            © 2026 Chile Haus Ltda. · RUT 76.843.237-6
          </span>
          <a
            href="#/tienda"
            className="hover:text-gold transition-colors"
          >
            Tienda <span className="text-bone/30">(próximamente)</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
