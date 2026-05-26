'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconArrowRight } from './Icons'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-corporate-blue py-20 md:py-28 lg:py-32"
      aria-labelledby="finalcta-heading"
    >
      <div className="hero-pattern absolute inset-0 opacity-[0.08]" aria-hidden />
      <div className="relative section-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label !text-white/70 mb-4"
        >
          Comienza hoy
        </motion.p>
        <motion.h2
          id="finalcta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title-light max-w-3xl mx-auto"
        >
          ¿Listo para ordenar tus finanzas y crecer con claridad?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
        >
          Evaluamos tu situación y te proponemos el camino más claro hacia el control financiero.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/agendar" className="btn-primary !bg-white !text-corporate-blue hover:!brightness-100 hover:!bg-white/95">
            Agendar consulta
            <IconArrowRight />
          </Link>
          <Link href="/agendar?tipo=diagnostico" className="btn-outline-light">
            Solicitar diagnóstico
          </Link>
        </motion.div>
        <p className="mt-6 text-sm text-white/60">Sin compromiso · Respuesta en 24–48 h</p>
      </div>
    </section>
  )
}
