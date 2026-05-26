'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#para-quien', label: 'Para quién' },
  { href: '#metodo', label: 'Método' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    if (pathname !== '/' || typeof window === 'undefined') return
    const hash = window.location.hash
    if (hash) {
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNavClick = (e: React.MouseEvent, linkHref: string) => {
    if (isHome) {
      e.preventDefault()
      scrollToSection(linkHref)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/90 py-4 backdrop-blur-sm lg:py-5">
      <div className="section-container">
        <nav
          className="flex min-h-[56px] items-center justify-between gap-4 sm:min-h-[64px]"
          aria-label="Principal"
        >
          <Link
            href="/"
            onClick={(e) => isHome && (e.preventDefault(), scrollToSection('#inicio'))}
            className="inline-flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 rounded-md"
            aria-label="Yurna Finance — Inicio"
          >
            <Image
              src="/assets/img/logoYurna.png"
              alt="Yurna Finance"
              width={280}
              height={140}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link xl:text-[0.9375rem]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link href="/agendar?tipo=diagnostico" className="btn-outline !h-9 !px-4 !text-sm">
              Diagnóstico
            </Link>
            <Link href="/agendar" className="btn-primary !h-9 !px-4 !text-sm">
              Agendar consulta
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span
              className={`h-0.5 w-5 bg-foreground transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-5 bg-foreground transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-5 bg-foreground transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="section-container py-4 space-y-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 font-medium text-foreground hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Link href="/agendar?tipo=diagnostico" className="btn-outline w-full text-center">
                Diagnóstico
              </Link>
              <Link href="/agendar" className="btn-primary w-full text-center">
                Agendar consulta
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
