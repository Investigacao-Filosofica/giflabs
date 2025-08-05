"use client";

import {
  ExternalLink,
  Puzzle,
  Library,
  Gamepad2,
  BookOpen,
  Paintbrush,
  Users,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MetaversoPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <Puzzle className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                Explorando o Metaverso
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                Investigando estética, ética e narrativas em ambientes digitais através de jogos, galerias e bibliotecas virtuais.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="#biblioteca">
                    Biblioteca <Library className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#jogos-galerias">
                    Jogos & Galerias <Gamepad2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Near Alexandria Library Section */}
        <section id="biblioteca" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  Biblioteca Near Alexandria
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  A Near Alexandria Library é uma biblioteca virtual, vinculada ao GIF Labs, situada no metaverso Voxels, que reúne um acervo especializado em literatura, lore do metaverso, arte, filosofia e tecnologia. A plataforma integra conteúdos acadêmicos do Núcleo de Estudos em Filosofia (NEPFIL) da Universidade Federal de Pelotas (UFPel), incluindo obras da Série Investigação Filosófica (SIF) e do selo Dissertatio, além de materiais literários e narrativas que exploram o universo do metaverso.
                </p>
                <p>
                  Além do vasto acervo textual, a biblioteca proporciona uma experiência imersiva por meio de um mini-game interativo que utiliza elementos de gamificação para promover a participação ativa dos visitantes e o engajamento com os conteúdos disponíveis. A NEAR Alexandria Library também oferece espaços virtuais dedicados a reuniões acadêmicas e ambientes para estudos individuais ou coletivos, facilitando o intercâmbio de ideias e o desenvolvimento de pesquisas no ambiente digital.
                </p>
                <p>
                  O projeto foi financiado com recursos da NEAR Foundation, o que possibilitou a construção e manutenção dessa plataforma inovadora, que une preservação digital, gamificação, interação lúdica e colaboração acadêmica no contexto das tecnologias Web3.
                </p>
              </div>
              <div className="mt-16 text-center">
                <Button asChild className="text-lg px-8 py-6 bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="https://www.cryptovoxels.com/play?coords=SW@1789E,1180N" target="_blank">
                    <Library className="mr-3" />
                    Acessar a Biblioteca em Voxels
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilares" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Pilares da nossa Exploração
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  Nossas iniciativas no metaverso são construídas sobre quatro pilares fundamentais que unem pesquisa, arte e tecnologia.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <BookOpen className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">Acervo Acadêmico</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Disponibilização de obras e pesquisas do NEPFIL/UFPel em um ambiente imersivo.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Gamepad2 className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">Gamificação e Interatividade</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Uso de mecânicas de jogos para engajar visitantes e facilitar o aprendizado.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Paintbrush className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">Experimentação Artística</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Criação de jogos e galerias que exploram novas estéticas e narrativas digitais.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <BrainCircuit className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">Pesquisa Filosófica</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Investigação sobre agência, identidade e a arquitetura do conhecimento na Web3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Games & Galleries Section */}
        <section id="jogos-galerias" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  Jogos & Galerias Interativas
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  Como parte de nossa pesquisa contínua sobre estética, ética e narrativas de ambientes digitais, o GIF Labs desenvolve jogos experimentais e instalações interativas em plataformas abertas de metaverso, como Nifty Island, Oncyber, Spatial e Voxels. Esses jogos não são apenas entretenimento — são experiências filosóficas que exploram agência, memória, identidade virtual e a arquitetura do conhecimento na era da Web3.
                </p>
                <p>
                  Visitantes são convidados a navegar por estruturas surreais, interagir com objetos simbólicos, resolver enigmas criptográficos e descobrir mitologias esquecidas em diferentes ilhas e realidades. Muitos de nossos mundos são construídos de forma colaborativa com artistas, estudantes e pesquisadores, servindo tanto como experimentos artísticos quanto como ambientes educacionais.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <Button asChild>
                  <Link href="https://www.niftyisland.com/play/Cluny/longwei" target="_blank">
                    Long Wei Legend (Nifty Island) <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://www.cryptovoxels.com/play?coords=E@3580E,1962.5S,1U" target="_blank">
                    Storytelling (Voxels) <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://linktr.ee/metagalleries" target="_blank">
                    Nossos Mundos Virtuais <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}