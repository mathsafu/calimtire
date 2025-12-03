"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Select, Textarea } from "@/components/ui"
import {
  contactSchema,
  type ContactFormData,
  profileOptions,
  periodOptions,
  volumeSelectOptions
} from "@/lib/validations"
import { CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: undefined
    }
  })

  const profileType = watch("profileType")
  const showCompanyName = profileType && !["PARTICULIER", "ETAT"].includes(profileType)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi")
      }

      setSubmitStatus("success")
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-2xl font-semibold text-primary-900 mb-4">
          Merci pour votre demande !
        </h3>
        <p className="text-neutral-600 max-w-md mx-auto">
          Nous avons bien reçu votre demande. Notre équipe vous contactera dans les
          plus brefs délais pour évaluer votre situation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Prénom"
          placeholder="Jean"
          {...register("firstName")}
          error={errors.firstName?.message}
          required
        />
        <Input
          label="Nom"
          placeholder="Dupont"
          {...register("lastName")}
          error={errors.lastName?.message}
          required
        />
      </div>

      {/* Contact fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="email"
          label="Email"
          placeholder="jean.dupont@exemple.fr"
          {...register("email")}
          error={errors.email?.message}
          required
        />
        <Input
          type="tel"
          label="Téléphone"
          placeholder="06 12 34 56 78"
          {...register("phone")}
          error={errors.phone?.message}
          required
        />
      </div>

      {/* Profile type */}
      <Select
        label="Vous êtes"
        options={profileOptions}
        placeholder="Sélectionnez votre profil"
        {...register("profileType")}
        error={errors.profileType?.message}
        required
      />

      {/* Company name (conditional) */}
      {showCompanyName && (
        <Input
          label="Nom de l'entreprise / organisation"
          placeholder="Nom de votre entreprise"
          {...register("companyName")}
          error={errors.companyName?.message}
        />
      )}

      {/* Purchase info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Période d'achat"
          options={periodOptions}
          placeholder="Sélectionnez une période"
          {...register("purchasePeriod")}
          error={errors.purchasePeriod?.message}
          required
        />
        <Select
          label="Volume estimé de pneus"
          options={volumeSelectOptions}
          placeholder="Sélectionnez une fourchette"
          {...register("estimatedVolume")}
          error={errors.estimatedVolume?.message}
        />
      </div>

      {/* Message */}
      <Textarea
        label="Message (optionnel)"
        placeholder="Décrivez brièvement votre situation..."
        {...register("message")}
        error={errors.message?.message}
      />

      {/* Consent */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 w-5 h-5 rounded border-neutral-300 text-accent-500 focus:ring-accent-500 cursor-pointer"
          />
          <span className="text-sm text-neutral-700">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande et
            je consens à être contacté par LEX-PORT conformément à la{" "}
            <a href="/confidentialite" className="text-accent-600 hover:underline">
              politique de confidentialité
            </a>
            . <span className="text-error">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-error">{errors.consent.message}</p>
        )}
      </div>

      {/* Error message */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-error/10 rounded-xl border border-error/20">
          <AlertCircle className="w-5 h-5 text-error flex-shrink-0" />
          <p className="text-error text-sm">
            Une erreur est survenue. Veuillez réessayer ou nous contacter directement
            par téléphone.
          </p>
        </div>
      )}

      {/* Submit button */}
      <div className="w-full flex flex-end flex-row">
        <div className="flex-1"></div>
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full md:w-auto"
      >
        Envoyer ma demande
      </Button>
      </div>
    </form>
  )
}
