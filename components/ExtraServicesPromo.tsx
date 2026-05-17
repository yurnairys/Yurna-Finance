'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconArrowRight, IconBuilding } from './Icons'

export default function ExtraServicesPromo() {
  return (
    <section className="py-8 md:py-12 section-surface-alt overflow-hidden" aria-labelledby="extra-services-promo-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/servicios-extras"
            className="group block relative overflow-hidden rounded-3xl shadow-elevated hover:shadow-cardHover transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {/* Fondo azul oscuro de la marca, con toque dorado sutil a la izquierda */}
            <div
              className="absolute inset-0 bg-dark-gradient pointer-events-none"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand/25 via-transparent to-transparent pointer-events-none w-1/3"
              aria-hidden
            />
            <div className="relative px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-1">
                <span className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  <IconBuilding />
                </span>
                <div>
                  <p
                    id="extra-services-promo-heading"
                    className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-1"
                  >
                    Programa para empresas
                  </p>
                  <h2 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-white leading-tight">
                    Programa de Integración y Orden Profesional
                  </h2>
                  <p className="text-white/80 text-sm md:text-base italic mt-1">
                    Del humano a la empresa
                  </p>
                </div>
              </div>
              <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white group-hover:bg-white/30 transition-colors">
                <IconArrowRight />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
