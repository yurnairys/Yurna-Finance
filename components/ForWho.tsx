'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { IconUser, IconBriefcase, IconBuilding, IconTrendingUp, IconChart } from './Icons'

const audiences = [
  {
    title: 'Personas',
    text: 'Personas que quieren ordenar sus finanzas personales.',
    icon: IconUser,
  },
  {
    title: 'Emprendedores',
    text: 'Emprendedores que quieren saber si su negocio realmente es rentable.',
    icon: IconBriefcase,
  },
  {
    title: 'Empresas',
    text: 'Empresas que necesitan procesos, control y reportes.',
    icon: IconBuilding,
  },
  {
    title: 'Negocios en crecimiento',
    text: 'Negocios que quieren crecer sin depender solo del dueño.',
    icon: IconTrendingUp,
  },
  {
    title: 'Profesionales',
    text: 'Profesionales que necesitan prepararse financieramente para bancos, inversiones o expansión.',
    icon: IconChart,
  },
]

export default function ForWho() {
  return (
    <section id="para-quien" className="section-padding section-surface-alt" aria-labelledby="forwho-heading">
      <div className="section-container">
        <SectionHeader
          eyebrow="Para quién es"
          title="¿Para quién es este servicio?"
          subtitle="Si buscas claridad financiera y procesos que funcionen, estás en el lugar correcto."
        />
        <h2 id="forwho-heading" className="sr-only">Para quién es</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`card card-hover p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="w-11 h-11 rounded-xl bg-emerald-muted text-emerald flex items-center justify-center">
                <a.icon />
              </span>
              <h3 className="mt-4 font-display font-semibold text-lg text-slate-text">{a.title}</h3>
              <p className="mt-2 text-slate-muted text-sm leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
