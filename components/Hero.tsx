'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroPhoto from './HeroPhoto'
import { IconArrowRight } from './Icons'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="hero-pattern absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-l from-brand-blue/[0.05] to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="relative section-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <motion.div
            className="lg:col-span-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item} className="section-label mb-5">
              Consultoría financiera · Emprendedores · Empresas
            </motion.p>
            <motion.h1
              id="hero-heading"
              variants={item}
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.06]"
            >
              Estrategia financiera para{' '}
              <span className="text-brand-blue font-semibold">hacer crecer</span> tu proyecto y empresa
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-lg text-foreground-muted leading-relaxed max-w-xl md:text-xl"
            >
              Te ayudo a transformar el desorden financiero en claridad, control y decisiones estratégicas con números
              reales.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Link href="/agendar" className="btn-primary px-6 py-3">
                Agendar consulta
                <IconArrowRight />
              </Link>
              <Link href="/agendar?tipo=diagnostico" className="btn-outline px-6 py-3">
                Solicitar diagnóstico
              </Link>
            </motion.div>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
              {['Finanzas', 'Control', 'Rentabilidad'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  )
}
