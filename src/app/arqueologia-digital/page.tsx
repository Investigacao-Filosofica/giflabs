import { ExternalLink, Archive, Group, Building } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  url: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: "UFOP - IFAC - DEFIL", url: "https://ifac.ufop.br/" },
  { name: "UFPel - NEPFIL", url: "https://wp.ufpel.edu.br/nepfil/" },
  { name: "John Templeton Foundation", url: "http://templeton.org/" },
  { name: "Stanford Encyclopedia of Philosophy", url: "https://plato.stanford.edu/" },
];

export default function ArqueologiaDigitalPage() {
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <Archive className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                Arqueologia Digital
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                Preservando o conhecimento filosófico e a memória digital através da recuperação do periódico acadêmico Investigação Filosófica.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="#projeto">
                    Sobre o Projeto <Group className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#parceiros">
                    Parceiros <Building className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section id="projeto" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  Resgatando a Memória Acadêmica
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  Como parte do seu compromisso com a preservação do conhecimento filosófico e da memória digital, o GIF Labs está conduzindo um projeto de Arqueologia Digital por meio da recuperação do periódico acadêmico Investigação Filosófica. Publicado originalmente por pesquisadores independentes do Grupo Investigação Filosófica, e posteriormente conectado ao Departamento de Filosofia da Universidade Federal do Amapá (UNIFAP), o periódico teve seus arquivos digitais perdidos após um incêndio no servidor da instituição.
                </p>
                <p>
                  Graças aos esforços do grupo de pesquisa Investigação Filosófica (IF), os trabalhos foram resgatados e tornados novamente acessíveis ao público. Por meio de um processo de preservação digital descentralizada, todos os volumes recuperados foram armazenados permanentemente no Arweave, uma solução de armazenamento descentralizado. Seus metadados também foram registrados na blockchain Base, garantindo a imutabilidade e a rastreabilidade desses dados ao longo do tempo.
                </p>
                <p>
                  Essa iniciativa não apenas devolve à comunidade acadêmica importantes contribuições da filosofia contemporânea, como também demonstra como as tecnologias da Web3 podem ser utilizadas para proteger materiais acadêmicos ameaçados. Trata-se de um exemplo concreto de como a curadoria digital, a ética arquivística e as infraestruturas blockchain podem se unir para preservar o patrimônio intelectual.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Collection Section */}
        <section id="colecao" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                Acesse a Coleção Digital
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                Todos os volumes recuperados do periódico Investigação Filosófica estão armazenados de forma permanente e acessível no Arweave, com metadados registrados na blockchain Base.
              </p>
              <Button asChild className="text-lg px-8 py-6 bg-white hover:bg-neutral-200 text-neutral-900">
                <Link
                  href="https://manifold.gallery/base:0x481617065b414872cb7775a610edc05f5fbbea6a"
                  target="_blank"
                >
                  Ver Coleção no Manifold <ExternalLink className="ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section id="parceiros" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                Instituições Parceiras
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Este projeto é possível graças ao apoio e colaboração de diversas instituições de renome.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {partners.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  className="group block p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-neutral-800 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 