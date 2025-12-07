import { Resend } from "resend"
import type { ContactFormData } from "./validations"

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "contact@cartel-pneus.fr"
const TO_EMAIL = process.env.RESEND_TO_EMAIL || "contact@lexport.com"

export async function sendConfirmationEmail(data: ContactFormData) {
  const { firstName, lastName, email } = data

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Votre demande concernant le cartel des pneus",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: #0F172A; padding: 40px 20px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { padding: 40px 20px; }
            .highlight { background: #F1F5F9; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { background: #F3F4F6; padding: 20px; text-align: center; font-size: 12px; color: #6B7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>LEX-PORT</h1>
            </div>
            <div class="content">
              <h2>Bonjour ${firstName} ${lastName},</h2>
              <p>Nous avons bien reçu votre demande concernant le <strong>cartel des pneus</strong>.</p>
              <p>Un membre de notre équipe va analyser votre situation et vous contacter dans les plus brefs délais pour une évaluation gratuite de votre dossier.</p>

              <div class="highlight">
                <h3 style="margin-top: 0;">Prochaines étapes :</h3>
                <ol>
                  <li>Analyse de votre éligibilité</li>
                  <li>Évaluation préliminaire du préjudice</li>
                  <li>Prise de contact par nos équipes</li>
                  <li>Constitution du dossier (sans frais à avancer)</li>
                </ol>
              </div>

              <p>Si vous avez des questions, n'hésitez pas à nous contacter :</p>
              <ul style="list-style: none; padding: 0;">
                <li>📧 Email : contact@lexport.com</li>
                <li>📞 Téléphone : +33 (0)5 57 01 46 48</li>
                <li>📍 Adresse : 14 Rue de la Chaussée, 33000 Bordeaux</li>
              </ul>

              <p>Cordialement,<br><strong>L'équipe LEX-PORT</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 LEX-PORT - Cabinet d'avocats en droit de la concurrence</p>
            </div>
          </div>
        </body>
        </html>
      `
    })
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    throw error
  }
}

export async function sendNotificationEmail(data: ContactFormData) {
  const profileLabels: Record<string, string> = {
    TRANSPORTEUR: "Transporteur routier",
    ENTREPRISE: "Entreprise avec flotte",
    AGRICULTEUR: "Agriculteur / Coopérative",
    TAXI_VTC: "Taxi / VTC",
    SERVICE_PUBLIC: "Service public",
    COLLECTIVITE: "Collectivité publique",
    ETAT: "État",
    PARTICULIER: "Particulier"
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Lead Cartel Pneus] ${data.firstName} ${data.lastName} - ${profileLabels[data.profileType]}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; }
            .header { background: #0F172A; padding: 20px; color: white; }
            .content { padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            td { padding: 10px 0; border-bottom: 1px solid #E5E7EB; }
            td:first-child { font-weight: bold; width: 40%; }
            .message { background: #F3F4F6; padding: 15px; border-radius: 8px; margin-top: 20px; }
            .cta { background: #EBF0F8; padding: 15px; border-radius: 8px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 20px;">Nouveau Lead - Cartel des Pneus</h1>
            </div>
            <div class="content">
              <h2>Informations du contact</h2>
              <table>
                <tr>
                  <td>Nom complet</td>
                  <td>${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td>Téléphone</td>
                  <td><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
                <tr>
                  <td>Type de profil</td>
                  <td>${profileLabels[data.profileType]}</td>
                </tr>
                ${data.companyName ? `
                <tr>
                  <td>Entreprise</td>
                  <td>${data.companyName}</td>
                </tr>
                ` : ""}
                <tr>
                  <td>Période d'achat</td>
                  <td>${data.purchasePeriod}</td>
                </tr>
                ${data.estimatedVolume ? `
                <tr>
                  <td>Volume estimé</td>
                  <td>${data.estimatedVolume}</td>
                </tr>
                ` : ""}
              </table>

              ${data.message ? `
              <div class="message">
                <h3 style="margin-top: 0;">Message</h3>
                <p>${data.message}</p>
              </div>
              ` : ""}

              <div class="cta">
                <p style="margin: 0;">⚡ <strong>Action requise :</strong> Contacter ce prospect dans les 24h</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    })
  } catch (error) {
    console.error("Error sending notification email:", error)
    throw error
  }
}
