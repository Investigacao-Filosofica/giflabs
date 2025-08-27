"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Globe,
  Users,
  Target,
  BookOpen,
  GraduationCap,
  Building,
  Calendar,
  MessageSquare,
  FileText,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-neutral-800">{title}</h3>
        <p className="text-neutral-600 font-light leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function TeamMember({ name, institution, role, description }: { name: string; institution: string; role: string; description: string }) {
  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center hover:bg-neutral-700 transition-colors">
      <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
        <GraduationCap size={32} className="text-white" />
      </div>
      <h3 className="font-bold text-white mb-3 text-xl">{name}</h3>
      <p className="text-neutral-300 mb-2 font-medium">{institution}</p>
      <p className="text-neutral-400 mb-4 text-sm">{role}</p>
      <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
}

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
                <p className="mb-4 text-lg text-neutral-600 md:text-xl">
                  {t("internacionalizacao.hero.subtitle")}
                </p>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  {t("internacionalizacao.hero.description")}
                </p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                    <Link href="#sobre">
                      {t("internacionalizacao.hero.cta_main")} <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#equipe">
                      {t("internacionalizacao.hero.cta_secondary")} <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    {t("internacionalizacao.about.description")}
                  </p>
                  <div className="bg-neutral-50 border-l-4 border-neutral-300 rounded-r-lg p-6 text-left">
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      {t("internacionalizacao.about.summary")}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <Feature icon={<Users className="text-neutral-500" />} title={t("internacionalizacao.about.features.collaboration.title")}>
                    {t("internacionalizacao.about.features.collaboration.description")}
                  </Feature>
                  <Feature icon={<Calendar className="text-neutral-500" />} title={t("internacionalizacao.about.features.conferences.title")}>
                    {t("internacionalizacao.about.features.conferences.description")}
                  </Feature>
                  <Feature icon={<FileText className="text-neutral-500" />} title={t("internacionalizacao.about.features.reflection.title")}>
                    {t("internacionalizacao.about.features.reflection.description")}
                  </Feature>
                  <Feature icon={<Globe className="text-neutral-500" />} title={t("internacionalizacao.about.features.cultural.title")}>
                    {t("internacionalizacao.about.features.cultural.description")}
                  </Feature>
                </div>
              </div>
            </div>
          </section>

          {/* Objectives Section */}
          <section id="objetivos" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                    {t("internacionalizacao.objectives.title")}
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {t("internacionalizacao.objectives.description")}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center">
                    <Award className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.academic.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.academic.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center">
                    <Target className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.technology.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.technology.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center">
                    <MessageSquare className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.linguistic.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.linguistic.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center">
                    <BookOpen className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-white mb-3">{t("internacionalizacao.objectives.goals.ethical.title")}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{t("internacionalizacao.objectives.goals.ethical.description")}</p>
                  </div>
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center">
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
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <TeamMember
                    name={t("internacionalizacao.team.organizers.rafael_martins.name")}
                    institution={t("internacionalizacao.team.organizers.rafael_martins.institution")}
                    role={t("internacionalizacao.team.organizers.rafael_martins.role")}
                    description={t("internacionalizacao.team.organizers.rafael_martins.description")}
                  />
                  <TeamMember
                    name={t("internacionalizacao.team.organizers.david_tamez.name")}
                    institution={t("internacionalizacao.team.organizers.david_tamez.institution")}
                    role={t("internacionalizacao.team.organizers.david_tamez.role")}
                    description={t("internacionalizacao.team.organizers.david_tamez.description")}
                  />
                  <TeamMember
                    name={t("internacionalizacao.team.organizers.sean_white.name")}
                    institution={t("internacionalizacao.team.organizers.sean_white.institution")}
                    role={t("internacionalizacao.team.organizers.sean_white.role")}
                    description={t("internacionalizacao.team.organizers.sean_white.description")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section id="metodologia" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                    {t("internacionalizacao.methodology.title")}
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    {t("internacionalizacao.methodology.description")}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Feature icon={<Calendar className="text-neutral-400" />} title={t("internacionalizacao.methodology.approaches.synchronous.title")}>
                    {t("internacionalizacao.methodology.approaches.synchronous.description")}
                  </Feature>
                  <Feature icon={<FileText className="text-neutral-400" />} title={t("internacionalizacao.methodology.approaches.asynchronous.title")}>
                    {t("internacionalizacao.methodology.approaches.asynchronous.description")}
                  </Feature>
                  <Feature icon={<Users className="text-neutral-400" />} title={t("internacionalizacao.methodology.approaches.collaborative.title")}>
                    {t("internacionalizacao.methodology.approaches.collaborative.description")}
                  </Feature>
                  <Feature icon={<Globe className="text-neutral-400" />} title={t("internacionalizacao.methodology.approaches.digital.title")}>
                    {t("internacionalizacao.methodology.approaches.digital.description")}
                  </Feature>
                </div>
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
