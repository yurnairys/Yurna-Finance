'use client'

import { IconCalendar } from './Icons'
import { useState, useEffect } from 'react'

const FORMSUBMIT_URL = 'https://formsubmit.co/yurna@yurnafinance.com'

const servicios = [
  { value: '', label: 'Selecciona el tipo de sesión' },
  { value: 'Sesión Estratégica Personal ($50)', label: 'Sesión Estratégica Personal — $50' },
  { value: 'Sesión Estratégica para Emprendedores ($100)', label: 'Sesión Estratégica para Emprendedores — $100' },
  { value: 'Sesión Estratégica Empresarial ($300)', label: 'Sesión Estratégica Empresarial — $300' },
]

export default function Booking() {
  const [successPage, setSuccessPage] = useState(false)
  const [nextUrl, setNextUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${window.location.pathname}?enviado=1#agendar`
      setNextUrl(url)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('enviado') === '1') {
      setSuccessPage(true)
    }
  }, [])

  if (successPage) {
    return (
      <section
        id="agendar"
        className="py-20 md:py-28 bg-cream pattern-dots border-t border-card-border"
        aria-labelledby="booking-heading"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto py-12 px-6 card card-hover shadow-card">
            <span className="w-16 h-16 rounded-2xl bg-brand-muted flex items-center justify-center text-brand mx-auto">
              <IconCalendar />
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl text-slate-text">Mensaje enviado</h2>
            <p className="mt-2 text-slate-muted text-sm">
              Te contactaremos pronto para confirmar tu sesión. Revisa tu correo y WhatsApp.
            </p>
            <p className="mt-4 text-slate-muted text-xs">
              Pago previo requerido para confirmar la sesión.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="agendar"
      className="py-20 md:py-28 bg-cream pattern-dots border-t border-card-border"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-muted text-brand text-sm font-medium mb-4">
            <IconCalendar />
            <span>Reserva tu sesión</span>
          </span>
          <h2
            id="booking-heading"
            className="font-display font-semibold text-3xl md:text-4xl text-slate-text"
          >
            Agenda tu Sesión Estratégica
          </h2>
          <p className="mt-4 text-slate-muted max-w-xl mx-auto">
            Completa el formulario con tus datos y el tipo de sesión que te interesa. Te responderemos a la brevedad para confirmar fecha y pago.
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <form
            action={FORMSUBMIT_URL}
            method="POST"
            className="rounded-2xl border border-card-border bg-white p-6 md:p-8 shadow-card space-y-5"
          >
            <input type="hidden" name="_subject" value="Nueva solicitud de sesión - Yurna Finance" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-text mb-1.5">
                  Nombre <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="Nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-slate-text mb-1.5">
                  Apellido <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="Apellido"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-slate-text mb-1.5">
                Número de teléfono <span className="text-brand">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="Teléfono"
                required
                className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                placeholder="Ej. +507 6000 0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-text mb-1.5">
                Correo electrónico <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-medium text-slate-text mb-1.5">
                Servicio de interés <span className="text-brand">*</span>
              </label>
              <select
                id="servicio"
                name="Servicio"
                required
                className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand bg-white"
              >
                {servicios.map((opt) => (
                  <option key={opt.value || 'blank'} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-slate-text mb-1.5">
                Descripción o mensaje <span className="text-brand">*</span>
              </label>
              <textarea
                id="descripcion"
                name="Descripción"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-card-border text-slate-text placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                placeholder="Cuéntanos brevemente tu situación o qué te gustaría trabajar en la sesión..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-secondary font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <IconCalendar />
              Enviar solicitud
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-slate-muted text-sm flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" aria-hidden="true" />
          Pago previo requerido para confirmar la sesión. Los datos se envían a yurna@yurnafinance.com.
        </p>
      </div>
    </section>
  )
}
