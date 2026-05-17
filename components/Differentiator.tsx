'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconQuote, IconSparkles } from './Icons'

import sobremiImg from '@/assets/img/sobremi.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Differentiator() {
  return (
    <section className="section-padding section-surface border-y border-card-border overflow-hidden" aria-labelledby="diff-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              variants={item}
              className="badge mb-6"
            >
              <IconSparkles />
              Sobre mí
            </motion.span>
            <h2
              id="diff-heading"
              className="section-title max-w-3xl leading-tight"
            >
              <motion.span variants={item} className="block">
                No soy solo contabilidad.
              </motion.span>
              <motion.span variants={item} className="block mt-2 text-brand">
                Soy estructura y visión financiera integral.
              </motion.span>
            </h2>
            <motion.p
              variants={item}
              className="mt-6 text-slate-muted text-lg md:text-xl leading-relaxed max-w-3xl"
            >
              Trabajo con personas, emprendedores y empresas que quieren construir una base financiera sólida y estratégica. Integro finanzas personales, estrategia fiscal, estructuración empresarial, análisis de inversiones, real estate e inversión bursátil para ayudarte a crecer con orden y visión.
            </motion.p>
            <motion.blockquote
              variants={item}
              className="mt-12 relative pl-6 pr-6 py-6 md:pl-8 md:py-8 bg-brand-soft border-l-4 border-brand rounded-2xl md:rounded-3xl max-w-2xl shadow-card hover:shadow-cardHover transition-shadow"
            >
              <IconQuote />
              <p className="font-display font-semibold text-slate-text text-lg md:text-xl italic mt-2">
                &ldquo;He trabajado desde la operación diaria hasta decisiones ejecutivas. Entiendo la empresa desde adentro.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-brand/10 blur-2xl" aria-hidden="true" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border border-card-border shadow-cardHover aspect-[4/5] max-h-[420px]"
              >
                <Image
                  src={sobremiImg}
                  alt="Yurna - Consultora financiera estratégica"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
