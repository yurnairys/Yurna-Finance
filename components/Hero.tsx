'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FinancialDashboard from './FinancialDashboard'
import { IconArrowRight } from './Icons'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[min(100vh,920px)] flex items-center overflow-hidden text-white -mt-[4.25rem] pt-[calc(4.25rem+3rem)] pb-20 md:pt-[calc(4.25rem+4rem)] md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Fondo corporativo navy — siempre visible, sin depender de animaciones */}
      <div className="absolute inset-0 bg-navy-dark" aria-hidden />
      <div className="absolute inset-0 bg-dark-gradient opacity-95" aria-hidden />
      <div className="absolute inset-0 bg-hero-mesh" aria-hidden />
      <div
        className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-emerald/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-0 hero-pattern" aria-hidden />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-navy-dark/40 to-cream pointer-events-none"
        aria-hidden
      />

      <motion.div className="relative section-container w-full z-10">
        <motion.div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item} className="badge-dark mb-6">
              Consultoría financiera · Yurna Finance
            </motion.span>
            <motion.h1
              id="hero-heading"
              variants={item}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.1] tracking-tight"
            >
              Consultoría financiera para ordenar, optimizar y hacer crecer tu negocio
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Te ayudo a transformar el desorden financiero en claridad, control y decisiones estratégicas para
              personas, emprendedores y empresas.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/agendar" className="btn-primary px-8 py-4">
                Agenda una consulta
                <IconArrowRight />
              </Link>
              <a href="#servicios" className="btn-outline-light">
                Ver servicios
              </a>
            </motion.div>
            <motion.p variants={item} className="mt-8 text-sm text-white/60 max-w-md mx-auto lg:mx-0">
              Estructura, control y ejecución. Finanzas simples para decisiones inteligentes.
            </motion.p>
          </motion.div>
          <FinancialDashboard />
        </motion.div>
      </motion.div>
    </section>
  )
}
