import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Services from '@/components/Services'
import Method from '@/components/Method'
import ForWho from '@/components/ForWho'
import Benefits from '@/components/Benefits'
import Authority from '@/components/Authority'
import UseCases from '@/components/UseCases'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SectionTransition from '@/components/SectionTransition'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionTransition variant="fadeUp">
          <Problem />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <Solution />
        </SectionTransition>
        <SectionTransition variant="scaleIn">
          <Services />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <Method />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <ForWho />
        </SectionTransition>
        <SectionTransition variant="fadeLeft">
          <Benefits />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <Authority />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <UseCases />
        </SectionTransition>
        <SectionTransition variant="fadeUp">
          <FAQ />
        </SectionTransition>
        <SectionTransition variant="scaleIn">
          <FinalCTA />
        </SectionTransition>
        <SectionTransition variant="fadeUpSoft">
          <Footer />
        </SectionTransition>
      </main>
      <FloatingButtons />
    </>
  )
}
