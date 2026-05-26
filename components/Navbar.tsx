'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavLink = { href: string; label: string; route?: boolean }

const homeNavLinks: NavLink[] = [
  { href: '/servicios', label: 'Servicios', route: true },
  { href: '#para-quien', label: 'Para quién' },
  { href: '#metodo', label: 'Método' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#faq', label: 'FAQ' },
]

const serviciosNavLinks: NavLink[] = [
  { href: '#programa', label: 'Programa' },
  { href: '#incluye', label: 'Qué incluye' },
  { href: '#metodologia', label: 'Método' },
  { href: '#para-quien', label: 'Para quién' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === '/'
  const isServicios = pathname === '/servicios'
  const navLinks = isServicios ? serviciosNavLinks : homeNavLinks

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

  const handleNavClick = (e: React.MouseEvent, linkHref: string, isRoute?: boolean) => {
    if (isRoute) {
      setMobileOpen(false)
      return
    }
    if (isHome || isServicios) {
      e.preventDefault()
      scrollToSection(linkHref)
    } else {
      setMobileOpen(false)
    }
  }

  const resolveHref = (link: NavLink) => {
    if (link.route) return link.href
    if (isHome || isServicios) return link.href
    return link.href.startsWith('#') ? `/${link.href}` : link.href
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
              width={480}
              height={250}
              className="h-11 sm:h-12 md:h-14 w-auto object-contain object-left"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveHref(link)}
                onClick={(e) => handleNavClick(e, link.href, link.route)}
                className="nav-link xl:text-[0.9375rem]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            {isServicios ? (
              <Link href="/agendar?tipo=programa" className="btn-primary !h-9 !px-4 !text-sm">
                Aplicar al Programa
              </Link>
            ) : (
              <>
                <Link href="/agendar?tipo=diagnostico" className="btn-outline !h-9 !px-4 !text-sm">
                  Diagnóstico
                </Link>
                <Link href="/agendar" className="btn-primary !h-9 !px-4 !text-sm">
                  Agendar consulta
                </Link>
              </>
            )}
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
                href={resolveHref(link)}
                onClick={(e) => handleNavClick(e, link.href, link.route)}
                className="block py-3 font-medium text-foreground hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              {isServicios ? (
                <Link href="/agendar?tipo=programa" className="btn-primary w-full text-center">
                  Aplicar al Programa
                </Link>
              ) : (
                <>
                  <Link href="/agendar?tipo=diagnostico" className="btn-outline w-full text-center">
                    Diagnóstico
                  </Link>
                  <Link href="/agendar" className="btn-primary w-full text-center">
                    Agendar consulta
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
