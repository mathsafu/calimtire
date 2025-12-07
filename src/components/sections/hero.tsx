"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAffaire = () => {
    document.getElementById("affaire")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image de pneus */}
      <div className="absolute inset-0">
        <Image
          src="/tyre-background.jpg"
          alt="Arrière-plan de pneus"
          fill
          className="object-cover brightness-75"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Le Cartel des Pneus
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-8 max-w-4xl mx-auto">
          Défendez vos droits, faites-vous indemniser
        </p>

        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Vous êtes une entreprise, un transporteur, un service public ou un particulier ?
          Vous avez acheté des pneus entre 2016 et 2025 ? Vous pourriez être victime
          d&apos;une entente anticoncurrentielle et avoir droit à une indemnisation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
          >
            Évaluation gratuite
          </Button>
          <Button
            onClick={scrollToAffaire}
            variant="glossy-light"
            size="lg"
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAffaire}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce p-3 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full hover:bg-white/15 hover:border-white/30 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-5 h-5 text-white" strokeWidth={2.5} />
      </button>
    </section>
  )
}
