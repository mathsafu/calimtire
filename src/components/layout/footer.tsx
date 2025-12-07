import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-white font-serif text-xl tracking-wider">LEX-PORT</span>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Cabinet d&apos;avocats en droit de la concurrence
            </p>
            <address className="text-neutral-400 text-sm not-italic">
              14 Rue Alix d&apos;Unienville<br />
              33100 Bordeaux, France<br />
              <a href="tel:+33557001445" className="hover:text-white transition-colors">
                +33 (0)5 57 00 14 45
              </a><br />
              <a href="mailto:cartelpneus@lex-port.com" className="hover:text-white transition-colors">
                cartelpneus@lex-port.com
              </a>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Plan du site</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Accueil
              </Link>
              <Link href="#affaire" className="text-neutral-400 hover:text-white transition-colors text-sm">
                L&apos;Affaire
              </Link>
              <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link href="/mentions-legales" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </Link>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold mb-4">Restez informé</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Soyez au courant de l&apos;actualité
            </p>
            <form className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-full bg-primary-800 border border-primary-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
              >
                S&apos;abonner
              </Button>
            </form>
            <div className="flex gap-4">
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; 2026 LEX-PORT. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/mentions-legales" className="text-neutral-500 hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-neutral-500 hover:text-white transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
