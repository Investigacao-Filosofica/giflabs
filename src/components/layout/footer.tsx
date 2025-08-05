"use client";

import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer id="contato" className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-light tracking-tight">
            <span className="text-white font-normal">{t("footer.contact.title")}</span>
          </h2>
          <p className="text-neutral-300 max-w-3xl font-light leading-relaxed text-sm">
            {t("footer.contact.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold mb-4 font-light tracking-tight text-white">GIFLABS</div>
            <p className="text-neutral-300 mb-2 font-light text-sm">{t("footer.contact.group_name")}</p>
            <p className="text-neutral-300 font-light text-sm">{t("footer.contact.university")}</p>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 font-light text-white">{t("footer.contact.contact_info.title")}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-3 text-neutral-400" size={16} />
                <a href="mailto:rodrigorlcid@gmail.com" className="text-neutral-300 hover:text-white transition-colors font-light text-sm">
                  {t("footer.contact.contact_info.email")}
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
                  {t("footer.contact.contact_info.virtualia")}
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
                  {t("footer.contact.contact_info.cnpq")}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 font-light text-white">{t("footer.contact.research_areas.title")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.philosophy")}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.web3")}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.education")}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.blockchain")}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.ai")}
              </Badge>
              <Badge variant="outline" className="border-neutral-600 text-neutral-300 bg-transparent text-xs">
                {t("footer.contact.research_areas.digital_art")}
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
          <p className="text-neutral-400 font-light text-sm mb-3">"{t("footer.quote")}"</p>
          <p className="text-neutral-500 text-xs font-light">
            © {new Date().getFullYear()} {t("footer.description")}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
} 