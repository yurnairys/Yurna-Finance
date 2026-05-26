'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Margen neto', value: '+18%', highlight: true },
  { label: 'Flujo de caja', value: '$42.5K', highlight: false },
  { label: 'Gastos', value: '-12%', highlight: false },
]

const bars = [65, 82, 58, 91, 74, 88, 95]

export default function FinancialDashboard() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto lg:ml-auto"
      aria-hidden
    >
      <div className="absolute -inset-4 rounded-2xl bg-brand-blue/5 blur-2xl" />
      <div className="relative rounded-2xl border border-border bg-white shadow-cardHover overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-background-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
          </div>
          <span className="text-xs text-foreground-muted font-medium">Panel financiero</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-lg bg-background-secondary border border-border p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-foreground-subtle">{m.label}</p>
                <p className={`mt-1 font-bold text-lg ${m.highlight ? 'text-brand-green' : 'text-foreground'}`}>
                  {m.value}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-lg bg-background-secondary border border-border p-4">
            <div className="flex items-end justify-between mb-3">
              <p className="text-xs text-foreground-muted">Rentabilidad mensual</p>
              <span className="text-xs font-semibold text-brand-green">+24% vs mes anterior</span>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                  className="flex-1 rounded-t bg-brand-gradient min-h-[4px]"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-brand-blue/5 border border-brand-blue/15 px-4 py-3">
            <span className="icon-box text-sm font-bold">✓</span>
            <p className="text-sm text-foreground leading-snug">
              Presupuesto actualizado · Flujo de caja en orden · Reportes listos
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 md:-left-8 rounded-xl border border-border bg-white px-4 py-3 shadow-md">
        <p className="text-2xl font-bold text-brand-blue">360°</p>
        <p className="text-xs text-foreground-muted font-medium">Visión financiera integral</p>
      </div>
    </motion.div>
  )
}
