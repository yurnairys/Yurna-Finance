'use client'

import { useEffect } from 'react'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-card-border">
          <h2 id="privacy-title" className="font-display font-semibold text-xl text-slate-text">
            Política de privacidad
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-muted hover:bg-background-secondary hover:text-slate-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 md:p-6 overflow-y-auto text-slate-muted text-sm leading-relaxed space-y-4">
          <p><strong className="text-slate-text">Última actualización:</strong> 2025.</p>
          <p>En Yurna Finance respetamos tu privacidad. Esta política describe qué datos recopilamos, cómo los usamos y tus derechos.</p>
          <h3 className="font-semibold text-slate-text mt-4">1. Responsable</h3>
          <p>El responsable del tratamiento es Yurna Finance. Contacto: <a href="mailto:yurna@yurnafinance.com" className="text-brand-blue hover:underline">yurna@yurnafinance.com</a>.</p>
          <h3 className="font-semibold text-slate-text mt-4">2. Datos que recopilamos</h3>
          <p>Nombre, apellido, correo electrónico, teléfono y mensajes que nos envíes a través del formulario o por WhatsApp.</p>
          <h3 className="font-semibold text-slate-text mt-4">3. Finalidad</h3>
          <p>Responder consultas, gestionar sesiones estratégicas y la relación comercial. La base legal es tu consentimiento.</p>
          <h3 className="font-semibold text-slate-text mt-4">4. Conservación y seguridad</h3>
          <p>Conservamos los datos mientras sea necesario para la finalidad indicada o por obligaciones legales. Aplicamos medidas técnicas y organizativas para proteger tu información.</p>
          <h3 className="font-semibold text-slate-text mt-4">5. Tus derechos</h3>
          <p>Puedes ejercer acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a <a href="mailto:yurna@yurnafinance.com" className="text-brand-blue hover:underline">yurna@yurnafinance.com</a>. Tienes derecho a reclamar ante la autoridad de control.</p>
        </div>
      </div>
    </div>
  )
}
