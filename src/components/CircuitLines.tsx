export default function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wood-grain" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#A07040" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#wood-grain)" />

      {/* Anillos de crecimiento */}
      <g stroke="#00E5FF" fill="none" opacity="0.25">
        <circle cx="720" cy="450" r="120" strokeWidth="0.8" className="anim-draw" style={{ animationDelay: '0s' }} />
        <circle cx="720" cy="450" r="200" strokeWidth="0.6" className="anim-draw" style={{ animationDelay: '0.2s' }} />
        <circle cx="720" cy="450" r="300" strokeWidth="0.5" className="anim-draw" style={{ animationDelay: '0.4s' }} />
        <circle cx="720" cy="450" r="420" strokeWidth="0.4" className="anim-draw" style={{ animationDelay: '0.6s' }} />
        <circle cx="720" cy="450" r="560" strokeWidth="0.3" className="anim-draw" style={{ animationDelay: '0.8s' }} />
      </g>

      {/* Trazos de circuito */}
      <g stroke="#00E5FF" fill="none" strokeWidth="1" opacity="0.5">
        <path
          d="M 100 200 L 300 200 L 300 350 L 500 350"
          className="anim-draw"
          style={{ animationDelay: '0.3s' }}
        />
        <path
          d="M 1340 700 L 1100 700 L 1100 550 L 900 550"
          className="anim-draw"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M 200 750 L 450 750 L 450 600"
          className="anim-draw"
          style={{ animationDelay: '0.7s' }}
        />
        <path
          d="M 1240 150 L 1000 150 L 1000 300"
          className="anim-draw"
          style={{ animationDelay: '0.9s' }}
        />
      </g>

      {/* Nodos */}
      <g fill="#00E5FF">
        <circle cx="300" cy="200" r="3" opacity="0.8" />
        <circle cx="500" cy="350" r="3" opacity="0.8" />
        <circle cx="1100" cy="700" r="3" opacity="0.8" />
        <circle cx="900" cy="550" r="3" opacity="0.8" />
        <circle cx="450" cy="600" r="3" opacity="0.8" />
        <circle cx="1000" cy="300" r="3" opacity="0.8" />
      </g>
    </svg>
  )
}
