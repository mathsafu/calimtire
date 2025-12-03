import { Trophy, TrendingUp, Users, Briefcase } from "lucide-react"
import { DiagonalSeparator } from "@/components/ui"

export function AccomplishmentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase text-primary-900">
            Ce que nous avons déjà accompli
          </h2>

          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16 text-lg">
            Notre cabinet a obtenu des décisions inédites dans l&apos;affaire du cartel des camions,
            avec des indemnisations significatives pour nos clients.
          </p>

          {/* Main achievement */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 lg:p-12 text-white text-center mb-12 max-w-3xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-500 rounded-2xl flex items-center justify-center">
              <Trophy className="w-10 h-10" />
            </div>
            <p className="text-5xl md:text-6xl font-bold mb-4">
              &gt;7.900&euro;
            </p>
            <p className="text-xl text-white/90 mb-2">
              par véhicule indemnisé
            </p>
            <p className="text-white/70">
              dans le cadre du cartel des camions
            </p>
          </div>

          {/* Additional info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Décisions inédites</h3>
              <p className="text-neutral-600 text-sm">
                Jurisprudence favorable établie devant les juridictions commerciales
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-500/10 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Experts mobilisés</h3>
              <p className="text-neutral-600 text-sm">
                Collaboration avec des économistes spécialisés et experts du secteur
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-500/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Ressources dédiées</h3>
              <p className="text-neutral-600 text-sm">
                Mobilisation de toutes nos ressources pour le cartel des pneus
              </p>
            </div>
          </div>
        </div>
        <DiagonalSeparator topColor="#ffffff" bottomColor="#F8FAFC" />
    </section>
  )
}
