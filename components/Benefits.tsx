'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { TitleAccent } from './TitleAccent'

const benefits = [
  {
    title: 'Claridad financiera',
    text: 'Prioridades claras y visión real de tu situación.',
  },
  {
    title: 'Control de gastos',
    text: 'Seguimiento estructurado de ingresos y salidas.',
  },
  {
    title: 'Decisiones con datos',
    text: 'Información confiable para decidir mejor.',
  },
  {
    title: 'Mayor rentabilidad',
    text: 'Acciones enfocadas en mejorar márgenes.',
  },
  {
    title: 'Procesos ordenados',
    text: 'Menos caos administrativo en el día a día.',
  },
  {
    title: 'Preparación bancaria',
    text: 'Números listos para créditos e inversiones.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding section-surface-alt" aria-labelledby="benefits-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Beneficios"
          title={
            <>
              Por qué confiar en <TitleAccent>Yurna Finance</TitleAccent>
            </>
          }
          subtitle="Consultoría financiera con enfoque en claridad, control y resultados medibles."
        />
        <h2 id="benefits-heading" className="sr-only">Beneficios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card card-hover p-6"
            >
              <span className="icon-box mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
