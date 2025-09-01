"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/contexts/LanguageContext";
import { TeamList } from "./_components/team-list";
import {
  Globe,
  Users,
  Target,
  BookOpen,
  GraduationCap,
  Building,
  MessageSquare,
  Award,
  ChevronRight,
} from "lucide-react";





function Partner({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
      <div className="text-center">
        <Building className="h-12 w-12 text-neutral-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-800 mb-3">{name}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function InternacionalizacaoPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        <div className="space-y-20 md:space-y-28">
          {/* Hero Section */}
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto px-6 text-center">
              <div className="mx-auto max-w-4xl">
                <div className="flex justify-center mb-8">
                  <Globe className="h-16 w-16 text-neutral-800" />
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                  {t("internacionalizacao.hero.title")}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  {t("internacionalizacao.hero.description")}
                </p>

              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="sobre" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                    {t("internacionalizacao.about.title")}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed text-left">
                    {t("internacionalizacao.about.description")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Objectives Section */}
          <section id="objetivos" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
                    {t("internacionalizacao.objectives.title")}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <Users className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.collaboration.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.collaboration.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <Award className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.academic.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.academic.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <Target className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.technology.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.technology.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <MessageSquare className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.linguistic.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.linguistic.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.ethical.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.ethical.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:bg-neutral-700 transition-colors">
                    <Globe className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.dialogue.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.dialogue.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>





          {/* Team Section */}
          <section id="equipe" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                    {t("internacionalizacao.team.title")}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {t("internacionalizacao.team.description")}
                  </p>
                </div>
                
                <TeamList />
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section id="parceiros" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                    {t("internacionalizacao.partners.title")}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {t("internacionalizacao.partners.description")}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <Partner
                    name={t("internacionalizacao.partners.institutions.unieduk.name")}
                    description={t("internacionalizacao.partners.institutions.unieduk.description")}
                  />
                  <Partner
                    name={t("internacionalizacao.partners.institutions.kansas.name")}
                    description={t("internacionalizacao.partners.institutions.kansas.description")}
                  />
                  <Partner
                    name={t("internacionalizacao.partners.institutions.ryukoku.name")}
                    description={t("internacionalizacao.partners.institutions.ryukoku.description")}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
