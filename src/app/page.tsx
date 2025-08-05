"use client";

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext";
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

const iconMap = {
  GraduationCap,
  BookOpen,
  Newspaper,
  Archive,
  PlayCircle,
  Puzzle,
  Users,
  FileSignature,
  Briefcase,
  Palette,
  Database,
};

const projects = [
  {
    id: "education-app",
    iconName: "GraduationCap",
    link: "/digital-education-app",
  },
  {
    id: "serie-if",
    iconName: "BookOpen",
    link: "/serie-if",
  },
  {
    id: "virtualia",
    iconName: "Newspaper",
    link: "/virtualia",
  },
  {
    id: "arqueologia-digital",
    iconName: "Archive",
    link: "/arqueologia-digital",
  },
  {
    id: "dao-channel",
    iconName: "PlayCircle",
    link: "/the-philosophers-dao",
  },
  {
    id: "metaverso",
    iconName: "Puzzle",
    link: "/metaverso",
  },
];

const teamMembers = [
  {
    id: "rodrigo_cid",
    iconName: "Users",
    lattes: "http://lattes.cnpq.br/0847832636263404",
    github: "https://github.com/ThePhilosopherX",
    linkedin: "#",
    twitter: "https://x.com/ThePhilosopherX",
    badges: ["philosophy_science", "educational_technology"]
  },
  {
    id: "rafael_martins",
    iconName: "FileSignature",
    lattes: "http://lattes.cnpq.br/2938081719142401",
    github: "#",
    linkedin: "#",
    twitter: "#",
    badges: ["political_philosophy", "ethics", "academic_editor"]
  },
  {
    id: "roseline_crippa",
    iconName: "Briefcase",
    lattes: "http://lattes.cnpq.br/3386107553390218",
    github: "#",
    linkedin: "#",
    twitter: "#",
    badges: ["educational_management", "letters"]
  },
  {
    id: "mateus_rodrigues",
    iconName: "Palette",
    lattes: "#",
    github: "https://github.com/ctrlshiftOFF",
    linkedin: "#",
    twitter: "https://x.com/ctrlshiftOFF",
    badges: ["digital_art", "web3", "frontend"]
  },
  {
    id: "alexandre_eduardo",
    iconName: "Database",
    lattes: "#",
    github: "https://github.com/aleedu-art",
    linkedin: "#",
    twitter: "https://x.com/aleedu_avelino",
    badges: ["backend", "data_architecture", "web3"]
  }
];

function Projects() {
  const { t } = useLanguage();
  
  return (
    <section id="projetos" className="bg-neutral-900 py-24 sm:py-32 scroll-mt-18">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("home.projects.title")}
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
          {t("home.projects.description")}
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
                    {React.createElement(iconMap[project.iconName as keyof typeof iconMap], { 
                      size: 40, 
                      className: "text-neutral-900" 
                    })}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{t(`home.projects.cards.${project.id.replace('-', '_')}.title`)}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-neutral-400">{t(`home.projects.cards.${project.id.replace('-', '_')}.description`)}</p>
                                     <div className="mt-6 flex items-center font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     <span>{t("home.projects.access_project")}</span>
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
  const { t } = useLanguage();
  
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
      <section id="home" className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-32">
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-4xl mx-auto`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-light leading-tight tracking-tight">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.hero.description")}
            </p>
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium"
            >
              <Link href="/#projetos">{t("home.hero.cta")}</Link>
            </Button>
          </div>

          <div className="mt-20 opacity-60">
            <ChevronDown className="mx-auto text-neutral-600 animate-pulse" size={24} />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-white scroll-mt-19">
        <div className="container mx-auto px-6">
          <div>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
                {t("home.about.title")}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed text-lg">
                {t("home.about.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">{t("home.about.mission.title")}</h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      {t("home.about.mission.description")}
                      </p>
                    </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">{t("home.about.vision.title")}</h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      {t("home.about.vision.description")}
                      </p>
                    </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Gem className="w-8 h-8 text-neutral-700" />
                  </div>
                    </div>
                <h3 className="text-xl font-bold mb-3">{t("home.about.values.title")}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          {t("home.about.values.transparency")}
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          {t("home.about.values.inclusion")}
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          {t("home.about.values.collaboration")}
                        </Badge>
                        <Badge variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs px-3 py-1">
                          {t("home.about.values.responsible_innovation")}
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
      <section id="equipe" className="py-24 bg-white scroll-mt-19">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-20`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
              {t("home.team.title")}
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              {t("home.team.description")}
            </p>
          </div>

                     <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 max-w-7xl mx-auto`}>
             {teamMembers.map((member) => (
               <div key={member.id} className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
                 <div className="p-4 text-center flex flex-col flex-grow">
                   <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                     {React.createElement(iconMap[member.iconName as keyof typeof iconMap], { 
                       size: 32, 
                       className: "text-neutral-600" 
                     })}
                   </div>
                   <h3 className="text-xl font-bold mb-2">{t(`home.team.members.${member.id}.name`)}</h3>
                   <p className="text-neutral-600 mb-3 font-medium text-base">{t(`home.team.members.${member.id}.role`)}</p>
                   <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                     {t(`home.team.members.${member.id}.description`)}
                   </p>
                   <div className="mt-auto pt-4">
                     <div className="flex flex-wrap gap-2 justify-center">
                       {member.badges.map((badge) => (
                         <Badge key={badge} variant="outline" className="border-neutral-300 text-neutral-700 bg-neutral-50 text-xs">
                           {t(`home.team.members.${member.id}.badges.${badge}`)}
                         </Badge>
                       ))}
                     </div>
                     <div className="mt-4 flex justify-center gap-4">
                       {member.lattes !== "#" && (
                         <a
                           href={member.lattes}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-neutral-500 hover:text-neutral-900 transition-colors"
                         >
                           <GraduationCap size={20} />
                         </a>
                       )}
                       {member.github !== "#" && (
                         <a
                           href={member.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-neutral-500 hover:text-neutral-900 transition-colors"
                         >
                           <Github size={20} />
                         </a>
                       )}
                       {member.linkedin !== "#" && (
                         <a
                           href={member.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-neutral-500 hover:text-neutral-900 transition-colors"
                         >
                           <Linkedin size={20} />
                         </a>
                       )}
                       {member.twitter !== "#" && (
                         <a
                           href={member.twitter}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-neutral-500 hover:opacity-75 transition-opacity"
                         >
                           <Image src="/images/logos/x-logo.png" alt="X logo" width={20} height={20} />
                         </a>
                       )}
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  )
}
