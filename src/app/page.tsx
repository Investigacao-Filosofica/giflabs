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
    twitter: "https://x.com/thephilo_sopher",
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
    lattes: "http://lattes.cnpq.br/5139861876888026",
    github: "https://github.com/ctrlshiftOFF",
    linkedin: "#",
    twitter: "https://x.com/ctrlshiftOFF",
    badges: ["digital_art", "web3", "frontend"]
  }
];

// Lista completa da rede GIFLABS organizada por categorias
const networkMembers = {
  researchers: [
    { name: "Alan Renê Maciel Antezana", link: "http://lattes.cnpq.br/2441960551114144" },
    { name: "Alison Vander Mandeli", link: "http://lattes.cnpq.br/7133301620559425" },
    { name: "Allan Josué Vieira", link: "http://lattes.cnpq.br/2779028410270612" },
    { name: "Aluízio de Araújo Couto Júnior", link: "http://lattes.cnpq.br/5965939757303535" },
    { name: "Amanda Sayonara Fernandes Prazeres", link: "http://lattes.cnpq.br/7826852220344674" },
    { name: "Ana Rieger Schmidt", link: "http://lattes.cnpq.br/5720830441720067" },
    { name: "Ana Rita Nicoliello Lara Leite", link: "http://lattes.cnpq.br/4172669652284158" },
    { name: "Annelyze de Araújo Reis", link: "http://lattes.cnpq.br/9311343185839116" },
    { name: "Ariadne Fernandes Lacerda", link: "http://dgp.cnpq.br/dgp/espelhorh/0162521049" },
    { name: "Ariana Romão dos Reis", link: "http://lattes.cnpq.br/7333639960860276" },
    { name: "Artur Sartori Kon", link: "http://lattes.cnpq.br/4128124014358230" },
    { name: "Benedito da Conceição Monteiro Neto", link: "http://lattes.cnpq.br/3241460214292879" },
    { name: "Bruna Leticia Rosário da Silva", link: "http://lattes.cnpq.br/9234798007141694" },
    { name: "Bruna Schneid da Silva", link: "http://lattes.cnpq.br/4837891956296814" },
    { name: "Bruno Aislã Gonçalves dos Santos", link: "http://lattes.cnpq.br/9833504300220067" },
    { name: "Caio Cézar Silva dos Santos", link: "http://lattes.cnpq.br/6902104506156405" },
    { name: "Camila de Souza Ezídio", link: "http://lattes.cnpq.br/2831343607435421" },
    { name: "Camila Kulkamp", link: "http://lattes.cnpq.br/4200114493538448" },
    { name: "Camila Palhares Barbosa", link: "http://lattes.cnpq.br/3838152756530280" },
    { name: "Carmel da Silva Ramos", link: "http://lattes.cnpq.br/4539225812576986" },
    { name: "Cesar Augusto Mathias de Alencar", link: "http://lattes.cnpq.br/8781508238600725" },
    { name: "César Frederico dos Santos", link: "http://lattes.cnpq.br/4273998047733512" },
    { name: "Daniel Alves da Silva Lopes Diniz", link: "http://lattes.cnpq.br/7560668444401188" },
    { name: "Daniel Schiochett", link: "http://lattes.cnpq.br/0125704359952932" },
    { name: "Daniela Moura Soares", link: "http://lattes.cnpq.br/0604717107705089" },
    { name: "Deivide Garcia da Silva Oliveira", link: "http://lattes.cnpq.br/2864816521883190" },
    { name: "Delvair Custodio Moreira", link: "http://lattes.cnpq.br/5543547155683580" },
    { name: "Desiderio Orlando Figueiredo Murcho", link: "http://lattes.cnpq.br/5914996726555247" },
    { name: "Diego Pinheiro Fernandes", link: "http://lattes.cnpq.br/3305438449612264" },
    { name: "Diego Rodstein Rodrigues", link: "http://lattes.cnpq.br/5988406685473834" },
    { name: "Ederson Safra Melo", link: "http://lattes.cnpq.br/5985869803612554" },
    { name: "Eduardo Ruttke von Saltiél", link: "http://lattes.cnpq.br/2380876763010467" },
    { name: "Elan Marinho", link: "http://lattes.cnpq.br/6871075681889024" },
    { name: "Evelyn Fernandes Erickson", link: "http://lattes.cnpq.br/5064826781158043" },
    { name: "Everton Miguel Puhl Maciel", link: "http://lattes.cnpq.br/5216412977817910" },
    { name: "Felipe Carvalho Novaes", link: "http://lattes.cnpq.br/7911590715109618" },
    { name: "Fernando Tôrres Pacheco", link: "http://lattes.cnpq.br/6855925315773767" },
    { name: "Flávio Vieira Curvello", link: "http://lattes.cnpq.br/3683549895365835" },
    { name: "Francisco Guerra Ferraz", link: "http://lattes.cnpq.br/9785747797252119" },
    { name: "Gabriel Geller Xavier", link: "http://lattes.cnpq.br/5478881180234414" },
    { name: "Geraldo Gonçalves Delgado Neto", link: "http://lattes.cnpq.br/4914537203347981" },
    { name: "Gisele Dalva Secco", link: "http://lattes.cnpq.br/1081009950294509" },
    { name: "Guilherme Araújo Cardoso", link: "http://lattes.cnpq.br/2860294319281337" },
    { name: "Guilherme da Costa Assunção Cecílio", link: "http://lattes.cnpq.br/9314844789589355" },
    { name: "Henrique Iwao Jardim da Silveira", link: "http://lattes.cnpq.br/0869139021479658" },
    { name: "Iago Pereira da Silva", link: "http://lattes.cnpq.br/4005176584329851" },
    { name: "Ilze Zirbel", link: "http://lattes.cnpq.br/8740728758861601" },
    { name: "Jaaziel de Carvalho Costa", link: "http://lattes.cnpq.br/3961382241613212" },
    { name: "Jerry Luiz Soares", link: "http://lattes.cnpq.br/9901654124536438" },
    { name: "Jéssica Gonçalves Rodrigues", link: "http://lattes.cnpq.br/6941333719780834" },
    { name: "Jéssica Kellen Rodrigues", link: "http://lattes.cnpq.br/0006943398671510" },
    { name: "Jorge Benedito de Freitas Teodoro", link: "http://lattes.cnpq.br/5166738841824973" },
    { name: "José Leonardo Annunziato Ruivo", link: "http://lattes.cnpq.br/3388116500631463" },
    { name: "Juliano Santos do Carmo", link: "http://lattes.cnpq.br/7477981517627461" },
    { name: "Kariane Marques da Silva", link: "http://lattes.cnpq.br/8617145523595968" },
    { name: "Katarina Ribeiro Peixoto", link: "http://lattes.cnpq.br/2097301021486201" },
    { name: "Kherian Galvão Cesar Gracher", link: "http://lattes.cnpq.br/4845305099984136" },
    { name: "Laura Elizia Haubert", link: "http://lattes.cnpq.br/0255851984072020" },
    { name: "Lauro de Matos Nunes Filho", link: "http://lattes.cnpq.br/9593167532954435" },
    { name: "Letícia Palazzo Rodrigues", link: "http://lattes.cnpq.br/2957135025310902" },
    { name: "Liszt Vianna Neto", link: "http://lattes.cnpq.br/9974361194798296" },
    { name: "Lorrany de Paula Carvalho", link: "http://lattes.cnpq.br/8848337657165362" },
    { name: "Luan Rafael Marques de Oliveira", link: "http://lattes.cnpq.br/0622896750848919" },
    { name: "Lucas Nascimento Machado", link: "http://lattes.cnpq.br/5873597599732618" },
    { name: "Luciane Luisa Lindenmeyer", link: "http://lattes.cnpq.br/0100181335047492" },
    { name: "Luciano Carlos Cunha", link: "http://lattes.cnpq.br/3030914980692075" },
    { name: "Luisa Luze Brum Genuncio", link: "http://lattes.cnpq.br/1374782176195368" },
    { name: "Luiz Helvécio Marques Segundo", link: "http://lattes.cnpq.br/1531118741977108" },
    { name: "Mahan Vaz Silva", link: "http://lattes.cnpq.br/6763998870085187" },
    { name: "Marcus Sacrini Ayres Ferraz", link: "http://lattes.cnpq.br/4017958225036336" },
    { name: "Maria Amélia Reis de Castro Rodrigues", link: "http://lattes.cnpq.br/1118098456639481" },
    { name: "Maria Carolina Mendonça de Resende", link: "http://lattes.cnpq.br/0821878822309329" },
    { name: "Maria Helena Silva Soares", link: "http://lattes.cnpq.br/5226143244188576" },
    { name: "Mariana Kuhn de Oliveira", link: "http://lattes.cnpq.br/7318954416059983" },
    { name: "Mariane Farias de Oliveira", link: "http://lattes.cnpq.br/8208780919057956" },
    { name: "Mário Nogueira de Oliveira", link: "http://lattes.cnpq.br/4212444128876658" },
    { name: "Matheus Oliva da Costa", link: "http://lattes.cnpq.br/4212444128876658" },
    { name: "Maurício de Assis Reis", link: "http://lattes.cnpq.br/0846366506671309" },
    { name: "Mitieli Seixas da Silva", link: "http://lattes.cnpq.br/6403769121859182" },
    { name: "Nádia Junqueira Ribeiro", link: "http://lattes.cnpq.br/3253592878649234" },
    { name: "Natalia Mendes Teixeira", link: "http://lattes.cnpq.br/0886039548983065" },
    { name: "Nilo Gelais Costa Junior", link: "http://lattes.cnpq.br/1828204587984660" },
    { name: "Paloma de Souza Xavier", link: "http://lattes.cnpq.br/8121675999839528" },
    { name: "Pâmela de Rezende Côrtes", link: "http://lattes.cnpq.br/9480355785867511" },
    { name: "Patricia Ketzer", link: "http://lattes.cnpq.br/4875848249103649" },
    { name: "Pedro Falcão Pricladnitzky", link: "http://lattes.cnpq.br/3863643298300586" },
    { name: "Pedro Luiz Caetano Filho", link: "http://lattes.cnpq.br/8538549763538299" },
    { name: "Pedro Merlussi", link: "http://lattes.cnpq.br/2357659734728880" },
    { name: "Plínio Marcos Tsai", link: "http://lattes.cnpq.br/8993124016207554" },
    { name: "Rafael dos Santos Ongaratto", link: "http://lattes.cnpq.br/4406877399355817" },
    { name: "Rafael Martins", link: "http://lattes.cnpq.br/2938081719142401" },
    { name: "Rafael Sellamano Silva Pereira", link: "http://lattes.cnpq.br/0112980756991989" },
    { name: "Ramiro de Ávila Peres", link: "http://lattes.cnpq.br/6769195915163037" },
    { name: "Renata Ramos da Silva", link: "http://lattes.cnpq.br/3307123174863934" },
    { name: "Ricardo Miranda Nachmanowicz", link: "http://lattes.cnpq.br/0117568108401468" },
    { name: "Roberta Kelly Soromenho Nicolete", link: "http://lattes.cnpq.br/1525504833765507" },
    { name: "Rodrigo Alexandre de Figueiredo", link: "http://lattes.cnpq.br/1814864447819890" },
    { name: "Rodrigo Freitas Costa Canal", link: "http://lattes.cnpq.br/6580667225140145" },
    { name: "Rodrigo Jungmann de Castro", link: "http://lattes.cnpq.br/0694096516897435" },
    { name: "Rodrigo Pinto de Brito", link: "http://lattes.cnpq.br/1844128902889523" },
    { name: "Rodrigo Reis Lastra Cid", link: "http://lattes.cnpq.br/0847832636263404" },
    { name: "Rosi Leny Morokawa", link: "http://lattes.cnpq.br/4358050599561422" },
    { name: "Sagid Salles", link: "http://lattes.cnpq.br/0917027359542648" },
    { name: "Sarah Bonfim Matos Nunes", link: "http://lattes.cnpq.br/0117787962602105" },
    { name: "Sérgio Farias de Souza Filho", link: "http://lattes.cnpq.br/7804023072516368" },
    { name: "Sérgio Ricardo Neves de Miranda", link: "http://lattes.cnpq.br/6556228184169719" },
    { name: "Silvio Kavetski", link: "http://lattes.cnpq.br/5149254145855626" },
    { name: "Tamires Dal Magro", link: "http://lattes.cnpq.br/6713452941575021" },
    { name: "Theo Machado Fellows", link: "http://lattes.cnpq.br/7272448949696528" },
    { name: "Tiago Luís Teixeira de Oliveira", link: "http://lattes.cnpq.br/4620102066933288" },
    { name: "Veronica de Souza Campos", link: "http://lattes.cnpq.br/3175469280309670" }
  ],
  students: [
    { name: "Andrea Maria Cordeiro", link: "http://lattes.cnpq.br/5457447369505460" },
    { name: "Atticus Macêdo", link: "http://lattes.cnpq.br/3170343351636689" },
    { name: "Bárbara Mól Gonçalves", link: "http://lattes.cnpq.br/6411527597757239" },
    { name: "Bianca de Oliveira Andrade", link: "http://lattes.cnpq.br/5348659239702791" },
    { name: "César Henrique Luz Barbosa", link: "http://lattes.cnpq.br/6434772983970469" },
    { name: "Daniel Ferreira Beckman", link: "http://lattes.cnpq.br/9529962851809580" },
    { name: "Daniel Silva Castelani", link: "http://lattes.cnpq.br/2583841583680638" },
    { name: "Daniel Soares Saldanha", link: "http://lattes.cnpq.br/7839350538750384" },
    { name: "Deir da Silva Machado Junior", link: "http://lattes.cnpq.br/8674802659289967" },
    { name: "Diego Aurélio Viana Kelly", link: "http://lattes.cnpq.br/3788869041703279" },
    { name: "Geovanna Lopes Santos", link: "http://lattes.cnpq.br/9583522147165813" },
    { name: "João Victor Almeida Nascimento", link: "http://lattes.cnpq.br/5768924954298097" },
    { name: "Katia Suzue Melo", link: "http://lattes.cnpq.br/0224109326874352" },
    { name: "Ligea Clara de Carvalho Hoki", link: "http://lattes.cnpq.br/4343596565422499" },
    { name: "Luan Lopes Martins", link: "http://lattes.cnpq.br/6955551251166364" },
    { name: "Manuella de Godoy e Silva", link: "http://lattes.cnpq.br/4546032083856705" },
    { name: "Mariah Augusta Vaz de Carvalho Ávila", link: "http://lattes.cnpq.br/9730434907658427" },
    { name: "Matheus dos Reis Gomes", link: "http://lattes.cnpq.br/2596415377539460" },
    { name: "Oliver Alexandre Reinis", link: "http://lattes.cnpq.br/8316002480134187" },
    { name: "Pedro Almeida Brandão", link: "http://lattes.cnpq.br/3401512278509087" },
    { name: "Pedro Antônio de Souza Alves Miranda", link: "http://lattes.cnpq.br/4647599527214951" },
    { name: "Pedro Estevam Gemaque Chacon", link: "http://lattes.cnpq.br/6423957124790869" },
    { name: "Rafael Cavalcanti de Souza", link: "http://lattes.cnpq.br/1675821342168020" },
    { name: "Rafaela Missaggia Vaccari", link: "http://lattes.cnpq.br/5324387604814243" },
    { name: "Raimundo Júlio da Silva Neto", link: "http://lattes.cnpq.br/7229161267781957" },
    { name: "Renato Semaniuc Valvassori", link: "http://lattes.cnpq.br/5045917485649106" },
    { name: "Roberta Pschichholz", link: "http://lattes.cnpq.br/3425413275990642" },
    { name: "Roseline Crippa", link: "http://lattes.cnpq.br/3386107553390218" },
    { name: "Thiago Mácimo Pereira", link: "http://lattes.cnpq.br/6875028110597751" },
    { name: "Thiago Tulio Damasceno Rodrigues", link: "http://lattes.cnpq.br/5148200056082058" },
    { name: "Tiago de Castro Dias Sampaio", link: "http://lattes.cnpq.br/7583174823765464" },
    { name: "Vitor Emanuel Alves de Souza Gripp", link: "http://lattes.cnpq.br/9028510842780316" },
    { name: "Vitor Martins Pombo", link: "http://lattes.cnpq.br/1152953066587543" },
    { name: "Vitor Miranda Guelber Gravina", link: "http://lattes.cnpq.br/4511810788645176" },
    { name: "Wesley de Faria Leonel", link: "http://lattes.cnpq.br/1196998096210027" },
    { name: "Yann Pascoal Melo do Nascimento", link: "http://lattes.cnpq.br/4259632351132912" }
  ],
  technicians: [
    { name: "Alexandre Eduardo Avelino dos Santos", link: "http://lattes.cnpq.br/1597483217612460" },
    { name: "Mateus de Oliveira Rodrigues", link: "http://lattes.cnpq.br/5139861876888026" }
  ],
  international: [
    { name: "Alejandro Tamez", link: "http://lattes.cnpq.br/8001030017092243" },
    { name: "Sean White", link: "http://lattes.cnpq.br/4734151704659051" }
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
                {networkMembers.researchers.length}
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
                {networkMembers.students.length}
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
                {networkMembers.technicians.length}
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
                {networkMembers.international.length}
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
