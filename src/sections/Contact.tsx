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
      className="py-24 md:py-32 border-t border-carbon-border bg-carbon-soft"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-4xl md:text-5xl leading-tight text-center">
            Conversemos.
          </h2>
          <p className="mt-6 text-ash text-lg text-center max-w-xl mx-auto">
            Cuéntanos de tu proyecto. Todos los proyectos empiezan con una reunión.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="mt-14 space-y-8">
            <Field label="Nombre" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Teléfono (opcional)" name="phone" type="tel" />

            <div className="grid md:grid-cols-2 gap-8">
              <Select label="Rol" name="role" options={['Arquitecto', 'Constructor', 'Mandante', 'Otro']} />
              <Select label="Tipo de proyecto" name="project" options={['Vivienda', 'Ampliación', 'Comercial', 'Otro']} />
            </div>

            <Field label="Mensaje" name="message" textarea required />

            <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
              <p className="text-xs text-ash-dim max-w-sm">
                Todos los proyectos requieren un 60% inicial por transferencia.
              </p>
              <button
                type="submit"
                disabled={sent}
                className="px-8 py-3 bg-cyan-electric text-carbon font-medium hover:bg-cyan-glow transition-all btn-shimmer disabled:opacity-60"
              >
                {sent ? 'Mensaje enviado ✓' : 'Enviar →'}
              </button>
            </div>
          </form>
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
        <span className="block text-xs text-ash uppercase tracking-widest mb-2">
          {label}
          {required && <span className="text-cyan-electric ml-1">*</span>}
        </span>
        <textarea
          name={name}
          required={required}
          rows={4}
          className="w-full bg-transparent border-b border-carbon-border focus:border-cyan-electric outline-none py-3 text-bone transition-colors resize-none"
        />
      </label>
    )
  }
  return (
    <label className="block">
      <span className="block text-xs text-ash uppercase tracking-widest mb-2">
        {label}
        {required && <span className="text-cyan-electric ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-carbon-border focus:border-cyan-electric outline-none py-3 text-bone transition-colors"
      />
    </label>
  )
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs text-ash uppercase tracking-widest mb-2">
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-transparent border-b border-carbon-border focus:border-cyan-electric outline-none py-3 text-bone transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-carbon-soft">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
