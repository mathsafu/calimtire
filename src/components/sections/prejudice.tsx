import { Card, DiagonalSeparator } from "@/components/ui"
import { TrendingUp, Calculator, FileText, AlertCircle } from "lucide-react"

export function PrejudiceSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase text-primary-900">
            Un préjudice massif et systémique
          </h2>

          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16 text-lg">
            Les pratiques anticoncurrentielles reprochées aux fabricants ont eu pour effet
            de fausser le libre jeu du marché, entraînant un surcoût généralisé pour
            les acheteurs de pneus.
          </p>

          {/* Main highlight card */}
          <Card variant="highlight" className="max-w-2xl mx-auto mb-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent-500" />
              </div>
            </div>

            <p className="text-5xl md:text-6xl font-bold text-accent-600 mb-4">
              15-25%
            </p>
            <p className="text-xl text-primary-900 font-medium mb-2">
              du montant de vos achats de pneus
            </p>
            <p className="text-neutral-600">
              Estimation préliminaire du préjudice durant la période de l&apos;entente
            </p>
          </Card>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">
                  Stade préliminaire
                </h3>
                <p className="text-neutral-600 text-sm">
                  Ce préjudice sera davantage précisé par les économistes une fois que
                  la décision de la Commission européenne sera rendue.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calculator className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">
                  Calcul personnalisé
                </h3>
                <p className="text-neutral-600 text-sm">
                  Il sera précisément chiffré après communication de votre dossier
                  de collecte de données.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-primary-900/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900 mb-2">
                  Justificatifs acceptés
                </h3>
                <p className="text-neutral-600 text-sm">
                  Factures, relevés bancaires, contrats de flotte... Nous vous accompagnons
                  pour rassembler les documents nécessaires.
                </p>
              </div>
            </Card>
          </div>
        </div>
        <DiagonalSeparator topColor="#F8FAFC" bottomColor="#ffffff" reverse />
    </section>
  )
}
