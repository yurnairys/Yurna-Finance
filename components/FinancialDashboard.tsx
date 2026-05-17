'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Margen neto', value: '+18%', color: 'text-emerald-light' },
  { label: 'Flujo de caja', value: '$42.5K', color: 'text-white' },
  { label: 'Gastos', value: '-12%', color: 'text-gold-light' },
]

const bars = [65, 82, 58, 91, 74, 88, 95]

export default function FinancialDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
      aria-hidden
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-emerald/10 blur-3xl" />
      <div className="relative rounded-3xl border border-white/20 bg-navy-light/90 backdrop-blur-xl shadow-elevated overflow-hidden"><div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
            <span className="w-2.5 h-2.5 rounded-full bg-gold/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
          </div>
          <span className="text-xs text-white/50 font-medium">Panel financiero</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl bg-white/5 border border-white/10 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-white/50">{m.label}</p>
                <p className={`mt-1 font-display font-bold text-lg ${m.color}`}>{m.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="flex items-end justify-between mb-3">
              <p className="text-xs text-white/60">Rentabilidad mensual</p>
              <span className="text-xs font-semibold text-emerald-light">+24% vs mes anterior</span>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.5 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-dark to-emerald-light min-h-[4px]"
                />
              ))}
            </div>
          </div><div className="flex items-center gap-3 rounded-xl bg-emerald/15 border border-emerald/25 px-4 py-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald/30 flex items-center justify-center text-emerald-light text-sm font-bold">
              ✓
            </span>
            <p className="text-sm text-white/90 leading-snug">
              Presupuesto actualizado · Flujo de caja en orden · Reportes listos
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
