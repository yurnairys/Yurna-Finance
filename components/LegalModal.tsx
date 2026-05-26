'use client'

import { useEffect } from 'react'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
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
      aria-labelledby="legal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-card-border">
          <h2 id="legal-title" className="font-display font-semibold text-xl text-slate-text">
            Aviso legal
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
          <p>Este aviso legal regula el uso del sitio web de Yurna Finance.</p>
          <h3 className="font-semibold text-slate-text mt-4">1. Datos identificativos</h3>
          <p>Titular: Yurna Finance. Contacto: <a href="mailto:yurna@yurnafinance.com" className="text-brand-blue hover:underline">yurna@yurnafinance.com</a>. WhatsApp: +507 6897 3414.</p>
          <h3 className="font-semibold text-slate-text mt-4">2. Objeto y aceptación</h3>
          <p>El acceso y uso del sitio implica la aceptación de este aviso. El contenido tiene finalidad informativa sobre los servicios ofrecidos.</p>
          <h3 className="font-semibold text-slate-text mt-4">3. Propiedad intelectual</h3>
          <p>Los textos, diseños, logotipos e imágenes de este sitio son propiedad de Yurna Finance o se utilizan con licencia. Queda prohibida la reproducción no autorizada.</p>
          <h3 className="font-semibold text-slate-text mt-4">4. Limitación de responsabilidad</h3>
          <p>Yurna Finance no se hace responsable de daños derivados del uso de la información publicada. Los contenidos pueden modificarse sin previo aviso.</p>
          <h3 className="font-semibold text-slate-text mt-4">5. Legislación aplicable</h3>
          <p>Este aviso se rige por la legislación aplicable en la jurisdicción correspondiente.</p>
        </div>
      </div>
    </div>
  )
}
