import lockupDark from '../assets/logo/chilehaus-lockup-dark.png'
import lockupLight from '../assets/logo/chilehaus-lockup-light.png'
import wordmarkDark from '../assets/logo/chilehaus-wordmark-dark.png'
import wordmarkLight from '../assets/logo/chilehaus-wordmark-light.png'

type Props = {
  className?: string
  /** 'dark' = tinta grafito, para fondos claros. 'light' = tinta hueso, para fondos oscuros. */
  variant?: 'dark' | 'light'
  /** Incluye el descriptor "Arquitectura e Ingeniería en Madera" (logotipo principal vs. versión reducida). */
  tagline?: boolean
}

/**
 * Logotipo CHILEHAUS — arte final del Manual de Marca v1.0 (sept. 2026),
 * extraído como imagen desde el PDF maestro. No reconstruir ni recolorear
 * distinto a las variantes dark/light autorizadas (monocroma / negativa).
 */
export default function LogoMark({
  className = '',
  variant = 'dark',
  tagline = false,
}: Props) {
  const src = tagline
    ? variant === 'dark'
      ? lockupDark
      : lockupLight
    : variant === 'dark'
      ? wordmarkDark
      : wordmarkLight

  return (
    <img
      src={src}
      alt="CHILEHAUS — Arquitectura e Ingeniería en Madera"
      className={className}
    />
  )
}
