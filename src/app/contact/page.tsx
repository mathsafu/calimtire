import { Header, Footer } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact - Cartel des Pneus | LEX-PORT",
  description: "Contactez LEX-PORT pour une évaluation gratuite de votre dossier. Cabinet d'avocats spécialisé dans le cartel des pneus.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-900 to-primary-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Demandez une évaluation gratuite de votre situation.
              Nos équipes vous recontacteront dans les plus brefs délais.
            </p>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-semibold text-primary-900 mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6 mb-12">
                  <a href="tel:+33557001445" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Téléphone</p>
                      <p className="text-lg font-medium text-primary-900 group-hover:text-accent-500 transition-colors">
                        +33 (0)5 57 00 14 45
                      </p>
                    </div>
                  </a>

                  <a href="mailto:contact@lex-port.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Email</p>
                      <p className="text-lg font-medium text-primary-900 group-hover:text-accent-500 transition-colors">
                        contact@lex-port.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Adresse</p>
                      <p className="text-lg font-medium text-primary-900">
                        14 Rue Alix d&apos;Unienville, n°102<br />
                        33100 Bordeaux, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Horaires</p>
                      <p className="text-lg font-medium text-primary-900">
                        Lundi - Vendredi : 9h - 18h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional info */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-semibold text-primary-900 mb-3">
                    Évaluation gratuite
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Sans engagement, nos équipes analysent votre situation et vous indiquent
                    si vous êtes éligible à une indemnisation dans le cadre du cartel des pneus.
                    Avec l&apos;aide de nos partenaires financiers, vous n&apos;aurez aucun frais à avancer.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div>
                <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl font-semibold text-primary-900 mb-6">
                    Demandez votre évaluation
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
