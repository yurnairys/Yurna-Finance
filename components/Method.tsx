'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const steps = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Revisamos tu situación actual, números, procesos y necesidades.',
  },
  {
    step: '02',
    title: 'Organización',
    description: 'Creamos una estructura clara de ingresos, gastos, cuentas, reportes y responsabilidades.',
  },
  {
    step: '03',
    title: 'Estrategia',
    description: 'Definimos acciones para mejorar rentabilidad, control y toma de decisiones.',
  },
  {
    step: '04',
    title: 'Acompañamiento',
    description: 'Damos seguimiento para asegurar ejecución, orden y resultados.',
  },
]

export default function Method() {
  return (
    <section id="metodo" className="section-padding section-surface" aria-labelledby="method-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Método"
          title="Cómo trabajo contigo"
          subtitle="Un proceso claro en cuatro pasos. Estructura, control y ejecución."
        />
        <h2 id="method-heading" className="sr-only">Método de trabajo</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative card p-6 md:p-8 card-hover"
            >
              <span className="font-display font-bold text-4xl text-emerald/20">{s.step}</span>
              <h3 className="mt-2 font-display font-semibold text-xl text-slate-text">{s.title}</h3>
              <p className="mt-3 text-slate-muted text-sm leading-relaxed">{s.description}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-emerald/30" aria-hidden />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
