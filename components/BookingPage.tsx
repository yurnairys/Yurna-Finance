'use client'

import { motion } from 'framer-motion'
import { IconCalendar, IconCheck, IconArrowRight } from './Icons'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const FORMSUBMIT_URL = 'https://formsubmit.co/yurna@yurnafinance.com'

const TIPO_TO_VALUE: Record<string, string> = {
  personal: 'Consulta inicial — Finanzas personales',
  emprendedor: 'Consulta inicial — Emprendedores',
  empresarial: 'Consulta inicial — Empresas',
  diagnostico: 'Diagnóstico financiero',
  proyectos: 'Evaluación financiera de proyectos',
  flujo: 'Flujo de caja y presupuestos',
  acompanamiento: 'Acompañamiento mensual',
}

const servicios = [
  { value: '', label: 'Selecciona el tipo de consulta' },
  { value: 'Consulta inicial — Finanzas personales', label: 'Consulta inicial — Finanzas personales' },
  { value: 'Consulta inicial — Emprendedores', label: 'Consulta inicial — Emprendedores' },
  { value: 'Consulta inicial — Empresas', label: 'Consulta inicial — Empresas' },
  { value: 'Diagnóstico financiero', label: 'Diagnóstico financiero' },
  { value: 'Estructuración administrativa y contable', label: 'Estructuración administrativa y contable' },
  { value: 'Evaluación financiera de proyectos', label: 'Evaluación financiera de proyectos' },
  { value: 'Flujo de caja y presupuestos', label: 'Flujo de caja y presupuestos' },
  { value: 'Acompañamiento mensual', label: 'Acompañamiento mensual' },
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [successPage, setSuccessPage] = useState(false)
  const [nextUrl, setNextUrl] = useState('')

  const tipoFromUrl = searchParams.get('tipo')
  const preselectedValue = tipoFromUrl && TIPO_TO_VALUE[tipoFromUrl] ? TIPO_TO_VALUE[tipoFromUrl] : ''
  const isSessionLocked = Boolean(preselectedValue)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const enviado = params.get('enviado')
      params.delete('tipo')
      if (enviado === '1') params.set('enviado', '1')
      setNextUrl(`${window.location.origin}/agendar${params.toString() ? `?${params.toString()}` : ''}`)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && searchParams.get('enviado') === '1') {
      setSuccessPage(true)
    }
  }, [searchParams])

  if (successPage) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 bg-cream pattern-dots">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-4"
        >
          <div className="text-center py-12 px-6 card card-hover shadow-cardHover">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-2xl bg-emerald-muted flex items-center justify-center text-emerald mx-auto"
            >
              <IconCheck />
            </motion.div>
            <h2 className="mt-6 font-display font-semibold text-3xl text-slate-text">¡Mensaje enviado!</h2>
            <p className="mt-4 text-slate-muted text-lg">
              Te contactaré pronto para confirmar tu consulta. Revisa tu correo y WhatsApp.
            </p>
            <p className="mt-6 text-slate-muted text-sm">
              Coordinaremos fecha, hora y detalles de la consulta inicial.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-secondary font-semibold transition-colors"
            >
              Volver al inicio
              <IconArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-cream pattern-dots">
      {/* Hero compacto + formulario en flujo único */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-dark-gradient overflow-hidden pattern-grid">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" aria-hidden="true" />
        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="badge-dark mb-4">
              <IconCalendar />
              Consultoría financiera
            </span>
            <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Agenda tu consulta inicial
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-lg">
              Cuéntame tu situación y coordinamos una primera reunión para revisar cómo puedo ayudarte con claridad financiera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario inmediato: diseño estratégico */}
      <section className="relative -mt-8 md:-mt-12 pb-20">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-6">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            action={FORMSUBMIT_URL}
            method="POST"
            className="form-panel space-y-5"
          >
            <input type="hidden" name="_subject" value="Nueva solicitud de consulta - Yurna Finance" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-slate-text mb-1.5">
                  Nombre <span className="text-emerald">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="Nombre"
                  required
                  className="input-field"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-semibold text-slate-text mb-1.5">
                  Apellido <span className="text-emerald">*</span>
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="Apellido"
                  required
                  className="input-field"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-slate-text mb-1.5">
                Teléfono <span className="text-emerald">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="Teléfono"
                required
                className="input-field"
                placeholder="Ej. +507 6000 0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-text mb-1.5">
                Correo electrónico <span className="text-emerald">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="input-field"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-semibold text-slate-text mb-1.5">
                Tipo de consulta <span className="text-emerald">*</span>
                {isSessionLocked && (
                  <span className="ml-2 text-xs font-normal text-slate-muted">(seleccionado desde la página de servicios)</span>
                )}
              </label>
              <select
                id="servicio"
                name={isSessionLocked ? undefined : 'Servicio'}
                required={!isSessionLocked}
                value={preselectedValue}
                disabled={isSessionLocked}
                className={`input-field ${isSessionLocked ? 'cursor-not-allowed bg-slate-50 opacity-90' : ''}`}
              >
                {servicios.map((opt) => (
                  <option key={opt.value || 'blank'} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {isSessionLocked && (
                <input type="hidden" name="Servicio" value={preselectedValue} />
              )}
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-semibold text-slate-text mb-1.5">
                ¿En qué te podemos ayudar? <span className="text-emerald">*</span>
              </label>
              <textarea
                id="descripcion"
                name="Descripción"
                required
                rows={4}
                className="input-field resize-none"
                placeholder="Cuéntame brevemente tu situación financiera o el objetivo de la consulta..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary !text-white font-bold text-lg shadow-emerald focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2"
            >
              <IconCalendar />
              Enviar solicitud
            </motion.button>
          </motion.form>

          <p className="mt-6 text-center text-slate-muted text-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald mr-1.5 align-middle" aria-hidden="true" />
            Pago previo requerido para confirmar. Respuesta a yurna@yurnafinance.com.
          </p>
        </div>
      </section>
    </div>
  )
}
