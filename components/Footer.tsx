'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PrivacyModal from './PrivacyModal'
import LegalModal from './LegalModal'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

const services = [
  'Diagnóstico financiero',
  'Consultoría para empresas',
  'Finanzas para emprendedores',
  'Flujo de caja y presupuestos',
  'Acompañamiento mensual',
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)

  return (
    <>
      <footer id="contacto" className="border-t border-border bg-white section-padding-sm" aria-label="Pie de página">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/img/logoYurna.png"
                  alt="Yurna Finance"
                  width={280}
                  height={140}
                  className="h-12 w-auto object-contain"
                  unoptimized
                />
              </Link>
              <p className="mt-4 text-sm text-foreground-muted leading-relaxed max-w-xs">
                Consultoría financiera para personas, emprendedores y empresas. Estructura, control y ejecución.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Servicios</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-foreground-muted">
                {services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Empresa</h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-foreground-muted hover:text-brand-blue transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Comenzar</h3>
              <p className="mt-4 text-sm text-foreground-muted">
                Agenda una consulta y descubre cómo puedo ayudarte a ordenar tus finanzas.
              </p>
              <Link href="/agendar" className="btn-primary mt-4 !text-sm !py-2.5 !px-5">
                Agendar consulta
              </Link>
              <ul className="mt-6 space-y-2 text-sm text-foreground-muted">
                <li>
                  <a href="mailto:yurna@yurnafinance.com" className="hover:text-brand-blue transition-colors">
                    yurna@yurnafinance.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/50768973414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-blue transition-colors"
                  >
                    WhatsApp +507 6897 3414
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle">
            <p>© {year} Yurna Finance. Consultoría financiera. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <button type="button" onClick={() => setPrivacyOpen(true)} className="hover:text-brand-blue transition-colors">
                Privacidad
              </button>
              <button type="button" onClick={() => setLegalOpen(true)} className="hover:text-brand-blue transition-colors">
                Aviso legal
              </button>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-foreground-subtle">Finanzas · Control · Crecimiento</p>
        </div>
      </footer>
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
    </>
  )
}
