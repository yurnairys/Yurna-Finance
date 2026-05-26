'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { TitleAccent } from './TitleAccent'

const faqs = [
  {
    question: '¿Qué incluye una consulta inicial?',
    answer:
      'Revisamos tu situación actual, identificamos prioridades y definimos el mejor camino: diagnóstico, organización o acompañamiento según tu caso.',
  },
  {
    question: '¿Trabajas con personas y empresas?',
    answer:
      'Sí. Atiendo finanzas personales, emprendedores y empresas que necesitan orden, control y decisiones basadas en datos.',
  },
  {
    question: '¿Las sesiones son presenciales u online?',
    answer: 'Las consultas se realizan por videollamada, para que puedas conectarte desde donde estés con total comodidad.',
  },
  {
    question: '¿Incluye llevar la contabilidad o declarar impuestos?',
    answer:
      'Mi enfoque es consultoría y estrategia financiera. La contabilidad formal y declaraciones pueden coordinarse según tu necesidad, pero el núcleo es ordenar, analizar y decidir mejor.',
  },
  {
    question: '¿Ofreces acompañamiento mensual?',
    answer:
      'Sí. Después del diagnóstico inicial podemos definir un plan de seguimiento mensual para sostener orden y resultados.',
  },
  {
    question: '¿Cómo se agenda y confirma la consulta?',
    answer:
      'Completa el formulario de agendar. Te contacto para confirmar fecha, alcance y condiciones antes de la sesión.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding section-surface-alt" aria-labelledby="faq-heading">
      <div className="section-container max-w-narrow mx-auto">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              <TitleAccent>Preguntas</TitleAccent> frecuentes
            </>
          }
          subtitle="Lo esencial sobre cómo trabajamos."
        />
        <h2 id="faq-heading" className="sr-only">Preguntas frecuentes</h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`faq-item ${openIndex === i ? 'faq-item-open' : ''}`}
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="faq-trigger"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  {faq.question}
                  <span className="text-brand-blue text-xl leading-none">{openIndex === i ? '−' : '+'}</span>
                </button>
              </dt>
              <dd id={`faq-answer-${i}`} className={openIndex === i ? 'block' : 'hidden'}>
                <p className="faq-content">{faq.answer}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
