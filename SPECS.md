# SPÉCIFICATIONS SIMPLIFIÉES - SITE CARTEL DES PNEUS

> Version optimisée basée sur le design system LEX-PORT V2

---

## 1. VUE D'ENSEMBLE

### 1.1 Objectif
Landing page dédiée au cartel des pneus pour générer des leads qualifiés de victimes souhaitant réclamer une indemnisation.

### 1.2 Public cible
- Transporteurs routiers
- Entreprises avec flottes
- Agriculteurs/Coopératives
- Taxis/VTC
- Services publics & Collectivités
- Particuliers (2016-2025)

### 1.3 KPIs
- Taux de conversion formulaire > 5%
- Score Lighthouse > 90 (mobile)
- Position SEO top 3 "cartel pneus France"

---

## 2. STACK TECHNIQUE

```json
{
  "framework": "Next.js 15.3",
  "language": "TypeScript 5.x",
  "styling": "Tailwind CSS 3.4",
  "database": "PostgreSQL (Neon)",
  "orm": "Prisma 5.x",
  "email": "Resend",
  "validation": "Zod",
  "hosting": "Vercel",
  "package-manager": "pnpm"
}
```

### Dépendances principales
```bash
# Core
next@15 react@19 react-dom@19 typescript

# Styling
tailwindcss postcss autoprefixer

# Database & Backend
prisma @prisma/client zod

# Forms
react-hook-form @hookform/resolvers

# Email
resend

# Icons
lucide-react
```

---

## 3. ARCHITECTURE SIMPLIFIÉE

```
cartel-pneus/
├── app/
│   ├── page.tsx              # Landing page unique
│   ├── layout.tsx            # Root layout (metadata, fonts)
│   ├── globals.css           # Tailwind + variables CSS
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # POST - Formulaire contact
│   ├── mentions-legales/
│   │   └── page.tsx          # Page mentions légales
│   └── confidentialite/
│       └── page.tsx          # Page politique confidentialité
├── components/
│   ├── ui/                   # Composants atomiques
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   └── card.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/             # Sections de la landing
│   │   ├── hero.tsx
│   │   ├── affaire.tsx
│   │   ├── prejudice.tsx
│   │   ├── concerned.tsx
│   │   ├── why-us.tsx
│   │   └── cta.tsx
│   └── contact-form.tsx
├── lib/
│   ├── db.ts                 # Prisma client singleton
│   ├── email.ts              # Resend config
│   ├── utils.ts              # cn() + helpers
│   └── validations.ts        # Schemas Zod
├── prisma/
│   └── schema.prisma
├── public/
│   ├── images/
│   │   ├── hero-bordeaux.webp
│   │   ├── logo-lexport.svg
│   │   └── og-image.jpg
│   └── fonts/                # Si fonts locales
└── types/
    └── index.ts
```

### Conventions de nommage
- Fichiers : `kebab-case.tsx`
- Composants : `PascalCase`
- Functions/Variables : `camelCase`
- Types : `PascalCase`

---

## 4. DESIGN SYSTEM (basé sur LEX-PORT V2)

### 4.1 Palette de couleurs

```css
:root {
  /* Primary - Bleu marine LEX-PORT */
  --primary-900: #0F172A;
  --primary-800: #1E293B;
  --primary-700: #334155;
  --primary-600: #475569;
  --primary-500: #64748B;

  /* Accent - Pour highlights */
  --accent-500: #3B82F6;
  --accent-600: #2563EB;

  /* Neutral */
  --neutral-50: #F8FAFC;
  --neutral-100: #F1F5F9;
  --neutral-200: #E2E8F0;
  --neutral-300: #CBD5E1;
  --neutral-400: #94A3B8;
  --neutral-500: #64748B;
  --neutral-600: #475569;
  --neutral-700: #334155;
  --neutral-800: #1E293B;
  --neutral-900: #0F172A;

  /* Semantic */
  --success: #22C55E;
  --error: #EF4444;
  --warning: #F59E0B;
}
```

### 4.2 Typographie

```css
:root {
  /* Fonts */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Scale */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
}
```

**Usage :**
- Titres principaux (Hero) : `font-serif`, `text-5xl`/`text-6xl`
- Titres sections : `font-sans`, `text-2xl`/`text-3xl`, `uppercase`, `tracking-wide`
- Corps : `font-sans`, `text-base`/`text-lg`

### 4.3 Espacements

Base 4px :
- `space-1`: 4px
- `space-2`: 8px
- `space-4`: 16px
- `space-6`: 24px
- `space-8`: 32px
- `space-12`: 48px
- `space-16`: 64px
- `space-20`: 80px
- `space-24`: 96px

### 4.4 Composants

#### Boutons

```tsx
// Variants
const buttonVariants = {
  primary: "bg-primary-900 text-white hover:bg-primary-800",
  secondary: "bg-white text-primary-900 hover:bg-neutral-100",
  outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900",
  ghost: "bg-transparent text-primary-900 hover:bg-neutral-100"
}

// Sizes
const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
}

// Base
const buttonBase = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center"
```

#### Cards

```tsx
// Card de base
const cardBase = "bg-neutral-50 rounded-3xl p-6 transition-shadow duration-300"
const cardHover = "hover:shadow-lg"

// Card service (comme LEX-PORT V2)
const serviceCard = "bg-neutral-100 rounded-3xl p-8 flex flex-col items-center text-center min-h-[200px]"
```

#### Inputs

```tsx
const inputBase = "w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white"
const inputFocus = "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
const inputError = "border-error focus:ring-error"
```

---

## 5. STRUCTURE DE LA PAGE

### 5.1 Header (sticky)

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO LEX-PORT]                    [Contact]  [En savoir plus] │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : transparent → `primary-900` au scroll
- Logo : SVG blanc
- Boutons : pills arrondis

### 5.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    [Image Bordeaux + Overlay]                   │
│                                                                 │
│                     LE CARTEL DES PNEUS                         │
│                                                                 │
│           Défendez vos droits, réclamez votre                   │
│                    indemnisation                                │
│                                                                 │
│              [Évaluation gratuite]  [En savoir plus]            │
│                                                                 │
│                           ↓                                     │
└─────────────────────────────────────────────────────────────────┘
```

- Background : Image Bordeaux Place de la Bourse de nuit
- Overlay : `bg-primary-900/70`
- Titre : `font-serif`, `text-5xl md:text-6xl`, blanc
- Sous-titre : `text-xl md:text-2xl`, blanc/80
- CTA primaire : `variant="secondary"` (blanc)
- CTA secondaire : `variant="outline"`
- Scroll indicator animé en bas

### 5.3 Section "L'Affaire"

```
┌─────────────────────────────────────────────────────────────────┐
│                   UNE AFFAIRE D'ENVERGURE                       │
│                        EUROPÉENNE                               │
│                                                                 │
│  ┌──────────────┐  Le 30 janvier 2024, la Commission           │
│  │              │  européenne a ouvert une enquête...           │
│  │   Timeline   │                                               │
│  │   ou Image   │  Fabricants impliqués :                       │
│  │              │  • Michelin • Continental • Goodyear          │
│  └──────────────┘  • Nokian • Bridgestone • Pirelli            │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : blanc
- Layout : 2 colonnes (visuel | texte)
- Titre : uppercase, tracking-wide

### 5.4 Section "Préjudice"

```
┌─────────────────────────────────────────────────────────────────┐
│                    UN PRÉJUDICE MASSIF                          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │         15-25% du montant de vos achats                   │  │
│  │                                                           │  │
│  │    Estimation préliminaire du préjudice subi              │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : `neutral-50`
- Card highlight : bordure accent, fond blanc
- Chiffre : `text-4xl`, `font-bold`, couleur accent

### 5.5 Section "Qui est concerné"

```
┌─────────────────────────────────────────────────────────────────┐
│                     QUI EST CONCERNÉ ?                          │
│                                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  Icon   │  │  Icon   │  │  Icon   │  │  Icon   │            │
│  │Transport│  │Entrepri.│  │Agricult.│  │Taxi/VTC │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│                                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  Icon   │  │  Icon   │  │  Icon   │  │  Icon   │            │
│  │Serv.Pub │  │Collecti.│  │  État   │  │Particul.│            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : blanc
- Grid : 4 colonnes desktop, 2 mobile
- Cards : style LEX-PORT (rounded-3xl, fond neutral-100)
- Icons : Lucide React

### 5.6 Section "Pourquoi nous"

```
┌─────────────────────────────────────────────────────────────────┐
│  [Fond dégradé bleu marine → bleu nuit]                         │
│                                                                 │
│               POURQUOI FAIRE APPEL À LEX-PORT ?                 │
│                                                                 │
│     ┌──────┐        ┌──────┐        ┌──────┐        ┌──────┐   │
│     │ Icon │        │ Icon │        │ Icon │        │ Icon │   │
│     └──────┘        └──────┘        └──────┘        └──────┘   │
│    Expérience     ~100 clients    Méthode       Sans frais     │
│     prouvée       accompagnés     éprouvée      à avancer      │
│                                                                 │
│    >7.900€/véhicule                                             │
│    cartel camions                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : dégradé `from-primary-900 to-primary-800`
- Texte : blanc
- Icons : blancs, style outlined

### 5.7 Section CTA + Formulaire

```
┌─────────────────────────────────────────────────────────────────┐
│                   REJOIGNEZ LE MOUVEMENT                        │
│                                                                 │
│            Inscrivez-vous pour une évaluation gratuite          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Prénom*          Nom*              Email*                │  │
│  │  [__________]     [__________]      [__________]          │  │
│  │                                                           │  │
│  │  Téléphone*       Vous êtes*        Entreprise            │  │
│  │  [__________]     [Sélectionner▼]   [__________]          │  │
│  │                                                           │  │
│  │  Période d'achat*          Volume estimé                  │  │
│  │  [Sélectionner▼]           [Sélectionner▼]                │  │
│  │                                                           │  │
│  │  Message (optionnel)                                      │  │
│  │  [________________________________]                       │  │
│  │                                                           │  │
│  │  [ ] J'accepte la politique de confidentialité*           │  │
│  │                                                           │  │
│  │                   [Envoyer ma demande]                    │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

- Fond : blanc ou `neutral-50`
- Formulaire : card blanche avec shadow

### 5.8 Footer

```
┌─────────────────────────────────────────────────────────────────┐
│  [Fond primary-900]                                             │
│                                                                 │
│  [LOGO]                               Newsletter                │
│                                       [Email______] [S'ABONNER] │
│  Plan du site                                                   │
│  Accueil | Contact | Mentions légales    [Facebook] [LinkedIn]  │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│  © 2025 LEX-PORT | Mentions légales | Confidentialité | Cookies │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. BASE DE DONNÉES

### Schema Prisma simplifié

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Contact {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())

  // Identité
  firstName String
  lastName  String
  email     String
  phone     String

  // Profil
  profileType ProfileType
  companyName String?

  // Achats pneus
  purchasePeriod String    // "2016-2018", "2019-2021", "2022-2025", "all"
  estimatedVolume String?  // "less-50", "50-200", "200-500", "500+"

  // Message
  message String?

  // RGPD
  consentGiven    Boolean @default(false)
  wantsNewsletter Boolean @default(false)

  @@index([email])
  @@index([createdAt])
}

enum ProfileType {
  TRANSPORTEUR
  ENTREPRISE
  AGRICULTEUR
  TAXI_VTC
  SERVICE_PUBLIC
  COLLECTIVITE
  ETAT
  PARTICULIER
}
```

---

## 7. FORMULAIRE DE CONTACT

### 7.1 Champs

| Champ | Type | Requis | Validation |
|-------|------|--------|------------|
| firstName | text | Oui | min 2 chars |
| lastName | text | Oui | min 2 chars |
| email | email | Oui | email valide |
| phone | tel | Oui | format FR |
| profileType | select | Oui | enum ProfileType |
| companyName | text | Non* | *Requis si !particulier |
| purchasePeriod | select | Oui | options prédéfinies |
| estimatedVolume | select | Non | options prédéfinies |
| message | textarea | Non | max 1000 chars |
| consent | checkbox | Oui | must be true |

### 7.2 Options des selects

**profileType :**
```typescript
const profileOptions = [
  { value: "TRANSPORTEUR", label: "Transporteur routier" },
  { value: "ENTREPRISE", label: "Entreprise avec flotte" },
  { value: "AGRICULTEUR", label: "Agriculteur / Coopérative" },
  { value: "TAXI_VTC", label: "Taxi / VTC" },
  { value: "SERVICE_PUBLIC", label: "Service public" },
  { value: "COLLECTIVITE", label: "Collectivité publique" },
  { value: "ETAT", label: "État" },
  { value: "PARTICULIER", label: "Particulier" }
]
```

**purchasePeriod :**
```typescript
const periodOptions = [
  { value: "2016-2018", label: "2016 - 2018" },
  { value: "2019-2021", label: "2019 - 2021" },
  { value: "2022-2025", label: "2022 - 2025" },
  { value: "all", label: "Toute la période (2016-2025)" }
]
```

**estimatedVolume :**
```typescript
const volumeOptions = [
  { value: "less-50", label: "Moins de 50 pneus" },
  { value: "50-200", label: "50 à 200 pneus" },
  { value: "200-500", label: "200 à 500 pneus" },
  { value: "500+", label: "Plus de 500 pneus" }
]
```

### 7.3 Schema Zod

```typescript
// lib/validations.ts
import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 caractères"),
  lastName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro invalide"),
  profileType: z.enum([
    "TRANSPORTEUR", "ENTREPRISE", "AGRICULTEUR", "TAXI_VTC",
    "SERVICE_PUBLIC", "COLLECTIVITE", "ETAT", "PARTICULIER"
  ]),
  companyName: z.string().optional(),
  purchasePeriod: z.enum(["2016-2018", "2019-2021", "2022-2025", "all"]),
  estimatedVolume: z.enum(["less-50", "50-200", "200-500", "500+"]).optional(),
  message: z.string().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter" })
  })
})

export type ContactFormData = z.infer<typeof contactSchema>
```

---

## 8. API & EMAILS

### 8.1 Route API

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import { contactSchema } from "@/lib/validations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Save to database
    const contact = await db.contact.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        profileType: data.profileType,
        companyName: data.companyName,
        purchasePeriod: data.purchasePeriod,
        estimatedVolume: data.estimatedVolume,
        message: data.message,
        consentGiven: data.consent
      }
    })

    // Send emails (async, don't block response)
    await Promise.all([
      sendConfirmationEmail(data),
      sendNotificationEmail(data)
    ])

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
```

### 8.2 Emails

**Confirmation au prospect :**
- Sujet : "Votre demande concernant le cartel des pneus"
- Contenu : Remerciement + prochaines étapes + coordonnées LEX-PORT

**Notification interne :**
- Sujet : "[Lead Cartel Pneus] Prénom Nom - ProfileType"
- Contenu : Toutes les infos du formulaire

---

## 9. SEO & MÉTADONNÉES

### 9.1 Metadata (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: "Cartel des Pneus - Réclamez votre indemnisation | LEX-PORT",
  description: "Victime du cartel des pneus ? LEX-PORT vous accompagne pour obtenir une indemnisation. Évaluation gratuite, sans frais à avancer. Transporteurs, entreprises, particuliers.",
  keywords: [
    "cartel des pneus",
    "indemnisation pneus",
    "Michelin Continental Goodyear",
    "recours collectif pneus",
    "LEX-PORT avocat"
  ],
  openGraph: {
    title: "Cartel des Pneus - Réclamez votre indemnisation",
    description: "Vous avez acheté des pneus entre 2016 et 2025 ? Vous pourriez être victime du cartel des pneus.",
    url: "https://cartel-pneus.fr",
    siteName: "Cartel des Pneus - LEX-PORT",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartel des Pneus - Réclamez votre indemnisation",
    description: "LEX-PORT vous accompagne pour obtenir une indemnisation.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
}
```

### 9.2 JSON-LD

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "LEX-PORT - Cartel des Pneus",
  description: "Cabinet d'avocats spécialisé dans les recours liés au cartel des pneus",
  url: "https://cartel-pneus.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Rue de la Chaussée",
    addressLocality: "Bordeaux",
    postalCode: "33000",
    addressCountry: "FR"
  },
  telephone: "+33557014648",
  email: "contact@lexport.com"
}
```

---

## 10. VARIABLES D'ENVIRONNEMENT

```env
# .env.local

# Database (Neon)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Resend
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="contact@cartel-pneus.fr"
RESEND_TO_EMAIL="contact@lexport.com"

# Site
NEXT_PUBLIC_SITE_URL="https://cartel-pneus.fr"
```

---

## 11. DÉPLOIEMENT

### Vercel

```bash
# Build command
pnpm build

# Install command
pnpm install

# Output directory
.next
```

### Post-deploy
1. Configurer variables d'environnement
2. Exécuter `npx prisma migrate deploy`
3. Configurer domaine personnalisé
4. Vérifier HTTPS + redirections

---

## 12. CHECKLIST MVP

### Setup
- [ ] Init projet Next.js 15
- [ ] Configurer Tailwind + design system
- [ ] Setup Prisma + Neon
- [ ] Configurer Resend

### Composants
- [ ] Button, Input, Select, Textarea, Card
- [ ] Header (sticky + scroll effect)
- [ ] Footer
- [ ] ContactForm

### Sections Landing
- [ ] Hero
- [ ] L'Affaire
- [ ] Préjudice
- [ ] Qui est concerné
- [ ] Pourquoi nous
- [ ] CTA + Formulaire

### Backend
- [ ] API /api/contact
- [ ] Templates emails
- [ ] Validation Zod

### SEO & Performance
- [ ] Metadata
- [ ] JSON-LD
- [ ] Images optimisées (WebP/AVIF)
- [ ] Lighthouse > 90

### Déploiement
- [ ] Setup Vercel
- [ ] Variables d'environnement
- [ ] Domaine
- [ ] Tests production

---

## ANNEXE : Différences avec specs originales

| Élément | Original | Simplifié | Raison |
|---------|----------|-----------|--------|
| Next.js version | 16 | 15.3 | 16 n'existe pas |
| Page Contact | Séparée | Ancre #contact | Meilleur SEO |
| Newsletter model | Séparé | Checkbox dans Contact | Plus simple |
| ContactNote model | Inclus | Supprimé | Géré dans CRM |
| UTM params | Dans DB | Supprimé MVP | Analytics suffit |
| purchaseYear | 2 champs | 1 select période | UX simplifiée |
| Route group (marketing) | Oui | Non | Inutile pour 1 page |

---

*Specs v1.0 - Basé sur design system LEX-PORT V2*
