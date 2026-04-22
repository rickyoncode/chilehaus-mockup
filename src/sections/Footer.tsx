export default function Footer() {
  return (
    <footer className="border-t border-carbon-border bg-carbon py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="font-display font-semibold tracking-[0.2em] text-lg">
              CHILE HOUSE
            </div>
            <p className="mt-3 text-ash text-sm max-w-md">
              Digitalización y manufactura avanzada en madera.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href="https://instagram.com/chilehouse"
              target="_blank"
              rel="noopener"
              className="text-ash hover:text-cyan-electric transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://instagram.com/narradordelbosque"
              target="_blank"
              rel="noopener"
              className="text-ash hover:text-cyan-electric transition-colors"
            >
              @narrador del bosque
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              className="text-ash hover:text-cyan-electric transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hola@chilehouse.cl"
              className="text-ash hover:text-cyan-electric transition-colors"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-carbon-border flex flex-wrap items-center justify-between gap-4 text-xs text-ash-dim">
          <span>© 2026 Chile House</span>
          <a
            href="#/tienda"
            className="hover:text-cyan-electric transition-colors"
          >
            Tienda <span className="text-ash-dim">(próximamente)</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
