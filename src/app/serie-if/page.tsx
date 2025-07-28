import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import { CollaboratorsList } from "./_components/collaborators-list";

export const metadata: Metadata = {
  title: "Série Investigação Filosófica | GIFLABS",
  description:
    "Uma iniciativa editorial dedicada à promoção e difusão da pesquisa filosófica no contexto acadêmico brasileiro.",
};

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
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <main>
        <div className="space-y-20 md:space-y-28">
          {/* Hero Section */}
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto px-6 text-center">
              <div className="mx-auto max-w-4xl">
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                  Série Investigação Filosófica (SIF)
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                  Uma iniciativa editorial vinculada ao Grupo de Investigação
                  Filosófica (GIF Labs), à UFPel e à UFOP, dedicada à promoção
                  e à difusão da pesquisa filosófica no contexto acadêmico
                  brasileiro.
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
                      Conheça a Série <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#colaboradores">
                      Colaboradores <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section id="detalhes" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                    O Projeto em Detalhes
                  </h2>
                </div>
                <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                  <p>
                    A Série Investigação Filosófica (SIF) é uma iniciativa
                    editorial vinculada ao Grupo de Investigação Filosófica (GIF
                    Labs), à UFPel e à UFOP, dedicada à promoção e à difusão da
                    pesquisa filosófica no contexto acadêmico brasileiro. A
                    série tem como objetivo central a publicação de obras que
                    contribuam para o desenvolvimento crítico e rigoroso das
                    diferentes áreas da filosofia.
                  </p>
                  <p>
                    A produção da SIF conta com a colaboração de uma rede
                    composta por organizadores, tradutores e revisores
                    vinculados a mais de cinquenta universidades de qualidade
                    distribuídas em diversas regiões do Brasil. Essa
                    articulação institucional permite que a série incorpore
                    múltiplas perspectivas acadêmicas e assegure a qualidade
                    técnica e científica das publicações.
                  </p>
                  <p>
                    O projeto contou com o apoio financeiro da John Templeton
                    Foundation, cuja parceria tem sido fundamental para
                    viabilizar a ampla distribuição da série em bibliotecas e
                    centros de pesquisa de referência em todo o país.
                    Atualmente, a Série Investigação Filosófica foi distribuída
                    em cerca de cinquenta instituições de ensino superior, de
                    modo impresso, ampliando seu alcance e impacto na comunidade
                    acadêmica, e é também distribuída digitalmente de modo
                    gratuito.
                  </p>
                  <p>
                    Além das publicações tradicionais, a série está em processo
                    de integração com um aplicativo digital desenvolvido para
                    proporcionar uma experiência de aprendizado ampliada em
                    cursos online feitos e curados pelos organizadores dos
                    livros da série, com a temática dos mesmos e os utilizando
                    como referência.
                  </p>
                  <p>
                    Por meio dessa interface entre o material impresso e as
                    novas tecnologias, a Série Investigação Filosófica
                    consolida-se como um projeto de vanguarda no cenário
                    filosófico brasileiro, articulando excelência acadêmica,
                    diversidade institucional e inovação metodológica.
                  </p>
                </div>
                <div className="mt-16 text-center">
                  <Button
                    asChild
                    className="text-lg px-8 py-6 bg-neutral-900 hover:bg-neutral-800 text-white"
                  >
                    <Link
                      href="https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/"
                      target="_blank"
                    >
                      <BookMarked className="mr-3" />
                      Acessar todas as publicações
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="sobre" className="bg-neutral-900 py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                    Excelência e Colaboração na Filosofia Brasileira
                  </h2>
                  <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                    A SIF tem como objetivo central publicar obras que
                    contribuam para o desenvolvimento crítico e rigoroso da
                    filosofia, unindo uma vasta rede de acadêmicos e o apoio
                    de instituições de renome.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <Feature
                    icon={<Award className="h-10 w-10 text-neutral-400" />}
                    title="Qualidade e Rigor Acadêmico"
                  >
                    As obras passam por um rigoroso processo de revisão,
                    assegurando a qualidade técnica e científica das
                    publicações, com a colaboração de uma vasta rede de
                    tradutores e revisores.
                  </Feature>
                  <Feature
                    icon={<Network className="h-10 w-10 text-neutral-400" />}
                    title="Rede de Colaboração Nacional"
                  >
                    A produção conta com organizadores e pesquisadores de mais
                    de cinquenta universidades de excelência no Brasil,
                    garantindo diversas perspectivas acadêmicas.
                  </Feature>
                  <Feature
                    icon={
                      <Library className="h-10 w-10 text-neutral-400" />
                    }
                    title="Apoio da John Templeton Foundation"
                  >
                    Com o apoio financeiro da fundação, a série é distribuída
                    gratuitamente em formato digital e impressa para dezenas
                    de bibliotecas e centros de pesquisa.
                  </Feature>
                  <Feature
                    icon={<Book className="h-10 w-10 text-neutral-400" />}
                    title="Inovação e Acesso Ampliado"
                  >
                    Estamos integrando as publicações a um app de
                    aprendizagem com cursos online, unindo o material impresso
                    a novas tecnologias para uma experiência educacional
                    completa.
                  </Feature>
                </div>
              </div>
            </div>
          </section>

          {/* Colaboradores Section */}
          <section id="colaboradores" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  Nossos Colaboradores
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                  A SIF é construída por uma rede de pesquisadores de todo o
                  Brasil. Conheça os organizadores, tradutores, revisores e os
                  membros do Grupo Investigação Filosófica que tornam este
                  projeto possível.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline">
                    <Link
                      href="http://dgp.cnpq.br/dgp/espelhogrupo/821202"
                      target="_blank"
                    >
                      Membros do GIF (DGP/CNPq)
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-16">
                <CollaboratorsList />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 