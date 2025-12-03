import { z } from "zod"

export const profileTypes = [
  "TRANSPORTEUR",
  "ENTREPRISE",
  "AGRICULTEUR",
  "TAXI_VTC",
  "SERVICE_PUBLIC",
  "COLLECTIVITE",
  "ETAT",
  "PARTICULIER"
] as const

export const purchasePeriods = [
  "2016-2018",
  "2019-2021",
  "2022-2025",
  "all"
] as const

export const volumeOptions = [
  "less-50",
  "50-200",
  "200-500",
  "500+"
] as const

export const contactSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 caractères"),
  lastName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  profileType: z.enum(profileTypes, {
    errorMap: () => ({ message: "Veuillez sélectionner votre profil" })
  }),
  companyName: z.string().optional(),
  purchasePeriod: z.enum(purchasePeriods, {
    errorMap: () => ({ message: "Veuillez sélectionner une période" })
  }),
  estimatedVolume: z.enum(volumeOptions).optional(),
  message: z.string().max(1000, "Maximum 1000 caractères").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" })
  })
})

export type ContactFormData = z.infer<typeof contactSchema>

// Form options
export const profileOptions = [
  { value: "TRANSPORTEUR", label: "Transporteur routier" },
  { value: "ENTREPRISE", label: "Entreprise avec flotte" },
  { value: "AGRICULTEUR", label: "Agriculteur / Coopérative" },
  { value: "TAXI_VTC", label: "Taxi / VTC" },
  { value: "SERVICE_PUBLIC", label: "Service public" },
  { value: "COLLECTIVITE", label: "Collectivité publique" },
  { value: "ETAT", label: "État" },
  { value: "PARTICULIER", label: "Particulier" }
]

export const periodOptions = [
  { value: "2016-2018", label: "2016 - 2018" },
  { value: "2019-2021", label: "2019 - 2021" },
  { value: "2022-2025", label: "2022 - 2025" },
  { value: "all", label: "Toute la période (2016-2025)" }
]

export const volumeSelectOptions = [
  { value: "less-50", label: "Moins de 50 pneus" },
  { value: "50-200", label: "50 à 200 pneus" },
  { value: "200-500", label: "200 à 500 pneus" },
  { value: "500+", label: "Plus de 500 pneus" }
]
