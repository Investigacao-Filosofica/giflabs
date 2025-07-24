"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (id: string) => {
    // If we are not on the home page and the link is for a section, navigate to home with hash
    if (pathname !== "/" && (id === "home" || id === "sobre" || id === "projetos" || id === "equipe" || id === "contato")) {
      window.location.href = `/#${id}`
    } else {
      // Otherwise, scroll to the section on the current page
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const isHomePage = pathname === "/"

  const navLinks = isHomePage
    ? [
        { id: "home", label: "Home" },
        { id: "sobre", label: "Sobre" },
        { id: "projetos", label: "Projetos" },
        { id: "equipe", label: "Equipe" },
        { id: "contato", label: "Contato" },
      ]
    : [
        { id: "solucao", label: "Solução" },
        { id: "tecnologia", label: "Tecnologia" },
        { id: "roadmap", label: "Roteiro" },
        { id: "cta", label: "Participe" },
      ]

  return (
    <header className="fixed top-0 w-full bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-neutral-900 tracking-tight">
              GIFLABS
            </Link>
            {isHomePage && (
              <div className="hidden md:block text-sm text-neutral-600 font-light">
                Filosofia, Artes, Tecnologia e Educação
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-neutral-700" /> : <Menu className="text-neutral-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-neutral-700 hover:text-neutral-900 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 