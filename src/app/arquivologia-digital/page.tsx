"use client";

import { ExternalLink, Archive, Group, Building } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Partner {
  name: string;
  url: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: "UFOP - IFAC - DEFIL", url: "https://ifac.ufop.br/" },
  { name: "UFPel - NEPFIL", url: "https://wp.ufpel.edu.br/nepfil/" },
];

export default function ArquivologiaDigitalPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <Archive className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                {t("arquivologia_digital.hero.title")}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("arquivologia_digital.hero.description")}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="#projeto">
                    {t("arquivologia_digital.hero.cta_main")} <Group className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#parceiros">
                    {t("arquivologia_digital.hero.cta_secondary")} <Building className="ml-2 h-4 w-4" />
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
                  {t("arquivologia_digital.project.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("arquivologia_digital.project.description_1")}
                </p>
                <p>
                  {t("arquivologia_digital.project.description_2")}
                </p>
                <p>
                  {t("arquivologia_digital.project.description_3")}
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
                {t("arquivologia_digital.collection.title")}
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                {t("arquivologia_digital.collection.description")}
              </p>
              <Button asChild className="text-lg px-8 py-6 bg-white hover:bg-neutral-200 text-neutral-900">
                <Link
                  href="https://manifold.gallery/base:0x481617065b414872cb7775a610edc05f5fbbea6a"
                  target="_blank"
                >
                  {t("arquivologia_digital.collection.cta")} <ExternalLink className="ml-3" />
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
                {t("arquivologia_digital.partners.title")}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t("arquivologia_digital.partners.description")}
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