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
  BookOpen,
  PlayCircle,
  Library,
  Newspaper,
  Database,
  ArrowUpRight,
  Archive,
  Puzzle,
  Linkedin,
  Globe,
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
  Globe,
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
    id: "literatura",
    iconName: "BookOpen",
    link: "/literatura",
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
  {
    id: "internacionalizacao",
    iconName: "Globe",
    link: "/internacionalizacao",
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
    badges: ["educational_management", "letters", "distance_education"]
  },
  {
    id: "mateus_rodrigues",
    iconName: "Palette",
    lattes: "http://lattes.cnpq.br/0000000000000000",
    github: "https://github.com/ctrlshiftOFF",
    linkedin: "#",
    twitter: "https://x.com/ctrlshiftOFF",
    badges: ["digital_art", "web3", "frontend"]
  }
];

// Lista completa da rede GIFLABS organizada por categorias
const networkMembers = {
  researchers: [
    { name: "Alan Renê Maciel Antezana", link: "http://dgp.cnpq.br/dgp/espelhorh/0057590311" },
    { name: "Alison Vander Mandeli", link: "http://dgp.cnpq.br/dgp/espelhorh/0038602628" },
    { name: "Allan Josué Vieira", link: "http://dgp.cnpq.br/dgp/espelhorh/0053213556" },
    { name: "Aluízio de Araújo Couto Júnior", link: "http://dgp.cnpq.br/dgp/espelhorh/0052674487" },
    { name: "Amanda Sayonara Fernandes Prazeres", link: "http://dgp.cnpq.br/dgp/espelhorh/[ID_DO_LATTES]" },
    { name: "Ana Rieger Schmidt", link: "http://dgp.cnpq.br/dgp/espelhorh/0006190111" },
    { name: "Ana Rita Nicoliello Lara Leite", link: "http://dgp.cnpq.br/dgp/espelhorh/0111760232" },
    { name: "Annelyze de Araújo Reis", link: "http://dgp.cnpq.br/dgp/espelhorh/0123324920" },
    { name: "Ariadne Fernandes Lacerda", link: "http://dgp.cnpq.br/dgp/espelhorh/0162521049" },
    { name: "Ariana Romão dos Reis", link: "http://dgp.cnpq.br/dgp/espelhorh/0115928774" },
    { name: "Artur Sartori Kon", link: "http://dgp.cnpq.br/dgp/espelhorh/0039918793" },
    { name: "Benedito da Conceição Monteiro Neto", link: "http://dgp.cnpq.br/dgp/espelhorh/0191567124" },
    { name: "Bruna Leticia Rosário da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0209815329" },
    { name: "Bruna Schneid da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0137802897" },
    { name: "Bruno Aislã Gonçalves dos Santos", link: "http://dgp.cnpq.br/dgp/espelhorh/0034453466" },
    { name: "Caio Cézar Silva dos Santos", link: "http://dgp.cnpq.br/dgp/espelhorh/0344629228" },
    { name: "Camila de Souza Ezídio", link: "http://dgp.cnpq.br/dgp/espelhorh/0042873134" },
    { name: "Camila Kulkamp", link: "http://dgp.cnpq.br/dgp/espelhorh/0100101178" },
    { name: "Camila Palhares Barbosa", link: "http://dgp.cnpq.br/dgp/espelhorh/0057678871" },
    { name: "Carmel da Silva Ramos", link: "http://dgp.cnpq.br/dgp/espelhorh/0055242553" },
    { name: "Cesar Augusto Mathias de Alencar", link: "http://dgp.cnpq.br/dgp/espelhorh/0044803923" },
    { name: "César Frederico dos Santos", link: "http://dgp.cnpq.br/dgp/espelhorh/0050459830" },
    { name: "Daniel Alves da Silva Lopes Diniz", link: "http://dgp.cnpq.br/dgp/espelhorh/0051118068" },
    { name: "Daniel Schiochett", link: "http://dgp.cnpq.br/dgp/espelhorh/0036923648" },
    { name: "Daniela Moura Soares", link: "http://dgp.cnpq.br/dgp/espelhorh/0043631207" },
    { name: "Deivide Garcia da Silva Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0036347787" },
    { name: "Delvair Custodio Moreira", link: "http://dgp.cnpq.br/dgp/espelhorh/0043631207" },
    { name: "Desiderio Orlando Figueiredo Murcho", link: "http://dgp.cnpq.br/dgp/espelhorh/0036426083" },
    { name: "Diego Pinheiro Fernandes", link: "http://dgp.cnpq.br/dgp/espelhorh/0034946390" },
    { name: "Diego Rodstein Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0038507064" },
    { name: "Ederson Safra Melo", link: "http://dgp.cnpq.br/dgp/espelhorh/0044656912" },
    { name: "Eduardo Ruttke von Saltiél", link: "http://dgp.cnpq.br/dgp/espelhorh/0013416570" },
    { name: "Elan Marinho", link: "http://dgp.cnpq.br/dgp/espelhorh/0165414324" },
    { name: "Evelyn Fernandes Erickson", link: "http://dgp.cnpq.br/dgp/espelhorh/0052398528" },
    { name: "Everton Miguel Puhl Maciel", link: "http://dgp.cnpq.br/dgp/espelhorh/0043187846" },
    { name: "Felipe Carvalho Novaes", link: "http://dgp.cnpq.br/dgp/espelhorh/0107730642" },
    { name: "Fernando Tôrres Pacheco", link: "http://dgp.cnpq.br/dgp/espelhorh/0036465747" },
    { name: "Flávio Vieira Curvello", link: "http://dgp.cnpq.br/dgp/espelhorh/0040925315" },
    { name: "Francisco Guerra Ferraz", link: "http://dgp.cnpq.br/dgp/espelhorh/0036904309" },
    { name: "Gabriel Geller Xavier", link: "http://dgp.cnpq.br/dgp/espelhorh/0033198837" },
    { name: "Geraldo Gonçalves Delgado Neto", link: "http://dgp.cnpq.br/dgp/espelhorh/0008955670" },
    { name: "Gisele Dalva Secco", link: "http://dgp.cnpq.br/dgp/espelhorh/0008328625" },
    { name: "Guilherme Araújo Cardoso", link: "http://dgp.cnpq.br/dgp/espelhorh/0004607813" },
    { name: "Guilherme da Costa Assunção Cecílio", link: "http://dgp.cnpq.br/dgp/espelhorh/0030802377" },
    { name: "Henrique Iwao Jardim da Silveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0024525871" },
    { name: "Iago Pereira da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0210548193" },
    { name: "Ilze Zirbel", link: "http://dgp.cnpq.br/dgp/espelhorh/0002411296" },
    { name: "Jaaziel de Carvalho Costa", link: "http://dgp.cnpq.br/dgp/espelhorh/0018414834" },
    { name: "Jerry Luiz Soares", link: "http://dgp.cnpq.br/dgp/espelhorh/0049166018" },
    { name: "Jéssica Gonçalves Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0305534670" },
    { name: "Jéssica Kellen Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0081716656" },
    { name: "Jorge Benedito de Freitas Teodoro", link: "http://dgp.cnpq.br/dgp/espelhorh/0047843390" },
    { name: "José Leonardo Annunziato Ruivo", link: "http://dgp.cnpq.br/dgp/espelhorh/0004381378" },
    { name: "Juliano Santos do Carmo", link: "http://dgp.cnpq.br/dgp/espelhorh/0013373951" },
    { name: "Kariane Marques da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0049984160" },
    { name: "Katarina Ribeiro Peixoto", link: "http://dgp.cnpq.br/dgp/espelhorh/0009937552" },
    { name: "Kherian Galvão Cesar Gracher", link: "http://dgp.cnpq.br/dgp/espelhorh/0040709612" },
    { name: "Laura Elizia Haubert", link: "http://dgp.cnpq.br/dgp/espelhorh/0094704333" },
    { name: "Lauro de Matos Nunes Filho", link: "http://dgp.cnpq.br/dgp/espelhorh/0032846223" },
    { name: "Letícia Palazzo Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0236229591" },
    { name: "Liszt Vianna Neto", link: "http://dgp.cnpq.br/dgp/espelhorh/0021358168" },
    { name: "Lorrany de Paula Carvalho", link: "http://dgp.cnpq.br/dgp/espelhorh/0117826685" },
    { name: "Luan Rafael Marques de Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0166685151" },
    { name: "Lucas Nascimento Machado", link: "http://dgp.cnpq.br/dgp/espelhorh/0041738098" },
    { name: "Luciane Luisa Lindenmeyer", link: "http://dgp.cnpq.br/dgp/espelhorh/0054968577" },
    { name: "Luciano Carlos Cunha", link: "http://dgp.cnpq.br/dgp/espelhorh/0037461338" },
    { name: "Luisa Luze Brum Genuncio", link: "http://dgp.cnpq.br/dgp/espelhorh/0150464061" },
    { name: "Luiz Helvécio Marques Segundo", link: "http://dgp.cnpq.br/dgp/espelhorh/0046364323" },
    { name: "Mahan Vaz Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0093573880" },
    { name: "Marcus Sacrini Ayres Ferraz", link: "http://dgp.cnpq.br/dgp/espelhorh/0003134318" },
    { name: "Maria Amélia Reis de Castro Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0206247230" },
    { name: "Maria Carolina Mendonça de Resende", link: "http://dgp.cnpq.br/dgp/espelhorh/0057734003" },
    { name: "Maria Helena Silva Soares", link: "http://dgp.cnpq.br/dgp/espelhorh/0038930625" },
    { name: "Mariana Kuhn de Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0048214990" },
    { name: "Mariane Farias de Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0057407991" },
    { name: "Mário Nogueira de Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0000999954" },
    { name: "Matheus Oliva da Costa", link: "http://dgp.cnpq.br/dgp/espelhorh/0045607133" },
    { name: "Maurício de Assis Reis", link: "http://dgp.cnpq.br/dgp/espelhorh/0033938040" },
    { name: "Mitieli Seixas da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0004675096" },
    { name: "Nádia Junqueira Ribeiro", link: "http://dgp.cnpq.br/dgp/espelhorh/0046483373" },
    { name: "Natalia Mendes Teixeira", link: "http://dgp.cnpq.br/dgp/espelhorh/0106733001" },
    { name: "Nilo Gelais Costa Junior", link: "http://dgp.cnpq.br/dgp/espelhorh/0111378729" },
    { name: "Paloma de Souza Xavier", link: "http://dgp.cnpq.br/dgp/espelhorh/0217428630" },
    { name: "Pâmela de Rezende Côrtes", link: "http://dgp.cnpq.br/dgp/espelhorh/0031200427" },
    { name: "Patricia Ketzer", link: "http://dgp.cnpq.br/dgp/espelhorh/0031200427" },
    { name: "Pedro Falcão Pricladnitzky", link: "http://dgp.cnpq.br/dgp/espelhorh/0032475217" },
    { name: "Pedro Luiz Caetano Filho", link: "http://dgp.cnpq.br/dgp/espelhorh/0003830985" },
    { name: "Pedro Merlussi", link: "http://dgp.cnpq.br/dgp/espelhorh/0037448307" },
    { name: "Plínio Marcos Tsai", link: "http://dgp.cnpq.br/dgp/espelhorh/0114499500" },
    { name: "Rafael dos Santos Ongaratto", link: "http://dgp.cnpq.br/dgp/espelhorh/0225094010" },
    { name: "Rafael Martins", link: "http://dgp.cnpq.br/dgp/espelhorh/0005967376" },
    { name: "Rafael Sellamano Silva Pereira", link: "http://dgp.cnpq.br/dgp/espelhorh/0112805868" },
    { name: "Ramiro de Ávila Peres", link: "http://dgp.cnpq.br/dgp/espelhorh/0018543405" },
    { name: "Renata Ramos da Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0037308246" },
    { name: "Ricardo Miranda Nachmanowicz", link: "http://dgp.cnpq.br/dgp/espelhorh/0033126704" },
    { name: "Roberta Kelly Soromenho Nicolete", link: "http://dgp.cnpq.br/dgp/espelhorh/0012989746" },
    { name: "Rodrigo Alexandre de Figueiredo", link: "http://dgp.cnpq.br/dgp/espelhorh/0034442170" },
    { name: "Rodrigo Freitas Costa Canal", link: "http://dgp.cnpq.br/dgp/espelhorh/0003462633" },
    { name: "Rodrigo Jungmann de Castro", link: "http://dgp.cnpq.br/dgp/espelhorh/0000914983" },
    { name: "Rodrigo Pinto de Brito", link: "http://dgp.cnpq.br/dgp/espelhorh/0042566657" },
    { name: "Rodrigo Reis Lastra Cid", link: "http://dgp.cnpq.br/dgp/espelhorh/0035282150" },
    { name: "Rosi Leny Morokawa", link: "http://dgp.cnpq.br/dgp/espelhorh/0150583206" },
    { name: "Sagid Salles", link: "http://dgp.cnpq.br/dgp/espelhorh/0039418308" },
    { name: "Sarah Bonfim Matos Nunes", link: "http://dgp.cnpq.br/dgp/espelhorh/0187231397" },
    { name: "Sérgio Farias de Souza Filho", link: "http://dgp.cnpq.br/dgp/espelhorh/0035094451" },
    { name: "Sérgio Ricardo Neves de Miranda", link: "http://dgp.cnpq.br/dgp/espelhorh/0009586407" },
    { name: "Silvio Kavetski", link: "http://dgp.cnpq.br/dgp/espelhorh/0052016005" },
    { name: "Tamires Dal Magro", link: "http://dgp.cnpq.br/dgp/espelhorh/0043501133" },
    { name: "Theo Machado Fellows", link: "http://dgp.cnpq.br/dgp/espelhorh/0041132912" },
    { name: "Tiago Luís Teixeira de Oliveira", link: "http://dgp.cnpq.br/dgp/espelhorh/0037825828" },
    { name: "Veronica de Souza Campos", link: "http://dgp.cnpq.br/dgp/espelhorh/0161486762" }
  ],
  students: [
    { name: "Andrea Maria Cordeiro", link: "http://dgp.cnpq.br/dgp/espelhorh/0040077667" },
    { name: "Atticus Macêdo", link: "http://dgp.cnpq.br/dgp/espelhorh/0345133455" },
    { name: "Bárbara Mól Gonçalves", link: "http://dgp.cnpq.br/dgp/espelhorh/0035380462" },
    { name: "Bianca de Oliveira Andrade", link: "http://dgp.cnpq.br/dgp/espelhorh/0429619804" },
    { name: "César Henrique Luz Barbosa", link: "http://dgp.cnpq.br/dgp/espelhorh/0418928908" },
    { name: "Daniel Ferreira Beckman", link: "http://dgp.cnpq.br/dgp/espelhorh/0267685432" },
    { name: "Daniel Silva Castelani", link: "http://dgp.cnpq.br/dgp/espelhorh/0429672250" },
    { name: "Daniel Soares Saldanha", link: "http://dgp.cnpq.br/dgp/espelhorh/0208252347" },
    { name: "Deir da Silva Machado Junior", link: "http://dgp.cnpq.br/dgp/espelhorh/0269311912" },
    { name: "Diego Aurélio Viana Kelly", link: "http://dgp.cnpq.br/dgp/espelhorh/0269679146" },
    { name: "Geovanna Lopes Santos", link: "http://dgp.cnpq.br/dgp/espelhorh/0429214936" },
    { name: "João Victor Almeida Nascimento", link: "http://dgp.cnpq.br/dgp/espelhorh/0429662360" },
    { name: "Katia Suzue Melo", link: "http://dgp.cnpq.br/dgp/espelhorh/0034723080" },
    { name: "Ligea Clara de Carvalho Hoki", link: "http://dgp.cnpq.br/dgp/espelhorh/0034723080" },
    { name: "Luan Lopes Martins", link: "http://dgp.cnpq.br/dgp/espelhorh/0429597630" },
    { name: "Manuella de Godoy e Silva", link: "http://dgp.cnpq.br/dgp/espelhorh/0414544099" },
    { name: "Mariah Augusta Vaz de Carvalho Ávila", link: "http://dgp.cnpq.br/dgp/espelhorh/0429669313" },
    { name: "Matheus dos Reis Gomes", link: "http://dgp.cnpq.br/dgp/espelhorh/0167197479" },
    { name: "Oliver Alexandre Reinis", link: "http://dgp.cnpq.br/dgp/espelhorh/0032198973" },
    { name: "Pedro Almeida Brandão", link: "http://dgp.cnpq.br/dgp/espelhorh/0278450962" },
    { name: "Pedro Antônio de Souza Alves Miranda", link: "http://dgp.cnpq.br/dgp/espelhorh/0208247386" },
    { name: "Pedro Estevam Gemaque Chacon", link: "http://dgp.cnpq.br/dgp/espelhorh/0267712936" },
    { name: "Rafael Cavalcanti de Souza", link: "http://dgp.cnpq.br/dgp/espelhorh/0185969194" },
    { name: "Rafaela Missaggia Vaccari", link: "http://dgp.cnpq.br/dgp/espelhorh/0168833581" },
    { name: "Raimundo Júlio da Silva Neto", link: "http://dgp.cnpq.br/dgp/espelhorh/0428691188" },
    { name: "Renato Semaniuc Valvassori", link: "http://dgp.cnpq.br/dgp/espelhorh/0241981816" },
    { name: "Roberta Pschichholz", link: "http://dgp.cnpq.br/dgp/espelhorh/0212344358" },
    { name: "Roseline Crippa", link: "http://dgp.cnpq.br/dgp/espelhorh/0425678946" },
    { name: "Thiago Mácimo Pereira", link: "http://dgp.cnpq.br/dgp/espelhorh/0413594769" },
    { name: "Thiago Tulio Damasceno Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0415969760" },
    { name: "Tiago de Castro Dias Sampaio", link: "http://dgp.cnpq.br/dgp/espelhorh/0310098033" },
    { name: "Vitor Emanuel Alves de Souza Gripp", link: "http://dgp.cnpq.br/dgp/espelhorh/0049792490" },
    { name: "Vitor Martins Pombo", link: "http://dgp.cnpq.br/dgp/espelhorh/0414816633" },
    { name: "Vitor Miranda Guelber Gravina", link: "http://dgp.cnpq.br/dgp/espelhorh/0278172105" },
    { name: "Wesley de Faria Leonel", link: "http://dgp.cnpq.br/dgp/espelhorh/0035157127" },
    { name: "Yann Pascoal Melo do Nascimento", link: "http://dgp.cnpq.br/dgp/espelhorh/0404843522" }
  ],
  technicians: [
    { name: "Alexandre Eduardo Avelino dos Santos", link: "http://dgp.cnpq.br/dgp/espelhorh/0429652461" },
    { name: "Mateus de Oliveira Rodrigues", link: "http://dgp.cnpq.br/dgp/espelhorh/0164914277" }
  ],
  international: [
    { name: "Alejandro Tamez", link: "http://dgp.cnpq.br/dgp/espelhorh/0429866046" }
  ]
};

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

        <div className="mx-auto mt-20 flex flex-wrap justify-center gap-8 max-w-7xl">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group block w-full sm:w-80 lg:w-72"
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
            </Link>
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

                     <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-16 max-w-6xl mx-auto`}>
             {teamMembers.map((member) => (
               <div key={member.id} className="bg-transparent hover:bg-neutral-100 transition-colors duration-200 flex flex-col rounded-lg">
                 <div className="p-4   text-center flex flex-col flex-grow">
                   <div className="w-20 h-20 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                     {React.createElement(iconMap[member.iconName as keyof typeof iconMap], { 
                       size: 32, 
                       className: "text-neutral-600" 
                     })}
                   </div>
                   <h3 className="text-lg font-bold mb-2 leading-tight">{t(`home.team.members.${member.id}.name`)}</h3>
                   <p className="text-neutral-600 mb-3 font-medium text-sm leading-tight">{t(`home.team.members.${member.id}.role`)}</p>
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
                        {member.lattes && member.lattes !== "#" && (
                          <a
                            href={member.lattes}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-900 transition-colors"
                            aria-label="Currículo Lattes"
                          >
                            <GraduationCap size={20} />
                          </a>
                        )}
                        {member.github && member.github !== "#" && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-900 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {member.linkedin && member.linkedin !== "#" && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-900 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.twitter && member.twitter !== "#" && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-neutral-900 transition-colors"
                            aria-label="X (Twitter)"
                          >
                                                         <Image 
                               src="/images/logos/x-logo.png" 
                               alt="X logo" 
                               width={16} 
                               height={16}
                               className="filter grayscale hover:grayscale-0 transition-all duration-200 opacity-80 hover:opacity-100"
                               style={{ marginTop: '2px' }}
                             />
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

      {/* Colaboradores */}
      <section id="colaboradores" className="py-24 bg-neutral-50 scroll-mt-19">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-light tracking-tight">
              {t("home.collaborators.title")}
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              {t("home.collaborators.description")}
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {/* Pesquisadores */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <Users size={24} className="text-neutral-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">
                {t("home.collaborators.stats.researchers.count")}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {t("home.collaborators.stats.researchers.title")}
              </h3>
              <p className="text-sm text-neutral-600">
                {t("home.collaborators.stats.researchers.description")}
              </p>
            </div>

            {/* Estudantes */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-neutral-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">
                {t("home.collaborators.stats.students.count")}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {t("home.collaborators.stats.students.title")}
              </h3>
              <p className="text-sm text-neutral-600">
                {t("home.collaborators.stats.students.description")}
              </p>
            </div>

            {/* Técnicos */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <Database size={24} className="text-neutral-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">
                {t("home.collaborators.stats.technicians.count")}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {t("home.collaborators.stats.technicians.title")}
              </h3>
              <p className="text-sm text-neutral-600">
                {t("home.collaborators.stats.technicians.description")}
              </p>
            </div>

            {/* Colaboradores Internacionais */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <Globe size={24} className="text-neutral-600" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">
                {t("home.collaborators.stats.international.count")}
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {t("home.collaborators.stats.international.title")}
              </h3>
              <p className="text-sm text-neutral-600">
                {t("home.collaborators.stats.international.description")}
              </p>
            </div>
          </div>

          {/* Lista Completa da Rede */}
          <div className="max-w-7xl mx-auto mb-16">
            
            {/* Pesquisadores */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-neutral-800 mb-6 border-b border-neutral-200 pb-2">
                {t("home.collaborators.list_titles.researchers")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {networkMembers.researchers.map((member, index) => (
                  <a
                    key={index}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-neutral-200 block"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Estudantes */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-neutral-800 mb-6 border-b border-neutral-200 pb-2">
                {t("home.collaborators.list_titles.students")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {networkMembers.students.map((member, index) => (
                  <a
                    key={index}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-neutral-200 block"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Técnicos */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-neutral-800 mb-6 border-b border-neutral-200 pb-2">
                {t("home.collaborators.list_titles.technicians")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {networkMembers.technicians.map((member, index) => (
                  <a
                    key={index}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-neutral-200 block"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Colaboradores Estrangeiros */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold text-neutral-800 mb-6 border-b border-neutral-200 pb-2">
                {t("home.collaborators.list_titles.international")}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {networkMembers.international.map((member, index) => (
                  <a
                    key={index}
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-neutral-200 block"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}
