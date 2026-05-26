'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroPhoto() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto lg:max-w-lg lg:ml-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className="absolute -inset-3 md:-inset-4 rounded-[1.75rem] bg-gradient-to-br from-brand-blue/15 via-brand-blue/5 to-transparent blur-sm"
        aria-hidden
      />

      <div className="relative rounded-2xl border border-border bg-white p-2 shadow-cardHover">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background-secondary">
          <Image
            src="/assets/img/yurna-hero.jpg"
            alt="Yurnairys Piñango — Consultora financiera"
            fill
            className="object-cover object-[center_12%]"
            sizes="(max-width: 1024px) 90vw, 480px"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-corporate-blue/25 via-transparent to-transparent pointer-events-none"
            aria-hidden
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        className="absolute -bottom-5 right-4 md:right-6 rounded-xl border border-border bg-white px-4 py-3 shadow-md max-w-[220px]"
      >
        <p className="font-semibold text-foreground text-sm leading-tight">Yurnairys Piñango</p>
        <p className="mt-0.5 text-xs text-brand-blue font-medium">Consultora financiera</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="absolute -top-3 -left-3 md:-left-5 rounded-lg border border-brand-blue/20 bg-white px-3 py-2 shadow-soft"
        aria-hidden
      >
        <p className="text-lg font-bold text-brand-blue leading-none">15+</p>
        <p className="text-[10px] text-foreground-muted font-medium mt-0.5">Años de experiencia</p>
      </motion.div>
    </motion.div>
  )
}
