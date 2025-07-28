import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  ChevronDown,
  Eye,
  FileSignature,
  Gem,
  Github,
  GraduationCap,
  Mail,
  Menu,
  Palette,
  Rocket,
  Users,
  X,
  BookOpen,
  PlayCircle,
  Library,
  Newspaper,
  Database,
  ArrowUpRight,
  Archive,
  Puzzle,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: "education-app",
    icon: <GraduationCap className="text-neutral-900" size={32} />,
    title: "Digital Education App",
    description:
      "Combinamos educação gamificada, certificação blockchain e curadoria colaborativa para criar um ecossistema de aprendizagem descentralizado, verificável e acessível.",
    link: "/digital-education-app",
  },
  {
    id: "serie-if",
    icon: <BookOpen className="text-neutral-900" size={32} />,
    title: "Série IF",
    description:
      "Pesquisa e traducao de verbetes da Stanford Encyclopedia of Philosophy e publicação na forma de livros de acesso gratuito pela UFPel.",
    link: "/serie-if",
  },
  {
    id: "virtualia",
    icon: <Newspaper className="text-neutral-900" size={32} />,
    title: "Virtualia Magazine/Journal",
    description: "Revista e Periódico Acadêmico sobre Arte, Tecnologia e Filosofia.",
    link: "/virtualia",
  },
  {
    id: "arqueologia-digital",
    icon: <Archive className="text-neutral-900" size={32} />,
    title: "Arqueologia Digital",
    description:
      "Recuperação e preservação do periódico acadêmico 'Investigação Filosófica' utilizando tecnologias de armazenamento descentralizado como Arweave e blockchain Base.",
    link: "/arqueologia-digital",
  },
  {
    id: "dao-channel",
    icon: <PlayCircle className="text-neutral-900" size={32} />,
    title: "Canal The Philosophers DAO",
    description: "Canal de youtube para divulgacao de vídeos e podcasts de interesse filosófico.",
    link: "https://www.youtube.com/@ThePhilosophersDAOpt",
  },
  {
    id: "metaverso",
    icon: <Puzzle className="text-neutral-900" size={32} />,
    title: "Metaverso",
    description:
      "Exploramos a estetica, a etica e as narrativas de ambientes digitais com jogos experimentais, galerias de arte e a biblioteca Near Alexandria.",
    link: "/metaverso",
  },
];

function Projects() {
  return (
    <section id="projetos" className="bg-neutral-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
          Desenvolvemos pesquisas filosóficas, artísticas e culturais aplicadas às tecnologias digitais, 
          com foco especial em blockchain, descentralização, inteligência artificial, comunicação digital, 
          educação, publicação e produção editorial e cultural.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="bg-transparent hover:bg-neutral-800 transition-colors duration-200 flex flex-col rounded-lg h-full">
                <div className="p-8 text-center flex flex-col flex-grow">
                  <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 mx-auto">
                    {React.cloneElement(project.icon, { size: 40, className: "text-neutral-900" })}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-neutral-400">{project.description}</p>
                  <div className="mt-6 flex items-center font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Acessar Projeto</span>
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function GifLabsSite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Subtle Animated Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-4xl mx-auto`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-light leading-tight tracking-tight">
              Grupo Investigação Filosófica
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Desenvolvendo a educação crítica para um mundo descentralizado.
            </p>
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium"
            >
              <Link href="/#projetos">Conheça nossos projetos</Link>
            </Button>
          </div>

          <div className="mt-20 opacity-60">
            <ChevronDown className="mx-auto text-neutral-600 animate-pulse" size={24} />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
                Sobre o <span className="text-neutral-900 font-normal">GIFLABS</span>
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                O GIFLABS é um grupo interdisciplinar sediado na Universidade Federal de Ouro Preto, dedicado à
                investigação filosófica aplicada às artes, à tecnologia e à educação. O grupo se posiciona como um espaço aberto
                ao diálogo e ao desenvolvimento crítico frente às transformações digitais contemporâneas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      Promover investigação filosófica e artística associada ao desenvolvimento tecnológico para a 
                      educação, fomentando práticas pedagógicas inclusivas, críticas e colaborativas.
                      </p>
                    </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      Ser reconhecido como referência em pesquisa e desenvolvimento de soluções educacionais integradas às tecnologias
                       digitais emergentes, com destaque para blockchain, Web3 e arquiteturas descentralizadas, e em produções 
                       editoriais acadêmicas e culturais de alta qualidade.
                      </p>
                    </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Gem className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          Transparência
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          Inclusão
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          Colaboração
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          Inovação Responsável
                        </Badge>
                      </div>
                    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <Projects />

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
              Nossa <span className="text-neutral-900 font-normal">Equipe</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Pesquisadores dedicados à intersecção entre filosofia, tecnologia, artes e educação.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 max-w-7xl mx-auto`}>
            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Users className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Prof. Dr. Rodrigo Cid</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Líder</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Pesquisador em metafísica da ciência, filosofia das leis da natureza, e tecnologias digitais e
                  editoriais para a educação e a governança. Responsável pela definição estratégica do GIFLABS.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Filosofia da Ciência
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Tecnologia Educacional
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="http://lattes.cnpq.br/0847832636263404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <GraduationCap size={20} />
                    </a>
                    <a
                      href="https://github.com/ThePhilosopherX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://x.com/ThePhilosopherX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <FileSignature className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Prof. Dr. Rafael Martins</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Editor Acadêmico</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Professor de Filosofia na UNIMAX e UNIFAJ, pesquisador em ética, filosofia política e filosofia
                  aplicada. Editor da Virtualia Journal e co-coordenador da Série Investigação Filosófica.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Filosofia Política
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Ética
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Editor Acadêmico
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="http://lattes.cnpq.br/2938081719142401"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <GraduationCap size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Roseline Crippa</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Secretária-Executiva</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Vice-diretora escolar, formada em Letras e estudante de Especialização em Educação a Distância pela UFF.
                  Responsável pelas funções administrativas e organizacionais do GIFLABS.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Gestão Educacional
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Letras
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="http://lattes.cnpq.br/3386107553390218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <GraduationCap size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Palette className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Mateus Rodrigues</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Artista Visual e Desenvolvedor Frontend</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Pesquisador em arte digital e modelos educacionais descentralizados, responsável pelo desenvolvimento de projetos experimentais do GIFLABS na interface entre Web3, educação e arte.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Arte Digital
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Web3
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Frontend
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="https://github.com/ctrlshiftOFF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://x.com/ctrlshiftOFF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Database className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Alexandre Eduardo</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Desenvolvedor Backend</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Pesquisador em arquitetura de dados e sistemas descentralizados, responsável pela infraestrutura de análise de dados do GIFLABS e sua integração com protocolos Web3.
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Backend
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Arquitetura de Dados
                    </Badge>
                    <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                      Web3
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="https://github.com/aleedu-art"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://x.com/aleedu_avelino"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:opacity-75 transition-opacity"
                    >
                      <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
