"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Users,
  Feather,
  BookCopy,
  Scale,
  Sparkles,
} from "lucide-react";
import { StaffList } from "./_components/staff-list";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { useLanguage } from "@/contexts/LanguageContext";

const ogSupporters = [
  "@0xJetski", "@UnitedSaints", "@HuemansUniverse", "@thephilo_sopher",
  "@cryptoddealer", "@aislandart", "@EmanuelAlqm", "@bitpixi", "@mxjxn",
  "@bustosjp", "@pegasus_vfx", "@luciotamino", "@voxeliving", "@vessymink",
  "0x315a80ca55108a663ed7922d17dbc5b9c2ce8cf5",
  "0xd073dE676D8bd3A9ee680eC6960B7Bcff9E32293"
];

const institutionalSupporters = [
  "Grupo Investigação Filosófica", "UFOP"
];

export default function VirtualiaPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main className="space-y-20 md:space-y-28 pb-20">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                {t("virtualia.hero.title")}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("virtualia.hero.description")}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="https://www.virtualiajournal.com/index.php/home" target="_blank">
                    {t("virtualia.hero.cta_main")} <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://virtualiamagazine.blogspot.com/" target="_blank">
                    {t("virtualia.hero.cta_secondary")} <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="publicacoes" className="container mx-auto px-6 scroll-mt-24">
         
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
               <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 md:text-right">
                    {t("virtualia.journal.title")}
                  </h2>
                  <div className="text-neutral-700 leading-relaxed space-y-4 md:text-right">
                    <p>
                      {t("virtualia.journal.description_1")}
                    </p>
                    <p>
                      {t("virtualia.journal.description_2")}
                    </p>
                    <p>
                      {t("virtualia.journal.description_3")}
                    </p>
                  </div>
               </div>
              <div className="mt-6 text-right">
                  <Button asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                      <Link href="https://www.virtualiajournal.com/" target="_blank">
                          {t("virtualia.journal.cta")} <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
               <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    {t("virtualia.magazine.title")}
                  </h2>
                  <div className="text-neutral-700 leading-relaxed space-y-4">
                    <p>
                      {t("virtualia.magazine.description_1")}
                    </p>
                    <p>
                      {t("virtualia.magazine.description_2")}
                    </p>
                  </div>
               </div>
              <div className="mt-6">
                  <Button asChild variant="outline">
                       <Link href="https://virtualiamagazine.blogspot.com/" target="_blank">
                          {t("virtualia.magazine.cta")} <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilares" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  {t("virtualia.pillars.title")}
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  {t("virtualia.pillars.description")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <Feather className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("virtualia.pillars.research.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("virtualia.pillars.research.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("virtualia.pillars.interdisciplinary.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("virtualia.pillars.interdisciplinary.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("virtualia.pillars.academic.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("virtualia.pillars.academic.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{t("virtualia.pillars.innovation.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("virtualia.pillars.innovation.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section id="virtualia-equipe" className="container mx-auto px-6 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">{t("virtualia.team.title")}</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
               {t("virtualia.team.description")}
            </p>
          </div>
          <div className="mt-16 max-w-6xl mx-auto">
            <StaffList />
          </div>
        </section>

        {/* Supporters Section */}
        <section id="apoiadores" className="bg-neutral-900 py-20 md:py-28 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">{t("virtualia.supporters.title")}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("virtualia.supporters.og_supporters")}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {ogSupporters.map((supporter, index) => {
                    if (supporter.startsWith('@')) {
                      const handle = supporter.substring(1);
                      return (
                        <Link
                          key={index}
                          href={`https://www.x.com/${handle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge variant="secondary" className="text-sm font-mono tracking-tight hover:bg-neutral-700 transition-colors">
                            {supporter}
                          </Badge>
                        </Link>
                      );
                    }
                    return (
                      <Badge key={index} variant="secondary" className="text-sm font-mono tracking-tight">
                        {supporter}
                      </Badge>
                    );
                  })}
                </div>
                <p className="text-center text-neutral-400 mt-4 text-xs max-w-md mx-auto">
                  {t("virtualia.supporters.og_description")}
                </p>
              </div>
               <div>
                <h3 className="text-xl font-bold mb-6 text-center">{t("virtualia.supporters.institutional")}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {institutionalSupporters.map((supporter, index) => (
                    <Badge key={index} variant="outline" className="text-sm border-neutral-600 text-neutral-300">
                      {supporter}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}