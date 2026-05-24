'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Excelente asesoría en estructuración financiera. Claridad en los modelos y acompañamiento cercano en cada fase del proyecto.',
    author: 'Juan M.',
    role: 'Director Financiero, sector inmobiliario',
    initials: 'JM',
  },
  {
    quote: 'Profesionalismo y resultados medibles. La planificación patrimonial que realizamos ha marcado una diferencia real en nuestra organización.',
    author: 'Laura R.',
    role: 'Inversionista, portafolio LATAM',
    initials: 'LR',
  },
  {
    quote: 'Encontré en Yurna un aliado estratégico para la evaluación de viabilidad y búsqueda de financiamiento. Muy recomendable.',
    author: 'Carlos A.',
    role: 'CEO, desarrollo de proyectos',
    initials: 'CA',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-brand-yellow font-display text-sm font-semibold tracking-widest uppercase mb-4">
            Testimonios
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-carbon mb-6">
            Lo que dicen mis clientes
          </h2>
          <p className="text-carbon/80">
            Experiencias de organizaciones e inversionistas que han trabajado conmigo en estrategia financiera y proyectos.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm"
            >
              <span className="text-brand-yellow text-3xl font-serif" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-carbon/90 text-lg leading-relaxed mb-6 mt-1">{testimonial.quote}</p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <cite className="font-semibold text-carbon not-italic">{testimonial.author}</cite>
                  <p className="text-carbon/70 text-sm">{testimonial.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
