import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email"
import { contactSchema } from "@/lib/validations"
import { z } from "zod"

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
        companyName: data.companyName || null,
        purchasePeriod: data.purchasePeriod,
        estimatedVolume: data.estimatedVolume || null,
        message: data.message || null,
        consentGiven: true // data.consent is z.literal(true), so it's always true if validated
      }
    })

    // Send emails (don't block response on failure)
    try {
      await Promise.all([
        sendConfirmationEmail(data),
        sendNotificationEmail(data)
      ])
    } catch (emailError) {
      console.error("Error sending emails:", emailError)
      // Continue - the contact was saved successfully
    }

    return NextResponse.json({
      success: true,
      id: contact.id
    })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
