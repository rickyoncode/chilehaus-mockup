export default function NaturalMotif() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="forest-glow" cx="55%" cy="48%" r="65%">
          <stop offset="0%" stopColor="#BCA36C" stopOpacity="0.07" />
          <stop offset="55%" stopColor="#14311F" stopOpacity="0" />
          <stop offset="100%" stopColor="#0C1F13" stopOpacity="0.4" />
        </radialGradient>

        <linearGradient id="branch-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BCA36C" stopOpacity="0" />
          <stop offset="50%" stopColor="#BCA36C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#BCA36C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#forest-glow)" />

      {/* Anillos de crecimiento — protagonistas, ligeramente excéntricos */}
      <g stroke="#BCA36C" fill="none" opacity="0.32">
        <circle cx="900" cy="430" r="55" strokeWidth="0.9" className="anim-draw" style={{ animationDelay: '0.0s' }} />
        <circle cx="901" cy="431" r="92" strokeWidth="0.7" className="anim-draw" style={{ animationDelay: '0.15s' }} />
        <circle cx="898" cy="428" r="138" strokeWidth="0.7" className="anim-draw" style={{ animationDelay: '0.3s' }} />
        <circle cx="902" cy="432" r="195" strokeWidth="0.6" className="anim-draw" style={{ animationDelay: '0.45s' }} />
        <circle cx="899" cy="429" r="265" strokeWidth="0.5" className="anim-draw" style={{ animationDelay: '0.6s' }} />
        <circle cx="903" cy="431" r="350" strokeWidth="0.45" className="anim-draw" style={{ animationDelay: '0.75s' }} />
        <circle cx="897" cy="427" r="450" strokeWidth="0.4" className="anim-draw" style={{ animationDelay: '0.9s' }} />
        <circle cx="901" cy="430" r="565" strokeWidth="0.35" className="anim-draw" style={{ animationDelay: '1.05s' }} />
      </g>

      {/* Ramificaciones orgánicas — ramas que salen del centro como del tronco */}
      <g stroke="#BCA36C" fill="none" strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
        <path
          d="M 900 430 Q 760 360 580 290 T 220 200"
          className="anim-draw"
          style={{ animationDelay: '0.3s' }}
        />
        <path
          d="M 580 290 Q 480 270 400 320"
          className="anim-draw"
          style={{ animationDelay: '0.7s' }}
        />
        <path
          d="M 900 430 Q 1020 510 1180 580 T 1410 720"
          className="anim-draw"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M 1180 580 Q 1240 620 1280 700"
          className="anim-draw"
          style={{ animationDelay: '0.85s' }}
        />
        <path
          d="M 900 430 Q 820 540 740 700 T 620 870"
          className="anim-draw"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M 900 430 Q 1080 350 1240 220"
          className="anim-draw"
          style={{ animationDelay: '0.6s' }}
        />
        <path
          d="M 1240 220 Q 1300 200 1340 150"
          className="anim-draw"
          style={{ animationDelay: '0.95s' }}
        />
      </g>

      {/* Entramado Fachwerkhaus sutil — esquina inferior izquierda */}
      <g stroke="#BCA36C" fill="none" strokeWidth="0.8" opacity="0.18">
        <path d="M 60 760 L 60 880 L 230 880 L 230 760 L 60 760" />
        <path d="M 60 760 L 230 880" />
        <path d="M 230 760 L 60 880" />
        <path d="M 60 820 L 230 820" />
        <path d="M 145 760 L 145 880" />
      </g>

      {/* Brotes — pequeñas yemas en los extremos de las ramas */}
      <g fill="#BCA36C" opacity="0.65">
        <circle cx="220" cy="200" r="2.5" />
        <circle cx="400" cy="320" r="2" />
        <circle cx="1410" cy="720" r="2.5" />
        <circle cx="1280" cy="700" r="2" />
        <circle cx="620" cy="870" r="2.5" />
        <circle cx="1340" cy="150" r="2" />
      </g>
    </svg>
  )
}
