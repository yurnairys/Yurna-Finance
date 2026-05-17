'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconCalendar, IconArrowRight } from './Icons'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-dark-gradient relative overflow-hidden" aria-labelledby="finalcta-heading">
      <div className="absolute inset-0 bg-hero-mesh opacity-50 pointer-events-none" aria-hidden />
      <div className="relative section-container text-center">
        <motion.span variants={{}} className="badge-gold mb-6 inline-flex">
          <IconCalendar />
          Primer paso hacia el orden financiero
        </motion.span>
        <motion.h2
          id="finalcta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title-light max-w-3xl mx-auto"
        >
          Ordena tus finanzas y toma decisiones con claridad
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto"
        >
          Agenda una consulta inicial y revisemos juntos cómo puedo ayudarte a transformar tus números en una herramienta real de crecimiento.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/agendar" className="btn-primary text-lg px-8 py-4">
            Agenda tu consulta
            <IconArrowRight />
          </Link>
          <a
            href="https://wa.me/50768973414?text=Hola,%20me%20interesa%20una%20consulta%20de%20consultoría%20financiera%20con%20Yurna%20Finance."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-light text-lg px-8 py-4"
          >
            Hablar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
