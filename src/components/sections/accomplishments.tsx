import { Trophy, TrendingUp, Users, Briefcase, ArrowRight } from "lucide-react"
import { DiagonalSeparator } from "@/components/ui"

const pressArticles = [
  {
    id: 1,
    publisher: "Les Échos",
    title: "Cartel des camions : premières condamnations en France",
    description: "Un cabinet d'avocats bordelais obtient des décisions historiques dans l'affaire du cartel des camions.",
    date: "15 mars 2023",
    image: "/images/press/les-echos.png",
    url: "https://www.lesechos.fr/exemple-article-cartel-camions"
  },
  {
    id: 2,
    publisher: "Le Figaro",
    title: "Ententes illicites : les transporteurs obtiennent gain de cause",
    description: "Après des années de procédure, les victimes du cartel des poids lourds sont enfin indemnisées.",
    date: "8 juin 2023",
    image: "/images/press/le-figaro.png",
    url: "https://www.lefigaro.fr/exemple-article-transporteurs"
  },
  {
    id: 3,
    publisher: "La Tribune",
    title: "Pratiques anticoncurrentielles : jurisprudence favorable",
    description: "Les juridictions commerciales reconnaissent le préjudice subi par les acheteurs de véhicules.",
    date: "22 septembre 2023",
    image: "/images/press/la-tribune.png",
    url: "https://www.latribune.fr/exemple-article-jurisprudence"
  }
]

export function AccomplishmentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase text-primary-900">
            Ce que nous avons déjà accompli
          </h2>

          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16 text-lg">
            Notre cabinet{" "}
            <a
              href="https://lex-port.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 underline font-semibold"
            >
              LEXPORT
            </a>{" "}
            a obtenu des décisions inédites dans l&apos;affaire du{" "}
            <a
              href="https://cartel.lex-port.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 hover:text-accent-700 underline font-medium"
            >
              cartel des camions
            </a>
            , avec des indemnisations significatives pour nos clients.
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
            <p className="text-white/70 mb-4">
              dans le cadre du cartel des camions
            </p>
            <p className="text-sm text-white/80 italic border-t border-white/20 pt-4 mt-4">
              Premier et seul cabinet à avoir obtenu une décision favorable sur le cartel des camions
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

          {/* Press section */}
          <div className="mt-20">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-primary-900">
              Voici ce que dit la presse
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {pressArticles.map((article) => (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent-500/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-neutral-100 flex items-center justify-center p-8">
                    <img
                      src={article.image}
                      alt={article.publisher}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs text-neutral-600 font-medium">
                      {article.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-accent-600 font-semibold mb-2">
                      {article.publisher}
                    </p>
                    <h4 className="text-lg font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center text-accent-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      <span>Lire l&apos;article</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <DiagonalSeparator topColor="#ffffff" bottomColor="#F8FAFC" />
    </section>
  )
}
