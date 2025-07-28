"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getNavLinks = (): NavLink[] => {
    switch (pathname) {
      case "/":
        return [
          { href: "#home", label: "Home" },
          { href: "#sobre", label: "Sobre" },
          { href: "#projetos", label: "Projetos" },
          { href: "#equipe", label: "Equipe" },
          { href: "#contato", label: "Contato" },
        ];
      case "/serie-if":
        return [
          { href: "/", label: "Home" },
          { href: "#detalhes", label: "O Projeto" },
          { href: "#colaboradores", label: "Colaboradores" },
        ];
      case "/digital-education-app":
        return [
          { href: "/", label: "Home" },
          { href: "#solucao", label: "Solução" },
          { href: "#tecnologia", label: "Tecnologia" },
          { href: "#roadmap", label: "Roteiro" },
          { href: "#cta", label: "Participe" },
        ];
      case "/virtualia":
        return [
          { href: "/", label: "Home" },
          { href: "#publicacoes", label: "Publicações" },
          { href: "#virtualia-equipe", label: "Colaboradores" },
          { href: "#apoiadores", label: "Apoiadores" },
        ];
      case "/arqueologia-digital":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: "O Projeto" },
          { href: "#colecao", label: "Coleção" },
          { href: "#parceiros", label: "Parceiros" },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();
  const isHomePage = pathname === "/";

  const navItemClasses = "text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium";
  const mobileNavItemClasses = "text-left text-neutral-700 hover:text-neutral-900 font-medium w-full";

  return (
    <header className="fixed top-0 w-full bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-neutral-900">GIF</span>
              <span
                className="text-white"
                style={{
                  WebkitTextStroke: "1px #171717",
                }}
              >
                LABS
              </span>
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
              <Link key={link.label} href={link.href} className={navItemClasses} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
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
                <Link key={link.label} href={link.href} className={mobileNavItemClasses} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 