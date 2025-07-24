"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-neutral-900 tracking-tight">GIFLABS</div>
            <div className="hidden md:block text-sm text-neutral-600 font-light">Filosofia, Tecnologia, Artes e Educação</div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
            <Button
              className="bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-200 border-0"
              onClick={() => window.open("https://www.virtualiajournal.com/", "_blank")}
            >
              Acesse a Web3
            </Button>
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
              <button onClick={() => scrollToSection("home")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-left text-neutral-700 hover:text-neutral-900 font-medium"
              >
                Projetos
              </button>
              <button onClick={() => scrollToSection("equipe")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                Equipe
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                Contato
              </button>
              <Button
                className="bg-neutral-900 hover:bg-neutral-800 text-white w-full border-0"
                onClick={() => window.open("https://www.virtualiajournal.com/", "_blank")}
              >
                Acesse a Web3
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 