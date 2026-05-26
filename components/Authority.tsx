'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeader from './SectionHeader'
import { IconArrowRight } from './Icons'

export default function Authority() {
  return (
    <section id="sobre-mi" className="section-padding section-surface" aria-labelledby="authority-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Equipo"
          title="Visión financiera con ejecución real"
          subtitle="Consultora especializada en administración, finanzas y toma de decisiones estratégicas."
        />
        <h2 id="authority-heading" className="sr-only">Sobre Yurnairys Piñango</h2>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 max-w-4xl mx-auto items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src="/assets/img/yurna-hero.jpg"
                alt="Yurnairys Piñango - Consultora financiera"
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 100vw, 400px"
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-foreground">Yurnairys Piñango</h3>
            <p className="mt-1 text-sm font-semibold text-brand-blue">Consultora Financiera</p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Soy consultora financiera con experiencia en administración, contabilidad, finanzas y gestión de
              proyectos. He acompañado empresas en organización financiera, control administrativo, análisis de
              rentabilidad, estructuración de procesos y toma de decisiones estratégicas.
            </p>
            <p className="mt-4 text-sm text-foreground-muted italic pl-4 border-l-2 border-brand-blue/50">
              Mi enfoque es cercano, estratégico y orientado a que entiendas tus números — no solo a cumplir con
              papeles.
            </p>
            <Link href="/agendar" className="btn-primary mt-6">
              Agendar consulta
              <IconArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
