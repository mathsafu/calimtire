import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
  metadataBase: new URL('https://claimtire.com'),
  title: {
    default: "ClaimTire - Cartel des Pneus - Réclamez votre indemnisation | LEX-PORT",
    template: "%s | ClaimTire - LEX-PORT"
  },
  description: "Victime du cartel des pneus ? LEX-PORT vous accompagne pour obtenir une indemnisation. Évaluation gratuite, sans frais à avancer. Transporteurs, entreprises, particuliers.",
  keywords: [
    "cartel des pneus",
    "indemnisation pneus",
    "Michelin Continental Goodyear",
    "recours collectif pneus",
    "LEX-PORT avocat",
    "cartel pneus France",
    "entente anticoncurrentielle pneus",
    "Commission européenne pneus",
    "indemnisation transporteurs",
    "Pirelli Bridgestone Nokian",
    "ClaimTire"
  ],
  authors: [{ name: "LEX-PORT", url: "https://lex-port.com" }],
  creator: "LEX-PORT",
  publisher: "LEX-PORT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://claimtire.com",
    siteName: "ClaimTire - Cartel des Pneus - LEX-PORT",
    title: "ClaimTire - Cartel des Pneus - Réclamez votre indemnisation",
    description: "Vous avez acheté des pneus entre 2016 et 2025 ? Vous pourriez être victime du cartel des pneus et avoir droit à une indemnisation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClaimTire - Cartel des Pneus - LEX-PORT - Indemnisation pour les victimes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaimTire - Cartel des Pneus - Réclamez votre indemnisation",
    description: "LEX-PORT vous accompagne pour obtenir une indemnisation. Évaluation gratuite.",
    images: ["/og-image.jpg"],
    creator: "@lexport"
  },
  alternates: {
    canonical: "https://claimtire.com"
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://claimtire.com/#legalservice',
        name: 'ClaimTire - LEX-PORT - Cartel des Pneus',
        description: 'Cabinet d\'avocats spécialisé dans l\'indemnisation des victimes du cartel des pneus',
        url: 'https://claimtire.com',
        logo: 'https://claimtire.com/logo-lex-port.png',
        areaServed: {
          '@type': 'Country',
          name: 'France'
        },
        priceRange: 'Gratuit - Sans frais à avancer',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR'
        },
        sameAs: [
          'https://lex-port.com',
          'https://cartel.lex-port.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://claimtire.com/#website',
        url: 'https://claimtire.com',
        name: 'ClaimTire - Cartel des Pneus - LEX-PORT',
        description: 'Indemnisation des victimes du cartel des pneus',
        publisher: {
          '@id': 'https://claimtire.com/#legalservice'
        },
        inLanguage: 'fr-FR'
      },
      {
        '@type': 'Organization',
        '@id': 'https://claimtire.com/#organization',
        name: 'LEX-PORT',
        url: 'https://lex-port.com',
        logo: 'https://claimtire.com/logo-lex-port.png',
        description: 'Cabinet d\'avocats spécialisé dans les contentieux de masse liés aux pratiques anticoncurrentielles'
      }
    ]
  }

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
