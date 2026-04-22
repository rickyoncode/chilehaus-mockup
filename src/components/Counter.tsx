import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  duration?: number
  className?: string
}

export default function Counter({ to, duration = 1800, className = '' }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const animate = (now: number) => {
              const t = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.floor(eased * to))
              if (t < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString('es-CL')}
    </span>
  )
}
