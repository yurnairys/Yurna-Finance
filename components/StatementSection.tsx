'use client'

import Link from 'next/link'
import { IconArrowRight } from './Icons'

export default function StatementSection() {
  return (
    <section className="section-padding bg-cream pattern-dots overflow-hidden" aria-label="Mensaje central">
      <div className="max-w-[min(96%,1400px)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <article className="relative rounded-2xl md:rounded-3xl bg-navy text-white text-center shadow-2xl overflow-hidden">
            {/* Línea decorativa dorada */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-48 h-1 rounded-full bg-brand" aria-hidden />

            <div className="px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20">
              {/* Bloque de texto */}
              <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-snug">
                  Cuando no hay orden financiero, hay ansiedad. Y cuando no hay estrategia, no hay crecimiento sostenible.
                </h2>
                <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
                  Con claridad y estructura, todo cambia.
                </p>
              </div>

              {/* Separador sutil */}
              <div className="mt-10 md:mt-12 mb-10 md:mb-12 flex justify-center" aria-hidden>
                <div className="w-16 h-px bg-white/30 rounded-full" />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/agendar"
                  className="inline-flex items-center justify-center gap-2 min-w-[240px] sm:min-w-0 px-8 py-4 rounded-xl btn-primary !text-white font-semibold text-base shadow-brand transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Quiero ordenar mi situación
                  <IconArrowRight />
                </Link>
                <Link
                  href="#servicios"
                  className="inline-flex items-center justify-center min-w-[240px] sm:min-w-0 px-8 py-4 rounded-xl border-2 border-white/50 text-white hover:bg-white/10 font-semibold text-base transition-all"
                >
                  Ver sesiones
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
