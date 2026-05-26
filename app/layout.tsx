import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-background text-foreground antialiased font-body">
        {children}
      </body>
    </html>
  )
}
