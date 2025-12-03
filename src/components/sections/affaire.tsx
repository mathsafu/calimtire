import { Calendar, AlertTriangle, Search } from "lucide-react"
import { DiagonalSeparator } from "@/components/ui"

const manufacturers = [
  "Michelin",
  "Continental",
  "Goodyear",
  "Nokian",
  "Bridgestone",
  "Pirelli"
]

export function AffaireSection() {
  return (
    <section id="affaire" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-16 tracking-wide uppercase text-primary-900">
            Une affaire d&apos;envergure européenne
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline / Visual */}
            <div className="relative">
              <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-wide">Date clé</p>
                    <p className="text-2xl font-bold text-primary-900">30 janvier 2024</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      La Commission européenne mène des inspections chez plusieurs fabricants de pneus
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Soupçons d&apos;entente sur les prix des pneus neufs de remplacement
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Pneus pour voitures, camionnettes, camions et autobus vendus dans l&apos;UE
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Coordination tarifaire illicite via échanges d&apos;informations sensibles suspectée
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-6 h-6 text-accent-500" />
                <span className="text-accent-500 font-medium">Enquête en cours</span>
              </div>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Le <strong>30 janvier 2024</strong>, la Commission européenne a mené des inspections
                chez plusieurs fabricants de pneus, dont <strong>Michelin, Continental, Goodyear,
                Nokian, Bridgestone et Pirelli</strong>.
              </p>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Ces opérations font suite à des soupçons d&apos;entente sur les prix des pneus neufs
                de remplacement pour voitures, camionnettes, camions et autobus vendus dans
                l&apos;Union européenne.
              </p>

              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Les autorités européennes suspectent une <strong>coordination tarifaire illicite</strong>,
                notamment via des échanges d&apos;informations sensibles.
              </p>

              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-wide mb-4">
                  Fabricants concernés
                </p>
                <div className="flex flex-wrap gap-3">
                  {manufacturers.map((manufacturer) => (
                    <span
                      key={manufacturer}
                      className="px-4 py-2 bg-primary-900 text-white rounded-full text-sm font-medium"
                    >
                      {manufacturer}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DiagonalSeparator topColor="#ffffff" bottomColor="#F8FAFC" />
    </section>
  )
}
