"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen,
  Users,
  ExternalLink,
  BookMarked,
  Library,
  Network,
  Award,
  Book,
} from "lucide-react";

function Feature({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex-shrink-0 mb-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
        <p className="text-neutral-300 font-light leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function SerieIFPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <main>
        <div className="space-y-20 md:space-y-28">
          {/* Hero Section */}
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto px-6 text-center">
              <div className="mx-auto max-w-4xl">
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                  {t("projects.serie_if.hero.title")}
                </h1>
                
                <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  {t("projects.serie_if.hero.description")}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-neutral-900 hover:bg-neutral-800 text-white"
                  >
                    <Link
                      href="https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/"
                      target="_blank"
                    >
                      {t("projects.serie_if.hero.cta_series")} <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="border-neutral-300 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors"
                  >
                    <Link href="#detalhes">
                      {t("projects.serie_if.hero.cta_details")} <BookMarked className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section id="detalhes" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                    {t("projects.serie_if.details.title")}
                  </h2>
                </div>
                
                <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                  <p>
                    {t("projects.serie_if.details.paragraphs.p1")}
                  </p>
                  <p>
                    {t("projects.serie_if.details.paragraphs.p2")}
                  </p>
                  <p>
                    {t("projects.serie_if.details.paragraphs.p3")}
                  </p>
                  <p>
                    {t("projects.serie_if.details.paragraphs.p4")}
                  </p>
                  <p>
                    {t("projects.serie_if.details.paragraphs.p5")}
                  </p>
                </div>

                {/* CTA Explorar Série - Movido para cima */}
                <div className="mt-20 text-center">
                  <Button
                    asChild
                    className="text-lg px-8 py-6 bg-neutral-900 hover:bg-neutral-800 text-white"
                  >
                    <Link
                      href="https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/"
                      target="_blank"
                    >
                      <BookMarked className="mr-3" />
                      {t("projects.serie_if.details.cta")}
                    </Link>
                  </Button>
                </div>
                
                {/* Grant Templeton Context - Reposicionado */}
                <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-l-4 border-neutral-300 rounded-r-lg p-8 my-24">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                        🏆 {t("projects.serie_if.recognition.title")}
                      </h3>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {t("projects.serie_if.recognition.description")}
                      </p>
                    </div>
                    <div className="text-center">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-neutral-300 text-neutral-700 hover:bg-neutral-900 hover:text-white transition-colors"
                        asChild
                      >
                        <Link 
                          href="https://www.templeton.org/grant/serie-investigacao-filosofica-improving-knowledge-and-philosophical-competences-of-brazilian-researchers-and-students"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("projects.serie_if.recognition.button")} →
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="sobre" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                    {t("projects.serie_if.about.title")}
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                    {t("projects.serie_if.about.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <Feature
                    icon={<Award className="h-10 w-10 text-neutral-400" />}
                    title={t("projects.serie_if.about.features.quality.title")}
                  >
                    {t("projects.serie_if.about.features.quality.description")}
                  </Feature>
                  <Feature
                    icon={<Network className="h-10 w-10 text-neutral-400" />}
                    title={t("projects.serie_if.about.features.network.title")}
                  >
                    {t("projects.serie_if.about.features.network.description")}
                  </Feature>
                  <Feature
                    icon={
                      <Library className="h-10 w-10 text-neutral-400" />
                    }
                    title={t("projects.serie_if.about.features.support.title")}
                  >
                    {t("projects.serie_if.about.features.support.description")}
                  </Feature>
                  <Feature
                    icon={<Book className="h-10 w-10 text-neutral-400" />}
                    title={t("projects.serie_if.about.features.innovation.title")}
                  >
                    {t("projects.serie_if.about.features.innovation.description")}
                  </Feature>
                </div>
              </div>
            </div>
          </section>

          {/* Colaboradores Section */}
          <section id="colaboradores" className="bg-white py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  {t("projects.serie_if.collaborators.title")}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-16">
                  {t("projects.serie_if.collaborators.description")}
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link
                      href="http://dgp.cnpq.br/dgp/espelhogrupo/821202"
                      target="_blank"
                    >
                      {t("projects.serie_if.collaborators.cta")}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 