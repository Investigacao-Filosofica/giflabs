"use client";

import { Badge } from "@/components/ui/badge"
import { BookOpen, ExternalLink, Mail, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "./contact-form";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer id="contato" className="bg-neutral-900 text-white py-16 scroll-mt-32">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-light tracking-tight">
            <span className="text-white font-normal">{t("footer.contact.title")}</span>
          </h2>
          <p className="text-neutral-300 max-w-3xl font-light leading-relaxed text-base">
            {t("footer.contact.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form Section */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Info Section */}
          <div className="order-1 lg:order-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Organization Info */}
              <div>
                <div className="flex items-center mb-4">
                  <Users className="mr-3 text-neutral-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">GIFLABS</h3>
                </div>
                <p className="text-neutral-300 mb-2 font-light text-sm">{t("footer.contact.group_name")}</p>
                <p className="text-neutral-300 font-light text-sm">{t("footer.contact.university")}</p>
              </div>

              {/* Contact Info */}
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="mr-3 text-neutral-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">{t("footer.contact.contact_info.title")}</h3>
                </div>
                <div className="space-y-3">
                  <a 
                    href="mailto:rodrigorlcid@gmail.com" 
                    className="block text-neutral-300 hover:text-white transition-colors font-light text-sm"
                  >
                    {t("footer.contact.contact_info.email")}
                  </a>
                  <a
                    href="https://www.virtualiajournal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-300 hover:text-white transition-colors font-light text-sm"
                  >
                    {t("footer.contact.contact_info.virtualia")}
                  </a>
                  <a
                    href="http://dgp.cnpq.br/dgp/espelhogrupo/821202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-300 hover:text-white transition-colors font-light text-sm"
                  >
                    {t("footer.contact.contact_info.cnpq")}
                  </a>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-white">{t("footer.contact.research_areas.title")}</h3>
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
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400 font-light text-base mb-4 italic">"{t("footer.quote")}"</p>
          <p className="text-neutral-500 text-sm font-light">
            © {new Date().getFullYear()} {t("footer.description")}. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
} 