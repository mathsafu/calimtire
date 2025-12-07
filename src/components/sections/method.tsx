import React from "react"
import { BarChart3, FileEdit, Handshake, Scale, CheckCircle2, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Jean M.",
    company: "Transport routier",
    rating: 5,
    text: "Excellent accompagnement du début à la fin. L'équipe a su nous guider dans toutes les étapes avec professionnalisme et réactivité."
  },
  {
    name: "Sophie D.",
    company: "Entreprise de logistique",
    rating: 5,
    text: "Très satisfaite de la prise en charge. Le processus était clair et l'indemnisation obtenue était conforme à nos attentes."
  },
  {
    name: "Pierre L.",
    company: "Société de transport",
    rating: 5,
    text: "Une expertise remarquable dans le domaine. Nous recommandons vivement ce cabinet pour ce type d'affaires."
  },
  {
    name: "Marie B.",
    company: "Flotte de véhicules",
    rating: 5,
    text: "Procédure parfaitement maîtrisée. Aucun frais à avancer grâce aux partenaires financiers, comme promis."
  },
  {
    name: "Thomas R.",
    company: "Transporteur indépendant",
    rating: 5,
    text: "Cabinet sérieux et efficace. Les délais annoncés ont été respectés et le résultat est au rendez-vous."
  },
  {
    name: "Isabelle P.",
    company: "Service public",
    rating: 5,
    text: "Communication transparente et suivi régulier. Nous avons toujours été tenus informés de l'avancement du dossier."
  }
]

const steps = [
  {
    icon: BarChart3,
    title: "Évaluation économique",
    description: "Analyse du surcoût subi basée sur des données économiques fiables"
  },
  {
    icon: FileEdit,
    title: "Rédaction des assignations",
    description: "Constitution de dossiers juridiques solides et argumentés"
  },
  {
    icon: Handshake,
    title: "Procédure judiciaire",
    description: "Échange des conclusions avec la partie adverse"
  },
  {
    icon: Scale,
    title: "Plaidoirie au tribunal",
    description: "Défense de vos intérêts devant les juridictions compétentes"
  }
]

export function MethodSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase text-primary-900">
            Une méthode éprouvée
          </h2>

          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16 text-lg">
            Notre cabinet ne se contente pas de suivre les procédures : nous les construisons.<br />
            De l&apos;évaluation du surcoût à la plaidoirie, nous assurons un accompagnement
            complet et personnalisé.
          </p>

          {/* Process steps */}
          <div className="mb-16">
            {/* Desktop: Grid with cards and arrows */}
            <div className="hidden lg:flex items-center justify-center gap-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.title}>
                  {/* Step card */}
                  <div className="flex-1 max-w-[280px]">
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col min-h-[280px]">
                      {/* Step number */}
                      <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-neutral-400 to-neutral-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                        {index + 1}
                      </div>

                      <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/10 rounded-xl flex items-center justify-center mt-2">
                        <step.icon className="w-8 h-8 text-accent-600" />
                      </div>

                      <h3 className="font-semibold text-accent-600 text-center mb-2 text-base">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 text-sm text-center leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow between cards */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0">
                      <ChevronRight className="w-10 h-10 text-neutral-400" strokeWidth={2.5} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile/Tablet: Simple grid without arrows */}
            <div className="grid md:grid-cols-2 lg:hidden gap-8">
              {steps.map((step, index) => (
                <div key={step.title}>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col min-h-[280px]">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-neutral-400 to-neutral-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                      {index + 1}
                    </div>

                    <div className="w-16 h-16 mx-auto mb-4 bg-accent-500/10 rounded-xl flex items-center justify-center mt-2">
                      <step.icon className="w-8 h-8 text-accent-600" />
                    </div>

                    <h3 className="font-semibold text-accent-600 text-center mb-2 text-base">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm text-center leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners info */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg max-w-3xl mx-auto mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 text-lg mb-2">
                  Collaboration avec des experts
                </h3>
                <p className="text-neutral-600">
                  Nous collaborons avec des <strong>experts économiques</strong> et des
                  <strong> partenaires financiers</strong> pour permettre à nos clients
                  d&apos;obtenir une réparation juste. Avec l&apos;aide de nos partenaires financiers,
                  vous n&apos;aurez <strong>aucun frais à avancer</strong> - ils seront pris en charge.
                </p>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-primary-900">
              Ce qu&apos;en disent nos clients
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-neutral-700 mb-6 italic">
                    {testimonial.text}
                  </p>

                  {/* Author info */}
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Anonymization note */}
            <p className="text-right text-xs text-neutral-500 mt-4 italic">
              * Les noms ont été anonymisés pour protéger la confidentialité de nos clients
            </p>
          </div>
        </div>
    </section>
  )
}
