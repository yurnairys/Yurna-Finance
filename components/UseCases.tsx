'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const cases = [
  {
    title: 'Empresa sin reportes claros',
    description: 'Un negocio facturaba bien pero no sabía su margen real. Implementamos estructura de ingresos, gastos y reportes mensuales.',
    result: 'Claridad para decidir inversiones y contrataciones.',
  },
  {
    title: 'Emprendedor sin control de caja',
    description: 'Mezclaba gastos personales y del negocio. Separamos cuentas, presupuesto y flujo de caja semanal.',
    result: 'Identificó qué productos eran rentables y cuáles no.',
  },
  {
    title: 'Procesos administrativos desordenados',
    description: 'La empresa creció rápido sin orden interno. Mapeamos procesos contables y administrativos con responsables claros.',
    result: 'Menos errores, menos retrabajo y más tranquilidad operativa.',
  },
  {
    title: 'Preparación para crédito bancario',
    description: 'Necesitaban presentar números ordenados al banco. Organizamos estados, proyecciones y documentación financiera.',
    result: 'Mejor preparación y confianza en la negociación.',
  },
]

export default function UseCases() {
  return (
    <section id="casos" className="section-padding section-surface-muted" aria-labelledby="cases-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Casos de uso"
          title="Situaciones donde la consultoría marca la diferencia"
          subtitle="Ejemplos del tipo de retos que resolvemos con estructura y estrategia financiera."
        />
        <h2 id="cases-heading" className="sr-only">Casos de uso</h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card card-hover p-6 md:p-8"
            >
              <h3 className="font-semibold text-lg text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm text-foreground-muted leading-relaxed">{c.description}</p>
              <p className="mt-4 text-sm font-semibold text-brand-blue">{c.result}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
