import { Header, Footer } from "@/components/layout"
import {
  HeroSection,
  AffaireSection,
  PrejudiceSection,
  ConcernedSection,
  WhyUsSection,
  AccomplishmentsSection,
  MethodSection,
  CTASection
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AffaireSection />
        <PrejudiceSection />
        <ConcernedSection />
        <WhyUsSection />
        <AccomplishmentsSection />
        <MethodSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
