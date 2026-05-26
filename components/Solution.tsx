'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

const items = [
  'Diagnóstico profundo de tu situación financiera',
  'Organización de ingresos, gastos y reportes',
  'Presupuestos y control de flujo de caja',
  'Medición de rentabilidad con datos reales',
  'Estructuración de procesos administrativos',
  'Acompañamiento para sostener resultados',
]

export default function Solution() {
  return (
    <section id="solucion" className="section-padding section-surface" aria-labelledby="solution-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-2xl border border-border bg-background-secondary p-8 md:p-10 overflow-hidden">
            <div className="hero-pattern absolute inset-0 opacity-40" aria-hidden />
            <div className="relative">
              <p className="section-label">Nuestra respuesta</p>
              <h2 id="solution-heading" className="section-title text-2xl md:text-3xl lg:text-4xl">
                De la desorganización a una estructura financiera de crecimiento
              </h2>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Consultoría financiera con diagnóstico, estrategia y acompañamiento para personas, emprendedores y
                empresas.
              </p>
              <div className="mt-8 rounded-xl bg-white border border-border p-6 shadow-soft">
                <p className="text-3xl font-bold text-brand-blue">100%</p>
                <p className="text-sm text-foreground-muted mt-1">Enfoque en claridad y resultados medibles</p>
              </div>
            </div>
          </div>

          <div>
            <ol className="space-y-4" role="list">
              {items.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 font-bold text-sm text-brand-blue bg-brand-blue/10 border border-brand-blue/20 rounded-md px-2.5 py-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground font-medium pt-0.5">{text}</span>
                </motion.li>
              ))}
            </ol>
            <Link href="#metodo" className="btn-outline mt-8">
              Ver metodología
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
