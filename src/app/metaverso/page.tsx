"use client";

import {
  ExternalLink,
  Puzzle,
  Library,
  Gamepad2,
  BookOpen,
  Paintbrush,
  Users,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MetaversoPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <Puzzle className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                {t("metaverso.hero.title")}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("metaverso.hero.description")}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="#biblioteca">
                    {t("metaverso.hero.cta_main")} <Library className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#jogos-galerias">
                    {t("metaverso.hero.cta_secondary")} <Gamepad2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Near Alexandria Library Section */}
        <section id="biblioteca" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  {t("metaverso.library.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("metaverso.library.description_1")}
                </p>
                <p>
                  {t("metaverso.library.description_2")}
                </p>
                <p>
                  {t("metaverso.library.description_3")}
                </p>
              </div>
              <div className="mt-16 text-center">
                <Button asChild className="text-lg px-8 py-6 bg-neutral-900 hover:bg-neutral-800 text-white">
                  <Link href="https://www.cryptovoxels.com/play?coords=SW@1789E,1180N" target="_blank">
                    <Library className="mr-3" />
                    {t("metaverso.library.cta")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilares" className="bg-neutral-900 py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {t("metaverso.pillars.title")}
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  {t("metaverso.pillars.description")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                <div className="flex flex-col items-center">
                  <BookOpen className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">{t("metaverso.pillars.academic.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("metaverso.pillars.academic.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Gamepad2 className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">{t("metaverso.pillars.gamification.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("metaverso.pillars.gamification.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Paintbrush className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">{t("metaverso.pillars.artistic.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("metaverso.pillars.artistic.description")}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <BrainCircuit className="h-10 w-10 text-neutral-400 mb-4" />
                  <h3 className="font-semibold text-lg text-white mb-2">{t("metaverso.pillars.research.title")}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {t("metaverso.pillars.research.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Games & Galleries Section */}
        <section id="jogos-galerias" className="py-20 md:py-28 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  {t("metaverso.games_galleries.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("metaverso.games_galleries.description_1")}
                </p>
                <p>
                  {t("metaverso.games_galleries.description_2")}
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <Button asChild>
                  <Link href="https://www.niftyisland.com/play/Cluny/longwei" target="_blank">
                    Long Wei Legend (Nifty Island) <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://www.cryptovoxels.com/play?coords=E@3580E,1962.5S,1U" target="_blank">
                    Storytelling (Voxels) <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="https://linktr.ee/metagalleries" target="_blank">
                    Nossos Mundos Virtuais <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}