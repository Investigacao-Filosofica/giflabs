"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, ExternalLink, GraduationCap, Library, Newspaper, PlayCircle } from "lucide-react"
import { useRef, useState } from "react"

import { Card } from "@/components/ui/card"

const projects = [
  {
    id: "serie-if",
    icon: <BookOpen className="text-neutral-900" size={32} />,
    title: "Série IF",
    description:
      "Pesquisa e traducao de verbetes da Stanford Encyclopedia of Philosophy e publicação na forma de livros de acesso gratuito pela UFPel.",
    link: "https://wp.ufpel.edu.br/nepfil/serie-investigacao-filosofica/",
    position: { top: "0%", left: "50%", x: "-50%" },
  },
  {
    id: "dao-channel",
    icon: <PlayCircle className="text-neutral-900" size={32} />,
    title: "Canal The Philosophers DAO",
    description: "Canal de youtube para divulgacao de vídeos e podcasts de interesse filosófico.",
    link: "https://www.youtube.com/@ThePhilosophersDAOpt",
    position: { top: "38%", right: "0%", y: "-50%" },
  },
  {
    id: "near-library",
    icon: <Library className="text-neutral-900" size={32} />,
    title: "Near Alexandria Library",
    description: "Biblioteca no Metaverso com os livros publicados pelo NEPFIL/UFPel.",
    link: "https://www.cryptovoxels.com/play?coords=SW@1789E,1180N",
    position: { bottom: "5%", right: "20%", x: "50%" },
  },
  {
    id: "virtualia",
    icon: <Newspaper className="text-neutral-900" size={32} />,
    title: "Virtualia Magazine/Journal",
    description: "Magazine and Academic Journal on Art, Technology, and Philosophy.",
    link: "https://www.virtualiajournal.com/",
    position: { bottom: "5%", left: "20%", x: "-50%" },
  },
  {
    id: "education-app",
    icon: <GraduationCap className="text-neutral-900" size={32} />,
    title: "Digital Education App",
    description:
      "Combinamos educação gamificada, certificação blockchain e curadoria colaborativa para criar um ecossistema de aprendizagem descentralizado, verificável e acessível.",
    link: "/digital-education-app",
    position: { top: "38%", left: "0%", y: "-50%" },
  },
]

// Mobile-specific component
function MobileProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-neutral-300">
            Desenvolvemos pesquisas filosóficas aplicadas às tecnologias digitais, com foco especial em blockchain,
            descentralização, inteligência artificial, comunicação digital, educação, publicação e processos editoriais.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="space-y-4">
            {projects.map((project) => (
              <motion.div key={project.id} layout>
                <Card
                  className="cursor-pointer overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800"
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </Card>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="-mt-2 overflow-hidden rounded-b-2xl bg-neutral-800"
                    >
                      <div className="p-6 pt-2">
                        <p className="mb-4 font-light leading-relaxed text-neutral-300">{project.description}</p>
                        <a
                          href={project.link}
                          target={project.link.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-white hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Visitar Projeto <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Desktop-specific component
function DesktopProjects() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const [hoveredProject, setHoveredProject] = useState<(typeof projects)[0] | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-50%"])
  const pentagramOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const pentagramScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1])

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="text-lg font-light leading-relaxed text-neutral-300">
            Desenvolvemos pesquisas filosóficas aplicadas às tecnologias digitais, com foco especial em blockchain,
            descentralização, inteligência artificial, comunicação digital, educação, publicação e processos editoriais.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: pentagramOpacity, scale: pentagramScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative h-[600px] w-full max-w-3xl">
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  className="pointer-events-none w-64 text-center"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <p className="font-light leading-relaxed text-neutral-300">{hoveredProject.description}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="absolute"
                style={project.position}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group block h-48 w-48"
                >
                  <Card className="flex h-full w-full items-center justify-center border border-transparent bg-transparent p-4 transition-colors duration-300 hover:border-neutral-400">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function ProjectsScrollytelling() {
  return (
    <section id="projetos" className="bg-neutral-900">
      {/* Mobile View: Rendered on small screens, hidden on medium and up */}
      <div className="block md:hidden">
        <MobileProjects />
      </div>

      {/* Desktop View: Hidden on small screens, rendered on medium and up */}
      <div className="hidden md:block">
        <DesktopProjects />
      </div>
    </section>
  )
} 