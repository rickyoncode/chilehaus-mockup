type Props = {
  className?: string
  title?: string
}

/**
 * Aproximación del logo CHILEHAUS del brandboard:
 * casa con entramado de madera (Fachwerkhaus) en cuyas vigas se
 * dibujan una "C" (lado izquierdo) y una "H" (lado derecho), con
 * un panel vertical central de veta de madera.
 */
export default function LogoMark({ className = '', title = 'CHILEHAUS' }: Props) {
  return (
    <svg
      viewBox="0 0 120 110"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Techo a dos aguas + alero */}
        <path d="M 8 42 L 60 8 L 112 42" />
        <path d="M 4 42 L 116 42" />

        {/* Muros laterales */}
        <path d="M 14 42 L 14 102 L 106 102 L 106 42" />

        {/* Lado izquierdo — entramado dibujando una "C" */}
        <path d="M 28 42 L 28 102" />
        <path d="M 14 60 L 28 42" />
        <path d="M 14 84 L 28 70" />
        <path d="M 28 70 L 50 70" />

        {/* Lado derecho — entramado dibujando una "H" */}
        <path d="M 92 42 L 92 102" />
        <path d="M 70 70 L 92 70" />
        <path d="M 92 42 L 106 60" />
        <path d="M 92 70 L 106 84" />
      </g>

      {/* Panel central — veta de madera */}
      <g>
        <rect x="54" y="48" width="12" height="54" fill="currentColor" opacity="0.18" />
        <path
          d="M 60 50 Q 56 62 60 74 Q 64 86 60 100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          d="M 57 52 Q 60 64 57 76 Q 60 88 57 100"
          stroke="currentColor"
          strokeWidth="0.7"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M 63 54 Q 60 66 63 78 Q 60 90 63 100"
          stroke="currentColor"
          strokeWidth="0.7"
          fill="none"
          opacity="0.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
