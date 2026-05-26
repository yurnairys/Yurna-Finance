'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const audiences = [
  'Personas que quieren ordenar sus finanzas personales',
  'Emprendedores que quieren saber si su negocio es rentable',
  'Empresas que necesitan procesos, control y reportes',
  'Negocios que quieren crecer sin depender solo del dueño',
  'Profesionales que se preparan para bancos o inversiones',
  'Dueños que declaran impuestos sin estrategia financiera',
  'Equipos que necesitan presupuestos y flujo de caja',
  'Proyectos que requieren evaluación financiera previa',
]

export default function ForWho() {
  return (
    <section id="para-quien" className="section-padding section-surface" aria-labelledby="forwho-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Para quién es"
          title="Experiencia adaptada a distintos perfiles y etapas"
          subtitle="Metodología flexible para personas, emprendedores y empresas que buscan orden financiero."
        />
        <h2 id="forwho-heading" className="sr-only">Para quién es</h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {audiences.map((text, i) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="inline-flex items-center px-4 py-2.5 rounded-full border border-border bg-white text-sm font-medium text-foreground-muted hover:border-brand-blue/30 hover:text-brand-blue transition-colors cursor-default"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
