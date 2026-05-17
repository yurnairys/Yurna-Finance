'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import {
  IconChart,
  IconDocument,
  IconTrendingUp,
  IconUser,
  IconBriefcase,
  IconBuilding,
  IconCheck,
} from './Icons'

const steps = [
  { label: 'Diagnóstico profundo', icon: IconChart },
  { label: 'Orden estructural', icon: IconDocument },
  { label: 'Optimización fiscal y financiera', icon: IconDocument },
  { label: 'Estrategia de inversión (real estate + bursátil)', icon: IconTrendingUp },
  { label: 'Crecimiento y expansión sostenible', icon: IconTrendingUp },
]

const forWho = [
  { text: 'Profesionales que desean claridad financiera', icon: IconUser },
  { text: 'Emprendedores que quieren crecer con orden', icon: IconBriefcase },
  { text: 'Empresas que buscan dirección estratégica', icon: IconBuilding },
  { text: 'Inversionistas que quieren construir patrimonio real', icon: IconTrendingUp },
]

const containerLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const containerRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const itemLeft = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
}

const itemRight = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0 },
}

export default function MethodAndForWho() {
  return (
    <section
      id="metodo"
      className="section-padding section-surface overflow-hidden"
      aria-labelledby="section-heading"
    >
      <div className="section-container">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo trabajamos"
          subtitle="Un proceso claro y pensado para quienes buscan resultados con orden."
        />
        <h2 id="section-heading" className="sr-only">Cómo trabajamos</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Columna 1: Método Yurna Finance */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerLeft}
          >
            <div className="sticky top-28 card-panel">
              <h3
                id="method-heading"
                className="font-display font-semibold text-xl md:text-2xl lg:text-3xl text-slate-text"
              >
                Método Yurna Finance
              </h3>
              <p className="mt-2 text-base md:text-lg text-slate-muted max-w-xl">
                Un proceso claro en cinco pasos para estructurar tus finanzas y crecer con estrategia.
              </p>
              <motion.ol
                className="mt-6 space-y-3"
                role="list"
                start={1}
                variants={containerLeft}
              >
                {steps.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={itemLeft}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex items-center gap-4 p-4 card card-hover border hover:border-brand/50 hover:shadow-lg transition-all cursor-default"
                  >
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand text-white font-display font-semibold flex items-center justify-center text-sm"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-muted flex items-center justify-center text-brand">
                      <step.icon />
                    </span>
                    <span className="text-base md:text-lg font-semibold text-slate-text">{step.label}</span>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>

          {/* Columna 2: ¿Para quién es? */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerRight}
          >
            <div className="sticky top-28 card-panel">
              <h3
                id="forwho-heading"
                className="font-display font-semibold text-xl md:text-2xl lg:text-3xl text-slate-text"
              >
                ¿Para quién es?
              </h3>
              <p className="mt-2 text-base md:text-lg text-slate-muted max-w-xl">
                Para personas y organizaciones que buscan estructura, no parches.
              </p>
              <motion.ul
                className="mt-6 space-y-3"
                role="list"
                variants={containerRight}
              >
                {forWho.map((row, i) => (
                  <motion.li
                    key={i}
                    variants={itemRight}
                    whileHover={{ x: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="flex items-center gap-4 p-4 card card-hover border hover:border-brand/50 hover:shadow-lg transition-all cursor-default"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-muted flex items-center justify-center text-brand">
                      <row.icon />
                    </span>
                    <span className="flex-1 text-base md:text-lg font-medium text-slate-text">{row.text}</span>
                    <span className="flex-shrink-0 text-brand">
                      <IconCheck />
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
