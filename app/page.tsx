import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Method from '@/components/Method'
import ForWho from '@/components/ForWho'
import Benefits from '@/components/Benefits'
import Authority from '@/components/Authority'
import UseCases from '@/components/UseCases'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <Method />
        <ForWho />
        <Benefits />
        <Authority />
        <UseCases />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <FloatingButtons />
    </>
  )
}
