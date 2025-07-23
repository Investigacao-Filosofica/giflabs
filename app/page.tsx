"use client"

import { useState, useEffect, useRef } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  ChevronDown,
  Eye,
  FileSignature,
  Gem,
  Github,
  Globe,
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
  ExternalLink,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

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
    link: "https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/",
  },
  {
    id: "dao-channel",
    icon: <PlayCircle className="text-neutral-900" size={32} />,
    title: "Canal The Philosophers DAO",
    description: "Canal de youtube para divulgacao de vídeos e podcasts de interesse filosófico.",
    link: "https://www.youtube.com/@ThePhilosophersDAOpt",
  },
  {
    id: "near-library",
    icon: <Library className="text-neutral-900" size={32} />,
    title: "Near Alexandria Library",
    description: "Biblioteca no Metaverso com os livros publicados pelo NEPFIL/UFPel.",
    link: "https://www.cryptovoxels.com/play?coords=SW@1789E,1180N",
  },
  {
    id: "virtualia",
    icon: <Newspaper className="text-neutral-900" size={32} />,
    title: "Virtualia Magazine/Journal",
    description: "Magazine and Academic Journal on Art, Technology, and Philosophy.",
    link: "https://www.virtualiajournal.com/",
  },
]

function Projects() {
  return (
    <section id="projetos" className="bg-neutral-900 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Desenvolvemos pesquisas filosóficas aplicadas às tecnologias digitais, com foco especial em blockchain,
            descentralização, inteligência artificial, comunicação digital, artes, educação, publicação e processos editoriais.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="flex h-full flex-col items-center border border-transparent bg-neutral-800/50 p-8 text-center transition-all duration-300 hover:border-white/10 hover:bg-neutral-800">
                <div className="mb-6 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100">
                  {React.cloneElement(project.icon, { size: 40, className: "text-neutral-900" })}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="flex-grow text-sm leading-relaxed text-neutral-400">{project.description}</p>
                <div className="mt-6 flex items-center font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Acessar Projeto</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => {
      if (section.id) {
        observer.observe(section)
      }
    })
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const isVisible = (id: string) => visibleElements.has(id)

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
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-neutral-900 tracking-tight">GIFLABS</div>
              <div className="hidden md:block text-sm text-neutral-600 font-light">Filosofia, Tecnologia, Artes e Educação</div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("equipe")}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200 font-medium"
              >
                Contato
              </button>
              <Button
                className="bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-200 border-0"
                onClick={() => window.open("https://www.virtualiajournal.com/", "_blank")}
              >
                Acesse a Web3
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-neutral-700" /> : <Menu className="text-neutral-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection("home")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection("sobre")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="text-left text-neutral-700 hover:text-neutral-900 font-medium"
                >
                  Projetos
                </button>
                <button onClick={() => scrollToSection("equipe")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                  Equipe
                </button>
                <button onClick={() => scrollToSection("contato")} className="text-left text-neutral-700 hover:text-neutral-900 font-medium">
                  Contato
                </button>
                <Button
                  className="bg-neutral-900 hover:bg-neutral-800 text-white w-full border-0"
                  onClick={() => window.open("https://www.virtualiajournal.com/", "_blank")}
                >
                  Acesse a Web3
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible('home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-light leading-tight tracking-tight">
              Grupo Investigação Filosófica
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Desenvolvendo a educação crítica para um mundo descentralizado.
            </p>
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium"
              onClick={() => scrollToSection("projetos")}
            >
              Conheça nossos projetos
            </Button>
          </div>

          <div className="mt-20 opacity-60">
            <ChevronDown className="mx-auto text-neutral-600 animate-pulse" size={24} />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible("sobre") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
                Sobre o <span className="text-neutral-900 font-normal">GIFLABS</span>
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                O GIFLABS é um grupo interdisciplinar sediado na Universidade Federal de Ouro Preto, dedicado à
                investigação filosófica aplicada à tecnologia, às artes e à educação. O grupo se posiciona como um espaço aberto
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
                  Promover investigação filosófica associada ao desenvolvimento tecnológico para as artes e a educação, fomentando
                  práticas pedagógicas inclusivas, críticas e colaborativas.
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
                  Ser reconhecido como referência em pesquisa e desenvolvimento de soluções educacionais integradas às
                  tecnologias digitais emergentes, com destaque para blockchain, Web3 e arquiteturas descentralizadas.
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
      <section id="equipe" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('equipe') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
              Nossa <span className="text-neutral-900 font-normal">Equipe</span>
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Pesquisadores dedicados à intersecção entre filosofia, tecnologia, artes e educação.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible('equipe') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
              <div className="p-4 text-center flex flex-col flex-grow">
                <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Users className="text-neutral-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Prof. Dr. Rodrigo Cid</h3>
                <p className="text-neutral-600 mb-3 font-medium text-base">Líder</p>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm flex-grow">
                  Pesquisador em metafísica da ciência, filosofia das leis da natureza, e tecnologias digitais e
                  editoriais para a educação e a governança. Responsável pela definição estratégica do GIFLABS.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                    Filosofia da Ciência
                  </Badge>
                  <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                    Tecnologia Educacional
                  </Badge>
                </div>
                <div className="mt-6 flex justify-center gap-4">
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
                    href="https://x.com/ThePhilosopherX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:opacity-75 transition-opacity"
                  >
                    <Image src="/logo-black.png" alt="X logo" width={20} height={20} />
                  </a>
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
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm flex-grow">
                  Vice-diretora escolar, formada em Letras e estudante de Especialização em Educação a Distância pela UFF.
                  Responsável pelas funções administrativas e organizacionais do GIFLABS, com papel central na captação
                  de recursos e no apoio institucional ao grupo.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                    Gestão Educacional
                  </Badge>
                  <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                    Letras
                  </Badge>
                </div>
                <div className="mt-6 flex justify-center gap-4">
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
                    <Image src="/logo-black.png" alt="X logo" width={20} height={20} />
                  </a>
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
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm flex-grow">
                  Professor de Filosofia na UNIMAX e UNIFAJ, pesquisador em ética, filosofia política e filosofia
                  aplicada. Editor da Virtualia Journal e co-coordenador da Série Investigação Filosófica.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
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
                <div className="mt-6 flex justify-center gap-4">
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
                    <Image src="/logo-black.png" alt="X logo" width={20} height={20} />
                  </a>
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
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm flex-grow">
                  Pesquisador em arte digital e modelos educacionais descentralizados, responsável pelo desenvolvimento de projetos experimentais do GIFLABS na interface entre Web3, educação e arte.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
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
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="https://github.com/ctrlshiftOFF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://x.com/ctrlshiftOFF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:opacity-75 transition-opacity"
                  >
                    <Image src="/logo-black.png" alt="X logo" width={20} height={20} />
                  </a>
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
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm flex-grow">
                  Especialista em arquitetura de dados e sistemas descentralizados, responsável pela infraestrutura de análise de dados do GIFLABS e sua integração com protocolos Web3.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
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
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="https://github.com/ThePhilosopherX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://x.com/ThePhilosopherX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:opacity-75 transition-opacity"
                  >
                    <Image src="/logo-black.png" alt="X logo" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-light tracking-tight">
              <span className="text-white font-normal">Contato</span>
            </h2>
            <p className="text-neutral-300 max-w-3xl font-light leading-relaxed text-sm">
              Entre em contato conosco para colaborações, pesquisas ou mais informações sobre nossos projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-xl font-bold mb-4 font-light tracking-tight text-white">GIFLABS</div>
              <p className="text-neutral-300 mb-2 font-light text-sm">Grupo de Pesquisa em Investigação Filosófica e Artes</p>
              <p className="text-neutral-300 font-light text-sm">Universidade Federal de Ouro Preto (UFOP)</p>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 font-light text-white">Informações de Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="mr-3 text-neutral-400" size={16} />
                  <a href="mailto:rodrigorlcid@gmail.com" className="text-neutral-300 hover:text-white transition-colors font-light text-sm">
                    rodrigorlcid@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-3 text-neutral-400" size={16} />
                  <a
                    href="https://www.virtualiajournal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors font-light text-sm"
                  >
                    Virtualia Magazine
                  </a>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="mr-3 text-neutral-400" size={16} />
                  <a
                    href="http://dgp.cnpq.br/dgp/espelhogrupo/513418"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-white transition-colors font-light text-sm"
                  >
                    Grupo registrado no CNPq
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-4 font-light text-white">Áreas de Pesquisa</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  Filosofia
                </Badge>
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  Web3
                </Badge>
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  Educação
                </Badge>
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  Blockchain
                </Badge>
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  IA
                </Badge>
                <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                  Arte Digital
                </Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
            <p className="text-neutral-400 font-light text-sm mb-3">"Pensar é revolucionário."</p>
            <p className="text-neutral-500 text-xs font-light">
              © {new Date().getFullYear()} GIFLABS - Grupo Investigação Filosófica e Artes vinculado a Universidade Federal de Ouro Preto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
