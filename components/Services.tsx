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
    benefit: 'Sabes exactamente dónde estás parado.',
    icon: IconChart,
    href: '/agendar?tipo=diagnostico',
  },
  {
    title: 'Consultoría financiera para empresas',
    description: 'Estructura, control y reportes para empresas que necesitan orden y dirección.',
    benefit: 'Decisiones ejecutivas con datos reales.',
    icon: IconBuilding,
    href: '/agendar?tipo=empresarial',
  },
  {
    title: 'Finanzas para emprendedores',
    description: 'Claridad sobre rentabilidad, gastos y crecimiento de tu negocio.',
    benefit: 'Entiendes si tu emprendimiento realmente gana.',
    icon: IconBriefcase,
    href: '/agendar?tipo=emprendedor',
  },
  {
    title: 'Organización financiera personal',
    description: 'Presupuesto, flujo y plan de acción para tus finanzas personales.',
    benefit: 'Tranquilidad y control en tu economía personal.',
    icon: IconUser,
    href: '/agendar?tipo=personal',
  },
  {
    title: 'Estructuración administrativa y contable',
    description: 'Procesos claros, responsabilidades definidas y mejor flujo de información.',
    benefit: 'Menos caos administrativo en el día a día.',
    icon: IconDocument,
    href: '/agendar?tipo=empresarial',
  },
  {
    title: 'Evaluación financiera de proyectos',
    description: 'Análisis de viabilidad, costos y retorno antes de invertir o expandirte.',
    benefit: 'Inviertes con criterio, no con intuición.',
    icon: IconCalculator,
    href: '/agendar?tipo=proyectos',
  },
  {
    title: 'Control de flujo de caja y presupuestos',
    description: 'Herramientas y seguimiento para saber cuánto entra, sale y sobra.',
    benefit: 'Anticipas problemas antes de que aparezcan.',
    icon: IconTrendingUp,
    href: '/agendar?tipo=flujo',
  },
  {
    title: 'Acompañamiento mensual',
    description: 'Seguimiento continuo para sostener orden, control y mejora financiera.',
    benefit: 'Resultados sostenibles con apoyo estratégico.',
    icon: IconCalendar,
    href: '/agendar?tipo=acompanamiento',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding section-surface-alt" aria-labelledby="services-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Servicios"
          title="Consultoría financiera a tu medida"
          subtitle="Soluciones claras para personas, emprendedores y empresas que buscan estructura y resultados."
        />
        <h2 id="services-heading" className="sr-only">Servicios de consultoría financiera</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="card card-hover p-6 flex flex-col"
            >
              <span className="w-12 h-12 rounded-xl bg-emerald-muted text-emerald flex items-center justify-center">
                <s.icon />
              </span>
              <h3 className="mt-4 font-display font-semibold text-lg text-slate-text leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-muted flex-1">{s.description}</p>
              <p className="mt-3 text-sm font-semibold text-emerald-dark">{s.benefit}</p>
              <Link href={s.href} className="btn-link mt-4">
                Conocer más →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
