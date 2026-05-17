'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { IconCheck } from './Icons'

const benefits = [
  'Claridad financiera',
  'Mejor control de gastos',
  'Decisiones basadas en datos',
  'Mayor rentabilidad',
  'Procesos más ordenados',
  'Mejor preparación para bancos e inversionistas',
  'Menos caos administrativo',
  'Más seguridad al crecer',
]

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding section-surface" aria-labelledby="benefits-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Beneficios"
          title="Lo que ganas con consultoría financiera"
          subtitle="Resultados concretos cuando tus finanzas y procesos trabajan a tu favor."
        />
        <h2 id="benefits-heading" className="sr-only">Beneficios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 card p-4 card-hover"
            >
              <span className="text-emerald flex-shrink-0">
                <IconCheck />
              </span>
              <span className="text-sm font-semibold text-slate-text">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
