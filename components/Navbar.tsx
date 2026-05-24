'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#para-quien', label: 'Para quién es' },
  { href: '#casos', label: 'Casos de uso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const isHeroHeader = isHome && !scrolled
  const isLight = scrolled

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isLight
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-card-border'
          : isHeroHeader
            ? 'bg-navy-dark/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-navy/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-2 sm:gap-3 h-16 md:h-[4.25rem] min-w-0">
          <Link
            href="/"
            onClick={(e) => isHome && (e.preventDefault(), scrollToSection('#inicio'))}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald rounded-lg"
          >
            <Image
              src="/assets/img/logoYurna.png"
              alt="Yurna Finance"
              width={560}
              height={281}
              className="h-10 sm:h-12 w-auto md:h-14 object-contain bg-transparent"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${
                  isLight ? 'text-slate-muted hover:text-emerald' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Link href="/agendar" className="btn-primary !px-6 !py-2.5 !text-sm whitespace-nowrap">
              Agenda una consulta
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <Link
              href="/agendar"
              className="btn-primary !px-3 !py-2 !text-xs sm:!px-4 sm:!text-sm whitespace-nowrap"
            >
              <span className="sm:hidden">Agendar</span>
              <span className="hidden sm:inline">Agenda una consulta</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2.5 rounded-xl ${
                isLight ? 'text-slate-text hover:bg-emerald-soft' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={`lg:hidden border-t ${isLight ? 'bg-white border-card-border' : 'bg-navy border-white/10'}`}>
          <nav className="section-container py-4 space-y-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 font-medium ${isLight ? 'text-slate-text hover:text-emerald' : 'text-white/90 hover:text-emerald-light'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
