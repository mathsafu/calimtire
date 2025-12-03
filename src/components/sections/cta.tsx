"use client"

import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-wide uppercase text-white">
              Rejoignez le mouvement
            </h2>

            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-4">
              Nous constituons actuellement des groupes de recours pour les victimes du cartel des pneus.
              Inscrivez-vous dès maintenant pour faire valoir vos droits et ne pas laisser passer cette opportunité.
            </p>

            <p className="text-white/90 font-medium">
              Contactez-nous pour une évaluation gratuite de votre situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact info */}
            <div className="lg:col-span-2 text-white space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">Contactez-nous</h3>

                <div className="space-y-4">
                  <a href="tel:+33557001445" className="flex items-center gap-3 hover:text-accent-500 transition-colors">
                    <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Téléphone</p>
                      <p className="font-medium">+33 (0)5 57 00 14 45</p>
                    </div>
                  </a>

                  <a href="mailto:contact@lex-port.com" className="flex items-center gap-3 hover:text-accent-500 transition-colors">
                    <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p className="font-medium">contact@lex-port.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Adresse</p>
                      <p className="font-medium">14 Rue Alix d&apos;Unienville, n°102<br />33100 Bordeaux, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Évaluation gratuite</strong> - Sans engagement.
                  Nos équipes analysent votre situation et vous indiquent si vous êtes éligible
                  à une indemnisation.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-primary-900 mb-6">
                  Demandez votre évaluation gratuite
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
