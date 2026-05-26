'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from './SectionHeader'
import { TitleAccent } from './TitleAccent'
import { IconArrowRight, IconChart } from './Icons'

export default function Services() {
  return (
    <section id="servicios" className="section-padding section-surface-muted" aria-labelledby="services-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Programa"
          title={
            <>
              Programa <TitleAccent>estratégico</TitleAccent> con{' '}
              <TitleAccent>inteligencia financiera integral</TitleAccent>
            </>
          }
          subtitle="Finanzas, estructura y expansión para empresas, emprendedores y profesionales que ya generan ingresos."
        />
        <h2 id="services-heading" className="sr-only">
          Programa estratégico con inteligencia financiera integral
        </h2>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card card-hover p-8 md:p-12 max-w-3xl mx-auto text-center border-brand-blue/20"
        >
          <span className="icon-box mx-auto mb-6 [&_svg]:h-5 [&_svg]:w-5">
            <IconChart />
          </span>
          <p className="text-foreground-muted leading-relaxed">
            Un programa diseñado para diagnosticar, ordenar y construir una ruta de crecimiento real. Inicia con
            consulta estratégica, continúa con diagnóstico financiero y empresarial, y finaliza con un plan de acción
            personalizado.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['Diagnóstico', 'Estructura', 'Indicadores', 'Crecimiento'].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link href="/servicios" className="btn-primary px-6 py-3">
              Ver programa completo
              <IconArrowRight />
            </Link>
            <Link href="/agendar?tipo=programa" className="btn-outline px-6 py-3">
              Aplicar al Programa
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
