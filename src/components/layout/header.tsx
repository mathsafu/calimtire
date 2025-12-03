"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/../public/logo-lex-port.png"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Lex-Port */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[120px] h-[50px] sm:w-[140px] sm:h-[58px]">
              {/* Logo SVG inline pour contrôle total */}
              <Image src={Logo} height={60} alt="logo Lex-port cabinet avocat Bordeaux"/>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-3 ml-auto">
            <Button
              onClick={() => scrollToSection("affaire")}
              variant="primary"
              size="sm"
            >
              L&apos;affaire
            </Button>
            <Button
              onClick={() => scrollToSection("concerned")}
              variant="primary"
              size="sm"
            >
              Concernés
            </Button>
            <Button
              onClick={() => scrollToSection("why-us")}
              variant="primary"
              size="sm"
            >
              Notre expertise
            </Button>
            <Button
              onClick={scrollToContact}
              variant="primary"
              size="sm"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile menu button */}
          {/* <button
            className="btn-burger hidden"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-3">
              <Button
                onClick={() => scrollToSection("affaire")}
                variant="primary"
                size="sm"
                className="w-full"
              >
                L&apos;affaire
              </Button>
              <Button
                onClick={() => scrollToSection("concerned")}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Concernés
              </Button>
              <Button
                onClick={() => scrollToSection("why-us")}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Notre expertise
              </Button>
              <Button
                onClick={scrollToContact}
                variant="primary"
                size="sm"
                className="w-full"
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
