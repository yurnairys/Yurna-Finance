'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const steps = [
  {
    step: '1',
    title: 'Diagnóstico financiero',
    description:
      'Analizamos tu situación actual, identificamos brechas y definimos oportunidades de mejora con claridad.',
  },
  {
    step: '2',
    title: 'Organización y estructura',
    description:
      'Creamos una estructura clara de ingresos, gastos, cuentas, reportes y responsabilidades.',
  },
  {
    step: '3',
    title: 'Estrategia y acción',
    description:
      'Definimos acciones concretas para mejorar rentabilidad, control y toma de decisiones.',
  },
  {
    step: '4',
    title: 'Acompañamiento',
    description:
      'Damos seguimiento para asegurar ejecución, orden y resultados sostenibles.',
  },
]

export default function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-corporate-navy py-20 md:py-28 lg:py-32" aria-labelledby="method-heading">
      <div className="hero-pattern absolute inset-0 opacity-[0.07]" aria-hidden />
      <div className="relative section-container">
        <SectionHeader
          light
          eyebrow="Proceso"
          title="Un método claro de principio a fin"
          subtitle="Cuatro etapas. Diagnóstico, organización, estrategia y resultados medibles."
        />
        <h2 id="method-heading" className="sr-only">Método de trabajo</h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue text-white font-bold text-lg">
                {s.step}
              </span>
              <h3 className="mt-4 font-semibold text-xl text-white">{s.title}</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-center text-white/60 text-sm md:text-base">
          Convertimos el desorden financiero en claridad y crecimiento real.
        </p>
      </div>
    </section>
  )
}
