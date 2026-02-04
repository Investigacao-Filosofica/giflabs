"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, X, Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBlogFilters } from "@/contexts/BlogFiltersContext";
import { LanguageSwitcher } from "./language-switcher";

interface NavLink {
  label: string;
  href: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const isBlogPage = pathname === "/blog" || pathname?.startsWith("/blog/");
  const isBlogListPage = pathname === "/blog";
  const searchQuery = searchParams?.get("q") || "";
  const blogFilters = useBlogFilters();
  const hasActiveFilters =
    isBlogListPage &&
    (searchParams?.getAll("category").length > 0 ||
      searchParams?.getAll("tag").length > 0 ||
      !!searchParams?.get("author") ||
      !!searchParams?.get("language") ||
      !!searchParams?.get("q"));

  const getNavLinks = (): NavLink[] => {
    switch (pathname) {
      case "/":
        return [
          { href: "#home", label: t("navigation.home") },
          { href: "#sobre", label: t("navigation.about") },
          { href: "#blog-preview", label: t("navigation.blog") },
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
      case "/arquivologia-digital":
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
      case "/youtube-channel":
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
        <div className="flex items-center justify-between relative">
          <div className="flex items-center space-x-4 flex-shrink-0">
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

          {/* Barra de busca + Filtro - centro (apenas na página do blog) */}
          {isBlogPage && (
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 w-full max-w-lg">
              <form
                action="/blog"
                method="get"
                className="flex-1 flex items-center"
              >
                <input type="hidden" name="page" value="1" />
                {searchParams && Array.from(searchParams.entries())
                  .filter(([key]) => key !== "q")
                  .map(([key, value], index) => (
                    <input key={`${key}-${value}-${index}`} type="hidden" name={key} value={value} />
                  ))}
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    name="q"
                    defaultValue={searchQuery}
                    placeholder={t("blog.search_placeholder") || "Buscar posts..."}
                    className="w-full rounded-lg border border-neutral-300 bg-white py-2 pl-4 pr-10 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors rounded"
                    aria-label={t("blog.search") || "Buscar"}
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
              {isBlogListPage && (
                <button
                  type="button"
                  data-filter-trigger
                  onClick={() => blogFilters?.toggleFilters()}
                  className={`p-2.5 rounded-lg border transition-all flex-shrink-0 ${
                    blogFilters?.showFilters
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : hasActiveFilters
                        ? "border-neutral-300 bg-white text-neutral-600 animate-filter-pulse hover:bg-neutral-50 hover:border-neutral-400"
                        : "border-neutral-300 bg-white text-neutral-600 hover:bg-neutral-50 hover:border-neutral-400"
                  }`}
                  aria-label={t("blog.filters") || "Filtros"}
                >
                  <Filter className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 flex-shrink-0">
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
            {isBlogListPage && (
              <div className="pt-4 pb-4 flex gap-2">
                <form action="/blog" method="get" className="flex-1">
                  <input type="hidden" name="page" value="1" />
                  {searchParams && Array.from(searchParams.entries())
                    .filter(([key]) => key !== "q")
                    .map(([key, value], index) => (
                      <input key={`${key}-${value}-${index}`} type="hidden" name={key} value={value} />
                    ))}
                  <div className="relative">
                    <input
                      type="text"
                      name="q"
                      defaultValue={searchQuery}
                      placeholder={t("blog.search_placeholder") || "Buscar posts..."}
                      className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-4 pr-10 text-sm text-neutral-900 placeholder-neutral-400"
                    />
                    <button
                      type="submit"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-neutral-400"
                      aria-label={t("blog.search") || "Buscar"}
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </form>
                <button
                  type="button"
                  data-filter-trigger
                  onClick={() => { blogFilters?.toggleFilters(); setIsMenuOpen(false); }}
                  className={`p-2.5 rounded-lg border transition-all flex-shrink-0 ${
                    blogFilters?.showFilters
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : hasActiveFilters
                        ? "border-neutral-300 bg-white text-neutral-600 animate-filter-pulse"
                        : "border-neutral-300 bg-white text-neutral-600"
                  }`}
                  aria-label={t("blog.filters") || "Filtros"}
                >
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            )}
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