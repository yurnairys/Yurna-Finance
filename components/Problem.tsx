'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const pains = [
  'Facturas, pero no sabes cuánto ganas.',
  'Vendes, pero no tienes control de gastos.',
  'Tu empresa crece, pero tus procesos siguen desordenados.',
  'Declaras impuestos por obligación, no por estrategia.',
  'Tomas decisiones sin datos financieros claros.',
]

export default function Problem() {
  return (
    <section id="problema" className="section-padding-sm section-surface-alt" aria-labelledby="problem-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="El problema"
          title="¿Te resulta familiar?"
          subtitle="No se trata solo de facturar. Se trata de saber cuánto ganas y hacia dónde va tu dinero."
        />
        <h2 id="problem-heading" className="sr-only">Problemas comunes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {pains.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card card-hover p-5 md:p-6"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold-muted text-gold-dark font-display font-bold text-sm flex items-center justify-center mb-3">
                {i + 1}
              </span>
              <p className="text-slate-text font-medium leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-lg text-slate-muted max-w-2xl mx-auto"
        >
          Cuando no hay orden financiero, hay ansiedad. Transforma el caos financiero en claridad.
        </motion.p>
      </div>
    </section>
  )
}
