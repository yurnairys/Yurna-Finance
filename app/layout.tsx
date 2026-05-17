import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yurna Finance | Consultoría Financiera',
  description:
    'Consultoría financiera para personas, emprendedores y empresas. Diagnóstico, organización, control de gastos, flujo de caja, rentabilidad y decisiones estratégicas con claridad.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: [{ url: '/favicon.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'Yurna Finance | Consultoría Financiera',
    description:
      'Transforma el desorden financiero en claridad, control y decisiones estratégicas. Consultoría para personas, emprendedores y empresas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="bg-cream text-slate-text antialiased font-body">
        {children}
      </body>
    </html>
  )
}
