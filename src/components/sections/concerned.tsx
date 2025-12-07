import { Card } from "@/components/ui"
import {
  Truck,
  Building2,
  Tractor,
  Car,
  Landmark,
  Building,
  Flag,
  User
} from "lucide-react"

const profiles = [
  {
    icon: Truck,
    title: "Transporteurs routiers",
    description: "de marchandises ou de personnes"
  },
  {
    icon: Building2,
    title: "Entreprises avec flottes",
    description: "voitures, camionnettes, bus ou camions"
  },
  {
    icon: Tractor,
    title: "Agriculteurs et coopératives",
    description: "exploitations agricoles"
  },
  {
    icon: Car,
    title: "Sociétés de taxi et VTC",
    description: "professionnels du transport de personnes"
  },
  {
    icon: Landmark,
    title: "Services publics",
    description: "pompiers, policiers..."
  },
  {
    icon: Building,
    title: "Collectivités publiques",
    description: "mairies, départements, régions"
  },
  {
    icon: Flag,
    title: "L'État",
    description: "administrations et ministères"
  },
  {
    icon: User,
    title: "Particuliers",
    description: "ayant acheté des pneus de voiture"
  }
]

export function ConcernedSection() {
  return (
    <section id="concerned" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase text-primary-900">
            Êtes-vous concerné ?
          </h2>

          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16 text-lg">
            Toute personne ayant acheté des pneus dans les dernières années peut être concernée.
            Si vous avez acheté des pneus entre 2016 et 2025, vous pourriez avoir droit à une indemnisation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {profiles.map((profile) => (
              <Card
                key={profile.title}
                variant="service"
                className="group cursor-default"
              >
                <div className="w-14 h-14 bg-primary-900/5 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-colors">
                  <profile.icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">
                  {profile.title}
                </h3>
                <p className="text-sm text-neutral-500">
                  {profile.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
    </section>
  )
}
