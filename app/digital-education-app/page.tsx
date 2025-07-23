import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Education App | GIFLABS",
  description:
    "Uma plataforma educacional híbrida para construir o futuro da aprendizagem com certificação on-chain, gamificação e curadoria colaborativa.",
}

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
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-neutral-500" />
            <span>GIFLABS</span>
          </Link>
          <Button asChild>
            <Link href="/#contato">Fale Conosco</Link>
          </Button>
        </div>
      </header>

      <main>
        <div className="space-y-20 md:space-y-28">
          {/* Hero Section */}
          <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tighter">
                Onde a Educação Encontra a Descentralização
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
                Uma nova forma de aprender, construir e pertencer no universo das tecnologias descentralizadas, unindo
                rigor acadêmico e cultura open-source.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#cta">
                    Junte-se a Nós <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#roadmap">
                    Nosso Roteiro <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* O Desafio */}
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">O Descompasso Atual</h2>
                <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                  Sistemas educacionais tradicionais e a economia do conhecimento digital operam em mundos separados.
                  Nascemos para construir a ponte.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Feature icon={<Globe className="text-neutral-500" />} title="Plataformas Centralizadas">
                  Custo elevado, falta de transparência e controle restrito sobre o conhecimento.
                </Feature>
                <Feature icon={<ShieldCheck className="text-neutral-500" />} title="Certificados Frágeis">
                  Difíceis de verificar, sem portabilidade entre instituições e pouco valor no mercado digital.
                </Feature>
                <Feature icon={<Puzzle className="text-neutral-500" />} title="Onboarding Complexo na Web3">
                  Falta de ferramentas intuitivas e experiências de aprendizagem significativas para novos usuários.
                </Feature>
                <Feature icon={<Users className="text-neutral-500" />} title="Educadores Desincentivados">
                  Dificuldade para publicar, monetizar e compartilhar conhecimento de forma aberta e colaborativa.
                </Feature>
              </div>
            </div>
          </section>

          {/* Nossa Solução */}
          <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                  Uma Infraestrutura de Aprendizagem para o Futuro
                </h2>
                <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                  Criamos um ecossistema que combina o melhor da academia e da cultura Web3, baseado em quatro pilares
                  fundamentais.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
                <Feature icon={<Rocket className="h-8 w-8 text-neutral-500" />} title="Aprendizagem Gamificada e Prática">
                  Jornadas de conhecimento baseadas em missões interativas que unem teoria e prática. Aprenda criando,
                  experimentando e refletindo.
                </Feature>
                <Feature icon={<ShieldCheck className="h-8 w-8 text-neutral-500" />} title="Certificação On-Chain Verificável">
                  Conquistas e certificados emitidos como NFTs com metadados transparentes. Sua trajetória de
                  aprendizagem se torna um ativo digital, portátil e à prova de fraude.
                </Feature>
                <Feature icon={<Puzzle className="h-8 w-8 text-neutral-500" />} title="Arquitetura Modular e Aberta">
                  Educadores, instituições e DAOs podem publicar seus próprios cursos, criando um mercado de conhecimento
                  público e auditável.
                </Feature>
                <Feature icon={<GitBranch className="h-8 w-8 text-neutral-500" />} title="Modelo Híbrido (Web2 + Web3)">
                  Interface acessível via login tradicional (Web2) com a potência da descentralização (Web3) para
                  certificação e governança. O melhor dos dois mundos.
                </Feature>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">Roteiro de Desenvolvimento</h2>
                <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
                  Nossa Fase 1 está planejada para ser executada em 12 meses, com entregas claras a cada trimestre.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <RoadmapStep
                  phase="Q1"
                  title="Arquitetura e Conteúdo"
                  description="Desenvolvimento da arquitetura técnica, design da experiência de usuário e criação das missões introdutórias."
                />
                <RoadmapStep
                  phase="Q2"
                  title="Gamificação e Perfis"
                  description="Implementação da camada de gamificação, com perfis de usuário, sistema de badges e reputação."
                />
                <RoadmapStep
                  phase="Q3"
                  title="Certificação NFT e Testes"
                  description="Integração do sistema de certificação via NFTs e início dos testes com grupos-piloto selecionados."
                />
                <RoadmapStep
                  phase="Q4"
                  title="Lançamento MVP"
                  description="Integração completa dos módulos Web2 e Web3, publicação da documentação e lançamento da versão MVP."
                  isLast
                />
              </div>
            </div>
          </section>

          {/* Seção de Tecnologia */}
          <section className="bg-neutral-900 text-white py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tecnologia Aberta e Robusta</h2>
                <p className="text-lg text-neutral-300 mt-4 leading-relaxed">
                  Nossa plataforma é construída sobre uma base de tecnologias modernas e de código aberto, garantindo
                  escalabilidade, segurança e transparência.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <Code className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Next.js & React</h3>
                  <p className="text-sm text-neutral-400">Frontend moderno e performático.</p>
                </div>
                <div className="flex flex-col items-center">
                  <GitBranch className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Node.js</h3>
                  <p className="text-sm text-neutral-400">Backend escalável para gerenciar a lógica.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">Multichain (EVM)</h3>
                  <p className="text-sm text-neutral-400">Suporte a redes como Polygon e Ethereum.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Puzzle className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold">IPFS / Arweave</h3>
                  <p className="text-sm text-neutral-400">Armazenamento descentralizado de conteúdo.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
              <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                  Construa o Futuro da Educação Conosco
                </h2>
                <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                  O Digital Education App é um convite à colaboração. Estamos em busca de parceiros, apoiadores e
                  instituições que compartilham da nossa visão de criar uma ecologia de saberes livre, verificável e
                  distribuída.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <Button size="lg" className="w-full md:w-auto" asChild>
                    <Link href="/#contato">
                      <Handshake className="mr-2 h-5 w-5" /> Quero ser um Parceiro
                    </Link>
                  </Button>
                  <Button size="lg" variant="secondary" className="w-full md:w-auto" asChild>
                    <Link href="/#contato">
                      <Mail className="mr-2 h-5 w-5" /> Receber Atualizações
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 py-6 text-center text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} GIFLABS - Grupo Investigação Filosófica e Artes. Um projeto de ciência aberta.
          </p>
        </div>
      </footer>
    </div>
  )
} 