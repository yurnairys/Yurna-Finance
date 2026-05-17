'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { IconCheck } from './Icons'

const items = [
  'Ordenar ingresos y gastos',
  'Revisar procesos administrativos',
  'Crear presupuestos',
  'Medir rentabilidad',
  'Controlar flujo de caja',
  'Mejorar reportes',
  'Tomar decisiones con números reales',
]

export default function Solution() {
  return (
    <section id="solucion" className="section-padding section-surface" aria-labelledby="solution-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="La solución"
              title="Estructura financiera para crecer con claridad"
              subtitle="Ordena tus números, optimiza tus procesos y crece con estrategia. Una empresa ordenada toma mejores decisiones."
              className="!mb-8 !text-left !mx-0"
            />
            <h2 id="solution-heading" className="sr-only">Estructura financiera</h2>
          </div>
          <motion.ul
            className="grid sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            role="list"
          >
            {items.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 card p-4 card-hover"
              >
                <span className="text-emerald flex-shrink-0 mt-0.5">
                  <IconCheck />
                </span>
                <span className="text-slate-text text-sm md:text-base font-medium">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
