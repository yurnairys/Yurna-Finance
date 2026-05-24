'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1"
          >
            <p className="text-brand-yellow font-display text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Sobre mí
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-10">
              Consultoría que integra visión estratégica, cumplimiento y eficiencia
            </h2>
            <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed">
              <p className="border-l-4 border-brand-yellow pl-5">
                Soy consultora estratégica en{' '}
                <strong className="text-brand-yellow">gestión financiera</strong>, estructuración de proyectos e inversión en mercados de capitales y bienes raíces, con experiencia regional en Latinoamérica.
              </p>
              <p>
                Acompaño organizaciones e inversionistas en la{' '}
                <strong className="text-slate-900">optimización de estructuras administrativas, financieras y legales</strong>, integrando visión estratégica, cumplimiento normativo y eficiencia operativa en cada fase del proyecto.
              </p>
              <p>
                Mi enfoque combina dirección financiera, análisis de inversión y desarrollo de modelos sostenibles, coordinando equipos multidisciplinarios y multiculturales bajo una lógica clara de{' '}
                <strong className="text-slate-900">ejecución, control y crecimiento</strong>.
              </p>
              <p className="border-l-4 border-brand-yellow pl-5">
                Trabajando desde una perspectiva integral donde la estrategia, la estructura y la rentabilidad convergen en{' '}
                <strong className="text-brand-yellow">resultados medibles</strong>.
              </p>
            </div>
            {/* Values pills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10"
            >
              <p className="text-slate-600 text-sm font-semibold tracking-wider uppercase mb-4">
                Valores que guían el trabajo
              </p>
              <div className="flex flex-wrap gap-3">
                {['Estrategia', 'Cumplimiento', 'Eficiencia', 'Resultados'].map((value, idx) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="text-sm font-semibold px-4 py-2 rounded-full bg-brand-yellow/12 border border-brand-yellow/40 text-slate-900"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2"
          >
            <div className="relative">
              <Image
                src="/assets/img/sobremi.png"
                alt="Yurna Finance - Consultora"
                width={600}
                height={600}
                className="w-full h-auto max-h-[480px] md:max-h-[540px] object-cover object-top rounded-2xl shadow-2xl border-2 border-brand-yellow/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
