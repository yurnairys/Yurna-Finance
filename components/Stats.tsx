'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

const stats: StatItem[] = [
  { value: 15, label: 'Años de experiencia', prefix: '+' },
  { value: 50, label: 'Proyectos asesorados', prefix: '+' },
  { value: 100, label: 'Enfoque en resultados', suffix: '%' },
  { value: 'LATAM', label: 'Alcance regional' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [counts, setCounts] = useState<(string | number)[]>(stats.map((s) => (typeof s.value === 'number' ? 0 : s.value)))

  useEffect(() => {
    if (!isInView) return

    stats.forEach((stat, index) => {
      if (typeof stat.value === 'number') {
        const target = stat.value
        const duration = 2000
        const steps = 60
        const increment = target / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = target
              return newCounts
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(current)
              return newCounts
            })
          }
        }, stepDuration)
      } else {
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = stat.value
          return newCounts
        })
      }
    })
  }, [isInView])

  return (
    <section id="stats-section" className="trust-bar" aria-label="Indicadores">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-card-border/80">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="trust-stat lg:px-6 xl:px-10"
            >
              <p className="trust-stat-value bg-gradient-to-r from-navy to-brand bg-clip-text text-transparent">
                {typeof stat.value === 'number' ? (
                  <>
                    {stat.prefix}
                    {typeof counts[index] === 'number' ? counts[index] : 0}
                    {stat.suffix}
                  </>
                ) : (
                  counts[index] as string
                )}
              </p>
              <p className="trust-stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
