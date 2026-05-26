import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ProgramaPage from '@/components/programa/ProgramaPage'

export const metadata: Metadata = {
  title: 'Yurna Finance | Dirección Financiera Integral para Empresas y Emprendedores',
  description:
    'Yurna Finance ayuda a empresas, emprendedores y profesionales a diagnosticar, ordenar y estructurar sus finanzas para crecer con dirección, procesos y estrategia.',
  keywords: [
    'dirección financiera',
    'consultoría financiera',
    'diagnóstico financiero empresarial',
    'finanzas para empresas',
    'finanzas para emprendedores',
    'organización financiera',
    'flujo de caja',
    'rentabilidad',
    'procesos empresariales',
    'crecimiento empresarial',
    'Yurna Finance',
  ],
  openGraph: {
    title: 'Programa Dirección Financiera Integral | Yurna Finance',
    description:
      'Dirección financiera estratégica para empresas, emprendedores y profesionales que quieren crecer con orden.',
    type: 'website',
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ProgramaPage />
        <Footer />
      </main>
      <FloatingButtons />
    </>
  )
}
