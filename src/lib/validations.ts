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

export const annualSpendingRanges = [
  "0-10000",
  "10000-50000",
  "50000-100000",
  "100000-500000",
  "500000+"
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
  annualSpending: z.enum(annualSpendingRanges).optional(),
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

export const annualSpendingOptions = [
  { value: "0-10000", label: "Moins de 10 000 $" },
  { value: "10000-50000", label: "10 000 $ - 50 000 $" },
  { value: "50000-100000", label: "50 000 $ - 100 000 $" },
  { value: "100000-500000", label: "100 000 $ - 500 000 $" },
  { value: "500000+", label: "Plus de 500 000 $" }
]
