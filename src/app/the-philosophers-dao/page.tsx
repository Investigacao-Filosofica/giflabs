import { ExternalLink, PlayCircle, Youtube, Mic, Clapperboard } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function ThePhilosophersDaoPage() {
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <PlayCircle className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                The Philosophers DAO
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                Produção e disseminação de conteúdos audiovisuais focados em arte, filosofia e tecnologia.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="https://www.youtube.com/@ThePhilosophersDAOpt" target="_blank">
                    <Youtube className="mr-2 h-5 w-5" />
                    Inscreva-se no Canal
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#conteudo">
                    Sobre o Canal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="conteudo" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  Diálogos sobre Arte, Filosofia e Tecnologia
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  O canal The Philosophers DAO é uma iniciativa vinculada ao GIF Labs dedicada à produção e disseminação de conteúdos audiovisuais focados em arte, filosofia e tecnologia. Com ênfase em vídeos de entrevistas, cursos, podcasts e debates temáticos, o canal promove o diálogo crítico e o aprofundamento das principais questões contemporâneas nesses campos.
                </p>
                <p>
                  Voltado para pesquisadores, estudantes e público interessado, The Philosophers DAO oferece uma plataforma estruturada para a troca de conhecimento entre especialistas nacionais e internacionais, abordando temas como inteligência artificial, ética digital, práticas artísticas digitais e governança descentralizada por meio das DAOs.
                </p>
                <p>
                  A curadoria acadêmica rigorosa garante a qualidade dos conteúdos, que complementam e ampliam as atividades do GIF Labs, conectando a comunidade acadêmica às novas formas de comunicação e aprendizado no ambiente digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="formatos" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Nossos Formatos
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  Produzimos uma variedade de conteúdos para aprofundar o debate e a disseminação do conhecimento.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <Mic className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Entrevistas e Debates</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Conversas com especialistas sobre temas emergentes na intersecção da filosofia com a tecnologia.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Clapperboard className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Cursos e Tutoriais</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Conteúdos didáticos sobre ferramentas, conceitos e práticas da Web3 e da arte digital.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <PlayCircle className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Podcasts</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    Análises aprofundadas e discussões sobre as últimas tendências e pesquisas acadêmicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 