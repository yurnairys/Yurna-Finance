'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from './SectionHeader'
import {
  IconChart,
  IconBuilding,
  IconBriefcase,
  IconUser,
  IconDocument,
  IconCalculator,
  IconTrendingUp,
  IconCalendar,
} from './Icons'

const services = [
  {
    title: 'Diagnóstico financiero',
    description: 'Revisión integral de tu situación actual: números, procesos y puntos críticos.',
    tags: ['Análisis', 'Diagnóstico', 'Prioridades'],
    icon: IconChart,
    href: '/agendar?tipo=diagnostico',
  },
  {
    title: 'Consultoría financiera para empresas',
    description: 'Estructura, control y reportes para empresas que necesitan orden y dirección.',
    tags: ['Estrategia', 'Operación', 'KPIs'],
    icon: IconBuilding,
    href: '/agendar?tipo=empresarial',
  },
  {
    title: 'Finanzas para emprendedores',
    description: 'Claridad sobre rentabilidad, gastos y crecimiento de tu negocio.',
    tags: ['Rentabilidad', 'Control', 'Crecimiento'],
    icon: IconBriefcase,
    href: '/agendar?tipo=emprendedor',
  },
  {
    title: 'Organización financiera personal',
    description: 'Presupuesto, flujo y plan de acción para tus finanzas personales.',
    tags: ['Presupuesto', 'Flujo', 'Plan'],
    icon: IconUser,
    href: '/agendar?tipo=personal',
  },
  {
    title: 'Estructuración administrativa y contable',
    description: 'Procesos claros, responsabilidades definidas y mejor flujo de información.',
    tags: ['Procesos', 'Organización', 'Control'],
    icon: IconDocument,
    href: '/agendar?tipo=empresarial',
  },
  {
    title: 'Evaluación financiera de proyectos',
    description: 'Análisis de viabilidad, costos y retorno antes de invertir o expandirte.',
    tags: ['Viabilidad', 'ROI', 'Proyecciones'],
    icon: IconCalculator,
    href: '/agendar?tipo=proyectos',
  },
  {
    title: 'Control de flujo de caja y presupuestos',
    description: 'Herramientas y seguimiento para saber cuánto entra, sale y sobra.',
    tags: ['Flujo de caja', 'Presupuesto', 'Seguimiento'],
    icon: IconTrendingUp,
    href: '/agendar?tipo=flujo',
  },
  {
    title: 'Acompañamiento mensual',
    description: 'Seguimiento continuo para sostener orden, control y mejora financiera.',
    tags: ['Seguimiento', 'Resultados', 'Estrategia'],
    icon: IconCalendar,
    href: '/agendar?tipo=acompanamiento',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding section-surface-muted" aria-labelledby="services-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Servicios"
          title="Soluciones financieras para cada etapa de tu negocio"
          subtitle="Diagnóstico, consultoría, control y acompañamiento con enfoque en resultados reales."
        />
        <h2 id="services-heading" className="sr-only">Servicios de consultoría financiera</h2>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="card card-hover p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <span className="icon-box [&_svg]:h-4 [&_svg]:w-4">
                  <s.icon />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-foreground leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{s.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={s.href} className="btn-link mt-5">
                Conocer más →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
