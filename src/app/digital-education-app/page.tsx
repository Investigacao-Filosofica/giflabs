"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { useLanguage } from "@/contexts/LanguageContext"
import {
  BookOpen,
  ChevronRight,
  Code,
  Globe,
  Handshake,
  Lightbulb,
  Mail,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  GitBranch,
  Calendar,
  Server,
  Database,
  Cloud,
  Archive,
  FileSignature,
  Briefcase,
  Palette,
  GraduationCap,
  FileText,
  Settings,
} from "lucide-react"

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-neutral-800">{title}</h3>
        <p className="text-neutral-600 font-light leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

function RoadmapStep({
  phase,
  title,
  description,
  isLast = false,
}: {
  phase: string
  title: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="relative flex items-start">
      <div className="flex flex-col items-center mr-6">
        <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
          {phase}
        </div>
        {!isLast && <div className="w-px h-24 bg-neutral-300 mt-2"></div>}
      </div>
      <div className="pt-2">
        <h3 className="font-bold text-neutral-800">{title}</h3>
        <p className="text-neutral-600 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function DigitalEducationAppPage() {
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
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                  {t("digital_education.hero.title")}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  {t("digital_education.hero.description")}
                </p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                    <Link href="#cta">
                      {t("digital_education.hero.cta_main")} <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#roadmap">
                      {t("digital_education.hero.cta_secondary")} <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* O Desafio */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">{t("digital_education.challenges.title")}</h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {t("digital_education.challenges.description")}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20">
                  <Feature icon={<Globe className="text-neutral-500" />} title={t("digital_education.challenges.problems.centralized.title")}>
                    {t("digital_education.challenges.problems.centralized.description")}
                  </Feature>
                  <Feature icon={<ShieldCheck className="text-neutral-500" />} title={t("digital_education.challenges.problems.fragile_certs.title")}>
                    {t("digital_education.challenges.problems.fragile_certs.description")}
                  </Feature>
                  <Feature icon={<Puzzle className="text-neutral-500" />} title={t("digital_education.challenges.problems.complex_onboarding.title")}>
                    {t("digital_education.challenges.problems.complex_onboarding.description")}
                  </Feature>
                  <Feature icon={<Users className="text-neutral-500" />} title={t("digital_education.challenges.problems.discouraged_educators.title")}>
                    {t("digital_education.challenges.problems.discouraged_educators.description")}
                  </Feature>
                </div>
              </div>
            </div>
          </section>

          {/* Nossa Solução */}
          <section id="solucao" className="bg-white py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                    {t("digital_education.solution.title")}
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {t("digital_education.solution.description")}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 max-w-4xl mx-auto mt-20">
                  <Feature icon={<Rocket className="h-8 w-8 text-neutral-500" />} title={t("digital_education.solution.features.gamification.title")}>
                    {t("digital_education.solution.features.gamification.description")}
                  </Feature>
                  <Feature icon={<ShieldCheck className="h-8 w-8 text-neutral-500" />} title={t("digital_education.solution.features.certification.title")}>
                    {t("digital_education.solution.features.certification.description")}
                  </Feature>
                  <Feature icon={<Puzzle className="h-8 w-8 text-neutral-500" />} title={t("digital_education.solution.features.modular.title")}>
                    {t("digital_education.solution.features.modular.description")}
                  </Feature>
                  <Feature icon={<GitBranch className="h-8 w-8 text-neutral-500" />} title={t("digital_education.solution.features.hybrid.title")}>
                    {t("digital_education.solution.features.hybrid.description")}
                  </Feature>
                </div>
              </div>
            </div>
          </section>

          {/* Seção de Tecnologia */}
          <section id="tecnologia" className="bg-neutral-900 py-20 text-white md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">{t("digital_education.technology.title")}</h2>
                  <p className="text-lg leading-relaxed text-neutral-300">
                    {t("digital_education.technology.description")}
                  </p>
                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4 mt-20">
                  <div className="flex flex-col items-center">
                    <Code className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">Next.js & React</h3>
                    <p className="text-sm text-neutral-400">Frontend moderno e performático.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Server className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">Backend</h3>
                    <p className="text-sm text-neutral-400">
                      Node.js + Express/NestJS. Assíncrono, modular, ótimo suporte a APIs e websockets, fácil integração
                      web3.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Puzzle className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">Blockchain/Smart Contracts</h3>
                    <p className="text-sm text-neutral-400">
                      Solidity (Ethereum, Polygon). Comunidade ativa, suporte a NFTs, tokens, e interoperabilidade.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Database className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">MongoDB</h3>
                    <p className="text-sm text-neutral-400">Flexível para dados transacionais e análise.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Cloud className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">Functions (serverless)</h3>
                    <p className="text-sm text-neutral-400">
                      Escalabilidade, redução de custos, fácil gestão de nós blockchain.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Globe className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">Multichain (EVM)</h3>
                    <p className="text-sm text-neutral-400">Suporte a redes como Base, Polygon e Ethereum.</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Archive className="mb-4 h-10 w-10" />
                    <h3 className="mb-2 font-semibold">IPFS / Arweave</h3>
                    <p className="text-sm text-neutral-400">Armazenamento descentralizado de conteúdo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div>
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">{t("digital_education.roadmap.title")}</h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {t("digital_education.roadmap.description")}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto mt-20">
                  <RoadmapStep
                    phase="Q1"
                    title={t("digital_education.roadmap.q1.title")}
                    description={t("digital_education.roadmap.q1.description")}
                  />
                  <RoadmapStep
                    phase="Q2"
                    title={t("digital_education.roadmap.q2.title")}
                    description={t("digital_education.roadmap.q2.description")}
                  />
                  <RoadmapStep
                    phase="Q3"
                    title={t("digital_education.roadmap.q3.title")}
                    description={t("digital_education.roadmap.q3.description")}
                  />
                  <RoadmapStep
                    phase="Q4"
                    title={t("digital_education.roadmap.q4.title")}
                    description={t("digital_education.roadmap.q4.description")}
                    isLast
                  />
                </div>
              </div>
            </div>
          </section>



          {/* Equipe de Desenvolvimento */}
          <section className="py-20 md:py-28 scroll-mt-24 bg-neutral-900">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">{t("digital_education.team.title")}</h2>
              </div>
              {/* Setor: Coordenação e Administrativo */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">{t("digital_education.team.sections.coordination.title")}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* Rodrigo - Coordenação */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center hover:bg-neutral-700 transition-colors">
                    <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                      <GraduationCap size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-xl">{t("digital_education.team.members.rodrigo.name")}</h3>
                    <p className="text-neutral-300 mb-4 font-medium">{t("digital_education.team.members.rodrigo.role")}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {t("digital_education.team.members.rodrigo.description")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.rodrigo.badges.academic")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.rodrigo.badges.coordination")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.rodrigo.badges.founder")}
                      </Badge>
                    </div>
                  </div>

                  {/* Roseline - Administrativo */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center hover:bg-neutral-700 transition-colors">
                    <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                      <FileText size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-xl">{t("digital_education.team.members.roseline.name")}</h3>
                    <p className="text-neutral-300 mb-4 font-medium">{t("digital_education.team.members.roseline.role")}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {t("digital_education.team.members.roseline.description")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.roseline.badges.administration")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.roseline.badges.secretary")}
                      </Badge>
                    </div>
                  </div>

                  {/* Rafael - Administrativo */}
                  <div className="bg-neutral-700 border border-neutral-600 rounded-lg p-8 text-center hover:bg-neutral-600 transition-colors">
                    <div className="w-20 h-20 mx-auto mb-6 bg-neutral-600 rounded-full flex items-center justify-center">
                      <Settings size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-xl">{t("digital_education.team.members.rafael.name")}</h3>
                    <p className="text-neutral-300 mb-4 font-medium">{t("digital_education.team.members.rafael.role")}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {t("digital_education.team.members.rafael.description")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="border-neutral-500 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.rafael.badges.administration")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-500 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.rafael.badges.management")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setor: Desenvolvimento Técnico */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">{t("digital_education.team.sections.technical.title")}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {/* Mateus - Coordenação + Desenvolvimento */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center hover:bg-neutral-700 transition-colors">
                    <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                      <Palette size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-xl">{t("digital_education.team.members.mateus.name")}</h3>
                    <p className="text-neutral-300 mb-4 font-medium">{t("digital_education.team.members.mateus.role")}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {t("digital_education.team.members.mateus.description")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.mateus.badges.frontend")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.mateus.badges.web3")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.mateus.badges.coordination")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.mateus.badges.founder")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.mateus.badges.gamification")}
                      </Badge>
                    </div>
                  </div>

                  {/* Alexandre - Desenvolvimento */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 text-center hover:bg-neutral-700 transition-colors">
                    <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center">
                      <Database size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-3 text-xl">{t("digital_education.team.members.alexandre.name")}</h3>
                    <p className="text-neutral-300 mb-4 font-medium">{t("digital_education.team.members.alexandre.role")}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {t("digital_education.team.members.alexandre.description")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.alexandre.badges.backend")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.alexandre.badges.blockchain")}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                        {t("digital_education.team.members.alexandre.badges.data_architecture")}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="py-20 md:py-28 scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                  {t("digital_education.cta.title")}
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                  {t("digital_education.cta.description")}
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <Button size="lg" className="w-full md:w-auto bg-neutral-900 hover:bg-neutral-800 text-white" asChild>
                    <Link href="/#contato">
                      <Handshake className="mr-2 h-5 w-5" /> {t("digital_education.cta.partner_button")}
                    </Link>
                  </Button>
                  <Button size="lg" variant="secondary" className="w-full md:w-auto" asChild>
                    <Link href="/#contato">
                      <Mail className="mr-2 h-5 w-5" /> {t("digital_education.cta.updates_button")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}