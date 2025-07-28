import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Users,
  Feather,
  BookCopy,
  Scale,
  Sparkles,
} from "lucide-react";
import { StaffList } from "./_components/staff-list";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Virtualia Magazine/Journal | GIFLABS",
  description: "Revista e Periódico Acadêmico sobre Arte, Tecnologia e Filosofia.",
};

const ogSupporters = [
  "@0xJetski", "@UnitedSaints", "@HuemansUniverse", "@thephilo_sopher",
  "@cryptoddealer", "@aislandart", "@EmanuelAlqm", "@bitpixi", "@mxjxn",
  "@bustosjp", "@pegasus_vfx", "@luciotamino", "@voxeliving", "@vessymink",
  "0x315a80ca55108a663ed7922d17dbc5b9c2ce8cf5",
  "0xd073dE676D8bd3A9ee680eC6960B7Bcff9E32293"
];

const institutionalSupporters = [
  "Grupo Investigação Filosófica", "UFOP", "NEPFIL/UFPEL"
];

export default function VirtualiaPage() {
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <main className="space-y-20 md:space-y-28 pb-20">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                Virtualia Magazine/Journal
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                Explorando as fronteiras entre arte, filosofia e tecnologia
                na era digital e descentralizada.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="https://www.virtualiajournal.com/index.php/home" target="_blank">
                    Acessar Journal <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://virtualiamagazine.blogspot.com/" target="_blank">
                    Acessar Magazine <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="publicacoes" className="container mx-auto px-6 scroll-mt-24">
         
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
               <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 md:text-right">
                    Virtualia Journal
                  </h2>
                  <div className="text-neutral-700 leading-relaxed space-y-4 md:text-right">
                    <p>
                      O Virtualia Journal é o periódico acadêmico oficial do GIF Labs, focado na publicação de pesquisas originais e inéditas que abordam os temas centrais da arte, filosofia e tecnologia, com ênfase especial nos contextos e problemáticas contemporâneas das tecnologias Web3, inteligência artificial, ética digital e epistemologia aplicada.
                    </p>
                    <p>
                      Voltado para um público acadêmico e profissional, o Virtualia Journal adota rigorosos critérios de avaliação por pares, assegurando a excelência e a relevância científica dos trabalhos publicados. O periódico congrega colaboradores afiliados a diversas universidades brasileiras e internacionais, consolidando-se como um veículo importante para a difusão do conhecimento filosófico e tecnológico na América Latina.
                    </p>
                    <p>
                      Além de artigos de pesquisa, o Virtualia Journal publica seções temáticas, traduções e debates críticos que ampliam o diálogo interdisciplinar entre filosofia, ciência e arte digital. O periódico está comprometido com as melhores práticas editoriais e com a promoção da diversidade epistemológica e cultural no âmbito das ciências humanas e tecnológicas.
                    </p>
                  </div>
               </div>
              <div className="mt-6 text-right">
                  <Button asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                      <Link href="https://www.virtualiajournal.com/" target="_blank">
                          Acessar Journal <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
               <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    Virtualia Magazine
                  </h2>
                  <div className="text-neutral-700 leading-relaxed space-y-4">
                    <p>
                      A Virtualia Magazine é uma publicação digital vinculada ao GIF Labs, dedicada à reflexão crítica e ao debate interdisciplinar nos campos da arte, filosofia e tecnologia contemporâneas. A revista busca articular perspectivas teóricas e práticas que dialoguem com os desafios e transformações trazidos pela cultura digital e pelas tecnologias emergentes, incluindo as plataformas Web3, a inteligência artificial e o metaverso.
                    </p>
                    <p>
                      Com periodicidade semestral, a Virtualia Magazine publica artigos, ensaios, entrevistas e resenhas elaborados por pesquisadores, artistas e pensadores vinculados a diversas instituições acadêmicas e culturais, compondo um espaço plural e inovador de circulação de ideias. Seu corpo editorial reúne especialistas nacionais e internacionais que garantem o rigor crítico e a diversidade de abordagens presentes na revista. A Virtualia Magazine integra-se a projetos de pesquisa e inovação desenvolvidos no âmbito do GIFLABS, fortalecendo a interlocução entre o campo acadêmico e as práticas artísticas contemporâneas, especialmente aquelas que envolvem tecnologias digitais avançadas e narrativas emergentes.
                    </p>
                  </div>
               </div>
              <div className="mt-6">
                  <Button asChild variant="outline">
                       <Link href="https://virtualiamagazine.blogspot.com/" target="_blank">
                          Acessar Magazine <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilares" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Nossos Princípios Editoriais
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  A Virtualia se baseia em quatro pilares que garantem a qualidade, a relevância e o impacto de nossas publicações.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <Feather className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Pesquisa Original</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Publicamos trabalhos inéditos que impulsionam o debate em arte, filosofia e tecnologia.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Debate Interdisciplinar</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Promovemos o diálogo entre diferentes áreas do conhecimento para gerar novas perspectivas.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Rigor Acadêmico</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Garantimos a qualidade de nossas publicações através de um criterioso processo de revisão por pares.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Inovação Editorial</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Exploramos formatos digitais e modelos de publicação que ampliam o alcance e o impacto da pesquisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section id="virtualia-equipe" className="container mx-auto px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">Equipe Editorial e Colaboradores</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
               A Virtualia é impulsionada por uma equipe dedicada de editores, um conselho editorial de especialistas e escritores permanentes que contribuem com suas diversas perspectivas. Conheça os indivíduos que dão vida à nossa revista e periódico.
            </p>
          </div>
          <div className="mt-16 max-w-6xl mx-auto">
            <StaffList />
          </div>
        </section>

        {/* Supporters Section */}
        <section id="apoiadores" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Nossos Apoiadores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-6 text-center">OG Supporters</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {ogSupporters.map((supporter, index) => {
                    if (supporter.startsWith('@')) {
                      const handle = supporter.substring(1);
                      return (
                        <Link
                          key={index}
                          href={`https://www.x.com/${handle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge variant="secondary" className="text-sm font-mono tracking-tight hover:bg-neutral-700 transition-colors">
                            {supporter}
                          </Badge>
                        </Link>
                      );
                    }
                    return (
                      <Badge key={index} variant="secondary" className="text-sm font-mono tracking-tight">
                        {supporter}
                      </Badge>
                    );
                  })}
                </div>
                <p className="text-center text-neutral-400 mt-4 text-xs max-w-md mx-auto">
                  Colecionadores que adquiriram a primeira edição da Virtualia, demonstrando confiança inicial em nosso projeto.
                </p>
              </div>
               <div>
                <h3 className="text-xl font-bold mb-6 text-center">Apoio Institucional</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {institutionalSupporters.map((supporter, index) => (
                    <Badge key={index} variant="outline" className="text-sm border-neutral-600 text-neutral-300">
                      {supporter}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 