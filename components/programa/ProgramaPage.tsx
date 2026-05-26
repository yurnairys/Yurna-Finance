'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { IconArrowRight } from '@/components/Icons'

const APPLY_URL = '/agendar?tipo=programa'
const DIAGNOSTICO_URL = '#diagnostico'

const forYou = [
  'Ya generas ingresos, pero no tienes claridad financiera.',
  'Vendes, pero no sabes exactamente cuánto ganas.',
  'Tu negocio crece, pero también crece el desorden.',
  'Tienes procesos manuales, improvisados o poco claros.',
  'Necesitas tomar decisiones con datos, no con suposiciones.',
  'Quieres estructurar tu negocio para crecer con más control.',
  'Estás dispuesto a invertir en orden, estrategia y ejecución.',
]

const notForYou = [
  'Buscas una asesoría gratis o de bajo costo.',
  'Solo quieres resolver algo puntual sin ordenar el fondo.',
  'No estás dispuesto a mostrar información real del negocio.',
  'No quieres tomar decisiones ni implementar cambios.',
]

const problems = [
  'Ventas sin rentabilidad clara.',
  'Ingresos altos, pero poca liquidez.',
  'Gastos que crecen sin control.',
  'Falta de reportes financieros confiables.',
  'Procesos administrativos desordenados.',
  'Cuentas por cobrar sin seguimiento.',
  'Costos mal calculados.',
  'Decisiones tomadas desde la urgencia.',
  'Falta de indicadores.',
  'Equipo trabajando sin estructura.',
  'Presencia digital o comercial desconectada de los objetivos financieros.',
]

const includes = [
  {
    title: 'Consulta Estratégica Inicial',
    text: 'Analizamos la situación actual del negocio, sus principales retos, objetivos, estructura financiera, procesos y nivel de organización.',
  },
  {
    title: 'Diagnóstico Financiero y Empresarial',
    text: 'Evaluamos ingresos, egresos, costos, márgenes, flujo de caja, cuentas por cobrar, cuentas por pagar, rentabilidad, procesos internos e indicadores.',
  },
  {
    title: 'Diseño del Programa de Acción',
    text: 'Creamos una ruta personalizada con prioridades, acciones, controles y recomendaciones estratégicas para ordenar y hacer crecer el negocio.',
  },
  {
    title: 'Organización Financiera',
    text: 'Estructuramos el control de ingresos, gastos, caja, cuentas, reportes, costos y flujo financiero.',
  },
  {
    title: 'Procesos y Control Operativo',
    text: 'Identificamos procesos débiles, desorden administrativo, responsabilidades poco claras y oportunidades de mejora operativa.',
  },
  {
    title: 'Indicadores para Decidir',
    text: 'Diseñamos indicadores financieros y de gestión que permitan medir resultados, detectar alertas y tomar decisiones con mayor claridad.',
  },
  {
    title: 'Visión de Crecimiento',
    text: 'Alineamos las finanzas con las necesidades reales del negocio: automatización, estructura organizativa, presencia digital, procesos y estrategia comercial.',
  },
  {
    title: 'Integración con SPL Business',
    text: 'Cuando el negocio requiere una solución más amplia, integramos la alianza con SPL Business para acompañar procesos de automatización, presencia digital, reestructuración operativa, organización empresarial y expansión comercial.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Consulta Estratégica',
    text: 'Escuchamos, analizamos y entendemos la realidad actual del negocio.',
  },
  {
    step: '2',
    title: 'Diagnóstico',
    text: 'Revisamos la información financiera, operativa y administrativa para detectar problemas, fugas y oportunidades.',
  },
  {
    step: '3',
    title: 'Diseño del Programa',
    text: 'Creamos una ruta de acción personalizada según la etapa, capacidad y objetivos del negocio.',
  },
  {
    step: '4',
    title: 'Dirección Financiera',
    text: 'Acompañamos la toma de decisiones desde una mirada financiera estratégica.',
  },
  {
    step: '5',
    title: 'Integración Empresarial',
    text: 'Cuando el crecimiento lo requiere, conectamos el diagnóstico financiero con soluciones de procesos, automatización, presencia digital y estrategia empresarial mediante la alianza con SPL Business.',
  },
]

const results = [
  'Tener claridad sobre la situación financiera real.',
  'Entender dónde se pierde dinero.',
  'Identificar qué productos, servicios o áreas son más rentables.',
  'Mejorar el control del flujo de caja.',
  'Organizar ingresos, gastos y procesos.',
  'Tomar decisiones con información real.',
  'Diseñar indicadores para medir el negocio.',
  'Reducir improvisación operativa.',
  'Preparar la empresa para crecer con más estructura.',
  'Alinear finanzas, procesos, tecnología y estrategia comercial.',
]

const audiences = [
  {
    title: 'Empresas',
    text: 'Para empresas que venden, facturan o están creciendo, pero necesitan mayor control financiero, procesos claros e indicadores confiables.',
  },
  {
    title: 'Emprendedores',
    text: 'Para emprendedores que ya validaron su negocio y necesitan pasar de la improvisación a una estructura profesional.',
  },
  {
    title: 'Profesionales',
    text: 'Para profesionales independientes que generan ingresos y quieren organizarse como negocio, no como una persona apagando incendios.',
  },
]

const faqs = [
  {
    q: '¿Este programa es solo contabilidad?',
    a: 'No. El programa parte de las finanzas, pero no se limita a registros contables. Analizamos la realidad financiera, procesos, rentabilidad, flujo de caja, indicadores y estructura de crecimiento del negocio.',
  },
  {
    q: '¿Puedo contratar solo una asesoría puntual?',
    a: 'Yurna Finance trabaja bajo un programa integral. La primera consulta permite entender la situación del negocio y definir el diagnóstico, pero el objetivo no es resolver temas aislados, sino diseñar una ruta de acción estratégica.',
  },
  {
    q: '¿Este programa es para finanzas personales?',
    a: 'No. El programa está dirigido a empresas, emprendedores y profesionales que generan ingresos y desean estructurar su actividad como negocio.',
  },
  {
    q: '¿Qué papel tiene SPL Business?',
    a: 'SPL Business es una alianza estratégica que se integra cuando el diagnóstico muestra que el negocio necesita soluciones más amplias en automatización, presencia digital, procesos, estructura organizativa o expansión comercial.',
  },
  {
    q: '¿Qué necesito para iniciar?',
    a: 'Debes estar dispuesto a compartir información real de tu negocio, hablar con claridad sobre tus retos actuales y comprometerte con un proceso de orden, análisis y acción.',
  },
  {
    q: '¿Este programa es para negocios pequeños?',
    a: 'Sí, siempre que el negocio ya genere ingresos y esté dispuesto a invertir en estructura. No se trata del tamaño del negocio, sino de la disposición a ordenar, decidir y crecer.',
  },
]

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-8 pl-5 border-l-4 border-brand-blue/60 text-foreground font-medium italic leading-relaxed">
      {children}
    </blockquote>
  )
}

function CheckList({ items, variant = 'yes' }: { items: string[]; variant?: 'yes' | 'no' }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground-muted">
          <span
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
              variant === 'yes' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-foreground/5 text-foreground-subtle'
            }`}
            aria-hidden
          >
            {variant === 'yes' ? '✓' : '×'}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProgramaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* 1. Hero */}
      <section id="inicio" className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28">
        <div className="hero-pattern absolute inset-0 opacity-50" aria-hidden />
        <div
          className="absolute right-0 top-0 h-full w-2/5 bg-gradient-to-l from-brand-blue/[0.05] to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="relative section-container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="section-label">Programa Dirección Financiera Integral</p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                Dirección financiera estratégica para negocios que quieren{' '}
                <span className="text-brand-blue">crecer con orden</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground-muted leading-relaxed">
                En Yurna Finance ayudamos a empresas, emprendedores y profesionales a diagnosticar, ordenar y
                estructurar sus finanzas para tomar mejores decisiones y construir un crecimiento real.
              </p>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                Las finanzas muestran la verdad del negocio. Desde allí diseñamos el camino para ordenar procesos,
                mejorar la rentabilidad y alinear la operación con una estrategia de crecimiento.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href={APPLY_URL} className="btn-primary px-6 py-3">
                  Aplicar al Programa
                  <IconArrowRight />
                </Link>
                <a href={DIAGNOSTICO_URL} className="btn-outline px-6 py-3">
                  Conocer el diagnóstico
                </a>
              </div>
              <p className="mt-6 text-sm text-foreground-subtle max-w-xl">
                Trabajamos con negocios y profesionales que están listos para invertir en estructura, claridad y
                crecimiento.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-2xl md:rounded-3xl border border-border shadow-soft">
                <Image
                  src="/assets/img/finanza-analisis.jpg"
                  alt="Análisis financiero y dirección estratégica para empresas en crecimiento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-corporate-navy/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Filtro */}
      <section id="filtro" className="section-padding-sm section-surface-alt">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Selección estratégica"
                title="Este programa no es para todos. Es para negocios listos para avanzar."
                subtitle="Yurna Finance trabaja con empresas, emprendedores y profesionales que valoran la dirección financiera como una inversión estratégica, no como un gasto operativo."
                className="!mb-8 !mx-0 !text-left"
              />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
                Este programa es para ti si:
              </h2>
              <CheckList items={forYou} variant="yes" />
            </div>
            <div className="card p-6 md:p-8 bg-white">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground-subtle mb-4">
                No es para ti si:
              </h2>
              <CheckList items={notForYou} variant="no" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problema */}
      <section id="problema" className="section-padding section-surface">
        <div className="section-container">
          <SectionHeader
            eyebrow="El problema"
            title="Muchas empresas no tienen un problema de ventas. Tienen un problema de estructura."
            subtitle="Un negocio puede vender, facturar y moverse todos los días, pero aun así no tener liquidez, rentabilidad ni dirección clara."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto items-center -mt-4">
            <div>
              <p className="text-foreground-muted leading-relaxed">
                El problema muchas veces no está solo en cuánto dinero entra, sino en cómo se administra, cómo se
                controla, cómo se mide y qué tan alineados están los procesos con el crecimiento.
              </p>
              <ul className="mt-6 space-y-2.5" role="list">
                {problems.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 4) * 0.04 }}
                    className="flex items-start gap-2.5 text-sm text-foreground-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden />
                    {p}
                  </motion.li>
                ))}
              </ul>
              <Highlight>
                Vender más no siempre significa crecer mejor. Primero hay que entender qué sostiene el crecimiento.
              </Highlight>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-soft"
            >
              <Image
                src="/assets/img/desafio-empresarial.jpg"
                alt="Empresaria revisando la situación financiera de su negocio con preocupación"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Solución */}
      <section id="solucion" className="section-padding section-surface-alt">
        <div className="section-container max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="La solución"
            title="Ordenamos las finanzas mientras diseñamos la estructura que permite crecer."
          />
          <p className="text-foreground-muted leading-relaxed -mt-6">
            En Yurna Finance comenzamos desde los números porque allí se revela la realidad del negocio: qué entra,
            qué sale, dónde se pierde dinero, qué procesos fallan y qué decisiones deben tomarse.
          </p>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            Pero no nos quedamos solo en las finanzas. En la actualidad, el crecimiento real ocurre cuando las
            finanzas se conectan con procesos eficientes, automatización, estructura organizativa, presencia digital y
            estrategia comercial.
          </p>
          <p className="mt-4 text-foreground font-medium">
            Por eso, nuestro programa combina diagnóstico financiero, visión estratégica y diseño de un plan de
            acción empresarial.
          </p>
          <Highlight>
            Las finanzas son el comienzo. El crecimiento ocurre cuando los números se alinean con procesos,
            estrategia, tecnología y acción.
          </Highlight>
        </div>
      </section>

      {/* 5. Servicio único */}
      <section id="programa" className="section-padding section-surface">
        <div className="section-container">
          <div className="card p-8 md:p-12 lg:p-14 max-w-4xl mx-auto text-center shadow-cardHover border-brand-blue/20">
            <p className="section-label justify-center">Servicio único</p>
            <h2 className="section-title text-2xl md:text-4xl">Programa Dirección Financiera Integral</h2>
            <p className="mt-3 text-lg font-semibold text-brand-blue">
              Finanzas, estructura y expansión para negocios en crecimiento.
            </p>
            <p className="mt-2 text-base font-medium text-foreground">
              Un solo programa para diagnosticar, ordenar y construir una ruta de crecimiento.
            </p>
            <p className="mt-6 text-foreground-muted leading-relaxed text-left md:text-center">
              Un programa diseñado para empresas, emprendedores y profesionales que necesitan ordenar sus finanzas,
              tomar mejores decisiones y construir una estructura real para crecer. El programa inicia con una
              consulta estratégica, continúa con un diagnóstico financiero y empresarial, y finaliza con el diseño
              de un programa de acción personalizado.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed text-left md:text-center">
              El Programa Dirección Financiera Integral está diseñado para empresas, emprendedores y profesionales
              que necesitan claridad, estructura y dirección para avanzar. No vendemos servicios sueltos. Trabajamos
              con una metodología que permite entender la situación actual del negocio, identificar los puntos
              críticos y diseñar un programa de acción adaptado a su realidad.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed text-left md:text-center">
              El objetivo es que el cliente no solo entienda sus números, sino que pueda tomar decisiones, ordenar
              procesos, mejorar la rentabilidad y preparar su negocio para crecer.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed text-left md:text-center">
              Cuando el negocio requiere una solución más amplia, Yurna Finance integra la alianza con SPL Business
              para acompañar procesos de automatización, presencia digital, reestructuración operativa, organización
              empresarial y expansión comercial.
            </p>
            <Link href={APPLY_URL} className="btn-primary mt-8">
              Aplicar al Programa
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Qué incluye */}
      <section id="incluye" className="section-padding section-surface-muted">
        <div className="section-container">
          <SectionHeader
            title="¿Qué incluye el Programa Dirección Financiera Integral?"
            subtitle="Un recorrido integral desde la consulta estratégica hasta la visión de crecimiento empresarial."
          />
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {includes.map((item, i) => (
              <motion.article
                key={item.title}
                id={item.title === 'Diagnóstico Financiero y Empresarial' ? 'diagnostico' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.06 }}
                className="card card-hover p-6 md:p-8 scroll-mt-32"
              >
                <span className="icon-box mb-4 text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Metodología */}
      <section id="metodologia" className="relative overflow-hidden bg-corporate-navy py-20 md:py-28 lg:py-32">
        <div className="hero-pattern absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="relative section-container">
          <SectionHeader light eyebrow="Metodología" title="Nuestra metodología" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 ${
                  i === 4 ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto lg:w-full' : ''
                }`}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue text-white font-bold">
                  {s.step}
                </span>
                <h3 className="mt-4 font-semibold text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SPL Business */}
      <section id="alianza" className="section-padding section-surface">
        <div className="section-container max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Alianza estratégica"
            title="Finanzas como punto de partida. Crecimiento como visión integral."
          />
          <p className="text-foreground-muted leading-relaxed text-center -mt-6">
            Yurna Finance lidera la dirección financiera del proceso. Sin embargo, entendemos que muchos negocios no
            solo necesitan ordenar números: necesitan transformar la forma en la que operan, venden, comunican y
            gestionan.
          </p>
          <p className="mt-4 text-foreground-muted leading-relaxed text-center">
            Por eso, cuando el diagnóstico lo requiere, Yurna Finance integra su alianza con SPL Business para
            acompañar soluciones más completas en automatización de procesos, presencia digital, reestructuración
            operativa, organización empresarial y expansión comercial.
          </p>
          <Highlight>
            Yurna Finance dirige la visión financiera. SPL Business complementa la expansión empresarial.
          </Highlight>
        </div>
      </section>

      {/* 9. Resultados */}
      <section id="resultados" className="section-padding-sm section-surface-alt">
        <div className="section-container">
          <SectionHeader title="¿Qué puede lograr tu negocio con este programa?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {results.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.04 }}
                className="flex items-start gap-3 card p-4"
              >
                <span className="text-brand-blue flex-shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-foreground-muted">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Para quién */}
      <section id="para-quien" className="section-padding section-surface">
        <div className="section-container">
          <SectionHeader
            title="Diseñado para negocios que quieren crecer con dirección"
            subtitle="Empresas, emprendedores y profesionales que ya generan ingresos y buscan estructura."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card card-hover p-6 md:p-8 text-center"
              >
                <h3 className="font-semibold text-xl text-brand-blue">{a.title}</h3>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Sobre Yurna */}
      <section id="sobre-yurna" className="section-padding section-surface-alt">
        <div className="section-container max-w-3xl mx-auto text-center">
          <SectionHeader
            eyebrow="Yurna Finance"
            title="Dirección financiera con visión humana y empresarial"
          />
          <p className="text-foreground-muted leading-relaxed -mt-6">
            Yurna Finance nace desde la experiencia en contabilidad, finanzas, evaluación de empresas y proyectos.
            Su enfoque combina análisis financiero, visión estratégica y comprensión humana del empresario. Porque
            detrás de un negocio desordenado no solo hay números: también hay presión, frustración, decisiones
            acumuladas y falta de claridad.
          </p>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            Desde esta mirada, Yurna Finance acompaña a empresas, emprendedores y profesionales a ordenar la
            realidad financiera del negocio, diseñar procesos y tomar decisiones con mayor seguridad.
          </p>
          <Highlight>No trabajamos solo con números. Trabajamos con la realidad completa del negocio.</Highlight>
        </div>
      </section>

      {/* 12. CTA final */}
      <section id="aplicar" className="relative overflow-hidden bg-corporate-blue py-20 md:py-28">
        <div className="hero-pattern absolute inset-0 opacity-[0.08]" aria-hidden />
        <div className="relative section-container text-center max-w-3xl mx-auto">
          <h2 className="section-title-light text-2xl md:text-4xl">
            ¿Tu negocio está listo para ordenar sus finanzas y crecer con dirección?
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            El primer paso es aplicar al Programa Dirección Financiera Integral. A partir de la consulta estratégica
            podremos entender tu situación actual, identificar tus principales retos y definir si este programa es
            adecuado para tu negocio.
          </p>
          <Link
            href={APPLY_URL}
            className="btn-primary mt-10 !bg-white !text-corporate-blue hover:!brightness-100 hover:!bg-white/95"
          >
            Aplicar al Programa
            <IconArrowRight />
          </Link>
          <p className="mt-6 text-sm text-white/60">
            Trabajamos con cupos limitados para asegurar un acompañamiento estratégico y personalizado.
          </p>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="section-padding section-surface">
        <div className="section-container max-w-narrow mx-auto">
          <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" />
          <dl className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`faq-item ${openFaq === i ? 'faq-item-open' : ''}`}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="faq-trigger"
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span className="text-brand-blue text-xl leading-none">{openFaq === i ? '−' : '+'}</span>
                  </button>
                </dt>
                <dd className={openFaq === i ? 'block' : 'hidden'}>
                  <p className="faq-content">{faq.a}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
