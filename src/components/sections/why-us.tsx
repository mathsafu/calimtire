import { Users, Award, ClipboardCheck, Wallet, Scale, FileSearch, Gavel } from "lucide-react"

const reasons = [
  {
    icon: Award,
    // title: "Expérience prouvée",
    description: "Premier et seul cabinet à avoir obtenu une indemnisation pour les transporteurs dans le Cartel des camions",
    highlight: ""
  },
  {
    icon: Users,
    // title: "~100 clients accompagnés",
    description: "Plusieurs milliers de véhicules concernés",
    highlight: "~100 victimes"
  },
  {
    icon: ClipboardCheck,
    // title: "Méthode éprouvée",
    description: "Évaluation, constitution du dossier, suivi judiciaire",
    highlight: "Méthode éprouvée"
  },
  {
    icon: Wallet,
    // title: "Sans frais à avancer",
    description: "Nos partenaires financiers prennent en charge le coût de la procédure judiciaire",
    highlight: "0€ à avancer"
  }
]

const services = [
  {
    icon: FileSearch,
    title: "Évaluation du préjudice",
    description: "Analyse personnalisée de votre situation avec nos économistes spécialisés"
  },
  {
    icon: Scale,
    title: "Constitution du dossier",
    description: "Rassemblement des documents et preuves nécessaires à votre recours"
  },
  {
    icon: Gavel,
    title: "Suivi judiciaire",
    description: "Représentation devant les juridictions commerciales françaises"
  }
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 tracking-wide uppercase">
            Pourquoi faire appel à nous ?
          </h2>

          <p className="text-center text-white/80 max-w-3xl mx-auto mb-16 text-xl">
            Depuis plusieurs années, notre cabinet{" "}
            <a
              href="https://lex-port.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-accent-300 transition-colors underline decoration-white/40 hover:decoration-accent-300"
            >
              LEXPORT
            </a>{" "}
            s&apos;est imposé comme un acteur de référence
            dans le traitement des contentieux de masse liés aux pratiques anticoncurrentielles,
            notamment dans le cadre du{" "}
            <a
              href="https://cartel.lex-port.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-300 transition-colors underline decoration-white/40 hover:decoration-accent-300"
            >
              cartel des camions
            </a>.
          </p>

          {/* Key stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {reasons.map((reason) => (
              <div key={reason.highlight} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-white/30 rounded-2xl flex items-center justify-center bg-white/5">
                  <reason.icon className="w-8 h-8" />
                </div>

                {reason.highlight && (
                  <p className="text-2xl font-bold text-white mb-2">
                    {reason.highlight}
                  </p>
                )}


                <p className="text-white/70 text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12">
            <h3 className="text-xl font-semibold text-center mb-8">
              Notre équipe d&apos;avocats expérimentés vous accompagne
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent-500 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
