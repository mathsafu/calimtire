import { Calendar, Search } from "lucide-react"
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

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Timeline / Visual */}
            <div className="relative flex flex-col">
              <div className="flex-1 rounded-3xl p-8 lg:p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-accent-500 rounded-2xl flex items-center justify-center">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent-500 uppercase tracking-wide">Enquête en cours</p>
                    <p className="text-sm text-neutral-600 mt-1">30 janvier 2024</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      La <strong>Commission européenne</strong> mène des inspections chez plusieurs <strong>fabricants de pneus</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Soupçons d&apos;<strong>entente sur les prix</strong> des pneus neufs de remplacement (<strong>Michelin</strong>, <strong>Pirelli</strong>, <strong>Continental</strong>...)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Pneus pour <strong>voitures</strong>, <strong>camionnettes</strong>, <strong>camions</strong> et <strong>autobus</strong> vendus dans l&apos;UE
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-neutral-700">
                      <strong>Coordination tarifaire illicite</strong> via échanges d&apos;informations sensibles suspectée
                    </p>
                  </div>
                </div>

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

            {/* Illustrative Image */}
            <div className="relative flex flex-col">
              <div className="flex-1 bg-gradient-to-br from-primary-900 to-primary-700 overflow-hidden shadow-2xl">
                <img
                  src="/antitrust_claimtire.jpeg"
                  alt="Enquête européenne sur le cartel des pneus"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        <DiagonalSeparator topColor="#ffffff" bottomColor="#F8FAFC" />
    </section>
  )
}
