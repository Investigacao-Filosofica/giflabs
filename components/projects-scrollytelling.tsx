"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ExternalLink, GraduationCap, Library, Newspaper, PlayCircle } from "lucide-react"

const projects = [
  {
    id: "serie-if",
    icon: <BookOpen className="text-neutral-900" size={32} />,
    title: "Série IF",
    description: "Pesquisa e traducao de verbetes da Stanford Encyclopedia of Philosophy e publicação na forma de livros de acesso gratuito pela UFPel.",
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
    description: "Combinamos educação gamificada, certificação blockchain e curadoria colaborativa para criar um ecossistema de aprendizagem descentralizado, verificável e acessível.",
    link: "/digital-education-app",
    position: { top: "38%", left: "0%", y: "-50%" },
  },
]

// Mobile-specific component
function MobileProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projetos" className="bg-neutral-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight text-white">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed text-lg">
            Desenvolvemos pesquisas filosóficas aplicadas às tecnologias digitais, com foco especial em blockchain,
            descentralização, inteligência artificial, comunicação digital, educação, publicação e processos editoriais.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="space-y-4">
            {projects.map((project) => (
              <motion.div key={project.id} layout>
                <Card
                  className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                >
                  <div className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                      className="bg-neutral-800 rounded-b-2xl -mt-2 overflow-hidden"
                    >
                      <div className="p-6 pt-2">
                        <p className="text-neutral-300 font-light leading-relaxed mb-4">{project.description}</p>
                        <a
                          href={project.link}
                          target={project.link.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="font-medium text-white hover:underline inline-flex items-center"
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
    </section>
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
    <section ref={targetRef} id="projetos" className="bg-neutral-900 h-[300vh] relative">
      <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
        <motion.div style={{ opacity: textOpacity, y: textY }} className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight text-white">
            Nossos <span className="font-normal">Projetos</span>
          </h2>
          <p className="text-neutral-300 font-light leading-relaxed text-lg">
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
                  className="w-64 text-center pointer-events-none"
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
                  <p className="text-neutral-300 font-light leading-relaxed">{hoveredProject.description}</p>
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
                  className="block w-48 h-48 group"
                >
                  <Card className="bg-transparent border border-transparent hover:border-neutral-400 transition-colors duration-300 h-full w-full flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
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
    </section>
  )
}

export function ProjectsScrollytelling() {
  // We default to a placeholder state on the server and initial client render.
  const [renderMode, setRenderMode] = useState<"placeholder" | "mobile" | "desktop">("placeholder")

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    const checkWidth = () => {
      if (window.innerWidth < 768) {
        setRenderMode("mobile")
      } else {
        setRenderMode("desktop")
      }
    }

    // Set the initial render mode and add a listener for window resize.
    checkWidth()
    window.addEventListener("resize", checkWidth)

    // Cleanup the event listener when the component unmounts.
    return () => window.removeEventListener("resize", checkWidth)
  }, []) // The empty dependency array ensures this effect runs only once on mount.

  // Render the appropriate component based on the renderMode state.
  switch (renderMode) {
    case "mobile":
      return <MobileProjects />
    case "desktop":
      return <DesktopProjects />
    case "placeholder":
    default:
      // This placeholder prevents hydration mismatches and layout shifts.
      return <section id="projetos" className="bg-neutral-900 min-h-screen" />
  }
} 