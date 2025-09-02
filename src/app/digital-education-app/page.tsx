"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { useLanguage } from "@/contexts/LanguageContext"
import { 
  HeroSection, 
  ContentSection, 
  DarkSection, 
  FeatureCard,
  TeamMemberCard 
} from "@/components/ui"
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
          <HeroSection
            title={t("digital_education.hero.title")}
            description={t("digital_education.hero.description")}
            ctaButtons={[
              {
                text: t("digital_education.hero.cta_main"),
                href: "#cta",
                variant: "primary",
                icon: <ChevronRight className="h-4 w-4" />,
              },
              {
                text: t("digital_education.hero.cta_secondary"),
                href: "#roadmap",
                variant: "primary",
                icon: <Calendar className="h-4 w-4" />,
              },
            ]}
          />

          {/* O Desafio */}
          <ContentSection
            title={t("digital_education.challenges.title")}
            description={t("digital_education.challenges.description")}
            maxWidth="7xl"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Globe className="text-neutral-500" />}
                title={t("digital_education.challenges.problems.centralized.title")}
                description={t("digital_education.challenges.problems.centralized.description")}
              />
              <FeatureCard
                icon={<ShieldCheck className="text-neutral-500" />}
                title={t("digital_education.challenges.problems.fragile_certs.title")}
                description={t("digital_education.challenges.problems.fragile_certs.description")}
              />
              <FeatureCard
                icon={<Puzzle className="text-neutral-500" />}
                title={t("digital_education.challenges.problems.complex_onboarding.title")}
                description={t("digital_education.challenges.problems.complex_onboarding.description")}
              />
              <FeatureCard
                icon={<Users className="text-neutral-500" />}
                title={t("digital_education.challenges.problems.discouraged_educators.title")}
                description={t("digital_education.challenges.problems.discouraged_educators.description")}
              />
            </div>
          </ContentSection>

          {/* Nossa Solução */}
          <ContentSection
            id="solucao"
            title={t("digital_education.solution.title")}
            description={t("digital_education.solution.description")}
            background="white"
          >
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
              <FeatureCard
                icon={<Rocket className="h-8 w-8 text-neutral-500" />}
                title={t("digital_education.solution.features.gamification.title")}
                description={t("digital_education.solution.features.gamification.description")}
                layout="horizontal"
                alignment="left"
              />
              <FeatureCard
                icon={<ShieldCheck className="h-8 w-8 text-neutral-500" />}
                title={t("digital_education.solution.features.certification.title")}
                description={t("digital_education.solution.features.certification.description")}
                layout="horizontal"
                alignment="left"
              />
              <FeatureCard
                icon={<Puzzle className="h-8 w-8 text-neutral-500" />}
                title={t("digital_education.solution.features.modular.title")}
                description={t("digital_education.solution.features.modular.description")}
                layout="horizontal"
                alignment="left"
              />
              <FeatureCard
                icon={<GitBranch className="h-8 w-8 text-neutral-500" />}
                title={t("digital_education.solution.features.hybrid.title")}
                description={t("digital_education.solution.features.hybrid.description")}
                layout="horizontal"
                alignment="left"
              />
            </div>
          </ContentSection>

          {/* Seção de Tecnologia */}
          <DarkSection
            id="tecnologia"
            title={t("digital_education.technology.title")}
            description={t("digital_education.technology.description")}
          >
            <div className="mx-auto flex flex-wrap justify-center gap-8 max-w-7xl">
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Code className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">Next.js & React</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">Frontend moderno e performático.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Server className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">Backend</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">
                          Node.js + Express/NestJS. Assíncrono, modular, ótimo suporte a APIs e websockets, fácil integração web3.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Puzzle className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">Blockchain/Smart Contracts</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">
                          Solidity (Ethereum, Polygon). Comunidade ativa, suporte a NFTs, tokens, e interoperabilidade.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Database className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">MongoDB</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">Flexível para dados transacionais e análise.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Cloud className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">Functions (serverless)</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">
                          Escalabilidade, redução de custos, fácil gestão de nós blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Globe className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">Multichain (EVM)</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">Suporte a redes como Base, Polygon e Ethereum.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-80 lg:w-72">
                    <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                      <div className="p-8 text-center flex flex-col flex-grow">
                        <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                          <Archive className="h-10 w-10 text-neutral-900" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">IPFS / Arweave</h3>
                        <p className="flex-grow text-sm leading-relaxed text-neutral-400">Armazenamento descentralizado de conteúdo.</p>
                      </div>
                    </div>
                  </div>
            </div>
          </DarkSection>

          {/* Roadmap */}
          <ContentSection
            id="roadmap"
            title={t("digital_education.roadmap.title")}
            description={t("digital_education.roadmap.description")}
            maxWidth="3xl"
          >
            <div className="max-w-2xl mx-auto">
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
          </ContentSection>

          {/* Equipe de Desenvolvimento */}
          <DarkSection title={t("digital_education.team.title")}>
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
          </DarkSection>

          {/* CTA */}
          <ContentSection id="cta">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                {t("digital_education.cta.title")}
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                {t("digital_education.cta.description")}
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Button size="lg" className="w-full md:w-auto bg-neutral-900 hover:bg-neutral-800 text-white" asChild>
                  <Link href="#contato">
                    <Handshake className="mr-2 h-5 w-5" /> {t("digital_education.cta.partner_button")}
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="w-full md:w-auto" asChild>
                  <Link href="#contato">
                    <Mail className="mr-2 h-5 w-5" /> {t("digital_education.cta.updates_button")}
                  </Link>
                </Button>
              </div>
            </div>
          </ContentSection>
        </div>
      </main>
    </div>
  )
}