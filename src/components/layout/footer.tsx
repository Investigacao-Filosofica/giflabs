import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Mail } from "lucide-react"

export function Footer() {
  return (
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
            <p className="text-neutral-300 mb-2 font-light text-sm">Grupo Investigação Filosófica</p>
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
                  href="http://dgp.cnpq.br/dgp/espelhogrupo/821202"
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
            © {new Date().getFullYear()} GIFLABS - Grupo Investigação Filosófica vinculado a Universidade Federal de Ouro Preto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 