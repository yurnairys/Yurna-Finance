'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PrivacyModal from './PrivacyModal'
import LegalModal from './LegalModal'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Método' },
  { href: '#para-quien', label: 'Para quién es' },
  { href: '#casos', label: 'Casos de uso' },
  { href: '#faq', label: 'FAQ' },
]

const services = [
  'Diagnóstico financiero',
  'Consultoría para empresas',
  'Finanzas para emprendedores',
  'Organización financiera personal',
  'Flujo de caja y presupuestos',
  'Acompañamiento mensual',
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)

  return (
    <>
      <footer id="contacto" className="bg-navy-dark text-white section-padding-sm border-t border-white/10" aria-label="Pie de página">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"><div>
              <Link href="/" className="inline-block">
                <Image
                  src="/assets/img/logoYurna.png"
                  alt="Yurna Finance"
                  width={560}
                  height={281}
                  className="h-14 w-auto object-contain bg-transparent"
                  unoptimized
                />
              </Link>
              <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-xs">
                Consultoría financiera para personas, emprendedores y empresas. Estructura, control y ejecución.
              </p>
              <Link href="/agendar" className="btn-primary mt-5 !text-sm !py-2.5 !px-5">
                Agenda una consulta
              </Link>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-light">Navegación</h3>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/75 hover:text-emerald-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-light">Servicios</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                {services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-light">Contacto</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>
                  <a href="mailto:yurna@yurnafinance.com" className="hover:text-emerald-light transition-colors">
                    yurna@yurnafinance.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/50768973414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-light transition-colors"
                  >
                    WhatsApp +507 6897 3414
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yurnafinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-light transition-colors"
                  >
                    @yurnafinance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© {year} Yurna Finance. Consultoría financiera. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <button type="button" onClick={() => setPrivacyOpen(true)} className="hover:text-gold-light transition-colors">
                Privacidad
              </button>
              <button type="button" onClick={() => setLegalOpen(true)} className="hover:text-gold-light transition-colors">
                Aviso legal
              </button>
            </div>
          </div>
        </div>
      </footer>
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
    </>
  )
}
