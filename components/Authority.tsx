'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconArrowRight } from './Icons'

import sobremiImg from '@/assets/img/sobremi.png'

export default function Authority() {
  return (
    <section id="sobre-mi" className="section-padding section-surface-alt" aria-labelledby="authority-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
<div className="relative rounded-3xl overflow-hidden border border-card-border shadow-elevated aspect-[4/5] max-h-[480px]">
              <Image
                src={sobremiImg}
                alt="Yurnairys Piñango - Consultora financiera"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">Sobre mí</span>
            <h2 id="authority-heading" className="section-title mt-2">
              Experiencia que se traduce en resultados
            </h2>
            <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-emerald to-gold" aria-hidden />
            <p className="mt-6 text-lg text-slate-muted leading-relaxed">
              Soy <strong className="text-slate-text font-semibold">Yurnairys Piñango</strong>, consultora financiera con experiencia en administración, contabilidad, finanzas y gestión de proyectos. He acompañado empresas en procesos de organización financiera, control administrativo, análisis de rentabilidad, recuperación de cuentas, estructuración de procesos y toma de decisiones estratégicas.
            </p>
            <blockquote className="mt-8 pl-5 border-l-4 border-gold rounded-r-2xl bg-gold-muted/50 py-4 pr-4">
              <p className="font-display font-semibold text-slate-text italic">
                &ldquo;Mi enfoque es cercano, estratégico y orientado a que entiendas tus números — no solo a cumplir con papeles.&rdquo;
              </p>
            </blockquote>
            <Link href="/agendar" className="btn-primary mt-8">
              Agenda una consulta
              <IconArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
