import { useState, type FormEvent } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section
      id="contacto"
      className="py-24 md:py-36 bg-paper-soft text-ink border-t border-paper-border"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold-deep text-center">
            Contacto
          </p>
          <h2 className="mt-3 font-display font-medium text-4xl md:text-5xl leading-tight text-center text-forest">
            Conversemos.
          </h2>
          <p className="mt-6 text-ink-soft text-lg text-center max-w-xl mx-auto">
            Cuéntanos de tu proyecto. Todos los proyectos empiezan con una reunión.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="mt-14 space-y-8">
            <Field label="Nombre" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Teléfono / WhatsApp (opcional)" name="phone" type="tel" />

            <div className="grid md:grid-cols-2 gap-8">
              <Select label="Rol" name="role" options={['Arquitecto', 'Constructor', 'Mandante', 'Otro']} />
              <Select label="Tipo de proyecto" name="project" options={['Vivienda', 'Ampliación', 'Comercial', 'Otro']} />
            </div>

            <Field label="Mensaje" name="message" textarea required />

            <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
              <p className="text-xs text-ink-dim max-w-sm">
                Todos los proyectos requieren un 60% inicial por transferencia.
              </p>
              <button
                type="submit"
                disabled={sent}
                className="px-8 py-3 bg-forest text-bone font-medium hover:bg-forest-deep transition-all btn-shimmer disabled:opacity-60"
              >
                {sent ? 'Mensaje enviado ✓' : 'Enviar →'}
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 pt-10 border-t border-paper-border grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep font-medium mb-2">
                Email
              </div>
              <a
                href="mailto:info@chilehaus.cl"
                className="text-forest hover:text-gold-deep transition-colors font-medium"
              >
                info@chilehaus.cl
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep font-medium mb-2">
                WhatsApp
              </div>
              <a
                href="https://wa.me/56954085135"
                target="_blank"
                rel="noopener"
                className="text-forest hover:text-gold-deep transition-colors font-medium"
              >
                +56 9 5408 5135
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-deep font-medium mb-2">
                Taller
              </div>
              <p className="text-forest font-medium">Carlos Acharan 835<br/>Paillaco, Los Ríos</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
}

function Field({ label, name, type = 'text', required, textarea }: FieldProps) {
  if (textarea) {
    return (
      <label className="block">
        <span className="block text-[10px] text-gold-deep font-medium uppercase tracking-[0.25em] mb-2">
          {label}
          {required && <span className="text-gold-deep ml-1">*</span>}
        </span>
        <textarea
          name={name}
          required={required}
          rows={4}
          className="w-full bg-transparent border-b border-paper-border focus:border-gold-deep outline-none py-3 text-forest transition-colors resize-none"
        />
      </label>
    )
  }
  return (
    <label className="block">
      <span className="block text-[10px] text-gold-deep font-medium uppercase tracking-[0.25em] mb-2">
        {label}
        {required && <span className="text-gold-deep ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-paper-border focus:border-gold-deep outline-none py-3 text-forest transition-colors"
      />
    </label>
  )
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[10px] text-gold-deep font-medium uppercase tracking-[0.25em] mb-2">
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-transparent border-b border-paper-border focus:border-gold-deep outline-none py-3 text-forest transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-paper">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
