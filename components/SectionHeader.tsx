'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  subtitleClassName?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  subtitleClassName = '',
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
      className={`${isCenter ? 'section-header' : 'section-header-left'} ${className}`}
    >
      {eyebrow && (
        <p className={`section-eyebrow ${isCenter ? 'justify-center' : ''} ${light ? '!text-gold-light before:!bg-gold/40' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={light ? 'section-title-light' : 'section-title'}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${subtitleClassName} ${light ? '!text-white/75' : ''} ${isCenter ? '' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      {isCenter && !light && <div className="section-accent-line" aria-hidden />}
    </motion.div>
  )
}
