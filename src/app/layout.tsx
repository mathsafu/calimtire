import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cartel des Pneus - Réclamez votre indemnisation | LEX-PORT",
  description: "Victime du cartel des pneus ? LEX-PORT vous accompagne pour obtenir une indemnisation. Évaluation gratuite, sans frais à avancer. Transporteurs, entreprises, particuliers.",
  keywords: [
    "cartel des pneus",
    "indemnisation pneus",
    "Michelin Continental Goodyear",
    "recours collectif pneus",
    "LEX-PORT avocat",
    "cartel pneus France"
  ],
  authors: [{ name: "LEX-PORT" }],
  creator: "LEX-PORT",
  publisher: "LEX-PORT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cartel-pneus.fr",
    siteName: "Cartel des Pneus - LEX-PORT",
    title: "Cartel des Pneus - Réclamez votre indemnisation",
    description: "Vous avez acheté des pneus entre 2016 et 2025 ? Vous pourriez être victime du cartel des pneus et avoir droit à une indemnisation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cartel des Pneus - LEX-PORT"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartel des Pneus - Réclamez votre indemnisation",
    description: "LEX-PORT vous accompagne pour obtenir une indemnisation.",
    images: ["/og-image.jpg"]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
