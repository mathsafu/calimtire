import { BarChart3, FileEdit, Handshake, Scale, CheckCircle2, ChevronRight } from "lucide-react"

const steps = [
  {
    icon: BarChart3,
    title: "Évaluation statistique",
    description: "Analyse du surcoût subi basée sur des données économiques fiables"
  },
  {
    icon: FileEdit,
    title: "Rédaction des assignations",
    description: "Constitution de dossiers juridiques solides et argumentés"
  },
  {
    icon: Handshake,
    title: "Négociation d'accords",
    description: "Recherche de solutions amiables quand c'est dans votre intérêt"
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
            Notre cabinet ne se contente pas de suivre les procédures : nous les construisons.
            De l&apos;évaluation du surcoût à la plaidoirie, nous assurons un accompagnement
            complet et personnalisé.
          </p>

          {/* Process steps */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex items-center">
                  {/* Step card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex-1">
                    {/* Step number - enlarged */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white">
                      {index + 1}
                    </div>

                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-900/5 rounded-xl flex items-center justify-center mt-2">
                      <step.icon className="w-8 h-8 text-primary-900" />
                    </div>

                    <h3 className="font-semibold text-primary-900 text-center mb-2 text-base">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Chevron connector - only show between steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center mx-2 flex-shrink-0">
                      <ChevronRight className="w-8 h-8 text-accent-500" strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Partners info */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg max-w-3xl mx-auto">
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
                  <strong> partenaires financiers</strong> pour garantir à nos clients
                  une réparation juste. Avec l&apos;aide de nos partenaires financiers,
                  vous n&apos;aurez <strong>aucun frais à avancer</strong> - ils seront pris en charge.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
