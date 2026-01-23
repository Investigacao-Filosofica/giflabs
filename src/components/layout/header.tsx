"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./language-switcher";

interface NavLink {
  label: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const getNavLinks = (): NavLink[] => {
    switch (pathname) {
      case "/":
        return [
          { href: "#home", label: t("navigation.home") },
          { href: "#sobre", label: t("navigation.about") },
          { href: "#projetos", label: t("navigation.projects") },
          { href: "#equipe", label: t("navigation.team") },
          { href: "#contato", label: t("navigation.contact") },
        ];
      case "/serie-if":
        return [
          { href: "/", label: "Home" },
          { href: "#detalhes", label: t("navigation.project_details") },
          { href: "#colaboradores", label: t("navigation.collaborators") },
        ];
      case "/digital-education-app":
        return [
          { href: "/", label: "Home" },
          { href: "#solucao", label: t("navigation.solution") },
          { href: "#tecnologia", label: t("navigation.technology") },
          { href: "#roadmap", label: t("navigation.roadmap") },
          { href: "#cta", label: t("navigation.participate") },
        ];
      case "/virtualia":
        return [
          { href: "/", label: "Home" },
          { href: "#publicacoes", label: t("navigation.publications") },
          { href: "#pilares", label: t("navigation.principles") },
          { href: "#virtualia-equipe", label: t("navigation.team") },
          { href: "#apoiadores", label: t("navigation.supporters") },
        ];
      case "/arqueologia-digital":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: t("navigation.project_details") },
          { href: "#colecao", label: t("navigation.collection") },
          { href: "#parceiros", label: t("navigation.partners") },
        ];
      case "/metaverso":
        return [
          { href: "/", label: "Home" },
          { href: "#biblioteca", label: t("navigation.library") },
          { href: "#pilares", label: t("navigation.pillars") },
          { href: "#jogos-galerias", label: t("navigation.games_galleries") },
        ];
      case "/giflabs":
        return [
          { href: "/", label: "Home" },
          { href: "#conteudo", label: t("navigation.content") },
          { href: "#formatos", label: t("navigation.formats") },
        ];
      case "/literatura":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: t("navigation.project_details") },
          { href: "#criadores", label: t("navigation.collaborators") },
          { href: "#relevancia", label: t("navigation.cultural_relevance") },
          { href: "#financiamento", label: t("navigation.funding") },
          { href: "#capitulos", label: t("navigation.chapters") },
        ];
      case "/internacionalizacao":
        return [
          { href: "/", label: "Home" },
          { href: "#sobre", label: t("navigation.about") },
          { href: "#objetivos", label: t("navigation.objectives") },
          { href: "#equipe", label: t("navigation.team") },
          { href: "#parceiros", label: t("navigation.partners") },
        ];
      case "/matzatea":
        return [
          { href: "/", label: "Home" },
          { href: "#projeto", label: t("navigation.project_details") },
          { href: "#relevancia", label: t("navigation.cultural_relevance") },
          { href: "#financiamento", label: t("navigation.funding") },
        ];
      case "/blog":
        return [
          { href: "/", label: "Home" },
          { href: "#", label: "Blog" },
        ];
      default:
        // Para páginas de post individual (/blog/[slug])
        if (pathname?.startsWith("/blog/")) {
          return [
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
          ];
        }
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
                {t("header.subtitle")}
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
            <LanguageSwitcher />
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
              <div className="pt-2 border-t border-neutral-200">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 