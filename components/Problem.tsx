'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const pains = [
  {
    title: 'Facturas, pero no sabes cuánto ganas',
    text: 'Ingresos sin claridad sobre margen real ni rentabilidad.',
  },
  {
    title: 'Vendes, pero no tienes control de gastos',
    text: 'Sin visibilidad ni respaldo de datos reales para decidir.',
  },
  {
    title: 'Procesos desordenados',
    text: 'Tu empresa crece, pero la operación sigue sin estructura.',
  },
  {
    title: 'Decisiones sin datos financieros',
    text: 'Declaras impuestos por obligación, no por estrategia.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="section-padding section-surface-alt" aria-labelledby="problem-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader
              align="left"
              eyebrow="El desafío"
              title="Muchos negocios crecen con esfuerzo, pero sin dirección clara"
              subtitle="Aunque facturan, no ven liquidez: hay desorganización, falta de estrategia financiera y ausencia de automatización. Esto frena el potencial real."
              className="!mb-0 !mx-0 !text-left"
            />
            <h2 id="problem-heading" className="sr-only">
              Desafíos financieros
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex items-center gap-3"
              aria-hidden
            >
              <span className="h-px flex-1 max-w-[4rem] bg-brand-blue/40" />
              <span className="text-xs font-medium uppercase tracking-widest text-foreground-subtle">
                Claridad · Control · Resultados
              </span>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pains.map((pain, i) => (
              <motion.article
                key={pain.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card card-hover p-5 md:p-6"
              >
                <span className="icon-box mb-4 text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-foreground leading-snug">{pain.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{pain.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
