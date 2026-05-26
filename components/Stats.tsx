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
  { value: 8, label: 'Servicios especializados', prefix: '+' },
  { value: 4, label: 'Etapas de método', suffix: '' },
  { value: 360, label: 'Visión integral', suffix: '°' },
  { value: 100, label: 'Enfoque en resultados', suffix: '%' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [counts, setCounts] = useState<(string | number)[]>(stats.map((s) => (typeof s.value === 'number' ? 0 : s.value)))

  useEffect(() => {
    if (!isInView) return

    stats.forEach((stat, index) => {
      if (typeof stat.value === 'number') {
        const target = stat.value
        const duration = 1800
        const steps = 50
        const increment = target / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCounts((prev) => {
              const next = [...prev]
              next[index] = target
              return next
            })
            clearInterval(timer)
          } else {
            setCounts((prev) => {
              const next = [...prev]
              next[index] = Math.floor(current)
              return next
            })
          }
        }, stepDuration)
      } else {
        setCounts((prev) => {
          const next = [...prev]
          next[index] = stat.value
          return next
        })
      }
    })
  }, [isInView])

  return (
    <section className="trust-bar" aria-label="Indicadores">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="trust-stat lg:px-6 xl:px-10"
            >
              <p className="trust-stat-value">
                {typeof stat.value === 'number' ? (
                  <>
                    {stat.prefix}
                    {counts[index]}
                    {stat.suffix}
                  </>
                ) : (
                  counts[index]
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
