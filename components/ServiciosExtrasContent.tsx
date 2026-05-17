'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconUser, IconBriefcase, IconDocument, IconTrendingUp, IconCheck, IconShield, IconBuilding, IconChart } from './Icons'

const beneficios = [
  { title: 'Confianza', description: 'Ambiente de trabajo basado en confianza mutua y respeto.', icon: IconShield },
  { title: 'Integración', description: 'Cohesión del equipo y comunicación interna efectiva.', icon: IconBuilding },
  { title: 'Claridad', description: 'Procesos claros que reducen la incertidumbre operativa.', icon: IconChart },
  { title: 'Eficiencia', description: 'Optimización de procesos y mejora de productividad.', icon: IconTrendingUp },
  { title: 'Retención', description: 'Desarrollo del equipo existente y compromiso organizacional.', icon: IconUser },
]

const metodologia = [
  { title: 'Diagnóstico', description: 'Evaluación integral de la situación actual de la empresa y su equipo' },
  { title: 'Fortalecimiento', description: 'Sesiones 1-1 y dinámicas grupales para desarrollar el capital humano' },
  { title: 'Ordenamiento', description: 'Estructuración y optimización de procesos administrativos y financieros' },
  { title: 'Seguimiento', description: 'Acompañamiento continuo para asegurar la sostenibilidad de los cambios' },
]

const pillars = [
  {
    title: 'Sesiones 1-1',
    description: 'Acompañamiento personalizado para cada colaborador, fortaleciendo sus capacidades y desarrollo profesional.',
    icon: IconUser,
    items: [
      'Evaluación personalizada de capacidades',
      'Plan de desarrollo individual',
      'Coaching y mentoría',
      'Seguimiento continuo',
    ],
  },
  {
    title: 'Dinámicas Internas',
    description: 'Actividades grupales diseñadas para generar confianza, integración y trabajo en equipo efectivo.',
    icon: IconBriefcase,
    items: [
      'Talleres de integración',
      'Team building',
      'Dinámicas de comunicación',
      'Cultura organizacional',
    ],
  },
  {
    title: 'Orden de Procesos',
    description: 'Estructuración y optimización de procesos administrativos, contables y financieros de manera ordenada.',
    icon: IconDocument,
    items: [
      'Mapeo de procesos actuales',
      'Diseño de procesos optimizados',
      'Implementación gradual',
      'Documentación y manuales',
    ],
  },
  {
    title: 'Desarrollo del Equipo',
    description: 'Fortalecimiento de capacidades sin reemplazar personal, invirtiendo en el talento existente.',
    icon: IconTrendingUp,
    items: [
      'Capacitación especializada',
      'Desarrollo de habilidades técnicas',
      'Mejora continua',
      'Retención de talento',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function ServiciosExtrasContent() {
  return (
    <div className="bg-cream pattern-dots">
      {/* Hero del programa */}
      <section className="relative py-16 md:py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none pattern-dots" style={{ backgroundSize: '24px 24px' }} aria-hidden />
        <div className="relative section-container text-center">
          <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-3">
            Programa para empresas
          </p>
          <h1 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Programa de Integración y Orden Profesional
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic mt-3">
            Del humano a la empresa
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pilares"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-brand text-brand font-semibold hover:bg-brand/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Conocer metodología
            </a>
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl btn-primary !text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      {/* Intro — contenido centrado */}
      <section className="py-12 md:py-16">
        <div className="section-container flex justify-center">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-1 rounded-full bg-brand mb-6" aria-hidden />
            <p className="text-slate-muted text-lg md:text-xl leading-relaxed">
              Acompañamos a las empresas a fortalecer a sus colaboradores a través de sesiones 1-1 y dinámicas internas, generando confianza, integración y claridad, para luego ordenar los procesos administrativos, contables y financieros sin necesidad de reemplazar al equipo, sino desarrollándolo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilares del Programa — debajo de la descripción */}
      <section id="pilares" className="section-padding-sm bg-cream">
        <div className="section-container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Pilares del <span className="text-brand">Programa</span>
            </h2>
            <p className="mt-3 text-slate-muted text-lg md:text-xl max-w-2xl mx-auto">
              Cuatro ejes fundamentales para transformar su organización
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 lg:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {pillars.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="card card-hover border p-6 md:p-8 shadow-card hover:shadow-cardHover hover:border-brand/30 transition-all"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-brand-muted text-brand items-center justify-center">
                  <pillar.icon />
                </span>
                <h3 className="mt-4 font-display font-semibold text-xl md:text-2xl text-slate-text">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-slate-muted text-base md:text-lg leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2" role="list">
                  {pillar.items.map((bullet, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-text text-sm md:text-base">
                      <span className="flex-shrink-0 text-brand">
                        <IconCheck />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beneficios del Programa — fondo navy, 5 cards */}
      <section className="py-16 md:py-24 bg-navy overflow-hidden">
        <div className="section-container">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-brand">
              Beneficios del Programa
            </h2>
            <p className="mt-3 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Resultados tangibles que transforman su organización
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {beneficios.map((b) => (
              <motion.article
                key={b.title}
                variants={item}
                className="rounded-2xl bg-navy-light/80 border border-white/10 p-6 text-center hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-brand-muted text-brand items-center justify-center">
                  <b.icon />
                </span>
                <h3 className="mt-4 font-display font-semibold text-lg md:text-xl text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                  {b.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nuestra Metodología — fondo claro, 4 pasos con línea dorada */}
      <section className="section-padding-sm bg-white border-y border-card-border">
        <div className="section-container">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Nuestra <span className="text-brand">Metodología</span>
            </h2>
            <p className="mt-3 text-slate-muted text-lg md:text-xl max-w-2xl mx-auto">
              Un proceso estructurado para resultados sostenibles
            </p>
          </motion.div>
          <div className="relative">
            {/* Línea dorada conectora */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand/40 hidden md:block" aria-hidden />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
            >
              {metodologia.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={item}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-brand/30 shadow-card flex items-center justify-center font-display font-semibold text-xl text-brand mb-6">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-slate-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-muted text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding-sm bg-white border-t border-card-border">
        <div className="section-container text-center">
          <p className="text-slate-muted text-lg max-w-2xl mx-auto mb-8">
            ¿Quieres llevar orden y desarrollo a tu equipo? Agenda una conversación para conocer cómo adaptamos el programa a tu empresa.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl btn-primary !text-white font-semibold shadow-brand transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Agendar conversación
          </Link>
        </div>
      </section>
    </div>
  )
}
