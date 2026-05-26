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
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-3xl">
        <Image
          src="/assets/img/yurna-hero.jpg"
          alt="Yurnairys Piñango — Consultora financiera"
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 1024px) 90vw, 480px"
          priority
          unoptimized
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="mt-5 text-center lg:text-left">
        <p className="font-semibold text-foreground">Yurnairys Piñango</p>
        <p className="mt-0.5 text-sm text-brand-blue font-medium">Consultora financiera</p>
      </div>
    </motion.div>
  )
}
